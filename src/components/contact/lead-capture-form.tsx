"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { Controller, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, FileUp, Loader2, Send, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const MAX_FILE_BYTES = 25 * 1024 * 1024;
const ACCEPTED_EXTENSIONS = [
  ".pdf",
  ".dwg",
  ".dxf",
  ".rvt",
  ".skp",
  ".ifc",
  ".png",
  ".jpg",
  ".jpeg",
  ".zip",
];

/** Fills {token} placeholders in a dictionary string. */
function fill(template: string, values: Record<string, string>) {
  return template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
}

// The schema carries the validation copy, so it has to be built per locale
// rather than once at module scope.
function buildSchema(messages: {
  name: string;
  email: string;
  company: string;
  location: string;
  projectType: string;
}) {
  return z.object({
    name: z.string().min(2, messages.name),
    email: z.string().email(messages.email),
    company: z.string().min(2, messages.company),
    location: z.string().min(2, messages.location),
    projectType: z.enum(["rental", "dooh", "commercial", "professional"], {
      errorMap: () => ({ message: messages.projectType }),
    }),
    screenSize: z.number().min(1).max(500),
    brief: z.string().max(1200).optional(),
  });
}

type FormValues = z.infer<ReturnType<typeof buildSchema>>;

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function FieldError({ message }: { message?: string }) {
  return (
    <AnimatePresence>
      {message ? (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="overflow-hidden pt-1.5 font-mono text-[11px] text-destructive"
        >
          {message}
        </motion.p>
      ) : null}
    </AnimatePresence>
  );
}

export function LeadCaptureForm() {
  const { t, services } = useT();

  const projectTypeOptions = React.useMemo(
    () =>
      services.map((service) => ({
        value: service.slug,
        label: service.name,
        hint: service.eyebrow,
      })),
    [services],
  );

  const schema = React.useMemo(
    () => buildSchema(t.form.errors),
    [t.form.errors],
  );

  const [files, setFiles] = React.useState<File[]>([]);
  const [fileError, setFileError] = React.useState<string | null>(null);
  const [dragging, setDragging] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const rootRef = React.useRef<HTMLDivElement>(null);

  // Arrives from the "Select this platform" buttons on /products and from each
  // platform page's CTA. Validated against the real slugs so a hand-edited URL
  // cannot push an unknown value into the form.
  const searchParams = useSearchParams();
  const requested = searchParams.get("platform");
  const preselected = projectTypeOptions.some((o) => o.value === requested)
    ? (requested as FormValues["projectType"])
    : undefined;

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      location: "",
      projectType: preselected,
      screenSize: 48,
      brief: "",
    },
  });

  const screenSize = useWatch({ control, name: "screenSize" });

  const addFiles = React.useCallback(
    (incoming: FileList | null) => {
      if (!incoming) return;
      const accepted: File[] = [];
      let error: string | null = null;

      for (const file of Array.from(incoming)) {
        const extension = `.${file.name.split(".").pop()?.toLowerCase() ?? ""}`;
        if (!ACCEPTED_EXTENSIONS.includes(extension)) {
          error = fill(t.form.errors.fileFormat, { name: file.name });
          continue;
        }
        if (file.size > MAX_FILE_BYTES) {
          error = fill(t.form.errors.fileSize, { name: file.name });
          continue;
        }
        accepted.push(file);
      }

      setFileError(error);
      if (accepted.length) {
        setFiles((existing) => [...existing, ...accepted].slice(0, 6));
      }
    },
    [t.form.errors],
  );

  const onSubmit = async (values: FormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 900));
    console.info("Lead captured", { ...values, blueprints: files.map((f) => f.name) });
    setSubmitted(true);
  };

  const startOver = () => {
    reset();
    setFiles([]);
    setFileError(null);
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <motion.div
        ref={rootRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onAnimationStart={() =>
          rootRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
        }
        className="rounded-2xl border border-signal/25 bg-obsidian-raised/60 p-10 text-center backdrop-blur-2xl"
      >
        <CheckCircle2 className="mx-auto size-10 text-signal" />
        <h3 className="mt-6 font-heading text-2xl font-semibold tracking-tight">
          {t.form.successHeading}
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          {t.form.successBody}
        </p>
        <button
          type="button"
          onClick={startOver}
          className="press mt-8 rounded-md border border-signal/30 px-5 py-2.5 text-sm text-signal hover:bg-signal/10"
        >
          {t.form.successAgain}
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="relative overflow-hidden rounded-2xl border border-signal/20 bg-obsidian-raised/50 p-6 backdrop-blur-2xl sm:p-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/60 to-transparent"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="name" className="label-data text-graphite-dim">
            {t.form.fullName}
          </Label>
          <Input
            id="name"
            placeholder={t.form.fullNamePlaceholder}
            aria-invalid={!!errors.name}
            className="mt-2 h-11 border-signal/20 bg-obsidian/60 text-sm focus-visible:border-signal/60 focus-visible:ring-signal/25"
            {...register("name")}
          />
          <FieldError message={errors.name?.message} />
        </div>

        <div>
          <Label htmlFor="email" className="label-data text-graphite-dim">
            {t.form.workEmail}
          </Label>
          <Input
            id="email"
            type="email"
            placeholder={t.form.workEmailPlaceholder}
            aria-invalid={!!errors.email}
            className="mt-2 h-11 border-signal/20 bg-obsidian/60 text-sm focus-visible:border-signal/60 focus-visible:ring-signal/25"
            {...register("email")}
          />
          <FieldError message={errors.email?.message} />
        </div>

        <div>
          <Label htmlFor="company" className="label-data text-graphite-dim">
            {t.form.company}
          </Label>
          <Input
            id="company"
            placeholder={t.form.companyPlaceholder}
            aria-invalid={!!errors.company}
            className="mt-2 h-11 border-signal/20 bg-obsidian/60 text-sm focus-visible:border-signal/60 focus-visible:ring-signal/25"
            {...register("company")}
          />
          <FieldError message={errors.company?.message} />
        </div>

        <div>
          <Label htmlFor="location" className="label-data text-graphite-dim">
            {t.form.location}
          </Label>
          <Input
            id="location"
            placeholder={t.form.locationPlaceholder}
            aria-invalid={!!errors.location}
            className="mt-2 h-11 border-signal/20 bg-obsidian/60 text-sm focus-visible:border-signal/60 focus-visible:ring-signal/25"
            {...register("location")}
          />
          <FieldError message={errors.location?.message} />
        </div>
      </div>

      <div className="mt-6">
        <Label className="label-data text-graphite-dim">
          {t.form.projectType}
        </Label>
        {preselected && (
          <p className="mt-2 flex items-center gap-2 text-xs text-signal">
            <span aria-hidden className="inline-block h-1.5 w-1.5 bg-signal" />
            {t.form.carriedOver}
          </p>
        )}
        <Controller
          control={control}
          name="projectType"
          render={({ field }) => (
            <Select value={field.value ?? ""} onValueChange={field.onChange}>
              <SelectTrigger
                aria-invalid={!!errors.projectType}
                className="mt-2 h-11! w-full border-signal/20 bg-obsidian/60 px-3.5 text-sm focus-visible:border-signal/60 focus-visible:ring-signal/25"
              >
                <SelectValue placeholder={t.form.projectTypePlaceholder} />
              </SelectTrigger>
              <SelectContent className="border-signal/25 bg-obsidian-raised/95 backdrop-blur-xl">
                {projectTypeOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    <span className="flex flex-col items-start">
                      <span>{option.label}</span>
                      <span className="font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
                        {option.hint}
                      </span>
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        <FieldError message={errors.projectType?.message} />
      </div>

      <div className="mt-8 rounded-xl border border-signal/15 bg-obsidian/40 p-5">
        <div className="flex items-baseline justify-between gap-4">
          <Label className="label-data text-graphite-dim">
            {t.form.screenSize}
          </Label>
          <p className="font-heading text-2xl font-semibold text-signal tabular-nums">
            {screenSize}
            <span className="ml-1 text-sm font-normal text-muted-foreground">
              m²
            </span>
          </p>
        </div>

        <Controller
          control={control}
          name="screenSize"
          render={({ field }) => (
            <Slider
              value={[field.value]}
              onValueChange={([value]) => field.onChange(value)}
              min={1}
              max={500}
              step={1}
              aria-label={t.form.screenSizeAria}
              className="mt-5 [&_[data-slot=slider-range]]:bg-signal [&_[data-slot=slider-range]]:shadow-[0_0_14px_#ff2233] [&_[data-slot=slider-thumb]]:size-4 [&_[data-slot=slider-thumb]]:border-signal [&_[data-slot=slider-thumb]]:bg-signal [&_[data-slot=slider-thumb]]:shadow-[0_0_18px_#ff2233] [&_[data-slot=slider-track]]:h-1.5 [&_[data-slot=slider-track]]:bg-signal/12"
            />
          )}
        />

        <div className="mt-3 flex justify-between font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
          <span>1 m²</span>
          <span>500 m²+</span>
        </div>
      </div>

      <div className="mt-6">
        <Label className="label-data text-graphite-dim">
          {t.form.blueprints}
        </Label>
        <div
          onDragOver={(event) => {
            event.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(event) => {
            event.preventDefault();
            setDragging(false);
            addFiles(event.dataTransfer.files);
          }}
          onClick={() => inputRef.current?.click()}
          className={cn(
            "mt-2 cursor-pointer rounded-xl border border-dashed px-6 py-10 text-center transition-all",
            dragging
              ? "border-signal bg-signal/8 shadow-[0_0_40px_-12px_#ff2233]"
              : "border-signal/25 bg-obsidian/40 hover:border-signal/50 hover:bg-signal/4",
          )}
        >
          <FileUp
            className={cn(
              "mx-auto size-6 transition-colors",
              dragging ? "text-signal" : "text-muted-foreground",
            )}
          />
          <p className="mt-3 text-sm text-foreground">
            {t.form.dropHere}{" "}
            <span className="text-signal underline-offset-4 hover:underline">
              {t.form.browse}
            </span>
          </p>
          <p className="mt-1.5 font-mono text-[10px] tracking-[0.12em] text-muted-foreground uppercase">
            {t.form.fileHint}
          </p>
          <input
            ref={inputRef}
            type="file"
            multiple
            accept={ACCEPTED_EXTENSIONS.join(",")}
            className="hidden"
            onChange={(event) => {
              addFiles(event.target.files);
              event.target.value = "";
            }}
          />
        </div>
        <FieldError message={fileError ?? undefined} />

        <AnimatePresence initial={false}>
          {files.map((file, index) => (
            <motion.div
              key={`${file.name}-${index}`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-2 flex items-center justify-between gap-3 rounded-lg border border-signal/15 bg-obsidian/60 px-4 py-2.5">
                <span className="truncate text-xs text-foreground">
                  {file.name}
                </span>
                <div className="flex shrink-0 items-center gap-3">
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {formatBytes(file.size)}
                  </span>
                  <button
                    type="button"
                    aria-label={fill(t.form.removeFile, { name: file.name })}
                    onClick={() =>
                      setFiles((existing) =>
                        existing.filter((_, i) => i !== index),
                      )
                    }
                    className="press text-muted-foreground hover:text-destructive"
                  >
                    <X className="size-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-6">
        <Label htmlFor="brief" className="label-data text-graphite-dim">
          {t.form.brief}{" "}
          <span className="text-muted-foreground/60">{t.form.optional}</span>
        </Label>
        <Textarea
          id="brief"
          rows={4}
          placeholder={t.form.briefPlaceholder}
          className="mt-2 resize-none border-signal/20 bg-obsidian/60 text-sm focus-visible:border-signal/60 focus-visible:ring-signal/25"
          {...register("brief")}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="group press mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-signal px-6 py-3.5 text-sm font-semibold text-obsidian hover:shadow-[0_0_44px_-6px_#ff2233] disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            {t.form.submitting}
          </>
        ) : (
          <>
            {t.form.submit}
            <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </button>

      <p className="mt-4 text-center text-[11px] leading-relaxed text-muted-foreground">
        {t.form.disclaimer}
      </p>
    </form>
  );
}
