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
    image: "/img/app-rental.jpg",
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
  },
  {
    slug: "commercial",
    href: "/commercial",
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
    image: "/img/app-commercial.jpg",
  },
  {
    slug: "professional",
    href: "/professional",
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
    image: "/img/app-professional.jpg",
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
        body: "Os fechos de came assentam e alinham módulos adjacentes num quarto de volta — sem calços, sem ferramenta, sem passagem de calibração no local.",
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
  },
  {
    slug: "commercial",
    href: "/commercial",
    eyebrow: "Retalho e interiores",
    name: "LED comercial",
    tagline: "Superfície de venda, não um monitor.",
    summary:
      "Paredes de montra interiores, ecrãs voltados para a rua e LED transparente em vidro que preserva a luz natural e as linhas de visão. Pensado para caber num programa de remodelação de loja — molduras à face, infraestruturas ocultas e acabamentos que se leem como arquitetura.",
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
  },
  {
    slug: "professional",
    href: "/professional",
    eyebrow: "Missão crítica",
    name: "Visualização profissional",
    tagline: "Sem juntas, silencioso, sempre ligado.",
    summary:
      "MicroLED COB de pitch fino para salas de controlo e salas de administração — pitch abaixo do milímetro, superfície emissiva totalmente selada e classificação para serviço contínuo. Sem molduras, sem ventoinhas, sem junta visível entre fontes.",
    heroStats: [
      { label: "Pitch desde", value: "0,6 mm" },
      { label: "Ciclo de serviço", value: "24 / 7" },
      { label: "Acústica", value: "0 dB" },
    ],
    highlights: [
      {
        title: "Superfície MicroLED COB",
        body: "O encapsulamento chip-on-board coloca uma camada contínua de resina sobre os díodos — resistente ao impacto, à prova de pó e lavável.",
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
  },
];

export const servicesByLocale = { en, pt };
