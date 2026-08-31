<#
  CityScreen image generator — kie.ai / nano-banana-2 @ 2K.

  Reads a manifest of { name, aspect, prompt } entries, submits every one as a
  task, polls until each resolves, then downloads the result into public/img/.
  Re-running skips any file that already exists, so a partial run is cheap to
  resume.
#>
param(
  [Parameter(Mandatory = $true)][string]$Manifest,
  [Parameter(Mandatory = $true)][string]$OutDir,
  [string]$ApiKey = $env:KIE_API_KEY
)

$ErrorActionPreference = "Stop"
$headers = @{ Authorization = "Bearer $ApiKey"; "Content-Type" = "application/json" }
New-Item -ItemType Directory -Force -Path $OutDir | Out-Null

# The house style every prompt inherits. Keeping it in one place is what makes
# 40-odd separate generations read as one photographic set.
$style = "Shot on a full-frame camera with a fast prime lens, cinematic colour grade, deep near-black shadows, controlled crimson-red practical light as the only saturated hue, cool desaturated neutrals everywhere else, photorealistic, sharp, high dynamic range, no text, no lettering, no captions, no logos, no watermarks, no signage copy, no people looking at camera"

$items = Get-Content $Manifest -Raw | ConvertFrom-Json
$pending = @()

foreach ($item in $items) {
  $target = Join-Path $OutDir "$($item.name).jpg"
  if (Test-Path $target) {
    Write-Host "skip   $($item.name) (exists)"
    continue
  }

  $body = @{
    model = "nano-banana-2"
    input = @{
      prompt        = "$($item.prompt). $style"
      aspect_ratio  = $item.aspect
      resolution    = "2K"
      output_format = "jpg"
    }
  } | ConvertTo-Json -Depth 6 -Compress

  try {
    $res = Invoke-RestMethod -Uri "https://api.kie.ai/api/v1/jobs/createTask" -Method Post -Headers $headers -Body $body
    if ($res.code -ne 200) { Write-Host "FAIL   $($item.name): $($res.msg)"; continue }
    $pending += [pscustomobject]@{ Name = $item.name; TaskId = $res.data.taskId; Target = $target }
    Write-Host "queued $($item.name) -> $($res.data.taskId)"
  } catch {
    Write-Host "ERROR  $($item.name): $($_.Exception.Message)"
  }
  Start-Sleep -Milliseconds 250
}

Write-Host "`n$($pending.Count) task(s) queued. Polling...`n"

$deadline = (Get-Date).AddMinutes(25)
$done = @{}

while ($pending.Count -gt $done.Count -and (Get-Date) -lt $deadline) {
  Start-Sleep -Seconds 10
  foreach ($job in $pending) {
    if ($done.ContainsKey($job.Name)) { continue }
    try {
      $r = Invoke-RestMethod -Uri "https://api.kie.ai/api/v1/jobs/recordInfo?taskId=$($job.TaskId)" -Headers $headers
    } catch { continue }

    switch ($r.data.state) {
      "success" {
        $url = ($r.data.resultJson | ConvertFrom-Json).resultUrls[0]
        Invoke-WebRequest -Uri $url -OutFile $job.Target
        $kb = [int]((Get-Item $job.Target).Length / 1KB)
        Write-Host "OK     $($job.Name)  ${kb} KB"
        $done[$job.Name] = $true
      }
      "fail" {
        Write-Host "FAILED $($job.Name): $($r.data.failMsg)"
        $done[$job.Name] = $true
      }
    }
  }
}

$missing = $pending | Where-Object { -not $done.ContainsKey($_.Name) }
if ($missing) { Write-Host "`nTimed out waiting on: $(($missing.Name) -join ', ')" }
Write-Host "`nDone. $($done.Count)/$($pending.Count) resolved."
