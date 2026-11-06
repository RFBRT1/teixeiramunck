export interface PhotoItem {
  id: string;
  title: string;
  category: 'icamentos' | 'agro' | 'estruturas' | 'resgate' | 'industrial';
  imageUrl: string;
  equipment: string;
  loadType: string;
  weight: string;
  height: string;
  location: string;
  description: string;
  date: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  equipmentRecommended: string;
  whatsappMessage: string;
  badge?: string;
}

export interface CityCoverage {
  name: string;
  distanceFromSantaHelena: string;
  estimatedTime: string;
  highDemandServices: string;
}

export const COMPANY_INFO = {
  name: 'Teixeira Locação de Munck e Auto Socorro',
  shortName: 'Teixeira Munck',
  slogan: 'Força, Precisão e Agilidade em Içamentos e Resgate 24 Horas',
  contactPerson: 'Dirceu Teixeira Belai',
  city: 'Santa Helena de Goiás',
  state: 'GO',
  region: 'Sudoeste Goiano',
  address: 'Av. Brasil / Acesso GO-210, Setor Industrial',
  fullAddress: 'Av. Brasil, Lote 14 - Setor Industrial (Próximo ao trevo da GO-210), Santa Helena de Goiás - GO, 75920-000',
  phoneDisplay: '(64) 99236-1831',
  phoneEmergencyDisplay: '(64) 99236-1831',
  phoneLandlineDisplay: '(64) 3641-2890',
  whatsappRaw: '5564992361831',
  emergencyWhatsappRaw: '5564992361831',
  email: 'contato@teixeiramunck.com.br',
  operatingHours: 'Plantão de Auto Socorro e Içamentos Críticos 24h / Atendimento Comercial: Seg a Sáb 07:00 às 18:30',
  cnpj: '38.492.115/0001-84',
};

// Function to generate pre-filled WhatsApp link
export function createWhatsAppLink(message: string, isEmergency = false): string {
  const number = COMPANY_INFO.whatsappRaw;
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${number}?text=${encoded}`;
}

export const GALLERY_PHOTOS: PhotoItem[] = [
  {
    id: 'p1',
    title: 'Içamento e Montagem de Vigas Metálicas em Galpão Graneleiro',
    category: 'estruturas',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb180c5f2?auto=format&fit=crop&w=1200&q=80',
    equipment: 'Munck 45 Ton/Metro com Lança de 24m e Controle Remoto',
    loadType: 'Vigas de Aço ASTM A36 e Terças Estruturais',
    weight: '3.800 kg por viga',
    height: '18 metros de elevação',
    location: 'Rodovia GO-210, Santa Helena de Goiás - GO',
    description: 'Montagem ágil de tesouras metálicas para ampliação de armazém de grãos com operador certificado e cintas de amarração tubular de alta tenacidade.',
    date: 'Operação Recente'
  },
  {
    id: 'p2',
    title: 'Transbordo e Içamento de Plataforma de Corte para Colheitadeira',
    category: 'agro',
    imageUrl: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80',
    equipment: 'Caminhão Munck Traçado 6x4 35 Ton/Metro',
    loadType: 'Plataforma Draper 40 Pés para Safra de Soja',
    weight: '4.500 kg',
    height: 'Raio de 8 metros com patolamento estabilizado',
    location: 'Fazenda Santa Tereza, Zona Rural de Santa Helena de GO',
    description: 'Apoio logístico emergencial para troca de componentes em plena janela de colheita na região da Usina Santa Helena.',
    date: 'Safra 2025/2026'
  },
  {
    id: 'p3',
    title: 'Instalação de Transformador Trifásico em Usina de Bioenergia',
    category: 'industrial',
    imageUrl: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80',
    equipment: 'Munck Pesado Madal Palfinger 57 Ton/Metro',
    loadType: 'Transformador Elétrico de Alta Tensão 2500 kVA',
    weight: '7.800 kg',
    height: 'Elevação precisa sobre base de concreto',
    location: 'Distrito Industrial / Setor Usina, Santa Helena de Goiás',
    description: 'Manobra milimétrica de içamento e posicionamento dentro de subestação enclausurada com plano de rigging simplificado e seguro RCTR-C.',
    date: 'Operação Técnica'
  },
  {
    id: 'p4',
    title: 'Auto Socorro e Resgate Pesado de Caminhão Bitrem Carregado',
    category: 'resgate',
    imageUrl: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80',
    equipment: 'Guincho Pesado com Lança Hidráulica e Munck de Apoio',
    loadType: 'Cavalo Mecânico Scania + Semirreboque Graneleiro',
    weight: '45 Toneladas (PBTC)',
    height: 'Tracionamento com cabo de aço de 22mm e destombamento',
    location: 'BR-452 sentido Rio Verde / Santa Helena de Goiás',
    description: 'Atendimento do plantão 24h para desobstrução rápida de pista e preservação da integridade da carga agrícola.',
    date: 'Plantão 24 Horas'
  },
  {
    id: 'p5',
    title: 'Elevação e Posicionamento de Silo de Armazenagem de Rações',
    category: 'icamentos',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    equipment: 'Caminhão Munck 43 Ton/Metro com Jib Hidráulico',
    loadType: 'Módulo Cilíndrico de Silo Metálico',
    weight: '2.900 kg',
    height: '21 metros de alcance vertical',
    location: 'Propriedade Agropecuária - Região de Maurilândia / Santa Helena',
    description: 'Içamento vertical com uso de balancim especial para evitar ovalização ou amassamentos nas chapas corrugadas.',
    date: 'Concluído'
  },
  {
    id: 'p6',
    title: 'Descarga e Assentamento de Pilares e Painéis Pré-Moldados',
    category: 'estruturas',
    imageUrl: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=80',
    equipment: 'Munck Articulado 35t/m com Patolas Duplas Estendidas',
    loadType: 'Painéis e Vigas Pré-Fabricadas de Concreto',
    weight: '4.200 kg por elemento',
    height: 'Posicionamento em sapatas de fundação',
    location: 'Canteiro de Obras Comercial, Santa Helena de Goiás - GO',
    description: 'Descarga direta da carreta transportadora e assentamento no prumo exato sem retrabalho para a construtora.',
    date: 'Operação Recente'
  },
  {
    id: 'p7',
    title: 'Remoção e Transporte de Gerador Carenado para Pivô Central',
    category: 'agro',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    equipment: 'Caminhão Munck com Carroceria Carga Seca 7,20m',
    loadType: 'Grupo Gerador a Diesel Cummins 350 kVA',
    weight: '3.600 kg',
    height: 'Içamento com manilhas e laudos NR-11',
    location: 'Fazenda Irrigada, Turvelândia - GO',
    description: 'Remoção para manutenção preventiva na oficina e posterior devolução e reconexão técnica na área irrigada.',
    date: 'Safra Ativa'
  },
  {
    id: 'p8',
    title: 'Resgate com Plataforma Hidráulica Auto Socorro 24h',
    category: 'resgate',
    imageUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
    equipment: 'Caminhão Guincho Plataforma Hidráulica com Asa Delta',
    loadType: 'Caminhonetes Hilux / Utilitários Agrícolas e Caminhões Leves',
    weight: 'Capacidade de até 6.000 kg na plataforma',
    height: 'Plataforma rebaixada rente ao solo',
    location: 'GO-210, trecho Santa Helena / Rio Verde - GO',
    description: 'Transporte seguro e sem avarias para oficinas autorizadas e concessionárias da região.',
    date: 'Disponível 24h'
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'munck-locacao',
    title: 'Locação de Caminhão Munck',
    shortDesc: 'Munck articulado com operador qualificado para diárias, horas ou contratos mensais na indústria e no campo.',
    fullDesc: 'Disponibilizamos frota moderna de caminhões equipados com guindauto (munck) de diferentes capacidades (15 a 57 Ton/Metro), com patolamento pneumático, controle remoto sem fio e carroceria ampla para transporte simultâneo.',
    iconName: 'Truck',
    features: [
      'Operadores habilitados com NR-11, NR-12 e NR-35',
      'Controle remoto de última geração para manobras de precisão',
      'Locação por hora avulsa, diária completa ou contrato mensal',
      'Carroceria reforçada para transporte conjugado de carga'
    ],
    equipmentRecommended: 'Muncks de 15t/m até 57t/m com alcance vertical de até 26m',
    whatsappMessage: 'Olá! Gostaria de um orçamento para LOCAÇÃO DE CAMINHÃO MUNCK em Santa Helena de Goiás ou região.',
    badge: 'Mais Solicitado'
  },
  {
    id: 'icamentos-pesados',
    title: 'Içamentos e Movimentação Pesada',
    shortDesc: 'Elevação de transformadores, tanques, compressores, silos e maquinário industrial com rigor e segurança total.',
    fullDesc: 'Executamos serviços técnicos de içamento onde cada movimento exige cálculo milimétrico e estabilização absoluta. Cintas, laços e correntes certificados pelo Inmetro com laudos atualizados.',
    iconName: 'Anchor',
    features: [
      'Seguro de carga RCTR-C ativo durante todo o içamento',
      'Cintas e manilhas certificadas com plaqueta de rastreabilidade',
      'Plano de rigging e avaliação técnica prévia no local',
      'Capacidade para elevação em espaços confinados ou alturas elevadas'
    ],
    equipmentRecommended: 'Munck Pesado com Guincho de Cabo e Moitão',
    whatsappMessage: 'Olá! Preciso de orçamento para IÇAMENTO DE CARGA PESADA (equipamento/tanque/máquina).'
  },
  {
    id: 'montagem-estruturas',
    title: 'Montagem de Estruturas e Pré-Moldados',
    shortDesc: 'Apoio completo para construção civil, montagem de galpões metálicos, pré-moldados e coberturas industriais.',
    fullDesc: 'Atendemos construtoras e montadores de estruturas metálicas na descarga e montagem de pilares de concreto, treliças, caibros e telhas térmicas, acelerando o cronograma da obra com máxima segurança.',
    iconName: 'Building2',
    features: [
      'Agilidade no posicionamento direto de peças estruturais',
      'Redução de esforço manual e zero acidentes',
      'Apoio em galpões rurais, armazéns de grãos e silos',
      'Equipamentos com cesto aéreo opcional acoplável'
    ],
    equipmentRecommended: 'Munck com grande alcance de lança horizontal e vertical',
    whatsappMessage: 'Olá! Solicito orçamento para MONTAGEM DE ESTRUTURAS METÁLICAS / PRÉ-MOLDADOS.'
  },
  {
    id: 'apoio-agronegocio',
    title: 'Apoio ao Agronegócio & Usinas',
    shortDesc: 'Atendimento prioritário em fazendas: movimentação de colheitadeiras, plantadeiras, esteiras e pivôs centrais.',
    fullDesc: 'Santa Helena de Goiás é um dos maiores polos agrícolas do estado. Nossos muncks traçados acessam estradas de terra e lavouras para socorrer implementos parados na safra e atender manutenções em usinas sucroalcooleiras.',
    iconName: 'Wheat',
    features: [
      'Caminhões traçados 6x4 para acesso a estradas vicinais e terra',
      'Atendimento na entressafra e durante a colheita 24 horas',
      'Içamento de motores elétricos, motobombas e pivôs',
      'Documentação completa exigida para entrada em usinas (ASO, EPIs)'
    ],
    equipmentRecommended: 'Munck Traçado com tração reforçada e patolas longas',
    whatsappMessage: 'Olá! Preciso de um caminhão munck para SERVIÇO EM FAZENDA / USINA no agronegócio.',
    badge: 'Especialidade Regional'
  },
  {
    id: 'auto-socorro-guincho',
    title: 'Auto Socorro & Guincho 24 Horas',
    shortDesc: 'Resgate rodoviário e urbano para caminhões, carretas, tratores, maquinários, vans e caminhonetes.',
    fullDesc: 'Seu veículo quebrou ou sofreu avaria na GO-210, BR-452 ou estradas vicinais? Nosso plantão emergencial 24 horas atua com plataforma hidráulica e guincho pesado para desobstrução, destombamento e reboque seguro.',
    iconName: 'ShieldAlert',
    features: [
      'Plantão 24 horas todos os dias (incluindo feriados e finais de semana)',
      'Atendimento rápido em Santa Helena de Goiás e rodovias vizinhas',
      'Destombamento e resgate de cargas espalhadas',
      'Transporte para oficinas, pátios ou cidades vizinhas'
    ],
    equipmentRecommended: 'Plataforma Hidráulica com Guincho e Caminhão Lança Pesada',
    whatsappMessage: 'URGENTE: Preciso de AUTO SOCORRO / GUINCHO 24H agora! Seguem meus dados:',
    badge: 'Plantão 24h'
  },
  {
    id: 'cesto-aereo',
    title: 'Serviços com Cesto Aéreo (NR-35)',
    shortDesc: 'Trabalhos em altura com segurança: podas técnicas, iluminação industrial, pintura e manutenção predial.',
    fullDesc: 'Munck equipado com cesto acoplado com isolamento e cinto de segurança para elevação de profissionais em intervenções em galpões, postes de alta tensão, fachadas e inspeções.',
    iconName: 'ArrowUpCircle',
    features: [
      'Cesto inspecionado e conforme diretrizes da norma NR-35',
      'Substitui andaimes com velocidade e economia',
      'Válvula de retenção e trava de segurança anti-queda',
      'Ideal para manutenções rápidas em instalações industriais'
    ],
    equipmentRecommended: 'Cesto Aéreo Homologado duplo com comando no cesto',
    whatsappMessage: 'Olá! Gostaria de consultar orçamento para SERVIÇOS COM CESTO AÉREO em altura.'
  }
];

export const REGIONAL_CITIES: CityCoverage[] = [
  {
    name: 'Santa Helena de Goiás (Sede)',
    distanceFromSantaHelena: '0 km (Atendimento Imediato)',
    estimatedTime: '15 a 30 minutos',
    highDemandServices: 'Munck industrial, apoio a usinas, obras urbanas e auto socorro 24h'
  },
  {
    name: 'Rio Verde - GO',
    distanceFromSantaHelena: '38 km',
    estimatedTime: '35 a 45 minutos',
    highDemandServices: 'Transbordo agroindustrial, montagens de galpões e resgate na GO-210 / BR-452'
  },
  {
    name: 'Maurilândia - GO',
    distanceFromSantaHelena: '26 km',
    estimatedTime: '25 a 35 minutos',
    highDemandServices: 'Içamentos sucroalcooleiros, pivôs e apoio a fazendas'
  },
  {
    name: 'Turvelândia - GO',
    distanceFromSantaHelena: '34 km',
    estimatedTime: '30 a 40 minutos',
    highDemandServices: 'Maquinário agrícola, cana-de-açúcar e guincho rodoviário'
  },
  {
    name: 'Acreúna - GO',
    distanceFromSantaHelena: '62 km',
    estimatedTime: '45 a 60 minutos',
    highDemandServices: 'Remoções industriais, montagens de silos e auto socorro'
  },
  {
    name: 'Porteirão - GO',
    distanceFromSantaHelena: '58 km',
    estimatedTime: '45 a 55 minutos',
    highDemandServices: 'Apoio à colheita, transporte de defensivos e equipamentos'
  },
  {
    name: 'Santo Antônio da Barra - GO',
    distanceFromSantaHelena: '42 km',
    estimatedTime: '35 a 45 minutos',
    highDemandServices: 'Caminhão munck para pré-moldados e resgate rodoviário'
  },
  {
    name: 'Montividiu - GO',
    distanceFromSantaHelena: '78 km',
    estimatedTime: '60 a 75 minutos',
    highDemandServices: 'Contratos de safra, plantio e movimentação pesada'
  }
];

export const TRUST_PILLARS = [
  {
    icon: 'ShieldCheck',
    title: 'Operadores NR-11, 12 e 35',
    desc: 'Equipe altamente treinada e com certificados ativos, cumprindo todas as exigências das maiores usinas de Goiás.'
  },
  {
    icon: 'FileCheck',
    title: 'Seguro de Cargas RCTR-C',
    desc: 'Sua mercadoria, maquinário ou veículo 100% resguardados por apólices de seguro contra qualquer eventualidade.'
  },
  {
    icon: 'Clock',
    title: 'Plantão Emergencial 24h',
    desc: 'Atendimento dia e noite para remoções rodoviárias, tombamentos e socorro a quebras mecânicas na lavoura.'
  },
  {
    icon: 'Gauge',
    title: 'Frota Revisada com Laudo',
    desc: 'Caminhões e muncks com laudos de estanqueidade, cabos calibrados e manutenção preventiva rigorosa.'
  }
];

export const FAQS = [
  {
    q: 'Como funciona o cálculo do valor para locação do caminhão munck?',
    a: 'O orçamento pode ser calculado por hora de operação, por diária completa ou por empreitada fechada (para montagens e descarregamentos específicos). Levamos em conta o peso da carga, distância de alcance da lança, localização em Santa Helena ou municípios vizinhos e a complexidade do terreno.'
  },
  {
    q: 'Qual o tempo médio de resposta para o Auto Socorro 24h?',
    a: 'Em Santa Helena de Goiás, nosso tempo médio de chegada varia entre 15 e 30 minutos após a confirmação via WhatsApp. Em rodovias como a GO-210 ou cidades vizinhas como Maurilândia e Turvelândia, o deslocamento ocorre imediatamente.'
  },
  {
    q: 'Os operadores possuem a documentação exigida para entrar em Usinas e Indústrias?',
    a: 'Sim! Nossos operadores possuem ASO (Atestado de Saúde Ocupacional) em dia, treinamentos de NR-11 (Transporte e Movimentação de Cargas), NR-12 (Segurança em Máquinas) e NR-35 (Trabalho em Altura), além de EPIs completos.'
  },
  {
    q: 'Atendem propriedades rurais e fazendas com estradas de terra?',
    a: 'Com certeza! Dispomos de caminhões traçados com suspensão e patolamento reforçados, capacitados para entrar em lavouras de soja, milho, canaviais e pivôs sem risco de atolamento.'
  },
  {
    q: 'Quais as formas de pagamento disponíveis?',
    a: 'Aceitamos PIX com desconto, cartões de crédito e débito na maquininha móvel, e faturamento via boleto bancário para empresas, usinas e produtores rurais cadastrados.'
  }
];
