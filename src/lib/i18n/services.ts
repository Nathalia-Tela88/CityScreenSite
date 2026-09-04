export type SpecRow = { parameter: string; value: string; note?: string };
export type SpecTable = { title: string; caption?: string; rows: SpecRow[] };

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
  image: string;
  /**
   * Manufacturer figures that show the hardware doing what the spec table
   * claims — an exploded cabinet, the service side, the weatherproofing rig.
   *
   * Each one carries its own caption naming what is in the frame, because a
   * cabinet render is unreadable to anyone who does not already know the
   * product. Captions describe the mechanism only: the figures deliberately
   * exclude every graphic whose burnt-in numbers disagree with the specTables
   * above, so nothing here can contradict the published sheet.
   */
  visuals?: {
    src: string;
    alt: string;
    /** The trade term, for a reader who already knows the category. */
    term: string;
    /** What that term means in plain language, for a reader who does not. */
    caption: string;
  }[];
};

/* Portuguese uses the comma as decimal separator and a thin space for
   thousands, so figures are localised too — "2,6 mm" and "10 000 nits" rather
   than the English forms. Units (mm, nits, Hz, IP) are never translated. */

const en: Service[] = [
  {
    slug: "rental",
    href: "/rental",
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
        body: "Cam-lock latches seat and align adjacent cabinets in a single quarter-turn. No shims, no tools, no calibration pass on site.",
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
    image: "/img/app-rental.jpg",
    visuals: [
      {
        src: "/img/feat-ren-quick-lock.jpg",
        alt: "Rental cabinet shown exploded, LED modules lifted clear of the frame",
        term: "Quick-lock cabinet",
        caption:
          "Latches seat the next cabinet in a quarter turn. No tools, and no alignment pass once the wall is up.",
      },
      {
        src: "/img/feat-ren-stack-fly.jpg",
        alt: "The same cabinet ground-stacked on a support frame beside a flown wall",
        term: "Fly or ground-stack",
        caption:
          "One inventory does both jobs: hung from truss overhead, or built up from the deck on a support frame.",
      },
      {
        src: "/img/feat-ren-curve-corner.jpg",
        alt: "Semi-cabinets forming corners and a curved run, with preset concave angles",
        term: "Curve and corner locks",
        caption:
          "Preset angles let the wall bend or turn a corner using stock parts, instead of a custom frame.",
      },
      {
        src: "/img/feat-ren-heat.jpg",
        alt: "Cutaway of a cabinet showing the airflow path through the body",
        term: "Thermal path",
        caption:
          "Air is routed through the cabinet body, which is what keeps brightness stable across a long show.",
      },
      {
        src: "/img/feat-ren-splicing.jpg",
        alt: "Flat, cube and curved screen builds assembled from the same cabinets",
        term: "Splice geometry",
        caption:
          "Flat, cube and curved builds, all from one stock of cabinets.",
      },
      {
        src: "/img/feat-ren-build-quality.jpg",
        alt: "Gold-wire LED package, die-cast aluminium module and assembled cabinet",
        term: "Lamp and frame construction",
        caption:
          "Gold-wire diodes in a die-cast aluminium module: the parts that decide whether a panel survives its fifth tour.",
      },
    ],
  },
  {
    slug: "dooh",
    href: "/dooh",
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
    image: "/img/app-dooh.jpg",
    visuals: [
      {
        src: "/img/feat-dooh-weather-fire.jpg",
        alt: "One cabinet under a water splash, another beside flame, shown side by side",
        term: "Sealed and fire-resistant housing",
        caption:
          "Sealed against driven rain and windborne sand, in a housing that resists fire.",
      },
      {
        src: "/img/feat-dooh-corrosion.jpg",
        alt: "Diagram of coatings rated against oxidation, acid, corrosion and salt",
        term: "Anti-corrosion treatment",
        caption:
          "Coatings rated against oxidation, acid, corrosion and salt — the reason a coastal or roadside site does not eat the cabinet.",
      },
      {
        src: "/img/feat-dooh-seamless.jpg",
        alt: "Two versions of the same image, one continuous and one crossed by dark seams",
        term: "Seam visibility",
        caption:
          "Left, a wall with no visible join. Right, the dark lines a cheaper cabinet leaves across the picture.",
      },
      {
        src: "/img/feat-dooh-control-box.jpg",
        alt: "Control box drawn out from the front of a cabinet and again from the rear",
        term: "Service access",
        caption:
          "The control box comes out from the front or the rear, so the mounting position does not decide whether it can be serviced.",
      },
      {
        src: "/img/feat-dooh-formats.jpg",
        alt: "Four outdoor displays: stadium, roadside, shopfront and truss-mounted",
        term: "Format range",
        caption:
          "Stadium, roadside, shopfront and truss-mounted, on one platform.",
      },
      {
        src: "/img/feat-dooh-installs.jpg",
        alt: "Grid of roadside, forecourt and building-mounted outdoor displays in service",
        term: "In service",
        caption:
          "Roadside, forecourt and building-mounted formats already running.",
      },
      {
        src: "/img/feat-dooh-stadium.jpg",
        alt: "Large outdoor display running at a floodlit stadium in the rain",
        term: "Ambient conditions",
        caption:
          "Legible against floodlight and weather, which is the case that sets the brightness figure.",
      },
    ],
  },
  {
    slug: "commercial",
    href: "/commercial",
    eyebrow: "Retail & Interior",
    name: "Commercial LED",
    tagline: "Merchandising surface, not a monitor.",
    summary:
      "Indoor shopfront walls, window-facing displays and transparent glass LED that keeps daylight and sightlines intact. Designed to sit inside a shopfit programme: flush frames, concealed services and finishes that read as architecture.",
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
    image: "/img/app-commercial.jpg",
    visuals: [
      {
        src: "/img/feat-com-interior-wall.jpg",
        alt: "Large interior LED wall in a lounge, reading as a lit architectural surface",
        term: "Fixed interior install",
        caption:
          "A wall built into the room rather than hung on it, so it reads as architecture instead of as a large television.",
      },
      {
        src: "/img/feat-com-corners.jpg",
        alt: "Right-angle and radius corner cabinets turning a display around a corner",
        term: "Corner cabinets",
        caption:
          "Right-angle and radius cabinets turn the screen around a column or a shopfront return without a break in the image.",
      },
      {
        src: "/img/feat-com-shapes-mall.jpg",
        alt: "Retail interior with cylindrical, right-angled and concave display runs",
        term: "Creative form factors",
        caption:
          "Cylinders, curves and concave runs, all built from the same cabinets as a flat wall.",
      },
      {
        src: "/img/feat-com-shapes-built.jpg",
        alt: "Right angle, cube and mixed-splice screen builds shown as finished objects",
        term: "Cube and mixed builds",
        caption:
          "The same parts assembled as a free-standing object rather than a wall, for a foyer or a display plinth.",
      },
      {
        src: "/img/feat-com-wiring.jpg",
        alt: "Power and data routed inside the frame, with connectors concealed",
        term: "Concealed services",
        caption:
          "Power and data run inside the frame, so nothing is visible where the screen meets the shopfit.",
      },
      {
        src: "/img/feat-com-unatural-mapping.jpg",
        alt: "Three patterned tile layers separating to show pattern mapped across modules",
        term: "Seamless pattern mapping",
        caption:
          "U-Natural: a pattern is mapped across the whole surface, so the joins between modules do not cut through it.",
      },
      {
        src: "/img/feat-com-unatural-finishes.jpg",
        alt: "Timber, concrete and marble tile finishes laid out as samples",
        term: "Decorative finishes",
        caption:
          "U-Natural surfaces in timber, stone and marble, for a screen that has to sit inside a finished interior.",
      },
    ],
  },
  {
    slug: "professional",
    href: "/professional",
    eyebrow: "Mission Critical",
    name: "Professional Visualisation",
    tagline: "Seamless, silent, always on.",
    summary:
      "COB fine-pitch MicroLED for control rooms and boardrooms, with sub-millimetre pitch, a fully sealed emissive surface and 24/7 duty rating. No bezels, no fans, no visible seam between sources.",
    heroStats: [
      { label: "Pitch from", value: "0.6 mm" },
      { label: "Duty cycle", value: "24 / 7" },
      { label: "Acoustic", value: "0 dB" },
    ],
    highlights: [
      {
        title: "COB MicroLED surface",
        body: "Chip-on-board encapsulation puts a continuous resin layer over the diodes: impact resistant, dust proof and cleanable.",
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
    image: "/img/app-professional.jpg",
    visuals: [
      {
        src: "/img/feat-pro-cob-layers.jpg",
        alt: "Panel layers separated: protective coating, nano-optical film and the LED board",
        term: "COB encapsulation",
        caption:
          "The diodes sit under a solid resin layer instead of standing proud of the board. That is what makes the surface cleanable, and safe to touch.",
      },
      {
        src: "/img/feat-pro-module-assembly.jpg",
        alt: "Module mounting onto the cabinet frame behind a finished display surface",
        term: "Module and cabinet",
        caption:
          "Small LED modules bolt onto a rigid cabinet frame. The cabinet is what hangs on the wall; the module is the part that gets swapped.",
      },
      {
        src: "/img/feat-pro-front-service.jpg",
        alt: "A module drawn off the front of a wall, and a cabinet accessed from behind",
        term: "Front service access",
        caption:
          "A module lifts off the face with suction tools, so a wall built tight against a structure can still be repaired.",
      },
      {
        src: "/img/feat-pro-integration.jpg",
        alt: "Frame, backplate and control electronics shown as one assembly",
        term: "Integrated construction",
        caption:
          "Frame, backplate and control electronics arrive as one assembly rather than as parts to be built up on site.",
      },
      {
        src: "/img/feat-pro-splicing.jpg",
        alt: "Cabinets joined edge to edge in a grid and in a cross formation",
        term: "Cabinet splicing",
        caption:
          "Cabinets join edge to edge in a grid. Any rectangle you can tile with them is a size you can order.",
      },
      {
        src: "/img/feat-pro-coating.jpg",
        alt: "Diagram of an added surface layer resisting moisture and impact",
        term: "Protective coating, optional",
        caption:
          "An added surface layer that resists moisture and knocks. Specified where the wall sits within reach of people.",
      },
    ],
  },
];

const pt: Service[] = [
  {
    slug: "rental",
    href: "/rental",
    eyebrow: "Eventos e palco",
    name: "LED de aluguer",
    tagline: "Feito para o relógio da montagem.",
    summary:
      "Módulos de aluguer com fecho rápido que sobem a prumo, assentam planos e desmontam em minutos. Estruturas preparadas para curvatura, fechos sem ferramenta e caminhos de dados redundantes mantêm a equipa a andar quando o horário não espera.",
    heroStats: [
      { label: "Peso do módulo", value: "6,8 kg" },
      { label: "Tempo de fecho", value: "< 8 s" },
      { label: "Amplitude de curva", value: "±15°" },
    ],
    highlights: [
      {
        title: "Módulos de fecho rápido",
        body: "Os fechos de came assentam e alinham módulos adjacentes num quarto de volta. Sem calços, sem ferramenta, sem passagem de calibração no local.",
      },
      {
        title: "Suspenso ou empilhado",
        body: "Barras de suspensão integradas e pés de apoio partilham a mesma estrutura. O mesmo material monta na vertical ou constrói a partir do chão.",
      },
      {
        title: "Dados redundantes",
        body: "Sinal em anel de caminho duplo com comutação automática. Um cabo em falha passa para a redundância em vez de deixar cair a parede.",
      },
      {
        title: "Curvatura quando precisa",
        body: "Fechos mecânicos de curvatura definem geometria côncava ou convexa em incrementos de quinze graus sem remapear a tela.",
      },
    ],
    specTables: [
      {
        title: "Plataforma de módulo",
        caption: "Estrutura padrão de aluguer 500 × 500 mm.",
        rows: [
          { parameter: "Pixel pitch", value: "2,6 / 2,9 / 3,9 / 4,8 mm" },
          { parameter: "Dimensão do módulo", value: "500 × 500 × 75 mm" },
          { parameter: "Peso do módulo", value: "6,8 kg", note: "Magnésio injetado" },
          { parameter: "Luminosidade", value: "1 000 – 1 500 nits" },
          { parameter: "Taxa de atualização", value: "3 840 Hz", note: "Seguro para televisão" },
          { parameter: "Rácio de contraste", value: "5 000 : 1" },
          { parameter: "Acesso para assistência", value: "Frente e traseira" },
          { parameter: "Grau de proteção", value: "IP43 frente / IP31 traseira" },
        ],
      },
      {
        title: "Sinal e alimentação",
        rows: [
          { parameter: "Sinal de entrada", value: "HDMI 2.0, 12G-SDI, NDI" },
          { parameter: "Profundidade de cor", value: "16 bits por canal" },
          { parameter: "Taxas de imagem", value: "24 / 25 / 30 / 50 / 60 fps" },
          { parameter: "Consumo", value: "180 W médio / 520 W pico por m²" },
          { parameter: "Alimentação", value: "100 – 240 V CA, 50/60 Hz" },
          { parameter: "Redundância", value: "Alimentação dupla, dados em anel" },
        ],
      },
    ],
    applications: [
      "Cenários de palco em digressão",
      "Paredes de palco principal em festivais",
      "Cenários de conferências corporativas",
      "Cenografia de estúdio de televisão",
      "Elementos cénicos de galas",
      "Topos de stand em feiras",
    ],
    image: "/img/app-rental.jpg",
    visuals: [
      {
        src: "/img/feat-ren-quick-lock.jpg",
        alt: "Módulo de aluguer em vista explodida, com os módulos LED soltos da estrutura",
        term: "Cabinete de fecho rápido",
        caption:
          "Os fechos prendem o cabinete seguinte num quarto de volta. Sem ferramenta, e sem acerto depois de a parede estar montada.",
      },
      {
        src: "/img/feat-ren-stack-fly.jpg",
        alt: "O mesmo cabinete empilhado no solo sobre estrutura de apoio, ao lado de uma parede suspensa",
        term: "Suspenso ou empilhado",
        caption:
          "O mesmo inventário faz as duas coisas: suspenso da treliça, ou montado a partir do chão sobre estrutura de apoio.",
      },
      {
        src: "/img/feat-ren-curve-corner.jpg",
        alt: "Semi-cabinetes a formar cantos e um troço curvo, com ângulos côncavos predefinidos",
        term: "Fechos de curva e canto",
        caption:
          "Ângulos predefinidos deixam a parede curvar ou virar um canto com peças de stock, em vez de uma estrutura à medida.",
      },
      {
        src: "/img/feat-ren-heat.jpg",
        alt: "Corte de um cabinete a mostrar o percurso do ar pelo corpo",
        term: "Percurso térmico",
        caption:
          "O ar é encaminhado pelo corpo do cabinete, e é isso que mantém a luminosidade estável ao longo de um espetáculo.",
      },
      {
        src: "/img/feat-ren-splicing.jpg",
        alt: "Montagens planas, em cubo e curvas feitas com os mesmos cabinetes",
        term: "Geometria de união",
        caption:
          "Montagens planas, em cubo e curvas, todas a partir do mesmo stock de cabinetes.",
      },
      {
        src: "/img/feat-ren-build-quality.jpg",
        alt: "Encapsulamento LED com fio de ouro, módulo em alumínio fundido e cabinete montado",
        term: "Construção do díodo e da estrutura",
        caption:
          "Díodos com fio de ouro num módulo de alumínio injetado: as peças que decidem se um painel sobrevive à quinta digressão.",
      },
    ],
  },
  {
    slug: "dooh",
    href: "/dooh",
    eyebrow: "Publicidade exterior digital",
    name: "Outdoors DOOH",
    tagline: "Legível ao meio-dia. Preparado para o inverno.",
    summary:
      "Superfícies de media exterior projetadas a 10 000 nits e vedadas a IP65, para que a criatividade aguente o sol direto e o equipamento aguente o clima. Cada instalação é especificada como ativo de receita, com rendimento mensurável por metro quadrado.",
    heroStats: [
      { label: "Luminosidade de pico", value: "10 000 nits" },
      { label: "Grau de proteção", value: "IP65" },
      { label: "Vida útil", value: "100 000 h" },
    ],
    highlights: [
      {
        title: "Saída de 10 000 nits",
        body: "Legibilidade sob sol direto, com escurecimento automático que reduz a saída durante a noite para cumprir os regulamentos locais de poluição luminosa.",
      },
      {
        title: "Invólucro vedado IP65",
        body: "Frente e traseira vedadas contra pó e jatos de baixa pressão. Placas com revestimento conformal resistem à névoa salina em locais costeiros.",
      },
      {
        title: "Instrumentação de receita",
        body: "Registos de emissão, comprovativos de exibição e multiplicadores de impressões alimentam diretamente plataformas programáticas de DOOH.",
      },
      {
        title: "Diagnóstico remoto",
        body: "A telemetria por módulo reporta temperatura, estado das ventoinhas e falhas de píxel antes de um anunciante ver um defeito.",
      },
    ],
    specTables: [
      {
        title: "Plataforma de ecrã",
        caption: "Módulo de instalação fixa em exterior.",
        rows: [
          { parameter: "Pixel pitch", value: "4 / 6,6 / 8 / 10 mm" },
          { parameter: "Luminosidade de pico", value: "10 000 nits" },
          { parameter: "Grau de proteção", value: "IP65 frente e traseira" },
          { parameter: "Temperatura de serviço", value: "−30 °C a +60 °C" },
          { parameter: "Intervalo de humidade", value: "10 – 90 % HR" },
          { parameter: "Carga de vento", value: "Certificado até 130 km/h" },
          { parameter: "Ângulo de visão", value: "140° H / 140° V" },
          { parameter: "Vida útil dos LED", value: "100 000 horas" },
        ],
      },
      {
        title: "Operação e conformidade",
        rows: [
          { parameter: "Escurecimento ambiente", value: "Automático, 256 níveis" },
          { parameter: "Saída mínima noturna", value: "300 nits", note: "Configurável por regulamento" },
          { parameter: "Entrega de conteúdos", value: "4G / 5G / fibra, independente de CMS" },
          { parameter: "Programático", value: "Registos compatíveis com OpenRTB" },
          { parameter: "Monitorização", value: "Telemetria por módulo, SNMP" },
          { parameter: "Consumo", value: "450 W médio / 1 100 W pico por m²" },
        ],
      },
    ],
    applications: [
      "Redes de outdoors à beira da estrada",
      "Fachadas de media em edifícios",
      "Grande formato em interfaces de transportes",
      "Envolvimentos exteriores de estádios",
      "Redes em áreas de serviço",
      "Sinalética em totens de parques comerciais",
    ],
    image: "/img/app-dooh.jpg",
    visuals: [
      {
        src: "/img/feat-dooh-weather-fire.jpg",
        alt: "Um cabinete sob salpico de água e outro junto a chamas, lado a lado",
        term: "Invólucro vedado e resistente ao fogo",
        caption:
          "Vedado contra chuva batida e areia levada pelo vento, num invólucro que resiste ao fogo.",
      },
      {
        src: "/img/feat-dooh-corrosion.jpg",
        alt: "Esquema de revestimentos classificados contra oxidação, ácido, corrosão e sal",
        term: "Tratamento anticorrosão",
        caption:
          "Revestimentos classificados contra oxidação, ácido, corrosão e sal — a razão pela qual um local costeiro ou de berma não destrói o cabinete.",
      },
      {
        src: "/img/feat-dooh-seamless.jpg",
        alt: "Duas versões da mesma imagem, uma contínua e outra atravessada por juntas escuras",
        term: "Visibilidade das juntas",
        caption:
          "À esquerda, uma parede sem junta visível. À direita, as linhas escuras que um cabinete mais barato deixa na imagem.",
      },
      {
        src: "/img/feat-dooh-control-box.jpg",
        alt: "Caixa de controlo puxada pela frente do cabinete e novamente por trás",
        term: "Acesso para assistência",
        caption:
          "A caixa de controlo sai pela frente ou por trás, para que a posição de montagem não decida se pode ser assistida.",
      },
      {
        src: "/img/feat-dooh-formats.jpg",
        alt: "Quatro ecrãs exteriores: estádio, berma, montra e montado em treliça",
        term: "Gama de formatos",
        caption:
          "Estádio, berma, montra e montagem em treliça, na mesma plataforma.",
      },
      {
        src: "/img/feat-dooh-installs.jpg",
        alt: "Grelha de ecrãs exteriores de berma, posto de combustível e fachada em serviço",
        term: "Em serviço",
        caption:
          "Formatos de berma, posto de combustível e fachada já em funcionamento.",
      },
      {
        src: "/img/feat-dooh-stadium.jpg",
        alt: "Grande ecrã exterior em funcionamento num estádio iluminado, à chuva",
        term: "Condições ambientais",
        caption:
          "Legível contra holofotes e mau tempo, que é o caso que define o valor de luminosidade.",
      },
    ],
  },
  {
    slug: "commercial",
    href: "/commercial",
    eyebrow: "Retalho e interiores",
    name: "LED comercial",
    tagline: "Superfície de venda, não um monitor.",
    summary:
      "Paredes de montra interiores, ecrãs voltados para a rua e LED transparente em vidro que preserva a luz natural e as linhas de visão. Pensado para caber num programa de remodelação de loja: molduras à face, infraestruturas ocultas e acabamentos que se leem como arquitetura.",
    heroStats: [
      { label: "Transparência do vidro", value: "até 85%" },
      { label: "Profundidade do módulo", value: "68 mm" },
      { label: "Pixel pitch desde", value: "1,8 mm" },
    ],
    highlights: [
      {
        title: "LED transparente em vidro",
        body: "Até 85% de transparência para que as montras mantenham a luz natural, a visibilidade do produto e a frente de loja que o senhorio aprovou.",
      },
      {
        title: "Moldura arquitetónica à face",
        body: "Módulo de 68 mm de profundidade com gestão de cabos oculta, que assenta em paredes divisórias correntes sem necessidade de tabica.",
      },
      {
        title: "Saída legível em montra",
        body: "Até 5 000 nits nas unidades voltadas para a rua, para que a criatividade sobreviva ao reflexo direto no vidro ao longo do dia de loja.",
      },
      {
        title: "Controlo de toda a rede",
        body: "Um só CMS comanda todas as lojas. Substituições regionais, programação por período do dia e listas por local saem de uma única publicação.",
      },
    ],
    specTables: [
      {
        title: "Instalação fixa interior",
        caption: "Plataforma para montra e parede interior.",
        rows: [
          { parameter: "Pixel pitch", value: "1,8 / 2,5 / 3,0 mm" },
          { parameter: "Dimensão do módulo", value: "640 × 480 × 68 mm" },
          { parameter: "Luminosidade", value: "800 – 5 000 nits", note: "Opção para montra" },
          { parameter: "Taxa de atualização", value: "3 840 Hz" },
          { parameter: "Temperatura de cor", value: "3 200 – 9 300 K ajustável" },
          { parameter: "Acesso para assistência", value: "Frontal, módulos magnéticos" },
          { parameter: "Ângulo de visão", value: "160° H / 160° V" },
          { parameter: "Nível de ruído", value: "Sem ventoinhas, 0 dB" },
        ],
      },
      {
        title: "Série de vidro transparente",
        rows: [
          { parameter: "Pixel pitch", value: "3,9 × 7,8 / 7,8 × 7,8 mm" },
          { parameter: "Transparência", value: "70 – 85 %" },
          { parameter: "Espessura do painel", value: "10 mm" },
          { parameter: "Peso do painel", value: "12 kg por m²" },
          { parameter: "Luminosidade", value: "4 000 nits" },
          { parameter: "Fixação", value: "Suspensa, em pé ou colada ao vidro" },
        ],
      },
    ],
    applications: [
      "Paredes de montra em lojas âncora",
      "Ecrãs transparentes voltados para a rua",
      "Elementos em átrios de centros comerciais",
      "Paredes de destaque em showrooms",
      "Paredes de menu em restauração",
      "Telas de átrio e receção",
    ],
    image: "/img/app-commercial.jpg",
    visuals: [
      {
        src: "/img/feat-com-interior-wall.jpg",
        alt: "Grande parede LED interior numa sala de estar, lida como superfície arquitetónica",
        term: "Instalação interior fixa",
        caption:
          "Uma parede integrada na sala e não pendurada nela, para se ler como arquitetura e não como um televisor grande.",
      },
      {
        src: "/img/feat-com-corners.jpg",
        alt: "Cabinetes de canto reto e de raio a virar o ecrã numa esquina",
        term: "Cabinetes de canto",
        caption:
          "Cabinetes em ângulo reto e de raio viram o ecrã à volta de um pilar ou de uma montra sem quebra na imagem.",
      },
      {
        src: "/img/feat-com-shapes-mall.jpg",
        alt: "Interior comercial com troços cilíndricos, em ângulo reto e côncavos",
        term: "Formatos criativos",
        caption:
          "Cilindros, curvas e troços côncavos, todos construídos com os mesmos cabinetes de uma parede plana.",
      },
      {
        src: "/img/feat-com-shapes-built.jpg",
        alt: "Montagens em ângulo reto, cubo e união mista como objetos acabados",
        term: "Cubos e montagens mistas",
        caption:
          "As mesmas peças montadas como objeto autónomo em vez de parede, para um átrio ou um expositor.",
      },
      {
        src: "/img/feat-com-wiring.jpg",
        alt: "Alimentação e dados encaminhados dentro da estrutura, com ligações ocultas",
        term: "Infraestruturas ocultas",
        caption:
          "A alimentação e os dados correm dentro da estrutura, para que nada fique à vista onde o ecrã encontra a loja.",
      },
      {
        src: "/img/feat-com-unatural-mapping.jpg",
        alt: "Três camadas de ladrilho padronizado separadas, a mostrar o padrão mapeado nos módulos",
        term: "Mapeamento contínuo de padrão",
        caption:
          "U-Natural: o padrão é mapeado em toda a superfície, para que as juntas entre módulos não o cortem.",
      },
      {
        src: "/img/feat-com-unatural-finishes.jpg",
        alt: "Acabamentos em madeira, betão e mármore dispostos como amostras",
        term: "Acabamentos decorativos",
        caption:
          "Superfícies U-Natural em madeira, pedra e mármore, para um ecrã que tem de viver dentro de um interior acabado.",
      },
    ],
  },
  {
    slug: "professional",
    href: "/professional",
    eyebrow: "Missão crítica",
    name: "Visualização profissional",
    tagline: "Sem juntas, silencioso, sempre ligado.",
    summary:
      "MicroLED COB de pitch fino para salas de controlo e salas de administração, com pitch abaixo do milímetro, superfície emissiva totalmente selada e classificação para serviço contínuo. Sem molduras, sem ventoinhas, sem junta visível entre fontes.",
    heroStats: [
      { label: "Pitch desde", value: "0,6 mm" },
      { label: "Ciclo de serviço", value: "24 / 7" },
      { label: "Acústica", value: "0 dB" },
    ],
    highlights: [
      {
        title: "Superfície MicroLED COB",
        body: "O encapsulamento chip-on-board coloca uma camada contínua de resina sobre os díodos: resistente ao impacto, à prova de pó e lavável.",
      },
      {
        title: "Tela verdadeiramente contínua",
        body: "Juntas entre módulos abaixo de 0,1 mm, com módulos emparelhados em fábrica. Nenhuma linha de moldura atravessa um gráfico, um mapa ou uma imagem de vídeo.",
      },
      {
        title: "Sem ventoinhas e silencioso",
        body: "Dissipação passiva a 0 dB. Nada compete com a sala e não há filtro para manter numa janela de manutenção.",
      },
      {
        title: "Classificação 24/7",
        body: "Alimentação e placas recetoras redundantes, com substituição a quente pela frente. Os operadores mantêm a parede ativa durante qualquer troca de componente.",
      },
    ],
    specTables: [
      {
        title: "Plataforma COB de pitch fino",
        caption: "Especificação para sala de controlo e sala de administração.",
        rows: [
          { parameter: "Pixel pitch", value: "0,6 / 0,9 / 1,2 / 1,5 mm" },
          { parameter: "Tipo de encapsulamento", value: "MicroLED COB" },
          { parameter: "Dimensão do módulo", value: "600 × 337,5 × 38 mm" },
          { parameter: "Tolerância de junta", value: "< 0,1 mm" },
          { parameter: "Luminosidade", value: "600 – 1 200 nits" },
          { parameter: "Rácio de contraste", value: "20 000 : 1" },
          { parameter: "Escala de cinzentos", value: "16 bits, 65 536 níveis" },
          { parameter: "Taxa de atualização", value: "3 840 – 7 680 Hz" },
        ],
      },
      {
        title: "Fiabilidade e integração",
        rows: [
          { parameter: "Ciclo de serviço", value: "24 / 7 contínuo" },
          { parameter: "Emissão acústica", value: "0 dB, sem ventoinhas" },
          { parameter: "MTBF", value: "> 100 000 horas" },
          { parameter: "Redundância de energia", value: "Fonte dupla, N+1" },
          { parameter: "Redundância de placa", value: "Placa recetora de reserva" },
          { parameter: "Acesso para assistência", value: "Frontal, troca a quente magnética" },
          { parameter: "Integração de controlo", value: "Crestron, AMX, Q-SYS" },
          { parameter: "Latência", value: "< 1 imagem ponta a ponta" },
        ],
      },
    ],
    applications: [
      "Salas de controlo de redes e energia",
      "Centros de operações de segurança",
      "Régie central de televisão",
      "Salas de administração",
      "Salas de mercados financeiros",
      "Centros de comando e despacho",
    ],
    image: "/img/app-professional.jpg",
    visuals: [
      {
        src: "/img/feat-pro-cob-layers.jpg",
        alt: "Camadas do painel separadas: revestimento protetor, película nano-ótica e a placa LED",
        term: "Encapsulamento COB",
        caption:
          "Os díodos ficam sob uma camada sólida de resina em vez de salientes na placa. É isso que torna a superfície lavável e segura ao toque.",
      },
      {
        src: "/img/feat-pro-module-assembly.jpg",
        alt: "Montagem do módulo na estrutura do cabinete, atrás da superfície acabada",
        term: "Módulo e cabinete",
        caption:
          "Os módulos LED aparafusam-se a uma estrutura rígida. O cabinete é o que fica na parede; o módulo é a peça que se substitui.",
      },
      {
        src: "/img/feat-pro-front-service.jpg",
        alt: "Um módulo retirado pela frente da parede e um cabinete acedido por trás",
        term: "Assistência pela frente",
        caption:
          "O módulo sai pela face com ventosas, para que uma parede encostada à estrutura continue a ser reparável.",
      },
      {
        src: "/img/feat-pro-integration.jpg",
        alt: "Estrutura, painel traseiro e eletrónica de controlo como um só conjunto",
        term: "Construção integrada",
        caption:
          "Estrutura, painel traseiro e eletrónica de controlo chegam como um só conjunto, e não como peças a montar no local.",
      },
      {
        src: "/img/feat-pro-splicing.jpg",
        alt: "Cabinetes unidos lado a lado em grelha e em cruz",
        term: "União de cabinetes",
        caption:
          "Os cabinetes unem-se lado a lado numa grelha. Qualquer retângulo que se consiga formar com eles é uma medida que pode encomendar.",
      },
      {
        src: "/img/feat-pro-coating.jpg",
        alt: "Esquema de uma camada adicional resistente à humidade e ao impacto",
        term: "Revestimento protetor, opcional",
        caption:
          "Uma camada adicional resistente à humidade e a pancadas. Especificada quando a parede fica ao alcance das pessoas.",
      },
    ],
  },
];

export const servicesByLocale = { en, pt };
