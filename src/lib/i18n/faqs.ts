export type FaqItem = { q: string; a: string };
export type FaqGroup = { topic: string; items: FaqItem[] };
export type FaqBundle = {
  home: FaqItem[];
  contact: FaqItem[];
  dooh: FaqItem[];
  rental: FaqItem[];
  warranty: FaqItem[];
  groups: FaqGroup[];
};

/* The English side is the original copy from the build — specific, plainly
   written, clearly by someone who does this work. The Portuguese keeps that
   register: short sentences, no marketing padding, trade terms left in the
   form Portuguese AV suppliers actually use. */

const en: FaqBundle = {
  home: [
    {
      q: "Do I need a permit?",
      a: "Almost certainly yes. Any permanent outdoor sign requires municipal approval. We handle the entire submission package including stamped structural and electrical drawings. You sign the application. We manage the rest.",
    },
    {
      q: "What is the lead time?",
      a: "Standard lead time is eight to twelve weeks from deposit to delivery. Custom fabrication or large-scale DOOH deployments may extend that. We will give you a firm date in the quote, not an estimate.",
    },
    {
      q: "What software runs it?",
      a: "We supply and configure NovaStar or Brompton processing. The content management software is licensed to you. We train your team on-site during handover. If you can run a PowerPoint, you can run the display.",
    },
    {
      q: "What does the warranty cover?",
      a: "Five years on parts and labour for every panel we supply. The warranty covers manufacturing defects, premature pixel failure beyond the acceptable ISO threshold, and power supply faults. It does not cover physical impact damage.",
    },
    {
      q: "Do you offer financing?",
      a: "We work with several Canadian equipment financing partners. Terms typically range from twenty-four to sixty months. We can include the financing application with your quote package if you request it.",
    },
  ],
  contact: [
    {
      q: "What is the lead time?",
      a: "Typical lead time from signed order to installation is six to eight weeks. This includes structural engineering, permitting, fabrication and testing. Rush timelines can be discussed for rental and event deployments.",
    },
    {
      q: "How does site assessment work?",
      a: "An engineer visits your location to measure sightlines, ambient light and structural mounting points. We document power and data pathways. You receive a full report with pixel pitch and brightness recommendations within three business days.",
    },
    {
      q: "What do you need for a quote?",
      a: "We need the approximate display size, intended viewing distance and whether the installation is indoor or outdoor. A site address and a few photos of the proposed location help us return an accurate budget. The form on this page captures everything we require.",
    },
    {
      q: "Do you handle permits?",
      a: "Yes. We manage the full permit application with your municipality including structural drawings sealed by a professional engineer licensed in Ontario. This is standard in every fixed installation quote.",
    },
    {
      q: "What warranty do you offer?",
      a: "Our standard warranty covers parts and labour for three years. The real differentiator is lifetime service. We answer the phone, we stock spares in Ontario and we dispatch a technician when you need one.",
    },
  ],
  dooh: [
    {
      q: "What permits are required?",
      a: "Outdoor signage in Ontario requires municipal sign permits and may need MTO approval near provincial highways. CityScreen manages the full permit application, including structural drawings sealed by a professional engineer licensed in Ontario. We handle the process from submission to approval.",
    },
    {
      q: "How bright must it be?",
      a: "Direct sunlight demands a minimum of 5,000 nits for readable content. Our DOOH panels deliver up to 10,000 nits with automatic ambient light sensors that adjust output to meet municipal luminance bylaws. This prevents glare complaints while maintaining visibility.",
    },
    {
      q: "What about power consumption?",
      a: "A typical 14×48-foot roadside billboard draws between 40 and 60 amps at 240 V under full white load. Actual consumption is lower due to content variation and brightness modulation. We provide detailed load calculations for your electrical contractor and utility service application.",
    },
    {
      q: "How does connectivity work?",
      a: "Each display connects via cellular modem or hardwired fibre to our cloud-based CMS. You schedule creative, build playlists, and monitor panel health from a single dashboard. The system sends automatic alerts for any fault before it affects playback.",
    },
    {
      q: "Is 24/7 operation covered?",
      a: "Yes. Our warranty covers continuous operation including all components, power supplies, and receiving cards. We stock replacement modules in our Ontario warehouse. A service call typically happens within 24 hours, and we do not prorate coverage based on operating hours.",
    },
  ],
  rental: [
    {
      q: "Do you support cross-rentals?",
      a: "Yes. We regularly supply inventory to other AV companies when their own stock is committed. Panels arrive calibrated and flight-cased, ready to integrate with your existing rig.",
    },
    {
      q: "What is the lead time?",
      a: "Standard deployments require two weeks' notice. Large-scale festival builds may need four weeks for pre-production engineering and structural review. We always confirm availability within 24 hours of your inquiry.",
    },
    {
      q: "Is an on-site technician required?",
      a: "We include a CityScreen technician for the first day of build and show day as standard. For complex curved or multi-wall deployments, we recommend a dedicated tech for the full run. Your crew handles the rest.",
    },
    {
      q: "What is the weather contingency?",
      a: "All LRM panels carry an IP65 front rating for direct rain exposure. For mixed inventory outdoor shows, we provide a detailed wind-loading analysis and a rapid-strike plan if conditions exceed safe operating limits.",
    },
    {
      q: "What playback systems are compatible?",
      a: "Our processors accept standard SDI and HDMI inputs. We have tested compatibility with Barco E2, Analog Way Aquilon, and Resolume systems. NovaStar and Brompton processing are available depending on the series.",
    },
  ],
  warranty: [
    {
      q: "What is your average response time?",
      a: "We respond to service calls within four hours during business days. Critical failures on outdoor digital displays are addressed same-day. Our Ontario-based technicians are never more than a short drive from your site.",
    },
    {
      q: "How far do you travel?",
      a: "Our service radius covers all of Ontario from Windsor to Ottawa and north to Timmins. We do not subcontract. A CityScreen technician in a company vehicle arrives at your location every time.",
    },
    {
      q: "Is after-hours support available?",
      a: "Yes. We provide 24/7 emergency support for rental and staging clients during active events. Fixed installation clients receive priority scheduling during standard business hours with after-hours call-out available under service level agreements.",
    },
    {
      q: "Is the warranty transferable?",
      a: "The standard warranty stays with the original installation site. If you sell the property, we can transfer the remaining coverage to the new owner. Contact us to complete the paperwork before the sale closes.",
    },
    {
      q: "What SLA do rental clients get?",
      a: "Rental clients operate under a dedicated service level agreement guaranteeing on-site spares and a technician during the event. We stage backup modules at the venue. If a panel fails mid-show, we swap it before the audience notices.",
    },
  ],
  groups: [
    {
      topic: "Permits",
      items: [
        {
          q: "Do I need a permit?",
          a: "Almost certainly. Every municipality in Ontario has its own sign by-law governing size, brightness, and location. We manage the entire permit application on your behalf, from initial drawings to final approval.",
        },
        {
          q: "How long does approval take?",
          a: "Typical municipal review runs four to eight weeks. Complex sites or those requiring minor variances can extend the timeline. We submit early and follow up relentlessly.",
        },
        {
          q: "What about the MTO?",
          a: "Displays visible from a 400-series highway require a Ministry of Transportation permit. This is a separate application with strict criteria on messaging and dwell time. We handle it.",
        },
        {
          q: "Who prepares the drawings?",
          a: "Our engineering team produces stamped site plans, elevation drawings, and structural calculations. Nothing is outsourced. The package is complete when it lands on the planner's desk.",
        },
        {
          q: "Can you get denied?",
          a: "Yes. Some sites simply will not comply. We tell you that before you spend a dollar. Our site assessment identifies fatal flaws early so you can walk away clean.",
        },
      ],
    },
    {
      topic: "Timeline",
      items: [
        {
          q: "How long from order?",
          a: "A standard fixed installation runs ten to fourteen weeks from signed contract to commissioning. Custom fabrication or complex structural work adds time. We give you a firm schedule at deposit.",
        },
        {
          q: "What affects the schedule?",
          a: "Permit review is the biggest variable. Steel lead times and weather windows for outdoor pours also matter. We build float into the timeline for these known unknowns.",
        },
        {
          q: "Can you rush it?",
          a: "Sometimes. We carry inventory on common module types and can accelerate fabrication for a fee. But we will not cut corners on engineering review or municipal process.",
        },
        {
          q: "What happens on install day?",
          a: "A crew arrives with the pre-built structure, panels, and cabling. Most installations complete in one to three days. We do not leave until the display is calibrated and you have signed off.",
        },
        {
          q: "When can I use it?",
          a: "The display is operational at commissioning. We train your team on the content software that same day. You can be running creative before the truck leaves the lot.",
        },
      ],
    },
    {
      topic: "Content",
      items: [
        {
          q: "What software runs it?",
          a: "We supply NovaStar or Brompton control systems depending on the application. Both are industry standards. The software installs on any Windows machine and connects over your local network.",
        },
        {
          q: "Is it hard to update?",
          a: "No. If you can build a PowerPoint slide, you can manage the display. Drag and drop images or video into a playlist and hit publish. We train your staff until they are comfortable.",
        },
        {
          q: "Can I schedule content?",
          a: "Yes. Set dayparting rules for morning, afternoon, and evening. Schedule campaigns weeks in advance. The system runs unattended once configured.",
        },
        {
          q: "What about remote access?",
          a: "The controller sits on your network. Access it from any PC on that network or via secure VPN. We can also monitor display health remotely as part of a service agreement.",
        },
        {
          q: "Do you make content?",
          a: "We do not. We focus on the hardware and its performance. We can recommend several Ontario-based creative shops who understand the pixel pitch and resolution of your specific display.",
        },
      ],
    },
    {
      topic: "Warranty",
      items: [
        {
          q: "What does warranty cover?",
          a: "Our standard warranty covers parts and labour on the LED modules, power supplies, and receiving cards for five years. The steel structure carries a ten-year structural warranty. Terms are in plain English.",
        },
        {
          q: "What is lifetime service?",
          a: "After the warranty expires, we do not disappear. We stock modules for every system we have ever installed. Our service trucks are on the road in Ontario daily. You pay for parts and labour at a pre-agreed rate.",
        },
        {
          q: "How fast is response?",
          a: "We guarantee a technician on site within 48 hours for any critical failure during the warranty period. Most issues are diagnosed remotely and resolved same-day. We carry spare modules in our Ontario warehouse.",
        },
        {
          q: "What voids it?",
          a: "Physical damage, unauthorized modifications, or failure to maintain the display per our guidelines. The maintenance schedule is simple and we walk you through it at handover.",
        },
        {
          q: "Is it transferable?",
          a: "Yes. If you sell the building, the warranty transfers to the new owner. We just need written notice. The display is a capital asset and we treat it that way.",
        },
      ],
    },
    {
      topic: "Financing",
      items: [
        {
          q: "Do you offer leasing?",
          a: "Yes. We work with several Canadian equipment finance companies to structure operating leases or capital leases. Terms typically run 36 to 60 months with a buyout option at the end.",
        },
        {
          q: "What about municipalities?",
          a: "Municipal procurement often requires a different approach. We can structure the project to align with your fiscal year budgeting and have experience with RFP-based purchasing in Ontario.",
        },
        {
          q: "Is there a credit check?",
          a: "For leasing, yes. The finance company handles underwriting. Approval is typically fast for established businesses and institutions. We can provide a quote for outright purchase at any time.",
        },
        {
          q: "What are typical rates?",
          a: "Rates depend on the term, structure, and your credit profile. We do not quote rates until we understand the project scope. Expect competitive equipment finance terms comparable to a vehicle lease.",
        },
        {
          q: "Can I pay in stages?",
          a: "Our standard payment schedule is deposit, progress billing at fabrication, and final payment at commissioning. We can tailor this for approved institutional buyers.",
        },
      ],
    },
    {
      topic: "Engineering",
      items: [
        {
          q: "Do I need an engineer?",
          a: "Yes. Ontario building code requires a professional engineer to stamp structural drawings for any permanent outdoor display. Our P.Eng handles this in-house. It is not an extra line item.",
        },
        {
          q: "What about wind load?",
          a: "Every outdoor structure is engineered for the specific wind region per the Ontario building code. We calculate gust factors, exposure, and importance category. The steel is sized accordingly.",
        },
        {
          q: "What power do I need?",
          a: "We provide a full electrical load calculation during design. Most commercial displays require a dedicated 208 V or 600 V circuit. We coordinate with your electrician to ensure the panel has capacity.",
        },
        {
          q: "Can it go on my wall?",
          a: "Sometimes. We need to assess the existing structure. A masonry wall with proper anchoring can often support a lighter display. We will not hang weight on something we have not evaluated.",
        },
        {
          q: "Who pours the footing?",
          a: "We contract local concrete crews we trust. The footing spec comes from our engineer. We inspect the formwork and rebar before the pour. The foundation is not where you save money.",
        },
      ],
    },
  ],
};

const pt: FaqBundle = {
  home: [
    {
      q: "Preciso de licença?",
      a: "Quase de certeza que sim. Qualquer reclamo exterior permanente exige aprovação municipal. Tratamos de todo o processo de submissão, incluindo desenhos estruturais e elétricos carimbados. O cliente assina o requerimento. Nós tratamos do resto.",
    },
    {
      q: "Qual é o prazo de entrega?",
      a: "O prazo normal é de oito a doze semanas entre o sinal e a entrega. Fabrico à medida ou instalações DOOH de grande dimensão podem alargar esse prazo. Damos-lhe uma data firme no orçamento, não uma estimativa.",
    },
    {
      q: "Que software o controla?",
      a: "Fornecemos e configuramos processamento NovaStar ou Brompton. O software de gestão de conteúdos fica licenciado em seu nome. Damos formação à sua equipa no local, na entrega. Se sabe usar o PowerPoint, sabe usar o ecrã.",
    },
    {
      q: "O que cobre a garantia?",
      a: "Cinco anos de peças e mão de obra em todos os painéis que fornecemos. A garantia cobre defeitos de fabrico, falha prematura de píxeis acima do limiar ISO aceitável e avarias nas fontes de alimentação. Não cobre danos por impacto físico.",
    },
    {
      q: "Existe financiamento?",
      a: "Trabalhamos com vários parceiros canadianos de financiamento de equipamento. Os prazos vão normalmente de vinte e quatro a sessenta meses. Se pedir, incluímos a proposta de financiamento no dossiê do orçamento.",
    },
  ],
  contact: [
    {
      q: "Qual é o prazo de entrega?",
      a: "O prazo habitual entre a adjudicação e a instalação é de seis a oito semanas. Inclui engenharia estrutural, licenciamento, fabrico e ensaios. Prazos urgentes podem ser discutidos para aluguer e eventos.",
    },
    {
      q: "Como funciona a avaliação do local?",
      a: "Um engenheiro visita o local para medir linhas de visão, luz ambiente e pontos de fixação estrutural. Documentamos os percursos de energia e de dados. Recebe um relatório completo com recomendações de pixel pitch e luminosidade em três dias úteis.",
    },
    {
      q: "O que precisam para orçamentar?",
      a: "Precisamos da dimensão aproximada do ecrã, da distância de visualização prevista e de saber se a instalação é interior ou exterior. Uma morada e algumas fotografias do local ajudam-nos a devolver um valor rigoroso. O formulário desta página recolhe tudo o que é necessário.",
    },
    {
      q: "Tratam do licenciamento?",
      a: "Sim. Gerimos todo o pedido de licença junto do município, incluindo desenhos estruturais carimbados por um engenheiro licenciado no Ontário. Isto é padrão em qualquer orçamento de instalação fixa.",
    },
    {
      q: "Que garantia oferecem?",
      a: "A nossa garantia padrão cobre peças e mão de obra durante três anos. O verdadeiro diferencial é a assistência vitalícia. Atendemos o telefone, temos peças em stock no Ontário e enviamos um técnico quando precisa.",
    },
  ],
  dooh: [
    {
      q: "Que licenças são precisas?",
      a: "A sinalética exterior no Ontário exige licenças municipais e pode exigir aprovação do MTO junto de autoestradas provinciais. A CityScreen gere todo o pedido, incluindo desenhos estruturais carimbados por um engenheiro licenciado no Ontário. Tratamos do processo, da submissão à aprovação.",
    },
    {
      q: "Que luminosidade é necessária?",
      a: "Sob sol direto são necessários no mínimo 5 000 nits para conteúdo legível. Os nossos painéis DOOH chegam a 10 000 nits, com sensores de luz ambiente que ajustam a saída para cumprir os regulamentos municipais de luminância. Isto evita queixas de encandeamento sem perder visibilidade.",
    },
    {
      q: "E o consumo de energia?",
      a: "Um outdoor de estrada típico de 14×48 pés consome entre 40 e 60 amperes a 240 V com carga branca total. O consumo real é inferior, devido à variação de conteúdo e à modulação de luminosidade. Fornecemos cálculos de carga detalhados para o seu eletricista e para o pedido de ligação à rede.",
    },
    {
      q: "Como funciona a ligação?",
      a: "Cada ecrã liga por modem celular ou fibra dedicada ao nosso CMS na nuvem. Programa criatividades, cria listas de reprodução e monitoriza o estado dos painéis a partir de um único painel de controlo. O sistema envia alertas automáticos de qualquer falha antes que afete a emissão.",
    },
    {
      q: "O funcionamento 24/7 está coberto?",
      a: "Sim. A garantia cobre funcionamento contínuo, incluindo todos os componentes, fontes de alimentação e placas recetoras. Temos módulos de substituição no nosso armazém no Ontário. Uma intervenção acontece normalmente em 24 horas e não reduzimos a cobertura em função das horas de funcionamento.",
    },
  ],
  rental: [
    {
      q: "Fazem subaluguer a outras empresas?",
      a: "Sim. Fornecemos regularmente material a outras empresas de audiovisual quando o stock próprio está comprometido. Os painéis chegam calibrados e em caixas de transporte, prontos a integrar no equipamento existente.",
    },
    {
      q: "Qual é o prazo de reserva?",
      a: "As montagens normais exigem duas semanas de antecedência. Construções de grande dimensão em festivais podem precisar de quatro semanas para engenharia de pré-produção e verificação estrutural. Confirmamos sempre a disponibilidade nas 24 horas seguintes ao pedido.",
    },
    {
      q: "É preciso técnico no local?",
      a: "Incluímos por norma um técnico da CityScreen no primeiro dia de montagem e no dia do espetáculo. Em montagens curvas ou com várias paredes, recomendamos um técnico dedicado durante todo o período. A sua equipa trata do resto.",
    },
    {
      q: "Qual é o plano para o mau tempo?",
      a: "Todos os painéis LRM têm classificação IP65 na frente, para exposição direta à chuva. Em espetáculos exteriores com material misto, fornecemos uma análise detalhada de carga de vento e um plano de desmontagem rápida caso as condições ultrapassem os limites seguros.",
    },
    {
      q: "Que sistemas de reprodução são compatíveis?",
      a: "Os nossos processadores aceitam entradas SDI e HDMI padrão. Testámos a compatibilidade com sistemas Barco E2, Analog Way Aquilon e Resolume. Há processamento NovaStar e Brompton disponível consoante a série.",
    },
  ],
  warranty: [
    {
      q: "Qual é o tempo médio de resposta?",
      a: "Respondemos a pedidos de assistência em quatro horas em dias úteis. Falhas críticas em ecrãs digitais exteriores são resolvidas no próprio dia. Os nossos técnicos, sediados no Ontário, estão sempre a curta distância do seu local.",
    },
    {
      q: "Até onde se deslocam?",
      a: "O nosso raio de assistência cobre todo o Ontário, de Windsor a Otava e a norte até Timmins. Não subcontratamos. Chega sempre um técnico da CityScreen numa viatura da empresa.",
    },
    {
      q: "Existe apoio fora de horas?",
      a: "Sim. Prestamos apoio de emergência 24/7 a clientes de aluguer e montagem durante eventos ativos. Os clientes de instalação fixa têm prioridade de agendamento em horário normal, com deslocação fora de horas disponível ao abrigo de acordos de nível de serviço.",
    },
    {
      q: "A garantia é transmissível?",
      a: "A garantia padrão fica associada ao local original de instalação. Se vender o imóvel, podemos transferir a cobertura remanescente para o novo proprietário. Contacte-nos para tratar da documentação antes da escritura.",
    },
    {
      q: "Que SLA têm os clientes de aluguer?",
      a: "Os clientes de aluguer operam ao abrigo de um acordo de nível de serviço dedicado que garante peças no local e um técnico durante o evento. Deixamos módulos de reserva no recinto. Se um painel falhar a meio do espetáculo, substituímo-lo antes de o público reparar.",
    },
  ],
  groups: [
    {
      topic: "Licenciamento",
      items: [
        {
          q: "Preciso de licença?",
          a: "Quase de certeza. Cada município do Ontário tem o seu próprio regulamento de reclamos, que rege dimensão, luminosidade e localização. Gerimos todo o pedido de licença em seu nome, dos primeiros desenhos à aprovação final.",
        },
        {
          q: "Quanto tempo demora a aprovação?",
          a: "A apreciação municipal habitual demora de quatro a oito semanas. Locais complexos ou que exijam pequenas derrogações podem alargar o prazo. Submetemos cedo e insistimos sem descanso.",
        },
        {
          q: "E o MTO?",
          a: "Ecrãs visíveis a partir de uma autoestrada da série 400 exigem licença do Ministério dos Transportes. É um pedido separado, com critérios rigorosos quanto à mensagem e ao tempo de exposição. Nós tratamos disso.",
        },
        {
          q: "Quem prepara os desenhos?",
          a: "A nossa equipa de engenharia produz plantas de implantação, alçados e cálculos estruturais carimbados. Nada é subcontratado. O dossiê está completo quando chega à secretária do técnico da câmara.",
        },
        {
          q: "O pedido pode ser recusado?",
          a: "Pode. Há locais que simplesmente não cumprem. Dizemos-lho antes de gastar um cêntimo. A nossa avaliação identifica cedo os impedimentos, para que possa desistir sem prejuízo.",
        },
      ],
    },
    {
      topic: "Prazos",
      items: [
        {
          q: "Quanto tempo desde a adjudicação?",
          a: "Uma instalação fixa normal demora de dez a catorze semanas entre a assinatura do contrato e o comissionamento. Fabrico à medida ou trabalho estrutural complexo acrescentam tempo. Damos-lhe um calendário firme no sinal.",
        },
        {
          q: "O que afeta o calendário?",
          a: "A apreciação da licença é a maior variável. Os prazos do aço e as janelas de bom tempo para betonagens exteriores também pesam. Incluímos folga no calendário para estes imprevistos conhecidos.",
        },
        {
          q: "É possível acelerar?",
          a: "Por vezes. Temos stock dos módulos mais correntes e podemos acelerar o fabrico mediante custo. Mas não cortamos caminho na revisão de engenharia nem no processo camarário.",
        },
        {
          q: "O que acontece no dia da instalação?",
          a: "Chega uma equipa com a estrutura pré-fabricada, os painéis e a cablagem. A maioria das instalações fica concluída em um a três dias. Não saímos enquanto o ecrã não estiver calibrado e o cliente não tiver dado o aceite.",
        },
        {
          q: "Quando posso começar a usar?",
          a: "O ecrã fica operacional no comissionamento. Damos formação à sua equipa no software de conteúdos nesse mesmo dia. Pode estar a passar criatividades antes de a carrinha sair do local.",
        },
      ],
    },
    {
      topic: "Conteúdos",
      items: [
        {
          q: "Que software o controla?",
          a: "Fornecemos sistemas de controlo NovaStar ou Brompton consoante a aplicação. Ambos são referência no setor. O software instala-se em qualquer máquina Windows e liga através da sua rede local.",
        },
        {
          q: "É difícil de atualizar?",
          a: "Não. Se sabe fazer um diapositivo em PowerPoint, sabe gerir o ecrã. Arraste imagens ou vídeo para uma lista de reprodução e publique. Damos formação à sua equipa até estarem à vontade.",
        },
        {
          q: "Posso programar conteúdos?",
          a: "Sim. Defina regras por período do dia para manhã, tarde e noite. Programe campanhas com semanas de antecedência. Depois de configurado, o sistema funciona sem vigilância.",
        },
        {
          q: "E o acesso remoto?",
          a: "O controlador fica na sua rede. Aceda a partir de qualquer PC dessa rede ou por VPN segura. Também podemos monitorizar remotamente o estado do ecrã no âmbito de um contrato de assistência.",
        },
        {
          q: "Produzem conteúdos?",
          a: "Não. Concentramo-nos no equipamento e no seu desempenho. Podemos recomendar várias agências criativas no Ontário que percebem o pixel pitch e a resolução do seu ecrã em concreto.",
        },
      ],
    },
    {
      topic: "Garantia",
      items: [
        {
          q: "O que cobre a garantia?",
          a: "A garantia padrão cobre peças e mão de obra nos módulos LED, fontes de alimentação e placas recetoras durante cinco anos. A estrutura em aço tem garantia estrutural de dez anos. As condições estão escritas em linguagem simples.",
        },
        {
          q: "O que é a assistência vitalícia?",
          a: "Quando a garantia termina, não desaparecemos. Temos em stock módulos de todos os sistemas que alguma vez instalámos. As nossas viaturas de assistência andam na estrada no Ontário todos os dias. Paga peças e mão de obra a um preço acordado previamente.",
        },
        {
          q: "Qual é a rapidez de resposta?",
          a: "Garantimos um técnico no local em 48 horas para qualquer falha crítica durante o período de garantia. A maioria das avarias é diagnosticada remotamente e resolvida no próprio dia. Temos módulos de reserva no nosso armazém do Ontário.",
        },
        {
          q: "O que anula a garantia?",
          a: "Danos físicos, alterações não autorizadas ou falta de manutenção segundo as nossas instruções. O plano de manutenção é simples e explicamo-lo na entrega.",
        },
        {
          q: "É transmissível?",
          a: "Sim. Se vender o edifício, a garantia transfere-se para o novo proprietário. Só precisamos de aviso por escrito. O ecrã é um ativo de capital e tratamo-lo como tal.",
        },
      ],
    },
    {
      topic: "Financiamento",
      items: [
        {
          q: "Existe locação?",
          a: "Sim. Trabalhamos com várias financeiras canadianas de equipamento para estruturar locação operacional ou financeira. Os prazos vão normalmente de 36 a 60 meses, com opção de compra no final.",
        },
        {
          q: "E no caso de municípios?",
          a: "A contratação pública exige muitas vezes uma abordagem diferente. Podemos estruturar o projeto para acompanhar o seu ano orçamental e temos experiência em aquisições por concurso no Ontário.",
        },
        {
          q: "Há análise de crédito?",
          a: "Na locação, há. A financeira trata da análise de risco. A aprovação é normalmente rápida para empresas e instituições estabelecidas. Podemos apresentar orçamento para compra direta a qualquer momento.",
        },
        {
          q: "Quais são as taxas habituais?",
          a: "As taxas dependem do prazo, da estrutura e do seu perfil de crédito. Não indicamos taxas antes de perceber o âmbito do projeto. Conte com condições competitivas, comparáveis a uma locação automóvel.",
        },
        {
          q: "Posso pagar por fases?",
          a: "O nosso plano de pagamento padrão é sinal, faturação intercalar no fabrico e pagamento final no comissionamento. Podemos ajustá-lo para compradores institucionais aprovados.",
        },
      ],
    },
    {
      topic: "Engenharia",
      items: [
        {
          q: "Preciso de um engenheiro?",
          a: "Sim. O código de construção do Ontário exige que um engenheiro carimbe os desenhos estruturais de qualquer ecrã exterior permanente. O nosso engenheiro trata disso internamente. Não é uma rubrica extra.",
        },
        {
          q: "E a carga de vento?",
          a: "Cada estrutura exterior é calculada para a região de vento específica, segundo o código de construção do Ontário. Calculamos fatores de rajada, exposição e categoria de importância. O aço é dimensionado em conformidade.",
        },
        {
          q: "Que potência é necessária?",
          a: "Fornecemos um cálculo completo de carga elétrica durante o projeto. A maioria dos ecrãs comerciais exige um circuito dedicado de 208 V ou 600 V. Articulamos com o seu eletricista para garantir que o quadro tem capacidade.",
        },
        {
          q: "Pode ser montado na minha parede?",
          a: "Por vezes. Temos de avaliar a estrutura existente. Uma parede de alvenaria com fixação adequada consegue muitas vezes suportar um ecrã mais leve. Não penduramos peso em nada que não tenhamos avaliado.",
        },
        {
          q: "Quem executa a fundação?",
          a: "Contratamos equipas locais de betão em que confiamos. A especificação da sapata vem do nosso engenheiro. Inspecionamos a cofragem e a armadura antes da betonagem. A fundação não é onde se poupa dinheiro.",
        },
      ],
    },
  ],
};

export const faqsByLocale = { en, pt };
