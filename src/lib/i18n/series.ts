import type { SpecTable } from "@/lib/i18n/services";

/* ---------------------------------------------------------------------------
   Series copy and datasheets, English and European Portuguese.

   SOURCE OF TRUTH — read before editing.

   Every figure below is taken from the manufacturer's own published product
   page. These are LAMPRO series; LAMPRO is Unilumin's professional-display
   brand, and U-Natural is a Unilumin product carried under the same dealer
   agreement.

     LMini, LMini P, LHP, BNXⅡ, LRS, RNⅡ, LRM,
     LXⅡ Pro, LS Pro            lampro.net/products
     U-Natural                  unilumin.com/products/creative/u-natural.html
     LST, LSK                   distributor datasheets (see note below)

   Two rules, both inherited from lib/series.ts and both worth keeping:

   1. A figure that the manufacturer does not publish does not get a row. The
      spec tables here are short because they are honest — a buyer comparing an
      LMini against an LHP is comparing numbers someone actually measured.

   2. Where a series spans indoor and outdoor variants the row says so rather
      than averaging them, because the two are different products in practice
      and quoting a midpoint would describe neither.

   LST and LSK are not listed on LAMPRO's current product index and appear only
   in distributor catalogues, which suggests they are legacy lines. Their rows
   are marked accordingly and should be confirmed against a current datasheet
   from the dealer portal before anything is quoted from them.
   --------------------------------------------------------------------------- */

export type SeriesCopy = {
  tagline: string;
  summary: string;
  heroStats: { label: string; value: string }[];
  highlights: { title: string; body: string }[];
  specTables: SpecTable[];
};

const en: Record<string, SeriesCopy> = {
  /* --- Professional ----------------------------------------------------- */
  lmini: {
    tagline: "Mini LED, front-serviced, eye-rated",
    summary:
      "The fine-pitch workhorse: Mini LED on a flip-chip COB surface, 29.6 mm deep, and serviced entirely from the front. It is specified where a screen is read for a full shift rather than glanced at: control rooms and monitoring floors. That is why the low-blue-light rating matters more here than peak brightness does.",
    heroStats: [
      { label: "Pixel pitch", value: "0.93 – 1.8 mm" },
      { label: "Contrast", value: "10,000:1" },
      { label: "Cabinet depth", value: "29.6 mm" },
    ],
    highlights: [
      {
        title: "Read all day, not glanced at",
        body: "Flip-chip COB at 600–800 nits with a reduced blue-light spectrum. A control room fights no daylight, so the specification target is a surface that stays comfortable across a twelve-hour shift rather than one that wins a showroom comparison.",
      },
      {
        title: "Everything serviced from the front",
        body: "Power supply, HUB and receiving card are integrated into one assembly and the whole cabinet is front-maintained. It can therefore sit hard against a structural wall with no rear access corridor, which is usually what decides the room layout.",
      },
      {
        title: "Thirty percent lighter",
        body: "600 × 337.5 mm cabinets at 29.6 mm deep, around 30% lighter and thinner than the conventional equivalent. Less secondary steel behind the wall, and a lower load for the building engineer to sign off.",
      },
    ],
    specTables: [
      {
        title: "LMini Series",
        caption: "Manufacturer-published figures, LAMPRO",
        rows: [
          { parameter: "Pixel pitch", value: "0.93 / 1.25 / 1.56 / 1.8 mm" },
          { parameter: "Brightness", value: "600 – 800 nits" },
          { parameter: "Refresh rate", value: "3,840 Hz" },
          { parameter: "Contrast ratio", value: "10,000:1" },
          { parameter: "Cabinet size", value: "600 × 337.5 × 29.6 mm" },
          { parameter: "Cabinet resolution", value: "640 × 360 px" },
          { parameter: "Module size", value: "150 × 168.75 mm" },
          { parameter: "Viewing angle", value: "180°" },
          { parameter: "Service access", value: "Full front" },
          {
            parameter: "Power draw",
            value: "80 W/m² average",
            note: "200 W/m² peak",
          },
        ],
      },
    ],
  },

  "lmini-p": {
    tagline: "The energy case for fine pitch",
    summary:
      "A narrower two-pitch range than the LMini, tuned for the rooms where a screen runs all day in front of the public. Its EBL optical stack lifts black level and colour consistency, and it draws roughly 40% less than a conventional P1.2. On a wall that never switches off, that is the figure the facilities manager actually cares about.",
    heroStats: [
      { label: "Pixel pitch", value: "1.25 / 1.56 mm" },
      { label: "Energy saving", value: "~40%" },
      { label: "Face temperature", value: "~40 °C" },
    ],
    highlights: [
      {
        title: "Forty percent less draw",
        body: "Around 40% below a conventional P1.2 mm display at the same duty. On a lobby wall running sixteen hours a day that is the difference between a screen you budget for and one you argue about.",
      },
      {
        title: "Black that stays black",
        body: "EBL multilayer optical processing for a deep black level and high colour consistency panel to panel. That is the failure a fine-pitch wall is actually judged on, since a mismatched cabinet is visible from across the room.",
      },
      {
        title: "Aligned from six directions",
        body: "A double mounting plate with XYZ adjustment from six directions. Flatness is set on site rather than hoped for, which is what keeps the seams invisible once the wall is lit.",
      },
    ],
    specTables: [
      {
        title: "LMini P Series",
        caption: "Manufacturer-published figures, LAMPRO",
        rows: [
          { parameter: "Pixel pitch", value: "1.25 / 1.56 mm" },
          { parameter: "Brightness", value: "600 nits" },
          {
            parameter: "Pixel density",
            value: "640,000 / 409,600 px/m²",
          },
          {
            parameter: "Face temperature",
            value: "~40 °C",
            note: "at 600 nits",
          },
          {
            parameter: "Energy saving",
            value: "~40%",
            note: "vs conventional P1.2",
          },
          {
            parameter: "Integration",
            value: "3-in-1 PSU, receiving card, HUB",
          },
          { parameter: "Alignment", value: "XYZ, six directions" },
        ],
      },
    ],
  },

  lhp: {
    tagline: "Near-pixel-pitch, sealed and redundant",
    summary:
      "The widest professional range we carry, from 0.9 mm up to 2.5 mm, with a GOB surface and a fully enclosed back shell rated IP30. Specified where the wall is permanent, public and cannot go dark: command centres, museums and exhibition halls, where power and data redundancy is a requirement rather than an upgrade.",
    heroStats: [
      { label: "Pixel pitch", value: "0.9 – 2.5 mm" },
      { label: "Ingress rating", value: "IP30" },
      { label: "Pixel density", value: "up to 1.14M/m²" },
    ],
    highlights: [
      {
        title: "GOB, so it survives being touched",
        body: "A glue-on-board surface takes knocks and cleaning that a bare-lamp fine pitch does not. On a museum floor or a public concourse the screen is within reach, and that is the failure mode that actually happens.",
      },
      {
        title: "Redundant power and data",
        body: "Both paths support redundancy, so a single supply or cable failure does not take the wall down. In a command centre the display is part of the operating picture: a dark wall is an incident, not an inconvenience.",
      },
      {
        title: "Sealed back, front-serviced",
        body: "A fully enclosed back shell rated IP30 with L-type cooling strips, still fully front-maintained. It keeps dust out of the cabinet in a building that has not been commissioned as a clean space.",
      },
    ],
    specTables: [
      {
        title: "LHP Series",
        caption: "Manufacturer-published figures, LAMPRO",
        rows: [
          { parameter: "Pixel pitch", value: "0.9 / 1.2 / 1.5 / 1.8 / 2.5 mm" },
          {
            parameter: "Brightness",
            value: "600 nits",
            note: "800 nits at 2.5 mm",
          },
          {
            parameter: "Pixel density",
            value: "160,000 – 1,137,777 px/m²",
          },
          { parameter: "Ingress rating", value: "IP30" },
          { parameter: "Surface", value: "GOB" },
          { parameter: "Redundancy", value: "Power and data" },
          { parameter: "Service access", value: "Full front" },
        ],
      },
    ],
  },

  /* --- Commercial ------------------------------------------------------- */
  "bnx-ii": {
    tagline: "Free splicing, free form",
    summary:
      "The commercial platform's shape-making series. Four pitches across cabinets that mix 500 × 1000 mm with 1000 × 250 mm strips, all rotatable, so the display is cut to the architecture instead of the architecture being cut to a rectangle. Specified for flagship retail, hotel lobbies and brand experience centres.",
    heroStats: [
      { label: "Pixel pitch", value: "1.5 – 3.9 mm" },
      { label: "Cabinet depth", value: "40 mm" },
      { label: "Brightness", value: "600 – 800 nits" },
    ],
    highlights: [
      {
        title: "Mixed splicing, rotatable cabinets",
        body: "500 × 1000 mm and 1000 × 250 mm panels with 500 × 500, 500 × 750 and 750 × 250 mm extensions, each rotatable. Columns, ribbons, wraps and corners come out of stock parts rather than a custom fabrication run.",
      },
      {
        title: "Calibration that travels with the panel",
        body: "A Flash IC on each cabinet carries its own calibration data. Swap a cabinet years later and it arrives already matched, instead of needing the whole wall re-balanced around the new one.",
      },
      {
        title: "It reports its own faults",
        body: "Optional spot detection, PSU voltage monitoring, signal detection and module temperature tracking. That is the telemetry a service contract is built on, so a failing module is a phone call from us rather than a complaint from you.",
      },
    ],
    specTables: [
      {
        title: "BNXⅡ Series",
        caption: "Manufacturer-published figures, LAMPRO",
        rows: [
          { parameter: "Pixel pitch", value: "1.5 / 1.9 / 2.5 / 3.9 mm" },
          { parameter: "Brightness", value: "600 – 800 nits" },
          {
            parameter: "Cabinet sizes",
            value: "500 × 1000, 1000 × 250 mm",
            note: "plus 500 × 500 / 750, 750 × 250",
          },
          { parameter: "Cabinet depth", value: "40 mm" },
          { parameter: "Construction", value: "Modular aluminium" },
          { parameter: "Calibration", value: "Flash IC, per cabinet" },
          {
            parameter: "Monitoring",
            value: "Optional",
            note: "spot, PSU, signal, temperature",
          },
        ],
      },
    ],
  },

  "u-natural": {
    tagline: "Turn off the display, turn on the art",
    summary:
      "Not a conventional display. U-Natural is a Unilumin texture screen: a nano-optical surface finished as wood grain or marble that reads as a decorative building material when it is off, and as a screen when it is on. Specified for reception desks, screen walls and hospitality interiors, where a black rectangle on the wall is the thing the designer is trying to avoid.",
    heroStats: [
      { label: "Reflectivity", value: "0.5%" },
      { label: "Viewing angle", value: "110°" },
      { label: "Surface hardness", value: "3H" },
    ],
    highlights: [
      {
        title: "It is the wall until it is a screen",
        body: "The surface is finished as a decorative material (wood grain, marble) so when it is off it belongs to the interior rather than interrupting it. That is the whole argument for it, and the reason it goes where a conventional display would be refused.",
      },
      {
        title: "0.5% reflectivity",
        body: "Nano-optical processing holds reflectivity to 0.5%, so a lit reception area does not turn the surface into a mirror. It is what makes the material read as material rather than as glass.",
      },
      {
        title: "3H, in a space people touch",
        body: "A 3H scratch rating on a surface at hand height in a lobby or a restaurant. The relevant durability question for this product is not weather, it is fingernails and cleaning cloths.",
      },
    ],
    specTables: [
      {
        title: "U-Natural",
        caption: "Manufacturer-published figures, Unilumin",
        rows: [
          { parameter: "Surface", value: "Nano-optical texture" },
          {
            parameter: "Finishes",
            value: "Customisable",
            note: "wood grain, marble",
          },
          { parameter: "Reflectivity", value: "0.5%" },
          { parameter: "Viewing angle", value: "110°" },
          { parameter: "Scratch resistance", value: "3H" },
          {
            parameter: "Pixel pitch",
            value: "On request",
            note: "not published",
          },
        ],
      },
    ],
  },

  /* --- Rental ----------------------------------------------------------- */
  lrs: {
    tagline: "Your carefree rental application solution",
    summary:
      "The general-purpose rental series, indoor and outdoor from one platform. Lightweight fully modular cabinets that arc concave or convex and turn a 90° round corner, with the control box, frame and module split into three serviceable sections. Built around the load-in clock rather than the spec sheet.",
    heroStats: [
      { label: "Pixel pitch", value: "2.6 – 4.8 mm" },
      { label: "Outdoor brightness", value: "4,500 – 5,000 nits" },
      { label: "Refresh rate", value: "3,840 – 7,680 Hz" },
    ],
    highlights: [
      {
        title: "Curves and corners without special parts",
        body: "Concave and convex arcs plus a 90° round corner come out of the standard cabinet. A curved set or a wrapped column is a stock hire rather than a fabrication lead time.",
      },
      {
        title: "Three sections, three failure points",
        body: "Control box, cabinet frame and module are separately serviceable. On a show floor the fix is swapping the failed section in minutes, not pulling the cabinet out of the hang.",
      },
      {
        title: "Up to 7,680 Hz for camera",
        body: "Broadcast and IMAG work needs a refresh rate that a camera shutter cannot beat. Below about 3,840 Hz a camera picks up scan banding the naked eye never sees, which is why this range starts there.",
      },
    ],
    specTables: [
      {
        title: "LRS Series",
        caption: "Manufacturer-published figures, LAMPRO",
        rows: [
          {
            parameter: "Pixel pitch, indoor",
            value: "2.6 / 2.9 / 3.9 mm",
          },
          {
            parameter: "Pixel pitch, outdoor",
            value: "2.9 / 3.9 / 4.8 mm",
          },
          { parameter: "Brightness, indoor", value: "800 – 1,000 nits" },
          { parameter: "Brightness, outdoor", value: "4,500 – 5,000 nits" },
          { parameter: "Refresh rate", value: "3,840 – 7,680 Hz" },
          {
            parameter: "Cabinet size",
            value: "500 × 500 mm",
            note: "74.2 mm deep",
          },
          {
            parameter: "Service access",
            value: "Front and rear",
            note: "indoor cabinets",
          },
          { parameter: "Geometry", value: "Concave, convex, 90° corner" },
        ],
      },
    ],
  },

  "rn-ii": {
    tagline: "Lead the P1 era of indoor rental",
    summary:
      "The fine-pitch end of the rental platform, down to 1.5 mm with 15,000:1 contrast and 96% DCI-P3. Specified where a rental wall is on camera and has to hold up as a broadcast source rather than as a backdrop: launches, awards, virtual production.",
    heroStats: [
      { label: "Pixel pitch", value: "1.5 – 2.6 mm" },
      { label: "Contrast", value: "15,000:1" },
      { label: "Colour gamut", value: "96% DCI-P3" },
    ],
    highlights: [
      {
        title: "Built to be shot",
        body: "15,000:1 contrast and 96% DCI-P3 coverage. On camera the wall is a light source in the frame, so gamut and black level decide whether the shot grades. A backdrop that cannot hold its blacks costs post time on every take.",
      },
      {
        title: "Tool-free, both sides",
        body: "Magnetic modules with front and rear maintenance and a reinforced frame with optimised corners for quick module removal. Nothing about a fix requires a case of tools at the top of a ladder.",
      },
      {
        title: "17,000 N, with anti-drop",
        body: "Cabinet strength rated at 17,000 N and a dual MIP and U-shield protection scheme. A rental cabinet is trucked, hung and struck weekly, and the structural rating is what makes that survivable.",
      },
    ],
    specTables: [
      {
        title: "RNⅡ Series",
        caption: "Manufacturer-published figures, LAMPRO",
        rows: [
          { parameter: "Pixel pitch", value: "1.5 / 1.9 / 2.6 mm" },
          { parameter: "Brightness", value: "600 / 800 / 1,200 nits" },
          { parameter: "Contrast ratio", value: "15,000:1" },
          { parameter: "Colour gamut", value: "96% DCI-P3" },
          {
            parameter: "Pixel density",
            value: "up to 409,600 px/m²",
            note: "at 1.5 mm",
          },
          { parameter: "Cabinet strength", value: "17,000 N" },
          { parameter: "Protection", value: "MIP + U-shield" },
          {
            parameter: "Service access",
            value: "Front and rear",
            note: "tool-free, magnetic",
          },
        ],
      },
    ],
  },

  lrm: {
    tagline: "Safeguard your live shows",
    summary:
      "The touring series, indoor and outdoor, with an arc lock that sets curvature anywhere between −15° and +15° and holds it. Composite installation mixes 500 × 500 and 500 × 1000 mm panels in one hang, so the same stock builds a flat upstage wall and a curved header.",
    heroStats: [
      { label: "Pixel pitch", value: "2.6 – 4.8 mm" },
      { label: "Arc lock", value: "−15° to +15°" },
      { label: "Ingress rating", value: "IP65" },
    ],
    highlights: [
      {
        title: "Curvature you set and lock",
        body: "An arc lock adjustable from −15° to +15°. The curve is a repeatable setting rather than something the crew negotiates with shims, which is what makes the same set reproducible city to city.",
      },
      {
        title: "Two panel sizes, one hang",
        body: "500 × 500 and 500 × 1000 mm panels install together, with straight, curved and 90° corner splicing on the square cabinet. One inventory covers more set designs.",
      },
      {
        title: "IP65 for the outdoor date",
        body: "The outdoor variants are sealed to IP65 at 3,500–4,000 nits. A festival main stage does not get postponed for weather, and the wall has to be specified for the same assumption.",
      },
    ],
    specTables: [
      {
        title: "LRM Series",
        caption: "Manufacturer-published figures, LAMPRO",
        rows: [
          {
            parameter: "Pixel pitch, indoor",
            value: "2.6 / 2.9 / 3.9 mm",
          },
          { parameter: "Pixel pitch, outdoor", value: "3.9 / 4.8 mm" },
          { parameter: "Brightness, indoor", value: "700 – 800 nits" },
          { parameter: "Brightness, outdoor", value: "3,500 – 4,000 nits" },
          {
            parameter: "Ingress rating",
            value: "IP65",
            note: "outdoor variants",
          },
          { parameter: "Arc lock", value: "−15° to +15°" },
          {
            parameter: "Panel sizes",
            value: "500 × 500, 500 × 1000 mm",
          },
          { parameter: "Splicing", value: "Straight, curved, 90° corner" },
        ],
      },
    ],
  },

  /* --- DOOH ------------------------------------------------------------- */
  "lx-ii-pro": {
    tagline: "Perfect fit, built to last",
    summary:
      "The fine end of the outdoor platform at 2.97 and 3.91 mm, rated IP66, for faces read from the pavement rather than from a carriageway. Die-cast aluminium modules and UV-protected cable management, with multi-size mixed splicing so the display fits the elevation it is going on.",
    heroStats: [
      { label: "Pixel pitch", value: "2.97 / 3.91 mm" },
      { label: "Brightness", value: "up to 7,500 nits" },
      { label: "Ingress rating", value: "IP66" },
    ],
    highlights: [
      {
        title: "Close-viewed, full daylight",
        body: "Up to 7,500 nits at under 4 mm. A street-level face competes with direct sun while being read from a few metres away, which is the combination that rules out most outdoor product.",
      },
      {
        title: "IP66, cabling included",
        body: "Die-cast aluminium modules with a cable management system protected from UV. In Ontario the failure mode is not rain, it is years of sun on a cable jacket and a freeze-thaw cycle on trapped moisture.",
      },
      {
        title: "Mixed splicing and 3D",
        body: "Multiple cabinet sizes splice together, including the corner geometry used for glasses-free 3D. It is what lets a display follow a building rather than being bolted across it.",
      },
    ],
    specTables: [
      {
        title: "LXⅡ Pro Series",
        caption: "Manufacturer-published figures, LAMPRO",
        rows: [
          { parameter: "Pixel pitch", value: "2.97 / 3.91 mm" },
          { parameter: "Brightness", value: "up to 7,500 nits" },
          { parameter: "Ingress rating", value: "IP66" },
          { parameter: "Module", value: "Die-cast aluminium" },
          { parameter: "Cable management", value: "UV protected" },
          { parameter: "Service access", value: "Front and rear" },
          { parameter: "Splicing", value: "Multi-size, mixed" },
        ],
      },
    ],
  },

  "ls-pro": {
    tagline: "Go big, stay strong, built to last",
    summary:
      "The large-format billboard series: 6.67 to 10 mm at up to 10,000 nits, sealed to IP66/65 and engineered to be craned as a single cabinet or a complete screen. Specified for highway faces and building wraps, where the install method matters as much as the picture.",
    heroStats: [
      { label: "Pixel pitch", value: "6.67 – 10 mm" },
      { label: "Brightness", value: "7,500 – 10,000 nits" },
      { label: "Refresh rate", value: "7,680 Hz" },
    ],
    highlights: [
      {
        title: "Ten thousand nits, and it holds",
        body: "7,500–10,000 nits with 14–16 bit greyscale. Peak output gets a face legible at noon; the greyscale depth is what stops the image banding once it is dimmed for the night schedule.",
      },
      {
        title: "Craned as one piece",
        body: "The structure is rated to be lifted as a single cabinet or as a complete screen. On a roadside installation the crane window is the expensive hour, and a screen that can go up in one lift is a shorter lane closure.",
      },
      {
        title: "Independently sealed",
        body: "A full-seal waterproof structure at IP66/65 with each section independently sealed, and a cabinet the manufacturer rates at twice the strength of the conventional equivalent.",
      },
    ],
    specTables: [
      {
        title: "LS Pro Series",
        caption: "Manufacturer-published figures, LAMPRO",
        rows: [
          { parameter: "Pixel pitch", value: "6.67 / 8 / 10 mm" },
          { parameter: "Brightness", value: "7,500 – 10,000 nits" },
          { parameter: "Refresh rate", value: "7,680 Hz" },
          { parameter: "Greyscale", value: "14 – 16 bit" },
          { parameter: "Ingress rating", value: "IP66 / IP65" },
          { parameter: "Sealing", value: "Independent full-seal" },
          { parameter: "Installation", value: "Crane-liftable" },
        ],
      },
    ],
  },

  lst: {
    tagline: "The volume billboard line",
    summary:
      "A wide-pitch outdoor range from 4.44 to 10 mm across four cabinet formats, front and rear serviced, rated IP65. Positioned as the cost-per-square-metre option for advertising networks where the face is read from a distance and the commercial case is driven by coverage.",
    heroStats: [
      { label: "Pixel pitch", value: "4.44 – 10 mm" },
      { label: "Brightness", value: "5,500 – 10,000 nits" },
      { label: "Ingress rating", value: "IP65" },
    ],
    highlights: [
      {
        title: "Four cabinet formats",
        body: "960 × 640, 960 × 960, 1440 × 640 and 1440 × 960 mm. A billboard is sized by the permitted face rather than by a panel module, and four formats waste less of it.",
      },
      {
        title: "Serviced from either side",
        body: "Front and rear maintenance, so the access method is decided by the site rather than by the product. On a hoarding with no rear walkway, that is the whole question.",
      },
    ],
    specTables: [
      {
        title: "LST Series",
        caption:
          "Distributor datasheet, confirm against a current LAMPRO datasheet before quoting",
        rows: [
          { parameter: "Pixel pitch", value: "4.44 / 6.67 / 8 / 10 mm" },
          { parameter: "Brightness", value: "5,500 – 10,000 nits" },
          {
            parameter: "Cabinet sizes",
            value: "960 × 640, 960 × 960 mm",
            note: "1440 × 640, 1440 × 960",
          },
          { parameter: "Ingress rating", value: "IP65" },
          { parameter: "Service access", value: "Front and rear" },
        ],
      },
    ],
  },

  lsk: {
    tagline: "Fine-pitch outdoor, sealed to IP69K",
    summary:
      "The high-density outdoor series, 2.6 to 5.95 mm, sealed to IP69K, a rating written for high-pressure, high-temperature washdown rather than for weather. Specified where an outdoor face is close to the viewer and is going to be cleaned aggressively for the life of the contract.",
    heroStats: [
      { label: "Pixel pitch", value: "2.6 – 5.95 mm" },
      { label: "Brightness", value: "5,000 – 6,500 nits" },
      { label: "Ingress rating", value: "IP69K" },
    ],
    highlights: [
      {
        title: "IP69K, not IP65",
        body: "IP69K covers high-pressure, high-temperature water jets. It is a washdown rating rather than a weather rating, and it is the reason this series survives a maintenance regime that would eventually find its way into a sealed IP65 cabinet.",
      },
      {
        title: "Fine pitch, outdoors",
        body: "Down to 2.604 mm at 5,000+ nits. Close-viewed outdoor faces (transit shelters, retail frontages, covered concourses) need the pitch of an indoor screen with the output of an outdoor one.",
      },
    ],
    specTables: [
      {
        title: "LSK Series",
        caption:
          "Distributor datasheet, confirm against a current LAMPRO datasheet before quoting",
        rows: [
          {
            parameter: "Pixel pitch",
            value: "2.604 / 2.976 / 3.906 mm",
            note: "4.807, 5.952",
          },
          { parameter: "Brightness", value: "5,000 – 6,500 nits" },
          {
            parameter: "Cabinet sizes",
            value: "500 × 750, 500 × 1000 mm",
          },
          { parameter: "Ingress rating", value: "IP69K" },
        ],
      },
    ],
  },
};

const pt: Record<string, SeriesCopy> = {
  /* --- Profissional ----------------------------------------------------- */
  lmini: {
    tagline: "Mini LED, manutenção frontal, certificado para os olhos",
    summary:
      "O cavalo de batalha do pixel pitch fino: Mini LED sobre uma superfície COB flip-chip, 29,6 mm de profundidade e assistência integralmente pela frente. É especificado onde um ecrã é lido durante um turno inteiro e não apenas consultado: salas de controlo e centros de monitorização. É a razão pela qual a classificação de baixa luz azul importa aqui mais do que a luminosidade de pico.",
    heroStats: [
      { label: "Pixel pitch", value: "0,93 – 1,8 mm" },
      { label: "Contraste", value: "10 000:1" },
      { label: "Profundidade do cabinete", value: "29,6 mm" },
    ],
    highlights: [
      {
        title: "Para ler o dia todo, não para olhar de relance",
        body: "COB flip-chip a 600–800 nits com espetro de luz azul reduzido. Uma sala de controlo não combate luz natural, pelo que o objetivo da especificação é uma superfície que se mantém confortável ao longo de um turno de doze horas, e não uma que ganha comparações em showroom.",
      },
      {
        title: "Tudo assistido pela frente",
        body: "Fonte de alimentação, HUB e placa recetora integrados num único conjunto, com o cabinete todo mantido pela frente. Pode assim encostar diretamente a uma parede estrutural sem corredor de acesso traseiro, o que é normalmente o que decide a planta da sala.",
      },
      {
        title: "Trinta por cento mais leve",
        body: "Cabinetes de 600 × 337,5 mm com 29,6 mm de profundidade, cerca de 30% mais leves e finos do que o equivalente convencional. Menos estrutura secundária atrás do ecrã e uma carga menor para o engenheiro do edifício aprovar.",
      },
    ],
    specTables: [
      {
        title: "Série LMini",
        caption: "Valores publicados pelo fabricante, LAMPRO",
        rows: [
          { parameter: "Pixel pitch", value: "0,93 / 1,25 / 1,56 / 1,8 mm" },
          { parameter: "Luminosidade", value: "600 – 800 nits" },
          { parameter: "Taxa de atualização", value: "3 840 Hz" },
          { parameter: "Rácio de contraste", value: "10 000:1" },
          { parameter: "Dimensão do cabinete", value: "600 × 337,5 × 29,6 mm" },
          { parameter: "Resolução do cabinete", value: "640 × 360 px" },
          { parameter: "Dimensão do módulo", value: "150 × 168,75 mm" },
          { parameter: "Ângulo de visão", value: "180°" },
          { parameter: "Acesso para assistência", value: "Totalmente frontal" },
          {
            parameter: "Consumo",
            value: "80 W/m² médio",
            note: "200 W/m² de pico",
          },
        ],
      },
    ],
  },

  "lmini-p": {
    tagline: "O argumento energético do pixel pitch fino",
    summary:
      "Uma gama de dois pitches mais estreita do que a LMini, afinada para os espaços onde um ecrã funciona todo o dia perante o público. O seu conjunto ótico EBL melhora o nível de preto e a consistência de cor, e consome cerca de 40% menos do que um P1.2 convencional. Num ecrã que nunca se desliga, é o número que interessa realmente ao gestor de instalações.",
    heroStats: [
      { label: "Pixel pitch", value: "1,25 / 1,56 mm" },
      { label: "Poupança de energia", value: "~40%" },
      { label: "Temperatura da face", value: "~40 °C" },
    ],
    highlights: [
      {
        title: "Menos 40% de consumo",
        body: "Cerca de 40% abaixo de um ecrã P1.2 mm convencional no mesmo regime. Numa parede de átrio a funcionar dezasseis horas por dia, é a diferença entre um ecrã que se orçamenta e um que se discute.",
      },
      {
        title: "Preto que se mantém preto",
        body: "Processamento ótico multicamada EBL para um nível de preto profundo e alta consistência de cor entre painéis. É a falha pela qual um ecrã de pitch fino é realmente julgado, já que um cabinete desalinhado na cor vê-se do outro lado da sala.",
      },
      {
        title: "Alinhado a partir de seis direções",
        body: "Placa de montagem dupla com ajuste XYZ a partir de seis direções. A planeza é definida em obra em vez de esperada, o que é o que mantém as juntas invisíveis depois de o ecrã estar ligado.",
      },
    ],
    specTables: [
      {
        title: "Série LMini P",
        caption: "Valores publicados pelo fabricante, LAMPRO",
        rows: [
          { parameter: "Pixel pitch", value: "1,25 / 1,56 mm" },
          { parameter: "Luminosidade", value: "600 nits" },
          {
            parameter: "Densidade de pixels",
            value: "640 000 / 409 600 px/m²",
          },
          {
            parameter: "Temperatura da face",
            value: "~40 °C",
            note: "a 600 nits",
          },
          {
            parameter: "Poupança de energia",
            value: "~40%",
            note: "face a um P1.2 convencional",
          },
          {
            parameter: "Integração",
            value: "3 em 1: fonte, placa recetora, HUB",
          },
          { parameter: "Alinhamento", value: "XYZ, seis direções" },
        ],
      },
    ],
  },

  lhp: {
    tagline: "Pitch quase-pixel, selado e redundante",
    summary:
      "A gama profissional mais ampla que representamos, de 0,9 mm até 2,5 mm, com superfície GOB e uma carcaça traseira totalmente fechada com grau IP30. Especificada onde o ecrã é permanente, público e não pode apagar-se: centros de comando, museus e salas de exposição, onde a redundância de energia e dados é um requisito e não uma opção.",
    heroStats: [
      { label: "Pixel pitch", value: "0,9 – 2,5 mm" },
      { label: "Grau de proteção", value: "IP30" },
      { label: "Densidade de pixels", value: "até 1,14 M/m²" },
    ],
    highlights: [
      {
        title: "GOB, para aguentar ser tocado",
        body: "Uma superfície glue-on-board aguenta pancadas e limpezas que um pitch fino de lâmpada exposta não aguenta. No piso de um museu ou num átrio público o ecrã está ao alcance da mão, e é esse o modo de falha que acontece de facto.",
      },
      {
        title: "Energia e dados redundantes",
        body: "Ambos os caminhos suportam redundância, pelo que a falha de uma fonte ou de um cabo não apaga o ecrã. Num centro de comando o ecrã faz parte da imagem operacional: um ecrã apagado é um incidente, não um contratempo.",
      },
      {
        title: "Traseira selada, assistência frontal",
        body: "Carcaça traseira totalmente fechada com grau IP30 e barras de arrefecimento em L, mantendo a assistência integralmente frontal. Mantém o pó fora do cabinete num edifício que não foi comissionado como espaço limpo.",
      },
    ],
    specTables: [
      {
        title: "Série LHP",
        caption: "Valores publicados pelo fabricante, LAMPRO",
        rows: [
          { parameter: "Pixel pitch", value: "0,9 / 1,2 / 1,5 / 1,8 / 2,5 mm" },
          {
            parameter: "Luminosidade",
            value: "600 nits",
            note: "800 nits a 2,5 mm",
          },
          {
            parameter: "Densidade de pixels",
            value: "160 000 – 1 137 777 px/m²",
          },
          { parameter: "Grau de proteção", value: "IP30" },
          { parameter: "Superfície", value: "GOB" },
          { parameter: "Redundância", value: "Energia e dados" },
          { parameter: "Acesso para assistência", value: "Totalmente frontal" },
        ],
      },
    ],
  },

  /* --- Comercial -------------------------------------------------------- */
  "bnx-ii": {
    tagline: "Montagem livre, forma livre",
    summary:
      "A série da plataforma comercial que faz formas. Quatro pitches em cabinetes que combinam 500 × 1000 mm com tiras de 1000 × 250 mm, todos rotativos, para que o ecrã seja recortado à medida da arquitetura em vez de a arquitetura ser recortada à medida de um retângulo. Especificada para retalho de referência, átrios de hotel e centros de experiência de marca.",
    heroStats: [
      { label: "Pixel pitch", value: "1,5 – 3,9 mm" },
      { label: "Profundidade do cabinete", value: "40 mm" },
      { label: "Luminosidade", value: "600 – 800 nits" },
    ],
    highlights: [
      {
        title: "Montagem mista, cabinetes rotativos",
        body: "Painéis de 500 × 1000 mm e 1000 × 250 mm com extensões de 500 × 500, 500 × 750 e 750 × 250 mm, todos rotativos. Colunas, faixas, envolvimentos e cantos saem de peças de catálogo em vez de uma série de fabrico à medida.",
      },
      {
        title: "Calibração que viaja com o painel",
        body: "Um Flash IC em cada cabinete guarda os seus próprios dados de calibração. Substitua um cabinete anos depois e ele chega já emparelhado, em vez de obrigar a reequilibrar todo o ecrã à volta do novo.",
      },
      {
        title: "Reporta as próprias falhas",
        body: "Deteção de pontos, monitorização de tensão da fonte, deteção de sinal e leitura de temperatura do módulo, opcionais. É a telemetria em que assenta um contrato de assistência, para que um módulo em falha seja um telefonema nosso e não uma reclamação sua.",
      },
    ],
    specTables: [
      {
        title: "Série BNXⅡ",
        caption: "Valores publicados pelo fabricante, LAMPRO",
        rows: [
          { parameter: "Pixel pitch", value: "1,5 / 1,9 / 2,5 / 3,9 mm" },
          { parameter: "Luminosidade", value: "600 – 800 nits" },
          {
            parameter: "Dimensões do cabinete",
            value: "500 × 1000, 1000 × 250 mm",
            note: "mais 500 × 500 / 750, 750 × 250",
          },
          { parameter: "Profundidade do cabinete", value: "40 mm" },
          { parameter: "Construção", value: "Alumínio modular" },
          { parameter: "Calibração", value: "Flash IC, por cabinete" },
          {
            parameter: "Monitorização",
            value: "Opcional",
            note: "pontos, fonte, sinal, temperatura",
          },
        ],
      },
    ],
  },

  "u-natural": {
    tagline: "Desligue o ecrã, ligue a arte",
    summary:
      "Não é um ecrã convencional. O U-Natural é um ecrã-textura da Unilumin: uma superfície nano-ótica acabada em veio de madeira ou mármore que se lê como material de construção decorativo quando está desligada, e como ecrã quando está ligada. Especificado para balcões de receção, paredes divisórias e interiores de hotelaria, onde um retângulo preto na parede é precisamente o que o designer quer evitar.",
    heroStats: [
      { label: "Refletividade", value: "0,5%" },
      { label: "Ângulo de visão", value: "110°" },
      { label: "Dureza da superfície", value: "3H" },
    ],
    highlights: [
      {
        title: "É a parede até ser um ecrã",
        body: "A superfície é acabada como material decorativo (veio de madeira, mármore) para que, desligada, pertença ao interior em vez de o interromper. É esse o argumento todo, e a razão pela qual entra onde um ecrã convencional seria recusado.",
      },
      {
        title: "0,5% de refletividade",
        body: "O processamento nano-ótico mantém a refletividade nos 0,5%, para que uma receção iluminada não transforme a superfície num espelho. É o que faz o material ler-se como material e não como vidro.",
      },
      {
        title: "3H, num espaço onde se toca",
        body: "Classificação de risco 3H numa superfície à altura da mão num átrio ou num restaurante. A questão de durabilidade relevante para este produto não é o clima, são unhas e panos de limpeza.",
      },
    ],
    specTables: [
      {
        title: "U-Natural",
        caption: "Valores publicados pelo fabricante, Unilumin",
        rows: [
          { parameter: "Superfície", value: "Textura nano-ótica" },
          {
            parameter: "Acabamentos",
            value: "Personalizáveis",
            note: "veio de madeira, mármore",
          },
          { parameter: "Refletividade", value: "0,5%" },
          { parameter: "Ângulo de visão", value: "110°" },
          { parameter: "Resistência ao risco", value: "3H" },
          {
            parameter: "Pixel pitch",
            value: "Sob consulta",
            note: "não publicado",
          },
        ],
      },
    ],
  },

  /* --- Aluguer ---------------------------------------------------------- */
  lrs: {
    tagline: "A sua solução descomplicada para aluguer",
    summary:
      "A série de aluguer de uso geral, interior e exterior a partir de uma só plataforma. Cabinetes leves e totalmente modulares que curvam em côncavo ou convexo e fazem um canto redondo de 90°, com a caixa de controlo, a estrutura e o módulo divididos em três secções assistíveis. Construída em torno do relógio da montagem, não da ficha técnica.",
    heroStats: [
      { label: "Pixel pitch", value: "2,6 – 4,8 mm" },
      { label: "Luminosidade exterior", value: "4 500 – 5 000 nits" },
      { label: "Taxa de atualização", value: "3 840 – 7 680 Hz" },
    ],
    highlights: [
      {
        title: "Curvas e cantos sem peças especiais",
        body: "Arcos côncavos e convexos e um canto redondo de 90° saem do cabinete padrão. Um cenário curvo ou uma coluna envolvida é um aluguer de catálogo em vez de um prazo de fabrico.",
      },
      {
        title: "Três secções, três pontos de falha",
        body: "Caixa de controlo, estrutura do cabinete e módulo são assistíveis separadamente. Num palco a reparação é trocar a secção avariada em minutos, não retirar o cabinete da suspensão.",
      },
      {
        title: "Até 7 680 Hz para câmara",
        body: "Trabalho de emissão e IMAG exige uma taxa de atualização que o obturador da câmara não consiga bater. Abaixo de cerca de 3 840 Hz uma câmara capta bandas de varrimento que o olho nunca vê, e é por isso que esta gama começa aí.",
      },
    ],
    specTables: [
      {
        title: "Série LRS",
        caption: "Valores publicados pelo fabricante, LAMPRO",
        rows: [
          {
            parameter: "Pixel pitch, interior",
            value: "2,6 / 2,9 / 3,9 mm",
          },
          {
            parameter: "Pixel pitch, exterior",
            value: "2,9 / 3,9 / 4,8 mm",
          },
          { parameter: "Luminosidade, interior", value: "800 – 1 000 nits" },
          { parameter: "Luminosidade, exterior", value: "4 500 – 5 000 nits" },
          { parameter: "Taxa de atualização", value: "3 840 – 7 680 Hz" },
          {
            parameter: "Dimensão do cabinete",
            value: "500 × 500 mm",
            note: "74,2 mm de profundidade",
          },
          {
            parameter: "Acesso para assistência",
            value: "Frontal e traseiro",
            note: "cabinetes de interior",
          },
          { parameter: "Geometria", value: "Côncavo, convexo, canto 90°" },
        ],
      },
    ],
  },

  "rn-ii": {
    tagline: "Lidera a era P1 do aluguer de interior",
    summary:
      "O extremo de pitch fino da plataforma de aluguer, até 1,5 mm com contraste de 15 000:1 e 96% DCI-P3. Especificada onde um ecrã de aluguer entra em câmara e tem de aguentar como fonte de emissão e não apenas como cenário: lançamentos, galas, produção virtual.",
    heroStats: [
      { label: "Pixel pitch", value: "1,5 – 2,6 mm" },
      { label: "Contraste", value: "15 000:1" },
      { label: "Gama de cor", value: "96% DCI-P3" },
    ],
    highlights: [
      {
        title: "Feito para ser filmado",
        body: "Contraste de 15 000:1 e cobertura de 96% DCI-P3. Em câmara o ecrã é uma fonte de luz dentro do plano, pelo que a gama e o nível de preto decidem se o plano se corrige na pós. Um cenário que não segura os pretos custa tempo de pós em cada take.",
      },
      {
        title: "Sem ferramentas, dos dois lados",
        body: "Módulos magnéticos com manutenção frontal e traseira e uma estrutura reforçada com cantos otimizados para remoção rápida do módulo. Nada numa reparação exige uma caixa de ferramentas no topo de uma escada.",
      },
      {
        title: "17 000 N, com anti-queda",
        body: "Resistência do cabinete classificada em 17 000 N e um esquema de dupla proteção MIP e U-shield. Um cabinete de aluguer é transportado, suspenso e desmontado todas as semanas, e é a classificação estrutural que torna isso sustentável.",
      },
    ],
    specTables: [
      {
        title: "Série RNⅡ",
        caption: "Valores publicados pelo fabricante, LAMPRO",
        rows: [
          { parameter: "Pixel pitch", value: "1,5 / 1,9 / 2,6 mm" },
          { parameter: "Luminosidade", value: "600 / 800 / 1 200 nits" },
          { parameter: "Rácio de contraste", value: "15 000:1" },
          { parameter: "Gama de cor", value: "96% DCI-P3" },
          {
            parameter: "Densidade de pixels",
            value: "até 409 600 px/m²",
            note: "a 1,5 mm",
          },
          { parameter: "Resistência do cabinete", value: "17 000 N" },
          { parameter: "Proteção", value: "MIP + U-shield" },
          {
            parameter: "Acesso para assistência",
            value: "Frontal e traseiro",
            note: "sem ferramentas, magnético",
          },
        ],
      },
    ],
  },

  lrm: {
    tagline: "Proteja os seus espetáculos ao vivo",
    summary:
      "A série de digressão, interior e exterior, com um bloqueio de arco que fixa a curvatura em qualquer ponto entre −15° e +15° e a mantém. A instalação compósita combina painéis de 500 × 500 e 500 × 1000 mm numa só suspensão, pelo que o mesmo stock constrói uma parede de fundo plana e uma bandeira curva.",
    heroStats: [
      { label: "Pixel pitch", value: "2,6 – 4,8 mm" },
      { label: "Bloqueio de arco", value: "−15° a +15°" },
      { label: "Grau de proteção", value: "IP65" },
    ],
    highlights: [
      {
        title: "Curvatura que se define e se fixa",
        body: "Um bloqueio de arco ajustável de −15° a +15°. A curva é um valor repetível em vez de algo que a equipa negoceia com calços, o que é o que torna o mesmo cenário reproduzível de cidade para cidade.",
      },
      {
        title: "Dois tamanhos de painel, uma suspensão",
        body: "Painéis de 500 × 500 e 500 × 1000 mm instalam-se em conjunto, com montagem reta, curva e em canto de 90° no cabinete quadrado. Um só inventário cobre mais desenhos de cenário.",
      },
      {
        title: "IP65 para a data ao ar livre",
        body: "As variantes de exterior são seladas a IP65 com 3 500–4 000 nits. Um palco principal de festival não se adia por causa do tempo, e o ecrã tem de ser especificado com o mesmo pressuposto.",
      },
    ],
    specTables: [
      {
        title: "Série LRM",
        caption: "Valores publicados pelo fabricante, LAMPRO",
        rows: [
          {
            parameter: "Pixel pitch, interior",
            value: "2,6 / 2,9 / 3,9 mm",
          },
          { parameter: "Pixel pitch, exterior", value: "3,9 / 4,8 mm" },
          { parameter: "Luminosidade, interior", value: "700 – 800 nits" },
          { parameter: "Luminosidade, exterior", value: "3 500 – 4 000 nits" },
          {
            parameter: "Grau de proteção",
            value: "IP65",
            note: "variantes de exterior",
          },
          { parameter: "Bloqueio de arco", value: "−15° a +15°" },
          {
            parameter: "Dimensões de painel",
            value: "500 × 500, 500 × 1000 mm",
          },
          { parameter: "Montagem", value: "Reta, curva, canto 90°" },
        ],
      },
    ],
  },

  /* --- DOOH ------------------------------------------------------------- */
  "lx-ii-pro": {
    tagline: "Encaixe perfeito, feito para durar",
    summary:
      "O extremo fino da plataforma de exterior, a 2,97 e 3,91 mm, com grau IP66, para faces lidas do passeio e não da faixa de rodagem. Módulos em alumínio injetado e gestão de cabos protegida contra UV, com montagem mista multiformato para que o ecrã se ajuste ao alçado onde vai ficar.",
    heroStats: [
      { label: "Pixel pitch", value: "2,97 / 3,91 mm" },
      { label: "Luminosidade", value: "até 7 500 nits" },
      { label: "Grau de proteção", value: "IP66" },
    ],
    highlights: [
      {
        title: "Visto de perto, em plena luz do dia",
        body: "Até 7 500 nits abaixo dos 4 mm. Uma face ao nível da rua compete com sol direto sendo lida a poucos metros, e é essa combinação que exclui a maioria dos produtos de exterior.",
      },
      {
        title: "IP66, cablagem incluída",
        body: "Módulos em alumínio injetado com um sistema de gestão de cabos protegido de UV. No Ontário o modo de falha não é a chuva, são anos de sol sobre a bainha de um cabo e um ciclo de gelo-degelo sobre humidade retida.",
      },
      {
        title: "Montagem mista e 3D",
        body: "Vários tamanhos de cabinete montam-se em conjunto, incluindo a geometria de canto usada para 3D sem óculos. É o que permite a um ecrã acompanhar um edifício em vez de ser aparafusado por cima dele.",
      },
    ],
    specTables: [
      {
        title: "Série LXⅡ Pro",
        caption: "Valores publicados pelo fabricante, LAMPRO",
        rows: [
          { parameter: "Pixel pitch", value: "2,97 / 3,91 mm" },
          { parameter: "Luminosidade", value: "até 7 500 nits" },
          { parameter: "Grau de proteção", value: "IP66" },
          { parameter: "Módulo", value: "Alumínio injetado" },
          { parameter: "Gestão de cabos", value: "Protegida de UV" },
          { parameter: "Acesso para assistência", value: "Frontal e traseiro" },
          { parameter: "Montagem", value: "Multiformato, mista" },
        ],
      },
    ],
  },

  "ls-pro": {
    tagline: "Vá em grande, aguente, feito para durar",
    summary:
      "A série de outdoors de grande formato: 6,67 a 10 mm até 10 000 nits, selada a IP66/65 e projetada para ser içada por grua como cabinete único ou como ecrã completo. Especificada para faces de autoestrada e envolvimentos de edifícios, onde o método de instalação conta tanto como a imagem.",
    heroStats: [
      { label: "Pixel pitch", value: "6,67 – 10 mm" },
      { label: "Luminosidade", value: "7 500 – 10 000 nits" },
      { label: "Taxa de atualização", value: "7 680 Hz" },
    ],
    highlights: [
      {
        title: "Dez mil nits, e aguenta",
        body: "7 500–10 000 nits com escala de cinzentos de 14–16 bits. A saída de pico torna a face legível ao meio-dia; a profundidade da escala de cinzentos é o que impede o bandeamento da imagem quando é reduzida para o horário noturno.",
      },
      {
        title: "Içado numa só peça",
        body: "A estrutura é classificada para ser içada como cabinete único ou como ecrã completo. Numa instalação à beira da estrada a janela de grua é a hora cara, e um ecrã que sobe de uma vez é um corte de via mais curto.",
      },
      {
        title: "Selado de forma independente",
        body: "Estrutura estanque de vedação total com grau IP66/65 e cada secção selada independentemente, num cabinete que o fabricante classifica com o dobro da resistência do equivalente convencional.",
      },
    ],
    specTables: [
      {
        title: "Série LS Pro",
        caption: "Valores publicados pelo fabricante, LAMPRO",
        rows: [
          { parameter: "Pixel pitch", value: "6,67 / 8 / 10 mm" },
          { parameter: "Luminosidade", value: "7 500 – 10 000 nits" },
          { parameter: "Taxa de atualização", value: "7 680 Hz" },
          { parameter: "Escala de cinzentos", value: "14 – 16 bits" },
          { parameter: "Grau de proteção", value: "IP66 / IP65" },
          { parameter: "Vedação", value: "Estanque total independente" },
          { parameter: "Instalação", value: "Içável por grua" },
        ],
      },
    ],
  },

  lst: {
    tagline: "A linha de outdoors de volume",
    summary:
      "Uma gama de exterior de pitch largo, de 4,44 a 10 mm em quatro formatos de cabinete, com assistência frontal e traseira e grau IP65. Posicionada como a opção de custo por metro quadrado para redes de publicidade onde a face é lida à distância e o argumento comercial assenta na cobertura.",
    heroStats: [
      { label: "Pixel pitch", value: "4,44 – 10 mm" },
      { label: "Luminosidade", value: "5 500 – 10 000 nits" },
      { label: "Grau de proteção", value: "IP65" },
    ],
    highlights: [
      {
        title: "Quatro formatos de cabinete",
        body: "960 × 640, 960 × 960, 1440 × 640 e 1440 × 960 mm. Um outdoor é dimensionado pela face licenciada e não por um módulo de painel, e quatro formatos desperdiçam menos dessa área.",
      },
      {
        title: "Assistido de qualquer um dos lados",
        body: "Manutenção frontal e traseira, pelo que o método de acesso é decidido pelo local e não pelo produto. Num tapume sem passadiço traseiro, é a questão toda.",
      },
    ],
    specTables: [
      {
        title: "Série LST",
        caption:
          "Ficha de distribuidor, confirmar com uma ficha técnica LAMPRO atual antes de orçamentar",
        rows: [
          { parameter: "Pixel pitch", value: "4,44 / 6,67 / 8 / 10 mm" },
          { parameter: "Luminosidade", value: "5 500 – 10 000 nits" },
          {
            parameter: "Dimensões do cabinete",
            value: "960 × 640, 960 × 960 mm",
            note: "1440 × 640, 1440 × 960",
          },
          { parameter: "Grau de proteção", value: "IP65" },
          { parameter: "Acesso para assistência", value: "Frontal e traseiro" },
        ],
      },
    ],
  },

  lsk: {
    tagline: "Pitch fino de exterior, selado a IP69K",
    summary:
      "A série de exterior de alta densidade, de 2,6 a 5,95 mm, selada a IP69K, um grau escrito para lavagem a alta pressão e alta temperatura, não para o clima. Especificada onde uma face de exterior está próxima do observador e vai ser limpa de forma agressiva durante toda a vigência do contrato.",
    heroStats: [
      { label: "Pixel pitch", value: "2,6 – 5,95 mm" },
      { label: "Luminosidade", value: "5 000 – 6 500 nits" },
      { label: "Grau de proteção", value: "IP69K" },
    ],
    highlights: [
      {
        title: "IP69K, não IP65",
        body: "O IP69K cobre jatos de água a alta pressão e alta temperatura. É um grau de lavagem e não um grau de clima, e é a razão pela qual esta série sobrevive a um regime de manutenção que acabaria por encontrar caminho para dentro de um cabinete IP65 selado.",
      },
      {
        title: "Pitch fino, no exterior",
        body: "Até 2,604 mm com mais de 5 000 nits. Faces de exterior vistas de perto (abrigos de transportes, montras, átrios cobertos) precisam do pitch de um ecrã de interior com a saída de um de exterior.",
      },
    ],
    specTables: [
      {
        title: "Série LSK",
        caption:
          "Ficha de distribuidor, confirmar com uma ficha técnica LAMPRO atual antes de orçamentar",
        rows: [
          {
            parameter: "Pixel pitch",
            value: "2,604 / 2,976 / 3,906 mm",
            note: "4,807, 5,952",
          },
          { parameter: "Luminosidade", value: "5 000 – 6 500 nits" },
          {
            parameter: "Dimensões do cabinete",
            value: "500 × 750, 500 × 1000 mm",
          },
          { parameter: "Grau de proteção", value: "IP69K" },
        ],
      },
    ],
  },
};

export const seriesCopyByLocale = { en, pt };
