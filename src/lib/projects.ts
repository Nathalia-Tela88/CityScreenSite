export type Project = {
  slug: string;
  title: string;
  location: string;
  discipline: "Professional" | "Commercial" | "Rental" | "DOOH";
  year: string;
  summary: string;
  /** The two or three numbers that actually define the install. */
  specs: { label: string; value: string }[];
  image: string;
  /** Tailwind aspect class, so the grid can be genuinely editorial. */
  aspect: string;
};

export const projects: Project[] = [
  {
    slug: "bay-street-media-facade",
    title: "Eight-storey media facade",
    location: "Bay Street, Toronto",
    discipline: "DOOH",
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
