export type SpecRow = {
  parameter: string;
  value: string;
  note?: string;
};

export type SpecTable = {
  title: string;
  caption?: string;
  rows: SpecRow[];
};

export type Service = {
  slug: "rental" | "dooh" | "commercial" | "professional";
  href: string;
  eyebrow: string;
  name: string;
  tagline: string;
  summary: string;
  heroStats: { label: string; value: string }[];
  highlights: { title: string; body: string }[];
  specTables: SpecTable[];
  applications: string[];
  accent: string;
};

export const services: Service[] = [
  {
    slug: "rental",
    href: "/services/rental",
    eyebrow: "Event & Stage",
    name: "Rental LED",
    tagline: "Built for the load-in clock.",
    summary:
      "Quick-lock rental cabinets that fly straight, land flat and strike in minutes. Curve-ready frames, tool-free latches and redundant data paths keep the crew moving when the schedule will not wait.",
    heroStats: [
      { label: "Cabinet weight", value: "6.8 kg" },
      { label: "Lock time", value: "< 8 sec" },
      { label: "Curve range", value: "±15°" },
    ],
    highlights: [
      {
        title: "Quick-lock cabinets",
        body: "Cam-lock latches seat and align adjacent cabinets in a single quarter-turn — no shims, no tools, no calibration pass on site.",
      },
      {
        title: "Fly or stack",
        body: "Integrated hanging bars and ground-stack feet share one frame. The same inventory rigs vertically or builds from the deck.",
      },
      {
        title: "Redundant data",
        body: "Dual-path looped signal with automatic failover. A dropped cable degrades to backup rather than dropping the wall.",
      },
      {
        title: "Curve on demand",
        body: "Mechanical curve locks set concave or convex geometry in fifteen-degree increments without re-mapping the canvas.",
      },
    ],
    specTables: [
      {
        title: "Cabinet platform",
        caption: "Standard 500 × 500 mm rental frame.",
        rows: [
          { parameter: "Pixel pitch", value: "2.6 / 2.9 / 3.9 / 4.8 mm" },
          { parameter: "Cabinet size", value: "500 × 500 × 75 mm" },
          { parameter: "Cabinet weight", value: "6.8 kg", note: "Die-cast magnesium" },
          { parameter: "Brightness", value: "1,000 – 1,500 nits" },
          { parameter: "Refresh rate", value: "3,840 Hz", note: "Broadcast-safe" },
          { parameter: "Contrast ratio", value: "5,000 : 1" },
          { parameter: "Service access", value: "Front and rear" },
          { parameter: "Ingress rating", value: "IP43 front / IP31 rear" },
        ],
      },
      {
        title: "Signal & power",
        rows: [
          { parameter: "Input signal", value: "HDMI 2.0, 12G-SDI, NDI" },
          { parameter: "Colour depth", value: "16-bit per channel" },
          { parameter: "Frame rates", value: "24 / 25 / 30 / 50 / 60 fps" },
          { parameter: "Power draw", value: "180 W avg / 520 W peak per m²" },
          { parameter: "Power input", value: "100 – 240 V AC, 50/60 Hz" },
          { parameter: "Redundancy", value: "Dual power, looped data" },
        ],
      },
    ],
    applications: [
      "Touring stage backdrops",
      "Festival main-stage walls",
      "Corporate keynote sets",
      "Broadcast studio scenery",
      "Award show scenic elements",
      "Exhibition stand headers",
    ],
    accent: "from-red-600/25",
  },
  {
    slug: "dooh",
    href: "/services/dooh",
    eyebrow: "Digital Out Of Home",
    name: "DOOH Billboards",
    tagline: "Legible at noon. Rated for winter.",
    summary:
      "Outdoor media surfaces engineered at 10,000 nits and sealed to IP65, so the creative holds against direct sun and the hardware holds against the weather. Each install is specified as a revenue asset with a measurable yield per square metre.",
    heroStats: [
      { label: "Peak brightness", value: "10,000 nits" },
      { label: "Ingress rating", value: "IP65" },
      { label: "Service life", value: "100,000 h" },
    ],
    highlights: [
      {
        title: "10,000 nit output",
        body: "Direct-sun legibility with automatic ambient dimming that drops output overnight to meet local light-spill ordinances.",
      },
      {
        title: "Sealed IP65 envelope",
        body: "Front and rear sealed against dust and low-pressure jets. Conformal-coated boards resist salt fog on coastal sites.",
      },
      {
        title: "Revenue instrumentation",
        body: "Play-out logs, proof-of-posting exports and impression multipliers feed straight into programmatic DOOH platforms.",
      },
      {
        title: "Remote diagnostics",
        body: "Per-cabinet telemetry reports temperature, fan health and pixel faults before an advertiser sees a defect.",
      },
    ],
    specTables: [
      {
        title: "Display platform",
        caption: "Outdoor fixed-install cabinet.",
        rows: [
          { parameter: "Pixel pitch", value: "4 / 6.6 / 8 / 10 mm" },
          { parameter: "Peak brightness", value: "10,000 nits" },
          { parameter: "Ingress rating", value: "IP65 front and rear" },
          { parameter: "Operating temp", value: "−30 °C to +60 °C" },
          { parameter: "Humidity range", value: "10 – 90 % RH" },
          { parameter: "Wind load", value: "Rated to 130 km/h" },
          { parameter: "Viewing angle", value: "140° H / 140° V" },
          { parameter: "LED lifespan", value: "100,000 hours" },
        ],
      },
      {
        title: "Operations & compliance",
        rows: [
          { parameter: "Ambient dimming", value: "Automatic, 256 steps" },
          { parameter: "Night output floor", value: "300 nits", note: "Ordinance configurable" },
          { parameter: "Content delivery", value: "4G / 5G / fibre, CMS agnostic" },
          { parameter: "Programmatic", value: "OpenRTB-compatible play-out logs" },
          { parameter: "Monitoring", value: "Per-cabinet telemetry, SNMP" },
          { parameter: "Power draw", value: "450 W avg / 1,100 W peak per m²" },
        ],
      },
    ],
    applications: [
      "Roadside billboard networks",
      "Building-mounted media façades",
      "Transit hub large format",
      "Stadium exterior wraps",
      "Fuel forecourt networks",
      "Retail park pylon signage",
    ],
    accent: "from-rose-600/25",
  },
  {
    slug: "commercial",
    href: "/services/commercial",
    eyebrow: "Retail & Interior",
    name: "Commercial LED",
    tagline: "Merchandising surface, not a monitor.",
    summary:
      "Indoor shopfront walls, window-facing displays and transparent glass LED that keeps daylight and sightlines intact. Designed to sit inside a shopfit programme — flush frames, concealed services and finishes that read as architecture.",
    heroStats: [
      { label: "Glass transparency", value: "up to 85%" },
      { label: "Cabinet depth", value: "68 mm" },
      { label: "Pixel pitch from", value: "1.8 mm" },
    ],
    highlights: [
      {
        title: "Transparent glass LED",
        body: "Up to 85% see-through so window displays keep daylight, product sightlines and the retail frontage the landlord approved.",
      },
      {
        title: "Flush architectural frame",
        body: "68 mm cabinet depth with concealed cable management sits inside standard partition build-ups without a bulkhead.",
      },
      {
        title: "Window-legible output",
        body: "Up to 5,000 nits on shopfront-facing units so the creative survives direct glazing glare through the trading day.",
      },
      {
        title: "Estate-wide control",
        body: "One CMS drives every store. Regional overrides, day-part scheduling and per-site playlists roll out from a single publish.",
      },
    ],
    specTables: [
      {
        title: "Indoor fixed install",
        caption: "Shopfront and interior wall platform.",
        rows: [
          { parameter: "Pixel pitch", value: "1.8 / 2.5 / 3.0 mm" },
          { parameter: "Cabinet size", value: "640 × 480 × 68 mm" },
          { parameter: "Brightness", value: "800 – 5,000 nits", note: "Window-facing option" },
          { parameter: "Refresh rate", value: "3,840 Hz" },
          { parameter: "Colour temp", value: "3,200 – 9,300 K adjustable" },
          { parameter: "Service access", value: "Front, magnetic modules" },
          { parameter: "Viewing angle", value: "160° H / 160° V" },
          { parameter: "Noise level", value: "Fanless, 0 dB" },
        ],
      },
      {
        title: "Transparent glass series",
        rows: [
          { parameter: "Pixel pitch", value: "3.9 × 7.8 / 7.8 × 7.8 mm" },
          { parameter: "Transparency", value: "70 – 85 %" },
          { parameter: "Panel thickness", value: "10 mm" },
          { parameter: "Panel weight", value: "12 kg per m²" },
          { parameter: "Brightness", value: "4,000 nits" },
          { parameter: "Mounting", value: "Suspended, floor-stand or glass-bonded" },
        ],
      },
    ],
    applications: [
      "Flagship shopfront walls",
      "Window-facing transparent displays",
      "Mall atrium features",
      "Showroom feature walls",
      "Hospitality and QSR menu walls",
      "Lobby and reception canvases",
    ],
    accent: "from-red-700/25",
  },
  {
    slug: "professional",
    href: "/services/professional",
    eyebrow: "Mission Critical",
    name: "Professional Visualisation",
    tagline: "Seamless, silent, always on.",
    summary:
      "COB fine-pitch MicroLED for control rooms and boardrooms — sub-millimetre pitch, a fully sealed emissive surface and 24/7 duty rating. No bezels, no fans, no visible seam between sources.",
    heroStats: [
      { label: "Pitch from", value: "0.6 mm" },
      { label: "Duty cycle", value: "24 / 7" },
      { label: "Acoustic", value: "0 dB" },
    ],
    highlights: [
      {
        title: "COB MicroLED surface",
        body: "Chip-on-board encapsulation puts a continuous resin layer over the diodes — impact resistant, dust proof and cleanable.",
      },
      {
        title: "True seamless canvas",
        body: "Sub-0.1 mm cabinet joins with factory-matched modules. No bezel line crosses a chart, a map or a video feed.",
      },
      {
        title: "Fanless and silent",
        body: "Passive thermal design at 0 dB. Nothing competes with the room, and there is no filter to service on a maintenance window.",
      },
      {
        title: "24/7 duty rating",
        body: "Redundant power and receiving cards with hot-swap front service. Operators keep the wall live during any component change.",
      },
    ],
    specTables: [
      {
        title: "COB fine-pitch platform",
        caption: "Control room and boardroom specification.",
        rows: [
          { parameter: "Pixel pitch", value: "0.6 / 0.9 / 1.2 / 1.5 mm" },
          { parameter: "Package type", value: "COB MicroLED" },
          { parameter: "Cabinet size", value: "600 × 337.5 × 38 mm" },
          { parameter: "Seam tolerance", value: "< 0.1 mm" },
          { parameter: "Brightness", value: "600 – 1,200 nits" },
          { parameter: "Contrast ratio", value: "20,000 : 1" },
          { parameter: "Greyscale", value: "16-bit, 65,536 levels" },
          { parameter: "Refresh rate", value: "3,840 – 7,680 Hz" },
        ],
      },
      {
        title: "Reliability & integration",
        rows: [
          { parameter: "Duty cycle", value: "24 / 7 continuous" },
          { parameter: "Acoustic output", value: "0 dB, fanless" },
          { parameter: "MTBF", value: "> 100,000 hours" },
          { parameter: "Power redundancy", value: "Dual PSU, N+1" },
          { parameter: "Card redundancy", value: "Backup receiving card" },
          { parameter: "Service access", value: "Front, magnetic hot-swap" },
          { parameter: "Control integration", value: "Crestron, AMX, Q-SYS" },
          { parameter: "Latency", value: "< 1 frame end-to-end" },
        ],
      },
    ],
    applications: [
      "Utility and grid control rooms",
      "Security operations centres",
      "Broadcast master control",
      "Executive boardrooms",
      "Trading floors",
      "Command and dispatch centres",
    ],
    accent: "from-rose-800/30",
  },
];

export const serviceBySlug = Object.fromEntries(
  services.map((service) => [service.slug, service]),
) as Record<Service["slug"], Service>;
