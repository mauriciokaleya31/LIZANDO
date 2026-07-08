/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, OperatingCountry, Statistic, WhyChooseUsItem, GalleryItem, Testimonial } from "../types";

export const SERVICES_DATA: Service[] = [
  {
    id: "importacao",
    title: "Importação Internacional",
    description: "Aquisição estratégica e segura de produtos, insumos e equipamentos dos principais mercados mundiais para o território nacional.",
    iconName: "Ship"
  },
  {
    id: "exportacao",
    title: "Exportação",
    description: "Promoção, estruturação aduaneira e distribuição eficiente de produtos nacionais para o exigente mercado internacional.",
    iconName: "Globe"
  },
  {
    id: "logistica",
    title: "Logística Internacional",
    description: "Coordenação logística de ponta a ponta que engloba transporte integrado e multimodal (marítimo, terrestre e aéreo).",
    iconName: "Truck"
  },
  {
    id: "procurement",
    title: "Procurement",
    description: "Pesquisa minuciosa de fornecedores globais, negociação de preços, homologação de produtos e aquisições corporativas eficientes.",
    iconName: "SearchCode"
  },
  {
    id: "consultoria",
    title: "Consultoria Comercial",
    description: "Assessoria estratégica avançada em negócios, regulações locais e internacionais, regimes aduaneiros e novos mercados.",
    iconName: "TrendingUp"
  },
  {
    id: "chain",
    title: "Gestão da Cadeia de Suprimentos",
    description: "Planeamento sofisticado, mitigação de riscos operacionais e total optimização de todos os fluxos de abastecimento corporativo.",
    iconName: "Network"
  }
];

export const COUNTRIES_DATA: OperatingCountry[] = [
  {
    name: "Angola",
    code: "AO",
    coordinates: { x: 50, y: 72 }, // Placed representing Africa south-west
    capital: "Luanda",
    importance: "Sede central da Lizando Lda. Centralizamos toda a operação logística de entrada, desembaraço aduaneiro e distribuição no continente africano."
  },
  {
    name: "Turquia",
    code: "TR",
    coordinates: { x: 53, y: 41 }, // Middle East / East Europe border
    capital: "Ancara / Istambul",
    importance: "Importante parceiro estratégico de maquinários industriais, têxteis finos de comércio e suprimentos de materiais para a construção civil."
  },
  {
    name: "Bélgica",
    code: "BE",
    coordinates: { x: 47, y: 31 }, // Western Europe
    capital: "Bruxelas / Antuérpia",
    importance: "Porta de entrada na União Europeia. Atua como o nosso hub logístico marítimo direto e distribuição de produtos de alto valor agregado."
  },
  {
    name: "China",
    code: "CN",
    coordinates: { x: 74, y: 44 }, // East Asia
    capital: "Pequim / Cantão",
    importance: "Principal parceiro mundial para manufatura em larga escala, equipamentos industriais pesados e soluções eletrónicas de última geração."
  },
  {
    name: "Emirados Árabes Unidos",
    code: "AE",
    coordinates: { x: 58, y: 47 }, // Gulf region
    capital: "Abu Dhabi / Dubai",
    importance: "Hub global para procurement corporativo, comércio internacional de commodities e pontes financeiras operacionais robustas."
  },
  {
    name: "Portugal",
    code: "PT",
    coordinates: { x: 43, y: 34 }, // SW Europe
    capital: "Lisboa / Porto",
    importance: "Eixo histórico e linguístico que facilita o intercâmbio de bens alimentares regulados, suprimentos técnicos e assessoria de negócios da UE."
  },
  {
    name: "África do Sul",
    code: "ZA",
    coordinates: { x: 52, y: 84 }, // Southern Africa
    capital: "Pretória / Joanesburgo",
    importance: "Parceiro do continente SADC para fornecimento de equipamentos agrícolas, autopeças, químicos e integração logística terrestre ágil."
  }
];

export const STATISTICS_DATA: Statistic[] = [
  {
    label: "Remessas Internacionais",
    value: 3,
    suffix: "+ Mil",
    description: "Milhares de toneladas de carga e contentores transportados em segurança."
  },
  {
    label: "Parceiros Comerciais",
    value: 10,
    suffix: "+ Grandes",
    description: "Grandes parcerias de trading, distribuição e fornecedores auditados mundialmente."
  },
  {
    label: "Países de Operação",
    value: 7,
    suffix: " Globais",
    description: "Presença activa com bases corporativas operacionais nos principais eixos mundiais."
  },
  {
    label: "Compromisso e Qualidade",
    value: 100,
    suffix: "%",
    description: "De satisfação e cumprimento irrepreensível de prazos e trâmites de importação."
  }
];

export const WHY_CHOOSE_US_DATA: WhyChooseUsItem[] = [
  {
    id: "exp",
    title: "Experiência Internacional",
    description: "Anos de actuação com profundo domínio de regimes alfandegários mundiais, minimizando atrasos e custos desnecessários em portos."
  },
  {
    id: "rede",
    title: "Rede Global de Fornecedores",
    description: "Acesso privilegiado a fabricantes diretos e fornecedores certificados na Europa, Ásia, Médio Oriente e América Latina."
  },
  {
    id: "sol",
    title: "Soluções Personalizadas",
    description: "Analisamos as suas necessidades específicas para propor rotas, prazos, e regimes tributários ideais para o seu modelo de negócio."
  },
  {
    id: "ent",
    title: "Entregas Seguras",
    description: "Trabalhamos em conjunto com as maiores seguradoras internacionais e armadores para dar garantia total de integridade para a sua carga."
  },
  {
    id: "trans",
    title: "Transparência Comercial",
    description: "Informações estruturadas de custos, relatórios claros de procurement e rastreamento constante do status de envio das suas importações."
  },
  {
    id: "eq",
    title: "Equipa Especializada",
    description: "Profissionais poliglotas altamente qualificados em comércio global, logística integrada e assessoria aduaneira dedicada."
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    category: "Porto de carga",
    title: "Atividade Portuária Profissional",
    imageUrl: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gal-2",
    category: "Navios de carga",
    title: "Navio Porta-Contentores Transoceânico",
    imageUrl: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gal-3",
    category: "Contentores",
    title: "Terminal de Armazenamento e Contentores",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gal-4",
    category: "Reuniões empresariais",
    title: "Negociações de Contratos Mundiais",
    imageUrl: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gal-5",
    category: "Pessoas africanas em escritórios modernos",
    title: "Reunião de Direção nos Escritórios da Lizando",
    imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gal-6",
    category: "Logística internacional",
    title: "Gestão Integrada de Logística Global",
    imageUrl: "https://images.unsplash.com/photo-1566576912321-d58def7a6088?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gal-7",
    category: "Transporte terrestre",
    title: "Distribuição Terrestre e Frota Pesada",
    imageUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gal-8",
    category: "Armazéns modernos",
    title: "Centros de Distribuição e Triagem",
    imageUrl: "https://images.unsplash.com/photo-1553413719-87587ef47cf7?auto=format&fit=crop&w=800&q=80"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    quote: "A Lizando tornou os nossos processos de importação mais rápidos e eficientes. A desalfandegação que antes levava semanas agora flui com total planeamento operacional no porto de Luanda.",
    author: "Dr. António Silva",
    role: "Diretor de Operações e Logística",
    company: "Angola Distribuidora Global S.A.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "test-2",
    quote: "Excelente parceiro para negócios internacionais. No nosso setor de alta tecnologia, a rapidez de procurement de peças substitutas na China é crítica, e a Lizando executa com maestria absoluta.",
    author: "Eng.ª Sandra Melo",
    role: "Head de Procurement e Suprimentos",
    company: "Global Tech Luanda",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "test-3",
    quote: "Sua dedicação na coordenação de cargas consolidadas vinda da Turquia e Portugal reduziu drasticamente nossos custos. A transparência na precificação de tarifas de frete é excelente.",
    author: "Dr. Francisco Van-Dúnem",
    role: "Administrador de Célula Fabril",
    company: "AngoIndústria Lda",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
  }
];
