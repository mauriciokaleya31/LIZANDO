/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
  iconName: string;
  imageUrl: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  specification?: string[];
}

export interface ProjectDetail {
  id: string;
  title: string;
  category: "Offshore" | "Industrial" | "Logística" | "Marítimo" | "Oil & Gas";
  client: string;
  location: string;
  year: string;
  servicesProvided: string[];
  description: string;
  imageUrl: string;
  beforeImageUrl?: string;
  afterImageUrl?: string;
}

export interface NewsPost {
  id: string;
  title: string;
  category: "Empresa" | "Oil & Gas" | "Indústria" | "Logística" | "Ship Chandling" | "Eventos" | "Certificações" | "Sustentabilidade";
  date: string;
  author: string;
  summary: string;
  content: string;
  imageUrl: string;
  gallery?: string[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

// ----------------------------------------------------------------------
// DATA DECLARATIONS
// ----------------------------------------------------------------------

export const SERVICES_DETAILED: ServiceDetail[] = [
  {
    id: "ship-chandling",
    title: "Ship Chandling",
    description: "Abastecimento completo de navios com provisões alimentares, consumíveis e sobressalentes técnicos.",
    longDescription: "A Lizando é especialista em prover serviços de excelência para embarcações em portos nacionais e águas territoriais angolanas. Oferecemos um portfólio completo que atende às mais exigentes diretrizes de saúde, segurança e conformidade internacional.",
    benefits: [
      "Alimentos frescos (frios, secos e congelados) com controle rigoroso de qualidade.",
      "Consumíveis de cabine, cozinha, convés e casa de máquinas.",
      "Peças de reposição técnicas certificadas para reparações de emergência.",
      "Atendimento contínuo de emergência 24 horas por dia, 7 dias por semana."
    ],
    iconName: "Anchor",
    imageUrl: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "oil-gas-support",
    title: "Oil & Gas Support",
    description: "Serviços especializados de suporte logístico terrestre, marítimo e alfandegário para operações petrolíferas.",
    longDescription: "Apoiamos as operações petrolíferas ao longo de toda a cadeia de exploração e produção. O nosso profundo conhecimento da indústria do petróleo e gás permite-nos responder de forma célere e segura a desafios complexos e de elevada responsabilidade.",
    benefits: [
      "Operação com total conformidade com os padrões regulatórios da ANPG.",
      "Logística integrada para plataformas petrolíferas onshore e offshore.",
      "Abastecimento especializado de materiais, sobressalentes e químicos de perfuração.",
      "Equipas experientes e certificadas para trabalhar em ambientes de alto risco."
    ],
    iconName: "Flame",
    imageUrl: "https://visa.onlyvibes.online/wp-content/uploads/2026/07/Oil-Gas-Support.png"
  },
  {
    id: "procurement-industrial",
    title: "Procurement & Industrial Supply",
    description: "Pesquisa, aquisição e fornecimento de sobressalentes, ferramentas e maquinários industriais de fabricantes mundiais.",
    longDescription: "Gerimos toda a cadeia de procurement internacional, negociando diretamente com fabricantes na Ásia, Europa e América. Asseguramos a homologação técnica, otimização de custos tributários e fretes eficientes para manter a sua indústria operando sem paragens indesejadas.",
    benefits: [
      "Homologação técnica de fabricantes internacionais rigorosamente auditados.",
      "Garantia de peças genuínas e maquinários industriais de última geração.",
      "Otimização tributária aduaneira e redução de custos logísticos.",
      "Acompanhamento em tempo real desde a ordem de compra até à entrega final."
    ],
    iconName: "SearchCode",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "catering-hospitality",
    title: "Catering & Hospitality",
    description: "Serviços premium de catering industrial e gestão hoteleira para acampamentos, plataformas e instalações remotas.",
    longDescription: "Oferecemos soluções integradas de alimentação e serviços domésticos para plataformas de petróleo, bases industriais e acampamentos em áreas remotas. Priorizamos a nutrição equilibrada, a segurança alimentar máxima e o bem-estar dos profissionais no terreno.",
    benefits: [
      "Ementas balanceadas criadas por nutricionistas certificados.",
      "Controlo rigoroso HACCP de qualidade alimentar.",
      "Serviços de lavandaria, limpeza industrial e gestão hoteleira de acampamentos.",
      "Fornecedores locais integrados para incentivar o desenvolvimento económico regional."
    ],
    iconName: "Utensils",
    imageUrl: "https://visa.onlyvibes.online/wp-content/uploads/2026/07/Catering-Hospitality.png"
  },
  {
    id: "logistica-integrada",
    title: "Logística Integrada",
    description: "Soluções completas de transporte multimodal, desembaraço aduaneiro e armazenagem segura de cargas complexas.",
    longDescription: "Nossas soluções englobam desalfandegamento ágil, transporte rodoviário, marítimo e aéreo coordenado de forma integrada. Dispomos de inteligência de processos para gerir fluxos de distribuição nacionais de maneira simplificada, segura e dentro do tempo acordado.",
    benefits: [
      "Desembaraço aduaneiro ágil coordenado por despachantes dedicados.",
      "Transporte rodoviário e distribuição capilar para todas as províncias angolanas.",
      "Armazenamento geral e frigorífico monitorizado com segurança 24/7.",
      "Gestão inteligente e consolidação de mercadorias internacionais."
    ],
    iconName: "Truck",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "rental-services",
    title: "Rental Services",
    description: "Aluguer de equipamentos pesados, geradores, contentores marítimos e frotas industriais de apoio.",
    longDescription: "Proporcionamos o aluguer flexível e escalável de ativos para projetos de construção civil, mineração e oil & gas. Todos os nossos equipamentos passam por inspeções preventivas regulares para garantir a máxima produtividade em qualquer frente de trabalho.",
    benefits: [
      "Frota diversificada: geradores, empilhadoras, gruas e contentores marítimos.",
      "Manutenção preventiva rigorosa e assistência técnica no local de trabalho.",
      "Contratos flexíveis de aluguer a curto, médio ou longo prazo.",
      "Equipamentos de alta performance de marcas de referência mundial."
    ],
    iconName: "Layers",
    imageUrl: "https://visa.onlyvibes.online/wp-content/uploads/2026/07/Rental-ServicesRental-Services.png"
  }
];

export const PRODUCT_CATEGORIES = [
  "Todos",
  "Equipamentos Marítimos",
  "Equipamentos Industriais",
  "Ferramentas",
  "Materiais Elétricos",
  "Materiais Mecânicos",
  "EPIs",
  "Produtos Alimentares",
  "Consumíveis",
  "Equipamentos de Segurança",
  "Equipamentos Petrolíferos",
  "Sobressalentes",
  "Produtos Químicos",
  "Material de Limpeza",
  "Equipamentos Logísticos"
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "prod-1",
    name: "Coletes Salva-vidas Solas Autoinufláveis",
    category: "Equipamentos de Segurança",
    description: "Equipamento de salvamento marítimo homologado internacionalmente pela convenção SOLAS, ideal para tripulações offshore.",
    imageUrl: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80",
    specification: ["Homologação: SOLAS / MED", "Flutuabilidade: 275N", "Ativação: Automática e Manual", "Material: Nylon balístico de alta visibilidade"]
  },
  {
    id: "prod-2",
    name: "Gerador Diesel Silenciado de 250kVA",
    category: "Equipamentos Industriais",
    description: "Grupo gerador insonorizado de alto rendimento, projetado para fornecimento contínuo de energia em bases industriais e plataformas offshore.",
    imageUrl: "https://visa.onlyvibes.online/wp-content/uploads/2026/07/Gerador-Diesel-Silenciado-de-250kVA.png",
    specification: ["Potência: 250 kVA", "Frequência: 50 Hz", "Combustível: Diesel", "Nível de Ruído: 65 dB(A) a 7m"]
  },
  {
    id: "prod-3",
    name: "EPI Completo Anti-Chamas e Arco Elétrico",
    category: "EPIs",
    description: "Farda protetora desenvolvida com tecidos retardantes de chama, ideal para eletricistas e operadores na indústria petroquímica.",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    specification: ["Proteção: Classe 2 contra arco elétrico", "Material: Kevlar/Nomex", "Normas: NFPA 70E, EN ISO 11612"]
  },
  {
    id: "prod-4",
    name: "Âncora de Alta Fixação HHP 500kg",
    category: "Equipamentos Marítimos",
    description: "Âncora de alta capacidade de fixação (HHP) em ligas de aço forjado para navios mercantes e barcaças operacionais.",
    imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    specification: ["Peso: 500 kg", "Material: Aço carbono forjado", "Certificado: IACS (DNV / LLOYDS)"]
  },
  {
    id: "prod-5",
    name: "Válvula de Controle de Fluxo para Alta Pressão",
    category: "Equipamentos Petrolíferos",
    description: "Válvulas borboleta e de esfera em aço inoxidável super duplex para refinação e fluxos de transporte de hidrocarbonetos.",
    imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    specification: ["Pressão de Trabalho: ANSI 1500", "Material: Aço Inoxidável Super Duplex", "Conexão: Flangeada ASME B16.5"]
  },
  {
    id: "prod-6",
    name: "Kit de Absorventes Químicos e Hidrocarbonetos 120L",
    category: "Produtos Químicos",
    description: "Kit de emergência para contenção rápida e recolha de derramamentos acidentais de óleos, solventes e químicos perigosos em solo ou água.",
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9d39d66e8?auto=format&fit=crop&w=800&q=80",
    specification: ["Capacidade de Absorção: 120 Litros", "Componentes: Almofadas, barreiras, folhas absorventes, EPIs de intervenção"]
  },
  {
    id: "prod-7",
    name: "Cabo de Aço Náutico Trançado Galvanizado",
    category: "Equipamentos Marítimos",
    description: "Cabos de aço de alta resistência, protegidos por galvanização reforçada contra corrosão salina, para amarração e reboque.",
    imageUrl: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80",
    specification: ["Diâmetro: 28 mm", "Construção: 6x36 + IWRC", "Carga de Rutura: 490 kN", "Acabamento: Galvanizado classe A"]
  },
  {
    id: "prod-8",
    name: "Bomba Hidráulica Centrífuga Industrial 75kW",
    category: "Equipamentos Industriais",
    description: "Bomba industrial para transferência de fluidos de alta viscosidade, equipada com motor elétrico trifásico de alta eficiência energética.",
    imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    specification: ["Potência do Motor: 75 kW", "Caudal Máximo: 220 m³/h", "Material do Impulsor: Bronze / Inox", "Proteção: IP55 Class F"]
  },
  {
    id: "prod-9",
    name: "Alimentos Frescos e Congelados para Bunkers",
    category: "Produtos Alimentares",
    description: "Provisões alimentares de alta qualidade, embaladas a vácuo e transportadas sob frio controlado para garantir a frescura no mar.",
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    specification: ["Certificação: HACCP", "Categorias: Carnes, vegetais, laticínios, peixes", "Armazenagem: Contentores térmicos frigoríficos"]
  },
  {
    id: "prod-10",
    name: "EPI Óculos de Proteção Balísticos com Lentes UV",
    category: "EPIs",
    description: "Óculos de proteção resistentes a impactos de alta velocidade, revestimento anti-riscos e proteção contra raios solares intensos.",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    specification: ["Normas: ANSI Z87.1, EN 166", "Proteção UV: 99.9%", "Tratamento: Anti-embaciamento e anti-riscos"]
  }
];

export const PROJECTS_DATA: ProjectDetail[] = [
  {
    id: "proj-1",
    title: "Suporte e Abastecimento de Navio-Sonda Block 15",
    category: "Oil & Gas",
    client: "Operadora de Petróleo Multinacional",
    location: "Soyo, Angola (Offshore)",
    year: "2025",
    servicesProvided: ["Ship Chandling", "Oil & Gas Support", "Catering & Hospitality"],
    description: "Cooperação bem-sucedida de trading e logística internacional, provendo apoio direto à tripulação do Navio-Sonda que operava no prestigiado Bloco 15 offshore angolano. O projeto consistiu no provisionamento total de alimentos congelados, EPIs, e substituição célere de peças mecânicas importadas de emergência, sem nenhuma perda de dia de trabalho (zero downtime).",
    imageUrl: "https://visa.onlyvibes.online/wp-content/uploads/2026/07/Suporte-e-Abastecimento-de-Navio-Sonda-Block-15.png",
    beforeImageUrl: "https://visa.onlyvibes.online/wp-content/uploads/2026/07/Suporte-e-Abastecimento-de-Navio-Sonda-Block-15.png",
    afterImageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-2",
    title: "Logística e Desembaraço de Parque Fotovoltaico de Caraculo",
    category: "Logística",
    client: "Consórcio de Energias Renováveis de Angola",
    location: "Namibe, Angola",
    year: "2024",
    servicesProvided: ["Logística Integrada", "Procurement & Industrial Supply"],
    description: "Fizemos o desembaraço aduaneiro completo e transporte rodoviário pesado de mais de 120 contentores contendo painéis solares, inversores e estruturas de suporte vindos da China diretamente para o Namibe. Assegurámos trâmites alfandegários simplificados em tempo recorde e entrega em segurança.",
    imageUrl: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80",
    beforeImageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    afterImageUrl: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-3",
    title: "Catering Industrial e Logística para Base de Apoio de Cabinda",
    category: "Industrial",
    client: "Empreiteiro Geral Petrolífero",
    location: "Malongo, Cabinda",
    year: "2025",
    servicesProvided: ["Catering & Hospitality", "Rental Services"],
    description: "Gestão completa dos serviços de hotelaria, fornecimento de ementas diárias equilibradas e lavandaria para um acampamento residencial de 250 engenheiros e técnicos de campo. Fornecemos também geradores industriais em regime de aluguer contínuo.",
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-4",
    title: "Abastecimento Tecnológico e Sobressalentes Náuticos no Porto de Luanda",
    category: "Marítimo",
    client: "Companhia de Navegação Internacional",
    location: "Terminal Marítimo de Luanda, Angola",
    year: "2024",
    servicesProvided: ["Ship Chandling", "Procurement & Industrial Supply"],
    description: "Abastecimento express de componentes técnicos e equipamentos de amarração SOLAS para um cargueiro de grande porte em paragem técnica no Porto de Luanda. O fornecimento foi importado e despachado em menos de 48 horas.",
    imageUrl: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80"
  }
];

export const NEWS_DATA: NewsPost[] = [
  {
    id: "news-1",
    title: "Lizando Reforça Linhas Logísticas de Soyo e Luanda para Apoio Marítimo",
    category: "Empresa",
    date: "12 Junho 2026",
    author: "Direção de Comunicação",
    summary: "A Lizando Lda anunciou a expansão dos seus serviços de apoio ao setor offshore, com novas instalações de armazenamento refrigerado no Soyo.",
    content: "Como parte do nosso plano contínuo de investimentos em Angola, temos o orgulho de anunciar que duplicámos a nossa capacidade de armazenamento de alimentos congelados e secos na região norte. Esta expansão permite que as operações de Ship Chandling sejam executadas de forma muito mais próxima dos blocos petrolíferos principais, reduzindo de forma drástica o tempo de trânsito e assegurando que os alimentos cheguem às plataformas com a máxima integridade e frescor.",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1553413719-87587ef47cf7?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "news-2",
    title: "O Papel Estratégico de Angola na Logística da Região SADC",
    category: "Logística",
    date: "02 Junho 2026",
    author: "Consultor Técnico Geral",
    summary: "As novas melhorias infraestruturais de portos e caminhos de ferro impulsionam o comércio na África Austral, abrindo portas comerciais críticas.",
    content: "O desenvolvimento do Corredor do Lobito e a modernização constante do Porto de Luanda estão a redefinir os fluxos comerciais na África Austral. A Lizando tem participado ativamente nestas rotas, facilitando processos de trânsito de mercadorias complexas provenientes da China, Turquia e União Europeia destinadas não apenas ao mercado nacional de Angola, mas também a países vizinhos sem acesso direto ao mar. A eficiência logística integrada tornou-se o principal motor de crescimento da economia.",
    imageUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "news-3",
    title: "Novas Regulações Aduaneiras e Desembaraço Simplificado em Angola",
    category: "Certificações",
    date: "18 Maio 2026",
    author: "Especialista Aduaneiro",
    summary: "Análise detalhada sobre as recentes diretrizes de importação facilitada e regimes de benefícios tributários industriais.",
    content: "A Administração Geral Tributária (AGT) implementou um conjunto de medidas que visam desburocratizar a importação de bens essenciais e sobressalentes para o setor produtivo. No artigo de hoje, a nossa equipa jurídica e aduaneira explica como a sua empresa pode beneficiar de isenções tributárias, desalfandegamento prévio e regimes preferenciais no âmbito de parcerias industriais em Angola. Facilitar os trâmites legais é o primeiro passo para o sucesso internacional.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "news-4",
    title: "Certificação da ANPG e o Compromisso com o Conteúdo Local",
    category: "Oil & Gas",
    date: "05 Maio 2026",
    author: "Diretor de Operações",
    summary: "Entenda por que a Lizando prioriza a valorização do capital humano angolano e o cumprimento rigoroso das leis de conteúdo local.",
    content: "A conformidade com os regulamentos da Agência Nacional de Petróleo, Gás e Biocombustíveis (ANPG) é a viga mestra de todas as nossas intervenções na área petrolífera. Comprometemo-nos firmemente com a contratação de talentos locais, a promoção de parcerias com pequenas e médias empresas angolanas e a formação contínua em segurança e qualidade (HACCP / ISO). Acreditamos que o verdadeiro desenvolvimento de Angola passa pela capacitação local e pela soberania industrial.",
    imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80"
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  { year: "2018", title: "Fundação da Lizando", description: "Início das atividades em Luanda com foco em assessoria aduaneira e representações comerciais locais." },
  { year: "2020", title: "Hub de Transportes", description: "Lançamento do serviço de logística integrada rodoviária nacional e consolidação de carga no porto." },
  { year: "2022", title: "Entrada no Offshore", description: "Início das operações de Ship Chandling de alimentos e EPIs, e certificações internacionais de qualidade." },
  { year: "2024", title: "Parcerias Globais", description: "Estabelecimento de rotas regulares com a China, Turquia e Portugal, e expansão de procurement tecnológico." },
  { year: "2026", title: "Expansão de Serviços e Certificações", description: "Acreditação completa pela ANPG para Oil & Gas Support e novos terminais de armazenamento dedicados no Soyo." }
];

export const TEAM_MEMBERS: TeamMember[] = [
  { name: "Dr. Adelino Lizando", role: "CEO & Fundador", imageUrl: "https://images.unsplash.com/photo-1507152832244-10d49c7def8f?auto=format&fit=crop&w=300&h=300&q=80" },
  { name: "Dra. Beatriz Santos", role: "Diretora de Operações Globais", imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300&q=80" },
  { name: "Eng. Cláudio Neto", role: "Diretor de Procurement Técnico", imageUrl: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=300&h=300&q=80" }
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: "Como funciona o processo de procurement internacional com a Lizando?",
    answer: "A nossa equipa localiza fabricantes certificados globalmente, negocia preços de fábrica, faz o controlo de qualidade na origem, consolida a mercadoria, organiza o frete internacional e trata de todo o desembaraço aduaneiro até à entrega final nas suas instalações em Angola."
  },
  {
    question: "A Lizando atende a navios fora do Porto de Luanda?",
    answer: "Sim, cobrimos portos de Luanda, Soyo, Lobito e Cabinda. Também efetuamos o fornecimento em regime 'Offshore / Anchorage' utilizando barcos de apoio dedicados para tripulações em águas territoriais."
  },
  {
    question: "Como é garantida a qualidade dos produtos alimentares no Ship Chandling?",
    answer: "Operamos em total conformidade com as regras HACCP. Dispomos de frota refrigerada monitorizada e armazéns térmicos modernos para que os alimentos frescos, secos e congelados não sofram ruturas de temperatura."
  },
  {
    question: "A empresa possui registos oficiais para operar no setor petrolífero em Angola?",
    answer: "Sim. A Lizando Lda está devidamente registada e qualificada junto da ANPG (Agência Nacional de Petróleo, Gás e Biocombustíveis) e de outras entidades reguladoras competentes do setor industrial angolano."
  }
];

export const GALLERY_DATA = [
  { id: "gal-1", title: "Operações Portuárias", category: "Marítimo", imageUrl: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80" },
  { id: "gal-2", title: "Catering Industrial", category: "Catering", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80" },
  { id: "gal-3", title: "Armazenamento", category: "Logística", imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" },
  { id: "gal-4", title: "Suporte Offshore", category: "Oil & Gas", imageUrl: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80" }
];
