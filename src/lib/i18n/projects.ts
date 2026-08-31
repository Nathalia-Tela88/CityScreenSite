export type Project = {
  slug: string;
  title: string;
  location: string;
  discipline: string;
  /** Stable key for filtering, so the buttons keep working in both languages. */
  disciplineKey: "professional" | "commercial" | "rental" | "dooh";
  year: string;
  summary: string;
  specs: { label: string; value: string }[];
  image: string;
  aspect: string;
};

const en: Project[] = [
  {
    slug: "bay-street-media-facade",
    title: "Eight-storey media facade",
    location: "Bay Street, Toronto",
    discipline: "DOOH",
    disciplineKey: "dooh",
    year: "2025",
    summary:
      "A curtain-wall retrofit wrapping the podium of a downtown tower. Every cabinet was hung from a new secondary steel frame designed with the building's structural engineer, then commissioned as a rentable media asset.",
    specs: [
      { label: "Pitch", value: "P6.6" },
      { label: "Area", value: "612 m²" },
      { label: "Peak", value: "10,000 nits" },
    ],
    image: "/img/hero-facade.jpg",
    aspect: "aspect-[21/9]",
  },
  {
    slug: "grid-control-room",
    title: "Grid operations video wall",
    location: "Mississauga",
    discipline: "Professional",
    disciplineKey: "professional",
    year: "2025",
    summary:
      "A seamless COB wall replacing a nine-year-old projection cube array. Cut over across two overnight windows with no loss of operator visibility on the live grid.",
    specs: [
      { label: "Pitch", value: "P1.2" },
      { label: "Duty", value: "24/7" },
      { label: "Acoustic", value: "0 dB" },
    ],
    image: "/img/app-professional.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    slug: "queen-west-shopfront",
    title: "Transparent shopfront wall",
    location: "Queen Street West, Toronto",
    discipline: "Commercial",
    disciplineKey: "commercial",
    year: "2024",
    summary:
      "Glass-bonded transparent LED across a heritage-designated frontage. The landlord's sightline requirement was 70% transparency; the install holds 82%.",
    specs: [
      { label: "Pitch", value: "P3.9 × 7.8" },
      { label: "Transparency", value: "82%" },
      { label: "Depth", value: "10 mm" },
    ],
    image: "/img/app-commercial.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    slug: "festival-main-stage",
    title: "Main stage backdrop and wings",
    location: "Ottawa",
    discipline: "Rental",
    disciplineKey: "rental",
    year: "2025",
    summary:
      "Three surfaces flown from a single truss grid across a four-day festival, struck and re-rigged twice between headline sets. Zero cabinet failures across the run.",
    specs: [
      { label: "Pitch", value: "P3.9" },
      { label: "Load-in", value: "6 hrs" },
      { label: "Cabinets", value: "384" },
    ],
    image: "/img/app-rental.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    slug: "highway-401-network",
    title: "Corridor billboard network",
    location: "Highway 401, Ontario",
    discipline: "DOOH",
    disciplineKey: "dooh",
    year: "2024",
    summary:
      "Four roadside faces on a shared CMS with programmatic play-out logs. Specified against municipal light-spill limits with automatic overnight dimming to 300 nits.",
    specs: [
      { label: "Pitch", value: "P8" },
      { label: "Ingress", value: "IP65" },
      { label: "Range", value: "−30 °C to +60 °C" },
    ],
    image: "/img/app-dooh.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    slug: "financial-district-corner",
    title: "Corner-wrap podium screen",
    location: "Financial District, Toronto",
    discipline: "DOOH",
    disciplineKey: "dooh",
    year: "2024",
    summary:
      "A continuous surface turning a 90° building corner without a visible seam, mapped as one canvas so creative runs unbroken around the return.",
    specs: [
      { label: "Pitch", value: "P4" },
      { label: "Corner", value: "Seamless 90°" },
      { label: "Area", value: "340 m²" },
    ],
    image: "/img/hero-facade-alt.jpg",
    aspect: "aspect-[21/9]",
  },
];

const pt: Project[] = [
  {
    slug: "bay-street-media-facade",
    title: "Fachada de media de oito pisos",
    location: "Bay Street, Toronto",
    discipline: "DOOH",
    disciplineKey: "dooh",
    year: "2025",
    summary:
      "Reabilitação de fachada envolvendo o embasamento de uma torre no centro. Cada módulo foi suspenso de uma nova estrutura secundária em aço, projetada com o engenheiro estrutural do edifício, e depois comissionado como ativo de media rentável.",
    specs: [
      { label: "Pitch", value: "P6,6" },
      { label: "Área", value: "612 m²" },
      { label: "Pico", value: "10 000 nits" },
    ],
    image: "/img/hero-facade.jpg",
    aspect: "aspect-[21/9]",
  },
  {
    slug: "grid-control-room",
    title: "Parede de vídeo de sala de controlo",
    location: "Mississauga",
    discipline: "Profissional",
    disciplineKey: "professional",
    year: "2025",
    summary:
      "Parede COB contínua em substituição de um conjunto de cubos de retroprojeção com nove anos. A troca decorreu em duas janelas noturnas, sem perda de visibilidade para os operadores sobre a rede em serviço.",
    specs: [
      { label: "Pitch", value: "P1,2" },
      { label: "Serviço", value: "24/7" },
      { label: "Acústica", value: "0 dB" },
    ],
    image: "/img/app-professional.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    slug: "queen-west-shopfront",
    title: "Montra transparente",
    location: "Queen Street West, Toronto",
    discipline: "Comercial",
    disciplineKey: "commercial",
    year: "2024",
    summary:
      "LED transparente colado ao vidro numa fachada com classificação patrimonial. O senhorio exigia 70% de transparência; a instalação mantém 82%.",
    specs: [
      { label: "Pitch", value: "P3,9 × 7,8" },
      { label: "Transparência", value: "82%" },
      { label: "Espessura", value: "10 mm" },
    ],
    image: "/img/app-commercial.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    slug: "festival-main-stage",
    title: "Cenário e alas de palco principal",
    location: "Otava",
    discipline: "Aluguer",
    disciplineKey: "rental",
    year: "2025",
    summary:
      "Três superfícies suspensas de uma única grelha de treliça ao longo de um festival de quatro dias, desmontadas e remontadas duas vezes entre concertos principais. Zero falhas de módulo durante todo o período.",
    specs: [
      { label: "Pitch", value: "P3,9" },
      { label: "Montagem", value: "6 h" },
      { label: "Módulos", value: "384" },
    ],
    image: "/img/app-rental.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    slug: "highway-401-network",
    title: "Rede de outdoors em corredor",
    location: "Autoestrada 401, Ontário",
    discipline: "DOOH",
    disciplineKey: "dooh",
    year: "2024",
    summary:
      "Quatro faces de estrada num CMS partilhado, com registos de emissão programáticos. Especificadas de acordo com os limites municipais de poluição luminosa, com escurecimento noturno automático até 300 nits.",
    specs: [
      { label: "Pitch", value: "P8" },
      { label: "Proteção", value: "IP65" },
      { label: "Intervalo", value: "−30 °C a +60 °C" },
    ],
    image: "/img/app-dooh.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    slug: "financial-district-corner",
    title: "Ecrã de embasamento em esquina",
    location: "Distrito financeiro, Toronto",
    discipline: "DOOH",
    disciplineKey: "dooh",
    year: "2024",
    summary:
      "Superfície contínua que dobra uma esquina de 90° sem junta visível, mapeada como uma só tela para que a criatividade corra sem quebra ao virar.",
    specs: [
      { label: "Pitch", value: "P4" },
      { label: "Esquina", value: "90° sem junta" },
      { label: "Área", value: "340 m²" },
    ],
    image: "/img/hero-facade-alt.jpg",
    aspect: "aspect-[21/9]",
  },
];

export const projectsByLocale = { en, pt };
