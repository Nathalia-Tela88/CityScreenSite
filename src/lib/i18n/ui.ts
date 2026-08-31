/* ---------------------------------------------------------------------------
   UI strings, English and European Portuguese.

   Every visible string that is not product data lives here. The two objects
   are the same shape, which TypeScript enforces via the `Dict` type below — if
   a key is added to `en` and forgotten in `pt`, the build fails rather than
   silently rendering English inside a Portuguese page.

   Portuguese is pt-PT. Technical vocabulary follows the trade: "pixel pitch"
   stays untranslated because that is what Portuguese AV suppliers say, while
   "nits", "IP" and "Hz" are units and never translated.
   --------------------------------------------------------------------------- */

export const en = {
  nav: {
    products: "Products",
    allProducts: "All products",
    professional: "Professional",
    commercial: "Commercial",
    rental: "Rental",
    dooh: "DOOH",
    projectGallery: "Project gallery",
    warranty: "Warranty & service",
    resources: "Resources",
    about: "About us",
    faq: "FAQ",
    contact: "Contact us",
    home: "Home",
    quote: "Request a quote",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    company: "Company",
    themeLabel: "Colour theme",
    themeLight: "Light theme",
    themeDark: "Dark theme",
    languageLabel: "Language",
    homeAria: "home",
  },

  common: {
    specifications: "Specifications",
    fullSpecifications: "Full specifications",
    seeTheRange: "See the range",
    allProjects: "All projects",
    askEngineer: "Ask an engineer",
    selectPlatform: "Select this platform",
    fullPlatformPage: "Full platform page",
    delivers: "Delivers",
    metric: "Metric",
    parameter: "Parameter",
  },

  series: {
    eyebrow: "Series",
    heading: "The models in this platform",
    intro:
      "Each series is tuned for a different job inside the same platform. Tell us the site and we will send the datasheet for the one that fits it.",
    request: "Request the datasheet",
  },

  hero: {
    eyebrow: "Supply · Install · Service · Ontario",
    titleTop: "The whole wall.",
    titleBottom: "One contract.",
    lede: "We engineer, install and service LED display systems across Ontario — structural drawings through final pixel calibration. No subcontractors. No panels that quit in February.",
    playVideo: "Play background video",
    proof: [
      { value: "12", unit: "yrs", label: "Operating in Ontario" },
      { value: "400", unit: "+", label: "Installs commissioned" },
      { value: "4", unit: "hr", label: "Average service response" },
    ],
  },

  applications: {
    eyebrow: "P0.9 mm to P10 mm",
    heading: "A church needs silence. A billboard needs 10,000 nits.",
    body: "We do not sell the same panel to both. Pick the discipline that matches the room and the spec follows from it.",
  },

  specPrimer: {
    eyebrow: "Four numbers",
    heading: "The spec sheet is a set of promises",
    /* The interactive wall. "Pixel pitch" is left untranslated in both
       locales — it is what Portuguese AV suppliers say. */
    pitchLabel: "Pixel pitch",
    /** {d} is the viewing distance in metres. */
    viewingDistance: "Sharp from {d} m back",
    wallHint: "Drag the pitch and watch the grid appear.",
    body: "Understand these four and you will buy the right display — from us or from anyone. Everything else on a datasheet is downstream of them.",
    caption: "Typical specification ranges by application",
    metrics: [
      {
        name: "Pixel pitch",
        unit: "mm",
        meaning:
          "Centre-to-centre distance between LED clusters. It sets how close a viewer can stand before the grid becomes visible — roughly one metre of viewing distance per millimetre of pitch.",
      },
      {
        name: "Brightness",
        unit: "nits",
        meaning:
          "Light the surface produces. A control room fights no daylight and wants less; a roadside face at noon in July needs an order of magnitude more.",
      },
      {
        name: "Refresh rate",
        unit: "Hz",
        meaning:
          "How often the wall redraws. Under 3,840 Hz a broadcast camera picks up scan banding that the naked eye never sees — which is why this number matters even when the room looks fine.",
      },
      {
        name: "Ingress rating",
        unit: "IP",
        meaning:
          "Sealing against dust and water. Anything mounted outdoors in Ontario is specified at IP65 front and rear, because the failure mode is not rain — it is a freeze-thaw cycle on trapped moisture.",
      },
    ],
  },

  scope: {
    eyebrow: "Six stages, one contract",
    heading: "Nobody else to point at when it fails",
    body: "Most LED projects are split across a distributor, a rigging contractor, an electrician and a service company. When something goes wrong, they point at each other. We hold all six stages, so there is one number to call and one company on the hook.",
    stages: [
      {
        title: "Site survey",
        produces: "Survey report",
        body: "We measure the wall, the sightlines and the ambient light, and photograph the service access. The survey is what the price is built on, so it happens before anyone quotes.",
      },
      {
        title: "Structural design",
        produces: "Stamped drawings",
        body: "Secondary steel, wind loading and anchor details, stamped by a Professional Engineer licensed in Ontario. Drawings go to the building's own engineer for sign-off.",
      },
      {
        title: "Supply",
        produces: "Colour-matched batch",
        body: "Cabinets are burned in and colour-matched as a batch at our facility before they ship, so the wall is calibrated as one surface rather than as forty panels.",
      },
      {
        title: "Installation",
        produces: "Commissioned wall",
        body: "Our own crews, our own rigging tickets, our own electricians. Permits, hoarding and the traffic plan where the site needs them.",
      },
      {
        title: "Commissioning",
        produces: "As-built spec pack",
        body: "Final pixel calibration on site under the light the wall will actually live in, plus content handover, CMS training and an as-built spec pack.",
      },
      {
        title: "Service",
        produces: "Response SLA",
        body: "Spares held in Ontario, a four-hour average response, and per-cabinet telemetry that flags a failing module before your audience notices it.",
      },
    ],
  },

  projects: {
    eyebrow: "Windsor to Ottawa",
    heading: "Installed and operational",
    intro:
      "Every one of these was surveyed, engineered, installed and commissioned by the same company that services it today.",
  },

  faq: {
    eyebrow: "Asked on every survey",
    heading: "Direct answers",
    intro: "The five questions our engineers field on almost every site visit.",
    topics: "Topics",
  },

  cta: {
    eyebrow: "Five business days",
    heading: "Send us the site. We will send you a number.",
    body: "Give us the address, the application and the wall you have in mind. You get a stamped proposal with a fixed price and a delivery date inside five business days.",
    orSkip: "Or skip the form",
    orSkipBody:
      "An engineer answers the phone during business hours. No call centre, no qualification script.",
    serviceDesk: "Existing install? Service desk",
  },

  footer: {
    office: "Office",
    direct: "Direct",
    products: "Products",
    company: "Company",
    legal: "Legal",
    rights: "All rights reserved.",
    privacy: "Privacy policy",
    terms: "Terms of service",
    cookies: "Cookies settings",
  },

  /** The four platform pages, all driven by one template. */
  platform: {
    highlightsHeading: "Built around the constraint that actually bites",
    specsEyebrow: "Specifications",
    specsHeading: "The numbers, in full",
    specsBody:
      "Published rather than sent on request. If a figure here does not suit the site, say so and we will tell you what does.",
    applicationsEyebrow: "Typical deployments",
    applicationsHeading: "Where this platform earns its place",
    installsEyebrow: "Built and running",
    installOne: "A recent install",
    installMany: "Recent installs on this platform",
    faqHeading: "What buyers ask about this platform",
    ctaBody:
      "Send the site address, the surface you have in mind and the application. You get a stamped proposal with a fixed price and a delivery date inside five business days.",
  },

  /** One page per series, under /products. */
  seriesPage: {
    requestDatasheet: "Request the datasheet",
    aboutPlatform: "About",
    inPlatform: "A series in the",
    platformWord: "platform.",
    apartEyebrow: "What sets it apart",
    behaviourHeading: "How this series behaves",
    specsOnRequest: "Published on request",
    specsFull: "The numbers, in full",
    specsBodyFull:
      "Figures for this series, as tested. If one of them does not suit the site, say so and we will tell you what does.",
    platformTag: "platform",
    samePlatformEyebrow: "Same platform",
    otherSeries: "The other",
    seriesWord: "series",
    view: "View",
    installsSuffix: "installs",
    specifyPrefix: "Specify",
    ctaBody:
      "Send the site address, the surface you have in mind and the viewing distance. You get the datasheet for this series and a stamped proposal with a fixed price inside five business days.",
    breadcrumb: "Breadcrumb",
    summaryFallback: "A series in the {platform} platform. {summary}",
    specsBodyEnvelope:
      "The figures below are the {platform} platform envelope, not this series in particular. Every series sits somewhere inside it, and the exact numbers for {series} come off its own datasheet — ask and we will send it the same day.",
  },

  productsPage: {
    eyebrow: "Four platforms",
    title: "Every spec, published",
    lede: "We put the full datasheet on the page rather than behind a form. Shortlist on the five parameters below, then read the platform that fits.",
    statPitch: "Pitch range",
    statPeak: "Peak output",
    statWarranty: "Warranty",
    pickEyebrow: "Pick a platform",
    pickHeading: "Which one is yours?",
    pickBody:
      "Choose the discipline that matches the room. Your selection carries straight through to the quote form, so you never have to describe it twice.",
    compareEyebrow: "Side by side",
    compareHeading: "Narrow it down in one table",
    compareCaption:
      "Platform comparison across the five shortlisting parameters",
    seriesLabel: "Series",
    rows: {
      pitch: "Pixel pitch",
      brightness: "Brightness",
      ingress: "Ingress rating",
      refresh: "Refresh rate",
      service: "Service access",
    },
    ctaHeading: "Not sure which platform the site needs?",
    ctaBody:
      "Send the address, the viewing distance and whether it is indoors or out. We will tell you which of the four fits and what it costs — including the ones where the answer is that you do not need us.",
    parameter: "Parameter",
    fullPlatformPage: "Full platform page",
    compareValues: {
      professional: {
        pitch: "0.9 – 2.5 mm",
        brightness: "600 – 800 nits",
        ingress: "IP30",
        refresh: "3,840 Hz",
        service: "Full front",
      },
      commercial: {
        pitch: "1.5 – 3.9 mm",
        brightness: "600 – 800 nits",
        ingress: "On request",
        refresh: "On request",
        service: "Front",
      },
      rental: {
        pitch: "1.5 – 4.8 mm",
        brightness: "600 – 5,000 nits",
        ingress: "IP65 outdoor",
        refresh: "3,840 – 7,680 Hz",
        service: "Front and rear",
      },
      dooh: {
        pitch: "2.6 – 10 mm",
        brightness: "5,000 – 10,000 nits",
        ingress: "IP65 – IP69K",
        refresh: "up to 7,680 Hz",
        service: "Front and rear",
      },
    },
  },

  galleryPage: {
    eyebrow: "Windsor to Ottawa",
    title: "Installed, commissioned, still running",
    lede: "Every project here was surveyed, engineered, built and commissioned by the same company that services it today. The specs listed are the as-built figures, not the brochure ones.",
    /** Trails the shown / total readout above the index. */
    countLabel: "Projects",
    ctaHeading: "Your site is the next one on this page",
    ctaBody:
      "Send the address and the application. We will survey it, tell you honestly whether it works, and quote it with a fixed price and a delivery date.",
  },

  faqPage: {
    eyebrow: "Thirty answers",
    title: "Everything we get asked, written down",
    lede: "Grouped by the stage of the job the question actually comes up in. If yours is not here, an engineer will answer it on the phone.",
    ctaHeading: "Still not answered?",
    ctaBody:
      "An engineer picks up the phone during business hours, and will tell you if your site is a bad fit before you spend anything.",
  },

  aboutPage: {
    eyebrow: "Twelve years in Ontario",
    title: "We fix the problem we saw in the field",
    lede: "We started CityScreen because we were tired of pulling cheap offshore panels off walls. A display is a capital asset, not a disposable screen — so we engineer every install for the site, handle the permit, fabricate the steel, and stay on call for the life of the product.",
    principlesEyebrow: "How we work",
    principlesHeading: "Four things we will not compromise on",
    principles: [
      {
        title: "We measure the wall before we spec the panel",
        body: "Every install starts with a site visit. We check power, data, structure and sightlines before we quote a single module. A quote written from a photograph is a guess with a price on it.",
      },
      {
        title: "The steel is not where you save money",
        body: "A display is only as good as what it hangs on. Our P.Eng stamps the structural drawings, our Red Seal fabricator builds the frame, and we inspect the formwork before the pour.",
      },
      {
        title: "No subcontractors on core work",
        body: "Structural engineering, fabrication, installation and commissioning stay in-house. Sub out any one of them and the accountability goes with it.",
      },
      {
        title: "A display is a capital asset",
        body: "We started CityScreen because we were tired of pulling cheap offshore panels off walls. Ten-year thinking changes what you specify, and what you refuse to.",
      },
    ],
    scaleEyebrow: "Scale",
    scaleHeading: "Numbers that matter to a facility manager",
    scaleBody:
      "We measure our work in installs completed and service calls closed. Here is what that looks like across Ontario.",
    numbers: [
      { value: "12+", label: "Years serving Ontario" },
      { value: "400+", label: "Installs completed" },
      { value: "4 hr", label: "Average service response" },
      { value: "99%", label: "Warranty fulfilment rate" },
    ],
    teamEyebrow: "Six people, one building",
    teamHeading: "The people who will actually be on your site",
    teamBody:
      "Engineers, project managers and technicians who have built displays across Ontario. You will meet most of them before handover.",
    team: [
      {
        name: "Michael Chen",
        role: "Structural & electrical design",
        body: "Fifteen years in structural and electrical design for digital signage. Stamps every permit drawing that leaves this office.",
      },
      {
        name: "Sarah Okonkwo",
        role: "Project delivery",
        body: "Manages installs from site walk to handover. Former AV integration lead for stadium and arena projects across Canada.",
      },
      {
        name: "David Tremblay",
        role: "Fabrication",
        body: "Red Seal welder and fabricator. Builds every mounting structure to the millimetre. No field modifications required.",
      },
      {
        name: "Priya Kapoor",
        role: "Service desk & parts",
        body: "Runs the service desk and parts inventory. Average response time under four hours for critical failures.",
      },
      {
        name: "James O'Reilly",
        role: "Commissioning",
        body: "Commissioned over 200 displays. Handles calibration, networking and content management training on site.",
      },
      {
        name: "Leila Ahmadi",
        role: "Permits & approvals",
        body: "Navigates municipal approvals across Ontario. Knows the difference between a variance and a minor revision.",
      },
    ],
    hiringHeading: "We’re hiring",
    hiringBody:
      "Looking for technicians and project coordinators who understand LED and deadlines.",
    hiringCta: "Send a résumé",
    dealerEyebrow: "Factory-trained, not resold",
    dealerHeading:
      "Authorised dealer and certified installer across every line we sell",
    dealerBody:
      "We hold direct partnerships with the manufacturers and the certifications that require factory training — not just a reseller agreement. It is the difference between someone who can order the part and someone who can diagnose why it failed.",
    ctaHeading: "Come and see the calibration bay",
    ctaBody:
      "We burn in and colour-match every batch before it ships. If you are specifying a wall, it is worth an hour of your time to watch that happen.",
  },

  contactPage: {
    eyebrow: "Five business days",
    title: "Send us the site",
    lede: "Give us the address, the application and roughly the surface you have in mind. You get back a stamped proposal with a fixed price and a delivery date — not a brochure and a follow-up call.",
    loadingForm: "Loading form…",
    reachEyebrow: "Reach us directly",
    officeLabel: "Office",
    hours:
      "Monday to Friday, 07:00 – 17:00 ET. Service line runs 24/7 for active events and monitored installs.",
    whereEyebrow: "Where to send what",
    routes: [
      {
        label: "New project",
        body: "Use the form. The more of it you fill in, the closer the first number is to the final one.",
      },
      {
        label: "Existing install, something is wrong",
        body: "Call the service desk directly. Have the site address ready and we will pull the telemetry while you talk.",
      },
      {
        label: "Trade and cross-rental",
        body: "Availability confirmed within 24 hours. Tell us the dates, the pitch and the surface area.",
      },
    ],
    nextEyebrow: "What happens next",
    nextHeading: "Three steps, no chasing",
    steps: [
      {
        n: "01",
        title: "We read it",
        body: "An engineer, not a sales coordinator. Usually the same working day.",
      },
      {
        n: "02",
        title: "We survey",
        body: "A site visit to measure structure, power, data and ambient light. Report inside three business days.",
      },
      {
        n: "03",
        title: "We quote",
        body: "A stamped proposal with a fixed price and a delivery date. Five business days from the survey.",
      },
    ],
    faqEyebrow: "Before you send it",
    faqHeading: "What we need, and what you get back",
  },

  resourcesPage: {
    eyebrow: "Written by the engineers",
    title: "Technical knowledge for Ontario",
    lede: "Straightforward guides from the people who specify, stamp and commission these systems. Written so you can hold any supplier to them, including us.",
    minutesSuffix: "min",
    articles: [
      {
        title: "Pixel pitch and viewing distance, explained simply",
        topic: "Specs",
        minutes: "4",
        summary:
          "Why the rule of thumb is one metre of viewing distance per millimetre of pitch, where that rule breaks down, and how to test it on your own site with a printed sheet before you spend anything.",
      },
      {
        title:
          "Understanding nits: why raw brightness matters less than you think",
        topic: "Guides",
        minutes: "6",
        summary:
          "Contrast against ambient light — not peak output — is what makes a roadside face legible at noon. What to ask a supplier for instead of a headline nit figure.",
      },
      {
        title: "A practical guide to IP ratings for LED",
        topic: "Maintenance",
        minutes: "5",
        summary:
          "What the two digits actually mean, why front and rear ratings differ, and why the failure mode in Ontario is a freeze-thaw cycle on trapped moisture rather than rain.",
      },
      {
        title: "Sizing the electrical service for a digital billboard",
        topic: "Engineering",
        minutes: "7",
        summary:
          "Average draw versus full-white peak, how to read a per-square-metre figure, and the load calculation your electrician will ask for before they size the panel.",
      },
      {
        title: "The Ontario permit timeline, stage by stage",
        topic: "Permits",
        minutes: "8",
        summary:
          "Municipal sign by-laws, when the MTO becomes involved, what a minor variance costs you in weeks, and the site conditions that mean the answer is simply no.",
      },
      {
        title: "Reading an LED datasheet without being sold to",
        topic: "Guides",
        minutes: "6",
        summary:
          "The figures that are load-bearing, the ones that are marketing, and the three questions that separate a serious supplier from a reseller with a catalogue.",
      },
    ],
    note: "Articles are published as they are written. Ask the office for a draft if you need one before it goes up.",
    specsEyebrow: "No form, no gate",
    specsHeading: "Full specifications for every platform",
    specsBody:
      "The complete datasheet for each family is published on its own page. Nothing sits behind an email capture.",
    ctaHeading: "Want this applied to your site?",
    ctaBody:
      "The guides get you to the right question. A survey gets you the answer — measured, stamped and priced.",
  },

  warrantyPage: {
    eyebrow: "Four-hour average response",
    title: "We do not disappear after the install",
    lede: "A CityScreen technician answers your call from our Ontario office. We keep parts in stock here, and we stock modules for every system we have ever installed — including the ones we stopped selling years ago.",
    stats: [
      { label: "Parts & labour", value: "5 years" },
      { label: "Average response", value: "4 hours" },
      { label: "Warranty fulfilment", value: "99%" },
    ],
    callDesk: "Call the service desk",
    promisesEyebrow: "What you get",
    promisesHeading: "Support from the people who built it",
    promises: [
      {
        title: "Technical support",
        body: "Phone and remote diagnostics from technicians who know your specific installation, because they commissioned it. We built it, we support it.",
      },
      {
        title: "Parts held in Ontario",
        body: "Spare modules, power supplies and receiving cards for every system we have ever installed sit on a shelf here — not in a warehouse overseas on a twelve-week lead time.",
      },
      {
        title: "Our own technicians",
        body: "A CityScreen technician in a CityScreen vehicle arrives at your site. We do not subcontract service, from Windsor to Ottawa and north to Timmins.",
      },
      {
        title: "Per-cabinet telemetry",
        body: "Monitored systems report temperature, fan health and pixel faults back to us. On most contracts we call you about a failing module before you notice it.",
      },
    ],
    stepsEyebrow: "Five steps",
    stepsHeading: "How a service call actually runs",
    stepsBody: "From your first call to a closed ticket and a written report.",
    steps: [
      {
        n: "01",
        title: "Contact the desk",
        body: "Call or email the Ontario service team directly. No ticket portal, no offshore first line, no script.",
      },
      {
        n: "02",
        title: "Remote diagnosis",
        body: "We pull the system logs and per-cabinet telemetry while you are still on the phone. Most faults are identified before anyone gets in a vehicle.",
      },
      {
        n: "03",
        title: "Parts pulled",
        body: "The replacement module, PSU or receiving card comes off our own shelf and goes in the truck the same day.",
      },
      {
        n: "04",
        title: "On-site repair",
        body: "Four-hour average response on business days, same-day on critical outdoor failures. Front-service platforms are repaired without dropping the wall.",
      },
      {
        n: "05",
        title: "A full report",
        body: "You receive documentation of the fault, the repair and a system health check. No mystery, no loose ends.",
      },
    ],
    compareEyebrow: "Like for like",
    compareHeading: "What the cheaper quote leaves out",
    compareBody:
      "The panel price is rarely the difference. This is where the gap usually shows up, three years in.",
    compareCaption:
      "CityScreen compared with a typical offshore panel supply",
    colParameter: "Parameter",
    colOffshore: "Offshore panel supply",
    comparison: [
      {
        parameter: "Warranty length",
        cityscreen: "5 years, parts and labour",
        offshore: "1 year, parts only",
      },
      {
        parameter: "Parts and labour included",
        cityscreen: "Both, for the full term",
        offshore: "Parts shipped, labour billed",
      },
      {
        parameter: "Local parts inventory",
        cityscreen: "Held in Ontario",
        offshore: "Ordered from overseas",
      },
      {
        parameter: "On-site service",
        cityscreen: "Our own technicians",
        offshore: "Local subcontractor, if available",
      },
      {
        parameter: "Permits and engineering",
        cityscreen: "In-house P.Eng, included",
        offshore: "Your responsibility",
      },
      {
        parameter: "Typical response",
        cityscreen: "4 hours, business days",
        offshore: "Next available shipment",
      },
    ],
    faqEyebrow: "Service questions",
    faqHeading: "Warranty and service, answered",
    faqIntro:
      "Direct answers about our warranty and service commitment across Ontario.",
    ctaHeading: "Something on the wall is out?",
    ctaBody:
      "Call the service desk with the site address and what you are seeing. If it is one of ours we will already have the telemetry open by the time you finish describing it.",
  },

  /** The lead-capture form on /contact-us. */
  form: {
    fullName: "Full name",
    fullNamePlaceholder: "Dana Whitfield",
    workEmail: "Work email",
    workEmailPlaceholder: "dana@northfacilities.ca",
    company: "Company",
    companyPlaceholder: "Northgate Facilities",
    location: "Project location",
    locationPlaceholder: "Mississauga, ON",
    projectType: "Project type",
    projectTypePlaceholder: "Select the discipline",
    carriedOver:
      "Carried over from your selection — change it here if it is wrong.",
    screenSize: "Estimated screen size",
    screenSizeAria: "Estimated screen size in square metres",
    blueprints: "Architectural blueprints",
    dropHere: "Drop drawings here or",
    browse: "browse",
    fileHint: "DWG · DXF · RVT · IFC · PDF · ZIP — max 25 MB each",
    removeFile: "Remove {name}",
    brief: "Project brief",
    optional: "(optional)",
    briefPlaceholder:
      "Surface, mounting condition, viewing distance, content strategy, target commissioning date…",
    submit: "Submit project brief",
    submitting: "Transmitting brief",
    disclaimer:
      "Submissions are reviewed by an applications engineer. Drawings are held under NDA and are never shared outside the specification team.",
    successHeading: "Brief received.",
    successBody:
      "An applications engineer will review the specification and respond within one business day with a pitch recommendation and indicative build cost.",
    successAgain: "Submit another brief",
    errors: {
      name: "Enter your full name",
      email: "Enter a valid work email",
      company: "Enter your company",
      location: "Enter the project location",
      projectType: "Select a project type",
      fileFormat: "{name} is not an accepted format",
      fileSize: "{name} exceeds the 25 MB limit",
    },
  },
};

// Deliberately not `as const`: that would infer each English string as its own
// literal type, and the Portuguese object could then never satisfy it. Plain
// inference gives `string`, which still enforces that both objects have exactly
// the same keys and shape.
export type Dict = typeof en;

export const pt: Dict = {
  nav: {
    products: "Produtos",
    allProducts: "Todos os produtos",
    professional: "Profissional",
    commercial: "Comercial",
    rental: "Aluguer",
    dooh: "DOOH",
    projectGallery: "Projetos",
    warranty: "Assistência",
    resources: "Recursos",
    about: "Sobre nós",
    faq: "FAQ",
    contact: "Contactos",
    home: "Início",
    quote: "Pedir orçamento",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    company: "Empresa",
    themeLabel: "Tema de cor",
    themeLight: "Tema claro",
    themeDark: "Tema escuro",
    languageLabel: "Idioma",
    homeAria: "início",
  },

  common: {
    specifications: "Especificações",
    fullSpecifications: "Especificações completas",
    seeTheRange: "Ver a gama",
    allProjects: "Todos os projetos",
    askEngineer: "Falar com um engenheiro",
    selectPlatform: "Escolher esta plataforma",
    fullPlatformPage: "Página completa da plataforma",
    delivers: "Entrega",
    metric: "Métrica",
    parameter: "Parâmetro",
  },

  series: {
    eyebrow: "Séries",
    heading: "Os modelos desta plataforma",
    intro:
      "Cada série é afinada para uma função diferente dentro da mesma plataforma. Diga-nos o local e enviamos a ficha técnica da que lhe serve.",
    request: "Pedir a ficha técnica",
  },

  hero: {
    eyebrow: "Fornecimento · Instalação · Assistência · Ontário",
    titleTop: "A parede inteira.",
    titleBottom: "Um só contrato.",
    lede: "Projetamos, instalamos e assistimos sistemas de ecrãs LED em todo o Ontário — do desenho estrutural à calibração final de píxel. Sem subcontratados. Sem painéis que desistem em fevereiro.",
    playVideo: "Reproduzir vídeo de fundo",
    proof: [
      { value: "12", unit: "anos", label: "A operar no Ontário" },
      { value: "400", unit: "+", label: "Instalações concluídas" },
      { value: "4", unit: "h", label: "Resposta média de assistência" },
    ],
  },

  applications: {
    eyebrow: "P0,9 mm a P10 mm",
    heading: "Uma igreja precisa de silêncio. Um outdoor precisa de 10 000 nits.",
    body: "Não vendemos o mesmo painel a ambos. Escolha a disciplina que corresponde ao espaço e a especificação decorre daí.",
  },

  specPrimer: {
    eyebrow: "Quatro números",
    pitchLabel: "Pixel pitch",
    viewingDistance: "Nítido a partir de {d} m",
    wallHint: "Arraste o pitch e veja a grelha aparecer.",
    heading: "A ficha técnica é um conjunto de promessas",
    body: "Perceba estes quatro e comprará o ecrã certo — connosco ou com qualquer outro. Tudo o resto numa ficha técnica decorre deles.",
    caption: "Intervalos típicos de especificação por aplicação",
    metrics: [
      {
        name: "Pixel pitch",
        unit: "mm",
        meaning:
          "Distância entre centros de dois grupos de LED. Define a que distância mínima se pode estar antes de a grelha ficar visível — sensivelmente um metro de distância por cada milímetro de pitch.",
      },
      {
        name: "Luminosidade",
        unit: "nits",
        meaning:
          "Luz que a superfície produz. Uma sala de controlo não combate luz natural e quer menos; uma face para a estrada ao meio-dia em julho precisa de uma ordem de grandeza acima.",
      },
      {
        name: "Taxa de atualização",
        unit: "Hz",
        meaning:
          "Frequência com que a parede se redesenha. Abaixo de 3 840 Hz uma câmara de televisão capta bandas de varrimento que o olho nunca vê — daí este número importar mesmo quando a sala parece bem.",
      },
      {
        name: "Grau de proteção",
        unit: "IP",
        meaning:
          "Vedação contra pó e água. Tudo o que é montado no exterior no Ontário é especificado a IP65 à frente e atrás, porque o modo de falha não é a chuva — é o ciclo de gelo e degelo sobre humidade retida.",
      },
    ],
  },

  scope: {
    eyebrow: "Seis fases, um contrato",
    heading: "Ninguém para apontar o dedo quando falha",
    body: "A maioria dos projetos LED reparte-se por um distribuidor, um montador, um eletricista e uma empresa de assistência. Quando algo corre mal, apontam uns para os outros. Nós asseguramos as seis fases, por isso há um só número para ligar e uma só empresa responsável.",
    stages: [
      {
        title: "Levantamento no local",
        produces: "Relatório de levantamento",
        body: "Medimos a parede, as linhas de visão e a luz ambiente, e fotografamos os acessos para assistência. O levantamento é a base do preço, por isso acontece antes de qualquer orçamento.",
      },
      {
        title: "Projeto estrutural",
        produces: "Desenhos carimbados",
        body: "Estrutura secundária, cargas de vento e detalhes de fixação, carimbados por um Engenheiro licenciado no Ontário. Os desenhos seguem para o engenheiro do próprio edifício para aprovação.",
      },
      {
        title: "Fornecimento",
        produces: "Lote com cor calibrada",
        body: "Os módulos são testados em contínuo e calibrados em cor como lote nas nossas instalações antes de expedir, para que a parede seja calibrada como uma superfície e não como quarenta painéis.",
      },
      {
        title: "Instalação",
        produces: "Parede em serviço",
        body: "Equipas nossas, certificações de montagem nossas, eletricistas nossos. Licenças, tapumes e plano de trânsito onde a obra o exigir.",
      },
      {
        title: "Comissionamento",
        produces: "Dossiê técnico final",
        body: "Calibração final de píxel no local, sob a luz em que a parede vai realmente viver, mais entrega de conteúdos, formação no CMS e um dossiê técnico do executado.",
      },
      {
        title: "Assistência",
        produces: "SLA de resposta",
        body: "Peças em stock no Ontário, resposta média de quatro horas e telemetria por módulo que sinaliza uma falha antes de o seu público reparar nela.",
      },
    ],
  },

  projects: {
    eyebrow: "De Windsor a Otava",
    heading: "Instalado e a funcionar",
    intro:
      "Cada um destes foi levantado, projetado, instalado e comissionado pela mesma empresa que hoje lhe faz a assistência.",
  },

  faq: {
    eyebrow: "Perguntado em cada levantamento",
    heading: "Respostas diretas",
    intro:
      "As cinco perguntas que os nossos engenheiros ouvem em quase todas as visitas.",
    topics: "Temas",
  },

  cta: {
    eyebrow: "Cinco dias úteis",
    heading: "Envie-nos o local. Devolvemos-lhe um número.",
    body: "Dê-nos a morada, a aplicação e a parede que tem em mente. Recebe uma proposta carimbada, com preço fixo e data de entrega, em cinco dias úteis.",
    orSkip: "Ou dispense o formulário",
    orSkipBody:
      "Um engenheiro atende o telefone em horário de expediente. Sem call center, sem guião de qualificação.",
    serviceDesk: "Já tem instalação? Assistência",
  },

  footer: {
    office: "Escritório",
    direct: "Contacto direto",
    products: "Produtos",
    company: "Empresa",
    legal: "Legal",
    rights: "Todos os direitos reservados.",
    privacy: "Política de privacidade",
    terms: "Termos de serviço",
    cookies: "Definições de cookies",
  },

  platform: {
    highlightsHeading: "Construído em torno da restrição que realmente pesa",
    specsEyebrow: "Especificações",
    specsHeading: "Os números, na íntegra",
    specsBody:
      "Publicados, e não enviados a pedido. Se algum valor não servir ao local, diga-nos e indicamos-lhe o que serve.",
    applicationsEyebrow: "Aplicações típicas",
    applicationsHeading: "Onde esta plataforma faz sentido",
    installsEyebrow: "Construído e a funcionar",
    installOne: "Uma instalação recente",
    installMany: "Instalações recentes nesta plataforma",
    faqHeading: "O que os clientes perguntam sobre esta plataforma",
    ctaBody:
      "Envie a morada do local, a superfície que tem em mente e a aplicação. Recebe uma proposta carimbada, com preço fixo e data de entrega, em cinco dias úteis.",
  },

  seriesPage: {
    requestDatasheet: "Pedir a ficha técnica",
    aboutPlatform: "Sobre",
    inPlatform: "Uma série da plataforma",
    platformWord: ".",
    apartEyebrow: "O que a distingue",
    behaviourHeading: "Como se comporta esta série",
    specsOnRequest: "Disponíveis a pedido",
    specsFull: "Os números, na íntegra",
    specsBodyFull:
      "Valores desta série, tal como ensaiados. Se algum não servir ao local, diga-nos e indicamos-lhe o que serve.",
    platformTag: "plataforma",
    samePlatformEyebrow: "Mesma plataforma",
    otherSeries: "As outras séries",
    seriesWord: "",
    view: "Ver",
    installsSuffix: "instalações",
    specifyPrefix: "Especificar",
    ctaBody:
      "Envie a morada do local, a superfície que tem em mente e a distância de visualização. Recebe a ficha técnica desta série e uma proposta carimbada com preço fixo em cinco dias úteis.",
    breadcrumb: "Navegação estrutural",
    summaryFallback: "Uma série da plataforma {platform}. {summary}",
    specsBodyEnvelope:
      "Os valores abaixo correspondem ao envelope da plataforma {platform}, não a esta série em particular. Cada série situa-se algures dentro dele, e os números exatos da {series} constam da sua própria ficha técnica — peça-a e enviamo-la no mesmo dia.",
  },

  productsPage: {
    eyebrow: "Quatro plataformas",
    title: "Todas as especificações, publicadas",
    lede: "Colocamos a ficha técnica completa na página, em vez de a esconder atrás de um formulário. Faça a triagem pelos cinco parâmetros abaixo e leia depois a plataforma que serve.",
    statPitch: "Intervalo de pitch",
    statPeak: "Saída de pico",
    statWarranty: "Garantia",
    pickEyebrow: "Escolha uma plataforma",
    pickHeading: "Qual é a sua?",
    pickBody:
      "Escolha a disciplina que corresponde ao espaço. A sua escolha segue diretamente para o formulário de orçamento, para não ter de a descrever duas vezes.",
    compareEyebrow: "Lado a lado",
    compareHeading: "Reduza as opções numa só tabela",
    compareCaption:
      "Comparação de plataformas pelos cinco parâmetros de triagem",
    seriesLabel: "Séries",
    rows: {
      pitch: "Pixel pitch",
      brightness: "Luminosidade",
      ingress: "Grau de proteção",
      refresh: "Taxa de atualização",
      service: "Acesso para assistência",
    },
    ctaHeading: "Não tem a certeza de qual a plataforma para o local?",
    ctaBody:
      "Envie a morada, a distância de visualização e se é interior ou exterior. Dizemos-lhe qual das quatro serve e quanto custa — incluindo os casos em que a resposta é que não precisa de nós.",
    parameter: "Parâmetro",
    fullPlatformPage: "Página completa da plataforma",
    compareValues: {
      professional: {
        pitch: "0,9 – 2,5 mm",
        brightness: "600 – 800 nits",
        ingress: "IP30",
        refresh: "3 840 Hz",
        service: "Totalmente frontal",
      },
      commercial: {
        pitch: "1,5 – 3,9 mm",
        brightness: "600 – 800 nits",
        ingress: "Sob consulta",
        refresh: "Sob consulta",
        service: "Frontal",
      },
      rental: {
        pitch: "1,5 – 4,8 mm",
        brightness: "600 – 5 000 nits",
        ingress: "IP65 no exterior",
        refresh: "3 840 – 7 680 Hz",
        service: "Frontal e traseiro",
      },
      dooh: {
        pitch: "2,6 – 10 mm",
        brightness: "5 000 – 10 000 nits",
        ingress: "IP65 – IP69K",
        refresh: "até 7 680 Hz",
        service: "Frontal e traseiro",
      },
    },
  },

  galleryPage: {
    eyebrow: "De Windsor a Otava",
    title: "Instalado, comissionado, ainda a funcionar",
    lede: "Cada projeto aqui apresentado foi levantado, projetado, construído e comissionado pela mesma empresa que hoje lhe presta assistência. As especificações indicadas são os valores reais da obra, não os do catálogo.",
    countLabel: "Projetos",
    ctaHeading: "O seu local é o próximo desta página",
    ctaBody:
      "Envie a morada e a aplicação. Fazemos o levantamento, dizemos-lhe honestamente se resulta e orçamentamos com preço fixo e data de entrega.",
  },

  faqPage: {
    eyebrow: "Trinta respostas",
    title: "Tudo o que nos perguntam, por escrito",
    lede: "Agrupadas pela fase da obra em que a pergunta surge realmente. Se a sua não estiver aqui, um engenheiro responde-lhe ao telefone.",
    ctaHeading: "Continua sem resposta?",
    ctaBody:
      "Um engenheiro atende o telefone durante o horário de expediente e dir-lhe-á se o seu local não é adequado antes de gastar seja o que for.",
  },

  aboutPage: {
    eyebrow: "Doze anos no Ontário",
    title: "Resolvemos o problema que vimos no terreno",
    lede: "Criámos a CityScreen porque estávamos fartos de retirar painéis baratos importados das paredes. Um ecrã é um ativo de capital, não um monitor descartável — por isso projetamos cada instalação para o local, tratamos do licenciamento, fabricamos a estrutura e ficamos disponíveis durante toda a vida útil do produto.",
    principlesEyebrow: "Como trabalhamos",
    principlesHeading: "Quatro coisas em que não abdicamos",
    principles: [
      {
        title: "Medimos a parede antes de especificar o painel",
        body: "Cada instalação começa com uma visita ao local. Verificamos energia, dados, estrutura e linhas de visão antes de orçamentar um único módulo. Um orçamento feito a partir de uma fotografia é um palpite com um preço em cima.",
      },
      {
        title: "A estrutura não é onde se poupa dinheiro",
        body: "Um ecrã vale o que vale aquilo onde está suspenso. O nosso engenheiro carimba os desenhos estruturais, o nosso serralheiro certificado constrói a estrutura e inspecionamos a cofragem antes da betonagem.",
      },
      {
        title: "Sem subcontratados no trabalho essencial",
        body: "Engenharia estrutural, fabrico, instalação e comissionamento ficam em casa. Subcontrate qualquer um deles e a responsabilidade vai com ele.",
      },
      {
        title: "Um ecrã é um ativo de capital",
        body: "Criámos a CityScreen porque estávamos fartos de retirar painéis baratos importados das paredes. Pensar a dez anos muda aquilo que se especifica — e aquilo que se recusa.",
      },
    ],
    scaleEyebrow: "Dimensão",
    scaleHeading: "Números que interessam a um gestor de instalações",
    scaleBody:
      "Medimos o nosso trabalho em instalações concluídas e chamadas de assistência encerradas. É isto que isso representa em todo o Ontário.",
    numbers: [
      { value: "12+", label: "Anos ao serviço do Ontário" },
      { value: "400+", label: "Instalações concluídas" },
      { value: "4 h", label: "Resposta média de assistência" },
      { value: "99%", label: "Taxa de cumprimento da garantia" },
    ],
    teamEyebrow: "Seis pessoas, um edifício",
    teamHeading: "As pessoas que vão estar mesmo no seu local",
    teamBody:
      "Engenheiros, gestores de projeto e técnicos que construíram ecrãs por todo o Ontário. Vai conhecer a maioria antes da entrega.",
    team: [
      {
        name: "Michael Chen",
        role: "Projeto estrutural e elétrico",
        body: "Quinze anos em projeto estrutural e elétrico para sinalização digital. Carimba todos os desenhos de licenciamento que saem deste escritório.",
      },
      {
        name: "Sarah Okonkwo",
        role: "Execução de projeto",
        body: "Gere as instalações desde a visita ao local até à entrega. Ex-responsável de integração AV em projetos de estádios e arenas por todo o Canadá.",
      },
      {
        name: "David Tremblay",
        role: "Fabrico",
        body: "Soldador e serralheiro certificado. Constrói cada estrutura de fixação ao milímetro. Sem necessidade de alterações em obra.",
      },
      {
        name: "Priya Kapoor",
        role: "Assistência e peças",
        body: "Gere o serviço de assistência e o stock de peças. Tempo médio de resposta inferior a quatro horas em falhas críticas.",
      },
      {
        name: "James O'Reilly",
        role: "Comissionamento",
        body: "Comissionou mais de 200 ecrãs. Trata da calibração, das redes e da formação em gestão de conteúdos no local.",
      },
      {
        name: "Leila Ahmadi",
        role: "Licenciamento e aprovações",
        body: "Trata das aprovações municipais em todo o Ontário. Sabe a diferença entre uma exceção e uma revisão menor.",
      },
    ],
    hiringHeading: "Estamos a recrutar",
    hiringBody:
      "Procuramos técnicos e coordenadores de projeto que percebam de LED e de prazos.",
    hiringCta: "Enviar currículo",
    dealerEyebrow: "Formação de fábrica, não revenda",
    dealerHeading:
      "Revendedor autorizado e instalador certificado em todas as linhas que vendemos",
    dealerBody:
      "Temos parcerias diretas com os fabricantes e as certificações que exigem formação de fábrica — não apenas um contrato de revenda. É a diferença entre quem sabe encomendar a peça e quem sabe diagnosticar porque falhou.",
    ctaHeading: "Venha conhecer a bancada de calibração",
    ctaBody:
      "Fazemos o burn-in e a correspondência de cor de cada lote antes de expedir. Se está a especificar um ecrã, vale a pena uma hora do seu tempo para ver isso acontecer.",
  },

  contactPage: {
    eyebrow: "Cinco dias úteis",
    title: "Envie-nos o local",
    lede: "Dê-nos a morada, a aplicação e aproximadamente a superfície que tem em mente. Recebe de volta uma proposta carimbada com preço fixo e data de entrega — não um catálogo e uma chamada de seguimento.",
    loadingForm: "A carregar o formulário…",
    reachEyebrow: "Fale connosco diretamente",
    officeLabel: "Escritório",
    hours:
      "Segunda a sexta, 07:00 – 17:00 ET. A linha de assistência funciona 24 horas por dia para eventos ativos e instalações monitorizadas.",
    whereEyebrow: "Para onde enviar o quê",
    routes: [
      {
        label: "Novo projeto",
        body: "Use o formulário. Quanto mais o preencher, mais próximo o primeiro número fica do final.",
      },
      {
        label: "Instalação existente, algo está mal",
        body: "Ligue diretamente para a assistência. Tenha a morada do local à mão e consultamos a telemetria enquanto fala.",
      },
      {
        label: "Revenda e aluguer entre empresas",
        body: "Disponibilidade confirmada em 24 horas. Diga-nos as datas, o pitch e a área de superfície.",
      },
    ],
    nextEyebrow: "O que acontece a seguir",
    nextHeading: "Três passos, sem andar atrás de nós",
    steps: [
      {
        n: "01",
        title: "Lemos",
        body: "Um engenheiro, não um coordenador comercial. Normalmente no mesmo dia útil.",
      },
      {
        n: "02",
        title: "Fazemos o levantamento",
        body: "Uma visita ao local para medir estrutura, energia, dados e luz ambiente. Relatório em três dias úteis.",
      },
      {
        n: "03",
        title: "Orçamentamos",
        body: "Uma proposta carimbada com preço fixo e data de entrega. Cinco dias úteis após o levantamento.",
      },
    ],
    faqEyebrow: "Antes de enviar",
    faqHeading: "O que precisamos e o que recebe de volta",
  },

  resourcesPage: {
    eyebrow: "Escrito pelos engenheiros",
    title: "Conhecimento técnico para o Ontário",
    lede: "Guias diretos escritos por quem especifica, carimba e comissiona estes sistemas. Escritos para que possa exigir o mesmo de qualquer fornecedor, incluindo de nós.",
    minutesSuffix: "min",
    articles: [
      {
        title: "Pixel pitch e distância de visualização, explicados de forma simples",
        topic: "Especificações",
        minutes: "4",
        summary:
          "Porque é que a regra prática é um metro de distância de visualização por milímetro de pitch, onde essa regra falha e como testá-la no seu próprio local com uma folha impressa antes de gastar seja o que for.",
      },
      {
        title:
          "Compreender os nits: porque a luminosidade bruta importa menos do que pensa",
        topic: "Guias",
        minutes: "6",
        summary:
          "É o contraste face à luz ambiente — não a saída de pico — que torna uma face legível ao meio-dia. O que pedir a um fornecedor em vez de um número de nits de montra.",
      },
      {
        title: "Guia prático dos graus de proteção IP para LED",
        topic: "Manutenção",
        minutes: "5",
        summary:
          "O que os dois dígitos significam realmente, porque diferem os graus à frente e atrás, e porque no Ontário o modo de falha é o ciclo de gelo-degelo sobre humidade retida, e não a chuva.",
      },
      {
        title: "Dimensionar a alimentação elétrica de um outdoor digital",
        topic: "Engenharia",
        minutes: "7",
        summary:
          "Consumo médio face ao pico a branco total, como ler um valor por metro quadrado e o cálculo de carga que o seu eletricista vai pedir antes de dimensionar o quadro.",
      },
      {
        title: "O prazo de licenciamento no Ontário, fase a fase",
        topic: "Licenciamento",
        minutes: "8",
        summary:
          "Regulamentos municipais de publicidade, quando o MTO entra em cena, quantas semanas custa uma exceção menor e as condições do local que significam simplesmente não.",
      },
      {
        title: "Ler uma ficha técnica de LED sem ser vendido",
        topic: "Guias",
        minutes: "6",
        summary:
          "Os valores que sustentam a decisão, os que são marketing e as três perguntas que separam um fornecedor sério de um revendedor com um catálogo.",
      },
    ],
    note: "Os artigos são publicados à medida que são escritos. Peça um rascunho ao escritório se precisar de um antes de ser publicado.",
    specsEyebrow: "Sem formulário, sem barreiras",
    specsHeading: "Especificações completas de todas as plataformas",
    specsBody:
      "A ficha técnica completa de cada família está publicada na sua própria página. Nada fica atrás de um pedido de email.",
    ctaHeading: "Quer isto aplicado ao seu local?",
    ctaBody:
      "Os guias levam-no à pergunta certa. Um levantamento dá-lhe a resposta — medida, carimbada e orçamentada.",
  },

  warrantyPage: {
    eyebrow: "Resposta média de quatro horas",
    title: "Não desaparecemos depois da instalação",
    lede: "Um técnico da CityScreen atende a sua chamada a partir do nosso escritório no Ontário. Mantemos peças em stock aqui e temos módulos para todos os sistemas que alguma vez instalámos — incluindo os que deixámos de vender há anos.",
    stats: [
      { label: "Peças e mão de obra", value: "5 anos" },
      { label: "Resposta média", value: "4 horas" },
      { label: "Cumprimento da garantia", value: "99%" },
    ],
    callDesk: "Ligar para a assistência",
    promisesEyebrow: "O que recebe",
    promisesHeading: "Apoio de quem o construiu",
    promises: [
      {
        title: "Apoio técnico",
        body: "Diagnóstico telefónico e remoto por técnicos que conhecem a sua instalação específica, porque foram eles que a comissionaram. Nós construímos, nós apoiamos.",
      },
      {
        title: "Peças em stock no Ontário",
        body: "Módulos de reserva, fontes de alimentação e placas recetoras para todos os sistemas que alguma vez instalámos estão numa prateleira aqui — não num armazém no estrangeiro com doze semanas de prazo.",
      },
      {
        title: "Técnicos nossos",
        body: "Um técnico da CityScreen, num veículo da CityScreen, chega ao seu local. Não subcontratamos assistência, de Windsor a Otava e até Timmins, a norte.",
      },
      {
        title: "Telemetria por cabinete",
        body: "Os sistemas monitorizados reportam-nos temperatura, estado das ventoinhas e falhas de pixel. Na maioria dos contratos, ligamos-lhe a avisar de um módulo em falha antes de o notar.",
      },
    ],
    stepsEyebrow: "Cinco passos",
    stepsHeading: "Como decorre realmente uma chamada de assistência",
    stepsBody:
      "Da sua primeira chamada até ao processo encerrado e a um relatório escrito.",
    steps: [
      {
        n: "01",
        title: "Contactar a assistência",
        body: "Ligue ou escreva diretamente à equipa de assistência do Ontário. Sem portal de tickets, sem primeira linha no estrangeiro, sem guião.",
      },
      {
        n: "02",
        title: "Diagnóstico remoto",
        body: "Consultamos os registos do sistema e a telemetria por cabinete enquanto ainda está ao telefone. A maioria das falhas é identificada antes de alguém entrar num veículo.",
      },
      {
        n: "03",
        title: "Peças retiradas",
        body: "O módulo de substituição, a fonte de alimentação ou a placa recetora sai da nossa própria prateleira e vai na carrinha no mesmo dia.",
      },
      {
        n: "04",
        title: "Reparação no local",
        body: "Resposta média de quatro horas em dias úteis, no próprio dia em falhas críticas no exterior. As plataformas com acesso frontal são reparadas sem desmontar o ecrã.",
      },
      {
        n: "05",
        title: "Um relatório completo",
        body: "Recebe documentação da falha, da reparação e uma verificação do estado do sistema. Sem mistérios, sem pontas soltas.",
      },
    ],
    compareEyebrow: "Comparação direta",
    compareHeading: "O que o orçamento mais barato deixa de fora",
    compareBody:
      "O preço do painel raramente é a diferença. É aqui que a distância costuma aparecer, ao fim de três anos.",
    compareCaption:
      "A CityScreen comparada com um fornecimento típico de painéis importados",
    colParameter: "Parâmetro",
    colOffshore: "Fornecimento de painéis importados",
    comparison: [
      {
        parameter: "Duração da garantia",
        cityscreen: "5 anos, peças e mão de obra",
        offshore: "1 ano, apenas peças",
      },
      {
        parameter: "Peças e mão de obra incluídas",
        cityscreen: "Ambas, durante todo o prazo",
        offshore: "Peças expedidas, mão de obra faturada",
      },
      {
        parameter: "Stock local de peças",
        cityscreen: "Mantido no Ontário",
        offshore: "Encomendado ao estrangeiro",
      },
      {
        parameter: "Assistência no local",
        cityscreen: "Técnicos nossos",
        offshore: "Subcontratado local, se disponível",
      },
      {
        parameter: "Licenciamento e engenharia",
        cityscreen: "Engenheiro interno, incluído",
        offshore: "Da sua responsabilidade",
      },
      {
        parameter: "Resposta típica",
        cityscreen: "4 horas, dias úteis",
        offshore: "Próxima expedição disponível",
      },
    ],
    faqEyebrow: "Perguntas sobre assistência",
    faqHeading: "Garantia e assistência, respondidas",
    faqIntro:
      "Respostas diretas sobre o nosso compromisso de garantia e assistência em todo o Ontário.",
    ctaHeading: "Alguma coisa no ecrã está avariada?",
    ctaBody:
      "Ligue para a assistência com a morada do local e o que está a ver. Se for um dos nossos, já teremos a telemetria aberta quando acabar de descrever.",
  },

  form: {
    fullName: "Nome completo",
    fullNamePlaceholder: "Dana Whitfield",
    workEmail: "Email profissional",
    workEmailPlaceholder: "dana@northfacilities.ca",
    company: "Empresa",
    companyPlaceholder: "Northgate Facilities",
    location: "Localização do projeto",
    locationPlaceholder: "Mississauga, ON",
    projectType: "Tipo de projeto",
    projectTypePlaceholder: "Selecione a disciplina",
    carriedOver:
      "Transitou da sua seleção — altere aqui se estiver errado.",
    screenSize: "Área estimada do ecrã",
    screenSizeAria: "Área estimada do ecrã em metros quadrados",
    blueprints: "Plantas de arquitetura",
    dropHere: "Largue os desenhos aqui ou",
    browse: "procure",
    fileHint: "DWG · DXF · RVT · IFC · PDF · ZIP — máx. 25 MB cada",
    removeFile: "Remover {name}",
    brief: "Descrição do projeto",
    optional: "(opcional)",
    briefPlaceholder:
      "Superfície, tipo de fixação, distância de visualização, estratégia de conteúdos, data prevista de comissionamento…",
    submit: "Enviar descrição do projeto",
    submitting: "A enviar a descrição",
    disclaimer:
      "As submissões são analisadas por um engenheiro de aplicações. Os desenhos são mantidos sob acordo de confidencialidade e nunca são partilhados fora da equipa de especificação.",
    successHeading: "Descrição recebida.",
    successBody:
      "Um engenheiro de aplicações vai analisar a especificação e responder no prazo de um dia útil com uma recomendação de pitch e um custo indicativo de construção.",
    successAgain: "Enviar outra descrição",
    errors: {
      name: "Introduza o seu nome completo",
      email: "Introduza um email profissional válido",
      company: "Introduza a sua empresa",
      location: "Introduza a localização do projeto",
      projectType: "Selecione um tipo de projeto",
      fileFormat: "{name} não é um formato aceite",
      fileSize: "{name} excede o limite de 25 MB",
    },
  },
};

export const dictionaries = { en, pt };
