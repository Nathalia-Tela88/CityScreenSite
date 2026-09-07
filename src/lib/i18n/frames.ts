/* ---------------------------------------------------------------------------
   Captions for the manufacturer product frames, English and European
   Portuguese.

   SOURCE OF TRUTH — read before editing.

   Every caption below describes what is actually drawn in the frame it sits
   under, and every figure quoted in one is printed on that same frame by the
   manufacturer. Nothing here is inferred, averaged or carried across from a
   sibling series.

   That rule is the whole point of this file. The frames are LAMPRO and
   Unilumin sales artwork: they are persuasive by design, and it would be easy
   to write a caption that sounds like the datasheet without being the
   datasheet. So where a frame shows a figure the caption repeats it verbatim
   with the manufacturer's own qualifier attached — "on LSK2.8", "P2.6",
   "optional" — and where a frame shows only a photograph the caption says what
   the photograph shows and stops.

   The ordering is the manufacturer's own: frame 1 of each series is the
   presentation shot, the one a client should meet the product on, and the
   frames after it are the supporting detail in the sequence the source deck
   used.

   Frames carry no spec table of their own. Anything a buyer would specify
   against still belongs in lib/i18n/series.ts, which is checked against the
   published datasheet; a caption is a description of a picture, not a source
   of numbers to quote.
   --------------------------------------------------------------------------- */

export type FrameCopy = {
  /** Short label, set as the frame's heading. */
  title: string;
  /** One or two sentences on what the frame shows. */
  body: string;
};

const en: Record<string, FrameCopy[]> = {
  /* --- Professional ----------------------------------------------------- */
  lmini: [
    {
      title: "Cabinet and wall",
      body: "The LMini panel shown against an assembled wall, with a module lifted clear and the wall-mount bracket behind it. The front face carries no visible fixings — modules are drawn off the front, so the cabinet can sit hard against structure.",
    },
    {
      title: "Contrast in a lit room",
      body: "Unilumin rates the surface at 10,000:1 with a super-black background, ultra-low moiré, ultra-low reflectance and ultra-low touch trace. The frame shows the panel in a furnished room rather than a dark hall, which is where those four properties are actually noticed.",
    },
    {
      title: "Installed in a meeting space",
      body: "A room-scale install with the cabinet, mount and module exploded in the foreground. Unilumin marks the exploded detail as an optional function rather than standard supply.",
    },
  ],
  "lmini-p": [
    {
      title: "Cabinet, front and rear",
      body: "The LMini P panel with its rear face alongside: a die-cast housing with a recessed heat-sink field and no protruding fixings.",
    },
    {
      title: "EBL optical stack",
      body: "Unilumin's EBL multilayer optical processing and Bonding Mixed algorithm. Rated 10,000:1 super-high contrast with a deep black background, low moiré, low reflectance and low touch trace.",
    },
    {
      title: "Multiple protection",
      body: "The module is rated moisture-proof, dust-proof, anti-static and anti-collision. The frame shows the same panel under an electrostatic discharge and under running water.",
    },
    {
      title: "Highly integrated 3-in-1",
      body: "Mask, frame and rear housing shown apart. The three parts assemble into one serviceable unit rather than stacking as separate sub-assemblies.",
    },
  ],
  lhp: [
    {
      title: "Cabinet and wall",
      body: "An LHP cabinet drawn clear of an assembled wall, showing the slim profile and the full-height side rails the panels lock to.",
    },
    {
      title: "2-in-1 module and wireless connect",
      body: "Left, the 2-in-1 module design with the receiving card carried on the module itself. Right, the wireless connection between module and cabinet — no ribbon cable across the joint.",
    },
    {
      title: "Flexible cabinet, creative shapes",
      body: "Semi-cabinet options splice freely with standard cabinets. Unilumin publishes a concave angle range of 4°, 6° and 8° on a single cabinet and up to 18° between cabinets, which is what makes the corner and curved builds on the right possible.",
    },
    {
      title: "Anti-moisture and impact protection",
      body: "A conformal coating against moisture and a lamp-protection layer against knocks. Unilumin lists both as optional rather than fitted as standard.",
    },
  ],

  /* --- Commercial -------------------------------------------------------- */
  "bnx-ii": [
    {
      title: "Cabinet, front and rear",
      body: "The BNXⅡ cabinet with its service side alongside. The rear carries the power and data spine down the centre and the handles either side of it.",
    },
    {
      title: "Wireless connection",
      body: "An integrated connector between cabinets and a hidden wiring design: the joint carries power and signal without a loose loom across the back of the wall.",
    },
    {
      title: "Front and rear maintenance",
      body: "Modules come off the front with a vacuum tool, and the cabinet also supports rear maintenance where there is access. Shown in both vertical and rotated orientations.",
    },
    {
      title: "Shapes it builds",
      body: "The formats the cabinet is published for: round-corner and square cylinders, hanging and mixed splicing, 90° right angles, and concave and convex runs.",
    },
  ],
  "u-natural": [
    {
      title: "Surface finishes",
      body: "U-Natural is a decorative texture screen — the panel face is finished as stone or timber and reads as an architectural surface when it is not lit.",
    },
    {
      title: "Seamless mapping",
      body: "The texture pattern is customisable and maps continuously across the joins, so a wall reads as one surface rather than as tiles.",
    },
    {
      title: "Panel construction",
      body: "The layer stack Unilumin publishes for the panel: a protective coating over a nano-optical film over the COB/MIP EBL emitting layer.",
    },
  ],

  /* --- Rental ------------------------------------------------------------ */
  lrs: [
    {
      title: "Cabinet, two formats",
      body: "The LRS cabinet in both the square and the tall format, rear face out. Quick-lock latches sit on every edge and the control box pulls from the centre.",
    },
    {
      title: "Exploded",
      body: "Modules, the cast frame and the removable control box shown apart. Each of the three comes out independently, which is what keeps a failed part from taking the cabinet out of service.",
    },
    {
      title: "Service side and face",
      body: "The rear service side beside the lit face. Every latch, handle and connector a crew touches is on the side away from the audience.",
    },
    {
      title: "Stacked and flown",
      body: "The same cabinet ground-stacked on a support frame and hung as a flown wall.",
    },
  ],
  "rn-ii": [
    {
      title: "Cabinet, front and rear",
      body: "The RNⅡ cabinet with the lit face behind it. Curved carry handles, a central power and signal spine, and corner rigging points.",
    },
    {
      title: "U-shield lamp protection",
      body: "Unilumin's U-shield packaging. On P2.6 the manufacturer rates the lamp as three to four times stronger than a regular SMD1515 — the claim is made for that pitch, not across the series.",
    },
    {
      title: "Exploded",
      body: "Modules, frame and control box apart. The green latch points mark what a crew releases by hand without a tool.",
    },
    {
      title: "Creative builds",
      body: "Right angles, closed cubes and mixed splicing off the same cabinet, with the hinge detail that allows 0°, ±60° and ±90° between panels.",
    },
  ],
  lrm: [
    {
      title: "Cabinet, front and rear",
      body: "The LRM cabinet with the lit face alongside. The rear is an open cast frame with the fan field and the central control spine visible.",
    },
    {
      title: "Weight per cabinet",
      body: "LAMPRO publishes 7.5 kg for the 500 × 500 mm cabinet at 81 mm deep, and 13.5 kg for the 500 × 1000 mm. On a touring wall that figure sets the truck count and the crew size as much as the pixel pitch does.",
    },
    {
      title: "Multiple splicing",
      body: "Flat runs, corner builds and curved sections off the same cabinet.",
    },
    {
      title: "Heat dissipation",
      body: "Airflow through the rear frame: the fan field draws across the module backs and exhausts through the central spine.",
    },
  ],
  "lrm-pro": [
    {
      title: "Cabinet, front and rear",
      body: "The LRM Pro cabinet with the lit face alongside. A single pull handle sits on the top edge and the quick-locks run down both sides.",
    },
    {
      title: "Brightness and refresh",
      body: "LAMPRO publishes 700 nits indoor and 4,000–4,500 nits outdoor for this series, at a 7,860 Hz refresh rate. The two brightness figures are separate variants, not a range one panel covers.",
    },
    {
      title: "Splicing patterns",
      body: "Left-right splicing and cross splicing shown on the rear face — the cabinet locks on all four edges, so a run does not have to be rectangular.",
    },
    {
      title: "Exploded",
      body: "Module, control box and frame apart, with the curved-face variant on the left showing how the module bank sits against a bent frame.",
    },
  ],

  /* --- DOOH -------------------------------------------------------------- */
  "lx-ii-pro": [
    {
      title: "Cabinet, front and rear",
      body: "The LXⅡ Pro outdoor cabinet with its sealed rear housing alongside.",
    },
    {
      title: "Heat dissipation and coatings",
      body: "The cast rear acts as the heat sink. LAMPRO publishes anti-oxidation, anti-acid, anti-corrosion and anti-salt treatment on it, which is what a coastal or roadside site actually eats through.",
    },
    {
      title: "Weather and fire",
      body: "Waterproof and dustproof against driven sand and pollen, and a fire-resistant design. Both are shown as the manufacturer tests them rather than as a rating badge.",
    },
    {
      title: "Corner formats",
      body: "90° right-angle and 90° round-corner builds, with the cabinet arrangement behind each. These are the formats the naked-eye 3D sites are built from.",
    },
  ],
  "ls-pro": [
    {
      title: "Cabinet, front and rear",
      body: "The LS Pro outdoor cabinet with the service side alongside.",
    },
    {
      title: "Surface",
      body: "The lit face at full output. An outdoor media wall is specified on how it holds up against daylight behind it, not on how it looks in a dark hall.",
    },
    {
      title: "Structural test results",
      body: "LAMPRO publishes the cabinet against a 150 km/h wind requirement with a result of 200 km/h or better, a 33% margin; and against a 20 kN/m² compressive requirement with a result of 33 kN/m², a 65% margin.",
    },
    {
      title: "IP67 module",
      body: "The module itself is sealed to IP67 — the rating is on the module, so a breach of the cabinet does not put water straight onto the lamps.",
    },
    {
      title: "Horizontal control box",
      body: "The control box mounts horizontally and can be operated from the front or the rear, which is what decides whether a pole-mounted sign needs rear access at all.",
    },
  ],
  lst: [
    {
      title: "Cabinet",
      body: "The LST outdoor cabinet. The frame carries an Intertek verification mark.",
    },
    {
      title: "Lamp and module construction",
      body: "Gold wire lamps, which the manufacturer rates at 40% higher stability than copper wire; a die-cast aluminium module for fire prevention; and the module and cabinet assembly the strength claim rests on.",
    },
    {
      title: "Ingress protection",
      body: "IP66 at the front and IP65 at the rear, shown under the manufacturer's own water test.",
    },
    {
      title: "Published performance",
      body: "7,500–10,000 nits brightness, 7,680 Hz refresh, contrast to a maximum of 40,000:1 and 14-bit greyscale, across P4.44, P6.67, P8 and P10.",
    },
    {
      title: "Installed",
      body: "Roadside, rooftop and building-mounted installs of the same series.",
    },
  ],
  lsk: [
    {
      title: "Cabinet",
      body: "The LSK outdoor cabinet, front and rear.",
    },
    {
      title: "Seamless splicing",
      body: "The series against a conventional display: the join between cabinets is what a large outdoor wall is judged on, because it is the one artefact that does not disappear with viewing distance.",
    },
    {
      title: "Viewing angle",
      body: "180° horizontal and 160° vertical. The manufacturer publishes these figures on LSK2.8 specifically.",
    },
    {
      title: "Weather",
      body: "A stadium install under rain — the condition an outdoor sports screen is actually specified against.",
    },
    {
      title: "Convection cooling",
      body: "Airflow through the cabinet interior. There is no fan in the path, so there is no fan to fail and nothing drawing dust through the housing.",
    },
    {
      title: "Installed",
      body: "Roadside and building-mounted installs of the same series.",
    },
  ],
};

const pt: Record<string, FrameCopy[]> = {
  /* --- Profissional ------------------------------------------------------ */
  lmini: [
    {
      title: "Cabinete e parede",
      body: "O painel LMini visto contra uma parede montada, com um módulo afastado e o suporte de parede atrás. A face frontal não tem fixações à vista — os módulos saem pela frente, pelo que o cabinete pode encostar à estrutura.",
    },
    {
      title: "Contraste numa sala iluminada",
      body: "A Unilumin classifica a superfície em 10.000:1, com fundo super preto, moiré ultrabaixo, reflectância ultrabaixa e marca de toque ultrabaixa. A imagem mostra o painel numa sala mobilada e não num pavilhão às escuras, que é onde essas quatro propriedades se notam.",
    },
    {
      title: "Instalado numa sala de reuniões",
      body: "Uma instalação à escala da sala, com cabinete, suporte e módulo separados em primeiro plano. A Unilumin assinala este detalhe como função opcional e não como fornecimento de série.",
    },
  ],
  "lmini-p": [
    {
      title: "Cabinete, frente e verso",
      body: "O painel LMini P com a face traseira ao lado: um corpo em fundição com campo de dissipação embutido e sem fixações salientes.",
    },
    {
      title: "Conjunto óptico EBL",
      body: "Processamento óptico multicamada EBL e algoritmo Bonding Mixed da Unilumin. Classificado em 10.000:1 de contraste, com fundo preto profundo, moiré baixo, reflectância baixa e marca de toque baixa.",
    },
    {
      title: "Protecção múltipla",
      body: "O módulo é classificado como resistente à humidade, ao pó, à electricidade estática e ao impacto. A imagem mostra o mesmo painel sob descarga electrostática e sob água corrente.",
    },
    {
      title: "Design 3-em-1 integrado",
      body: "Máscara, estrutura e corpo traseiro mostrados separados. As três peças montam numa unidade única com manutenção própria, em vez de se empilharem como subconjuntos separados.",
    },
  ],
  lhp: [
    {
      title: "Cabinete e parede",
      body: "Um cabinete LHP afastado de uma parede montada, mostrando o perfil fino e as calhas laterais de altura total onde os painéis encaixam.",
    },
    {
      title: "Módulo 2-em-1 e ligação sem fios",
      body: "À esquerda, o módulo 2-em-1 com a placa receptora integrada no próprio módulo. À direita, a ligação sem fios entre módulo e cabinete — sem cabo plano a atravessar a junta.",
    },
    {
      title: "Cabinete flexível, formas criativas",
      body: "As opções de meio-cabinete encaixam livremente com os cabinetes padrão. A Unilumin publica um intervalo de ângulo côncavo de 4°, 6° e 8° num cabinete e até 18° entre cabinetes, que é o que torna possíveis os cantos e as curvas à direita.",
    },
    {
      title: "Protecção contra humidade e impacto",
      body: "Revestimento conformal contra humidade e camada de protecção das lâmpadas contra pancadas. A Unilumin lista ambos como opcionais e não como equipamento de série.",
    },
  ],

  /* --- Comercial --------------------------------------------------------- */
  "bnx-ii": [
    {
      title: "Cabinete, frente e verso",
      body: "O cabinete BNXⅡ com o lado de manutenção ao lado. A traseira leva a espinha de energia e dados ao centro e as pegas de cada lado.",
    },
    {
      title: "Ligação sem fios",
      body: "Conector integrado entre cabinetes e cablagem oculta: a junta transporta energia e sinal sem chicote solto nas costas da parede.",
    },
    {
      title: "Manutenção frontal e traseira",
      body: "Os módulos saem pela frente com ferramenta de vácuo, e o cabinete admite também manutenção traseira onde exista acesso. Mostrado na orientação vertical e rodada.",
    },
    {
      title: "Formas que constrói",
      body: "Os formatos publicados para o cabinete: cilindros de canto redondo e quadrado, suspensão e encaixe misto, ângulos rectos de 90° e traçados côncavos e convexos.",
    },
  ],
  "u-natural": [
    {
      title: "Acabamentos de superfície",
      body: "O U-Natural é um ecrã de textura decorativa — a face do painel é acabada em pedra ou madeira e lê-se como superfície arquitectónica quando está apagado.",
    },
    {
      title: "Mapeamento contínuo",
      body: "O padrão de textura é personalizável e mapeia continuamente através das juntas, pelo que a parede se lê como uma superfície e não como um mosaico.",
    },
    {
      title: "Construção do painel",
      body: "As camadas que a Unilumin publica para o painel: revestimento de protecção sobre película nano-óptica sobre a camada emissora COB/MIP EBL.",
    },
  ],

  /* --- Aluguer ----------------------------------------------------------- */
  lrs: [
    {
      title: "Cabinete, dois formatos",
      body: "O cabinete LRS nos formatos quadrado e alto, com a traseira à vista. Os fechos rápidos estão em todas as arestas e a caixa de controlo sai pelo centro.",
    },
    {
      title: "Vista explodida",
      body: "Módulos, estrutura fundida e caixa de controlo amovível mostrados separados. Cada um sai de forma independente, que é o que impede uma peça avariada de tirar o cabinete de serviço.",
    },
    {
      title: "Lado de manutenção e face",
      body: "O lado de manutenção ao lado da face acesa. Todos os fechos, pegas e conectores que uma equipa toca ficam do lado oposto ao público.",
    },
    {
      title: "Empilhado e suspenso",
      body: "O mesmo cabinete empilhado sobre estrutura de apoio e pendurado como parede suspensa.",
    },
  ],
  "rn-ii": [
    {
      title: "Cabinete, frente e verso",
      body: "O cabinete RNⅡ com a face acesa atrás. Pegas curvas, espinha central de energia e sinal, e pontos de suspensão nos cantos.",
    },
    {
      title: "Protecção de lâmpada U-shield",
      body: "O encapsulamento U-shield da Unilumin. Em P2.6 o fabricante classifica a lâmpada como três a quatro vezes mais resistente do que um SMD1515 comum — a afirmação é feita para esse passo, não para toda a série.",
    },
    {
      title: "Vista explodida",
      body: "Módulos, estrutura e caixa de controlo separados. Os pontos de fecho verdes marcam o que a equipa liberta à mão, sem ferramenta.",
    },
    {
      title: "Construções criativas",
      body: "Ângulos rectos, cubos fechados e encaixe misto a partir do mesmo cabinete, com o detalhe da dobradiça que permite 0°, ±60° e ±90° entre painéis.",
    },
  ],
  lrm: [
    {
      title: "Cabinete, frente e verso",
      body: "O cabinete LRM com a face acesa ao lado. A traseira é uma estrutura fundida aberta, com o campo de ventoinhas e a espinha central de controlo à vista.",
    },
    {
      title: "Peso por cabinete",
      body: "A LAMPRO publica 7,5 kg para o cabinete de 500 × 500 mm com 81 mm de profundidade, e 13,5 kg para o de 500 × 1000 mm. Numa parede em digressão, esse número define o número de camiões e o tamanho da equipa tanto como o passo de pixel.",
    },
    {
      title: "Encaixe múltiplo",
      body: "Traçados planos, construções em canto e secções curvas a partir do mesmo cabinete.",
    },
    {
      title: "Dissipação de calor",
      body: "Fluxo de ar pela estrutura traseira: o campo de ventoinhas atravessa as costas dos módulos e sai pela espinha central.",
    },
  ],
  "lrm-pro": [
    {
      title: "Cabinete, frente e verso",
      body: "O cabinete LRM Pro com a face acesa ao lado. Uma pega de tracção no topo e os fechos rápidos ao longo dos dois lados.",
    },
    {
      title: "Brilho e taxa de actualização",
      body: "A LAMPRO publica 700 nits em interior e 4.000–4.500 nits em exterior para esta série, a uma taxa de actualização de 7.860 Hz. Os dois valores de brilho são variantes distintas, não um intervalo coberto por um só painel.",
    },
    {
      title: "Padrões de encaixe",
      body: "Encaixe esquerda-direita e encaixe em cruz mostrados na traseira — o cabinete fecha nas quatro arestas, pelo que um traçado não tem de ser rectangular.",
    },
    {
      title: "Vista explodida",
      body: "Módulo, caixa de controlo e estrutura separados, com a variante de face curva à esquerda a mostrar como o banco de módulos assenta numa estrutura dobrada.",
    },
  ],

  /* --- DOOH -------------------------------------------------------------- */
  "lx-ii-pro": [
    {
      title: "Cabinete, frente e verso",
      body: "O cabinete de exterior LXⅡ Pro com o corpo traseiro selado ao lado.",
    },
    {
      title: "Dissipação e revestimentos",
      body: "A traseira fundida funciona como dissipador. A LAMPRO publica tratamento anti-oxidação, anti-ácido, anti-corrosão e anti-sal sobre ela, que é o que de facto corrói um local costeiro ou à beira da estrada.",
    },
    {
      title: "Intempérie e fogo",
      body: "Estanque à água e ao pó contra areia e pólen levados pelo vento, e design resistente ao fogo. Ambos mostrados tal como o fabricante os ensaia e não como selo de classificação.",
    },
    {
      title: "Formatos de canto",
      body: "Construções em ângulo recto de 90° e canto redondo de 90°, com a disposição dos cabinetes atrás de cada uma. São estes os formatos com que se constroem os locais de 3D sem óculos.",
    },
  ],
  "ls-pro": [
    {
      title: "Cabinete, frente e verso",
      body: "O cabinete de exterior LS Pro com o lado de manutenção ao lado.",
    },
    {
      title: "Superfície",
      body: "A face acesa em potência máxima. Uma parede de media de exterior especifica-se pela forma como aguenta a luz do dia atrás dela, não pelo aspecto num pavilhão escuro.",
    },
    {
      title: "Resultados dos ensaios estruturais",
      body: "A LAMPRO publica o cabinete face a um requisito de vento de 150 km/h com resultado igual ou superior a 200 km/h, uma margem de 33%; e face a um requisito de compressão de 20 kN/m² com resultado de 33 kN/m², uma margem de 65%.",
    },
    {
      title: "Módulo IP67",
      body: "O próprio módulo é selado a IP67 — a classificação está no módulo, pelo que uma falha do cabinete não põe água directamente sobre as lâmpadas.",
    },
    {
      title: "Caixa de controlo horizontal",
      body: "A caixa de controlo monta na horizontal e pode ser operada pela frente ou pela traseira, o que decide se um totem em poste chega sequer a precisar de acesso traseiro.",
    },
  ],
  lst: [
    {
      title: "Cabinete",
      body: "O cabinete de exterior LST. A estrutura tem marca de verificação Intertek.",
    },
    {
      title: "Construção da lâmpada e do módulo",
      body: "Lâmpadas de fio de ouro, que o fabricante classifica com mais 40% de estabilidade do que fio de cobre; módulo em alumínio fundido para prevenção de incêndio; e o conjunto módulo-cabinete em que assenta a afirmação de resistência.",
    },
    {
      title: "Protecção contra entrada",
      body: "IP66 à frente e IP65 atrás, mostrado sob o ensaio de água do próprio fabricante.",
    },
    {
      title: "Desempenho publicado",
      body: "Brilho de 7.500–10.000 nits, actualização a 7.680 Hz, contraste até um máximo de 40.000:1 e escala de cinzentos de 14 bits, em P4.44, P6.67, P8 e P10.",
    },
    {
      title: "Instalado",
      body: "Instalações à beira da estrada, em cobertura e em fachada da mesma série.",
    },
  ],
  lsk: [
    {
      title: "Cabinete",
      body: "O cabinete de exterior LSK, frente e verso.",
    },
    {
      title: "Encaixe sem junta",
      body: "A série face a um ecrã convencional: a junta entre cabinetes é o critério por que se julga uma parede grande de exterior, por ser o único artefacto que não desaparece com a distância de visão.",
    },
    {
      title: "Ângulo de visão",
      body: "180° na horizontal e 160° na vertical. O fabricante publica estes valores especificamente para o LSK2.8.",
    },
    {
      title: "Intempérie",
      body: "Uma instalação em estádio sob chuva — a condição para que um ecrã desportivo de exterior é de facto especificado.",
    },
    {
      title: "Arrefecimento por convecção",
      body: "Fluxo de ar pelo interior do cabinete. Não há ventoinha no percurso, pelo que não há ventoinha que avarie nem nada a puxar pó para dentro do corpo.",
    },
    {
      title: "Instalado",
      body: "Instalações à beira da estrada e em fachada da mesma série.",
    },
  ],
};

export const frameCopyByLocale = { en, pt };
