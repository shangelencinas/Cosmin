export interface ServiceItem {
  id: string;
  title: string;
  category: 'mining' | 'industrial';
  shortDesc: string;
  longDesc: string;
  bullets: string[];
  specs?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  bullets: string[];
  imageIdx: number; // reference of the generated high quality images
  tag: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'permisos',
    title: 'Gestión de Permisos',
    category: 'mining',
    shortDesc: 'Trámites periciales y licencias gubernamentales para actividades mineras de gran escala.',
    longDesc: 'Gestionamos permisos y licencias ambientales, de explosivos y de ocupación ante dependencias clave como la Secretaría de Economía (SE), SEDENA, SEDATU y SEMARNAT, asegurando cumplimiento normativo estricto.',
    bullets: [
      'Tramitación de permisos de uso de explosivos ante SEDENA.',
      'Dictámenes de impacto ambiental y autorizaciones de SEMARNAT.',
      'Trabajos periciales mineros certificados.',
      'Negociaciones de ocupación superficial ante SEDATU y ejidos.'
    ],
    specs: 'Cumplimiento normativo 100% garantizado'
  },
  {
    id: 'evaluacion',
    title: 'Evaluación de Proyectos Mineros',
    category: 'mining',
    shortDesc: 'Estudios profundos de viabilidad y prefactibilidad económica y técnica.',
    longDesc: 'Analizamos yacimientos y prospectos mineros para estructurar modelos de prefactibilidad y factibilidad. Ofrecemos a los inversionistas certeza absoluta sobre el valor de recuperación del activo.',
    bullets: [
      'Modelado de recursos económicos recuperables.',
      'Análisis de costo-beneficio CAPEX / OPEX.',
      'Evaluación de riesgos geológicos e hidrológicos.',
      'Estudios de prefactibilidad alineados a estándares internacionales.'
    ],
    specs: 'Modelos financieros de alta precisión'
  },
  {
    id: 'servicios-tecnicos',
    title: 'Servicios Técnicos Especializados',
    category: 'mining',
    shortDesc: 'Asesoría geológica avanzada, control de minado y supervisión de obra subterránea.',
    longDesc: 'Ingeniería geológica integrada para optimizar la explotación. Ofrecemos mapeos geológicos de alta resolución, geoquímica, control de leyes y calibración fina de equipos.',
    bullets: [
      'Mapeo geológico sistemático y muestreo geoquímico.',
      'Control de calidad de leyes (QA/QC) en tiempo real.',
      'Planificación y diseño de obra subterránea y rajo abierto.',
      'Supervisión técnica de frentes de minado.'
    ],
    specs: 'Ingeniería geológica de campo permanente'
  },
  {
    id: 'exploracion',
    title: 'Exploración y Estimación de Reservas',
    category: 'mining',
    shortDesc: 'Métodos geofísicos avanzados y campañas de barrenación sistemática.',
    longDesc: 'Ejecutamos programas integrales de exploración geofísica y diamantina. Modelamos cuerpos mineralizados en 3D para certificar el tonelaje y ley de las reservas.',
    bullets: [
      'Estudios geofísicos (magnetometría, resistividad y polarización inducida).',
      'Diseño y supervisión de campañas de barrenación con diamante y aire reverso.',
      'Modelado geológico tridimensional en softwares especializados.',
      'Estimación de recursos y reservas certificables.'
    ],
    specs: 'Precisión con soporte geofísico de última generación'
  },
  {
    id: 'plantas',
    title: 'Diseño y Fabricación de Plantas',
    category: 'mining',
    shortDesc: 'Ingeniería a la medida para el procesamiento y beneficio metalúrgico.',
    longDesc: 'Conceptualización, diseño mecánico e instalación de plantas de beneficio. Nos adaptamos a las características mineralógicas específicas de su yacimiento para maximizar recuperaciones.',
    bullets: [
      'Flujos de proceso para flotación, lixiviación y concentración gravimétrica.',
      'Cálculo y dimensionamiento de trituradoras, molinos y celdas.',
      'Montaje industrial de estructuras portantes y tolvas.',
      'Puesta en marcha y optimización metalúrgica.'
    ],
    specs: 'Estructuración modular escalable'
  },
  {
    id: 'comercializacion',
    title: 'Comercialización de Concentrados',
    category: 'mining',
    shortDesc: 'Facilitación de contratos de compraventa y logística internacional segura.',
    longDesc: 'Asesoramos en la valorización comercial de concentrados mineros. Estructuramos contratos favorables y coordinamos la cadena logística para envíos de minerales de alta ley.',
    bullets: [
      'Asesoría y negociación de contratos de maquila con fundidoras.',
      'Cálculo de penalizaciones y bonificaciones en concentrados.',
      'Coordinación de fletes y logística blindada nacional e internacional.',
      'Gestión aduanera y auditorías de pesaje e inspección.'
    ],
    specs: 'Maximización del valor neto fundible (NSR)'
  },
  {
    id: 'termofusion',
    title: 'Termofusión de Tuberías',
    category: 'industrial',
    shortDesc: 'Instalaciones hidráulicas de alta resistencia desde 2 hasta 63 pulgadas.',
    longDesc: 'Servicio altamente especializado de soldadura por termofusión para la conducción segura de fluidos en minería e infraestructura civil utilizando tuberías de polietileno de alta densidad (HDPE).',
    bullets: [
      'Termofusión y electrofusión de tuberías HDPE a tope.',
      'Certificación de uniones hidráulicas de servicio pesado.',
      'Conducción de jales, agua de proceso y soluciones ácidas.',
      'Operadores calificados y equipos calibrados de alta gama.'
    ],
    specs: 'Diámetros de 2 y hasta 63 pulgadas certificados'
  },
  {
    id: 'obra-civil',
    title: 'Obra Civil y Movimiento de Tierras',
    category: 'industrial',
    shortDesc: 'Construcción pesada, accesos mineros, naves industriales y puentes vialidades.',
    longDesc: 'Estructuramos las bases físicas para las operaciones mineras e industriales. Realizamos desmontes, excavaciones, terraplenes e infraestructura duradera en terrenos hostiles.',
    bullets: [
      'Caminos de acceso para transporte pesado y vialidades.',
      'Cimentaciones especiales para maquinaria pesada.',
      'Naves industriales de gran escala y almacenes de reactivos.',
      'Construcción civil de presas de jales y piletas de lixiviación.'
    ],
    specs: 'Infraestructura robusta para entornos de alta montaña'
  },
  {
    id: 'metalmecanica',
    title: 'Metalmecánica Certificada',
    category: 'industrial',
    shortDesc: 'Fabricación calificada de silos, tolvas, chutes y tanques de proceso.',
    longDesc: 'Brindamos servicio de herrería y pailería pesada. Contamos con técnicos certificados en procesos de soldadura estructural de alta exigencia mecánica.',
    bullets: [
      'Cálculo estructural y fabricación de silos de gran capacidad.',
      'Revestimiento de chutes y tolvas con placas antidesgaste.',
      'Instalación de tuberías de acero al carbón e inoxidable.',
      'Procedimiento de soldadura AWS certificado y pruebas no destructivas.'
    ],
    specs: 'Técnicos certificados AWS'
  },
  {
    id: 'renta-espacios',
    title: 'Movilidad Civil y Equipamiento Pesado',
    category: 'industrial',
    shortDesc: 'Venta y renta de campamentos modulares oficinas y bodegas móviles.',
    longDesc: 'Garantizamos habitabilidad y operatividad inmediata en sitios remotos. Oficinas móviles, dormitorios ejidales, almacenes y maquinaria pesada con alto estándar de mantenimiento.',
    bullets: [
      'Módulos habitables y comedores industriales para campamentos mineros.',
      'Oficinas móviles equipadas con aislamiento térmico premium.',
      'Renta y logística de maquinaria pesada para movimiento de tierras.',
      'Soporte técnico y mantenimiento en sitio 24/7.'
    ],
    specs: 'Disponibilidad inmediata para despliegue en campo'
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: 'cascabel',
    title: 'Minera Cascabel, S.A. de C.V.',
    location: 'México',
    tag: 'Servicios Técnicos & Legales',
    bullets: [
      'Estudios cartográficos de precisión y delimitación jurídica de concesiones.',
      'Trabajos periciales para regularización de fondos mineros ante SE.',
      'Coordinación de 8 peritos especializados en campañas de exploración diamantina.',
      'Auditorías e informes técnicos trimestrales con 100% de aprobación gubernamental.'
    ],
    imageIdx: 0 // cosmin_hero
  },
  {
    id: 'three-saint',
    title: 'Minera Three Saint Mine',
    location: 'Arivechi, Sonora',
    tag: 'Exploración & Legal',
    bullets: [
      'Resolución técnica legal de títulos mineros e integración de ejidos.',
      'Obtención de permisos de uso industrial de explosivos ante SEDENA.',
      'Levantamiento topográfico tridimensional y planificación de túnel de acceso comercial.',
      'Servicios de mapeo petrográfico estructural y selección de frentes de explotación.'
    ],
    imageIdx: 2 // cosmin_subterranean
  },
  {
    id: 'conagua',
    title: 'Proyecto Acueducto Yaqui',
    location: 'Obregón, Sonora',
    tag: 'Termofusión & Obra Hidráulica',
    bullets: [
      'Suministro e instalación por termofusión de ductos HDPE de diámetros de 12 a 63 pulgadas.',
      'Trazado topográfico satelital y excavaciones en terrenos rocosos.',
      'Alineación hidráulica y pruebas de presión del sistema.',
      'Despliegue de maquinaria pesada y personal civil bajo estrictas normas de seguridad.'
    ],
    imageIdx: 3 // cosmin_laboratorio
  },
  {
    id: 'greath-panter',
    title: 'Greath Panther Silver',
    location: 'Sonora, México',
    tag: 'Servicios Geológicos & Reservas',
    bullets: [
      'Digitalización y modelado tridimensional del muestreo petrográfico.',
      'Cálculo geoestadístico de reservas y categorización de recursos medidos/indicados.',
      'Diseño y supervisión técnica de frentes de explotación con control de leyes.',
      'Planeación a corto y mediano plazo de la tasa de alimentación al molino de beneficio.'
    ],
    imageIdx: 1 // cosmin_minlink
  }
];

export const minLinkData = {
  headline: 'La Conexión Estratégica en el Sector Minero de México',
  pitch: 'La falta de capital y conectividad frena el desarrollo de títulos valiosos en la pequeña y mediana minería. De igual forma, inversionistas con liquidez carecen del bagaje técnico para mitigar riesgos regulatorios. MinLink es nuestra solución exclusiva para subsanar esta brecha, actuando como intermediario técnico, legal y financiero bajo un estándar riguroso.',
  concessionaires: {
    title: 'Para Concesionarios Mineros',
    subtitle: 'Potencie su título y atraiga el capital necesario',
    items: [
      { text: 'Diagnóstico técnico preliminar para dimensionar el potencial estimado de su veta.' },
      { text: 'Auditoría jurídica de sus títulos y obligaciones mineras para garantizar transparencia ante inversionistas.' },
      { text: 'Estructuración institucional del proyecto para asegurar condiciones comerciales altamente atractivas.' },
      { text: 'Vinculación directa y formal con carteras activas de inversionistas nacionales y globales.' }
    ]
  },
  investors: {
    title: 'Para Fondos e Inversionistas',
    subtitle: 'Oportunidades de inversión minera pre-evaluadas y seguras',
    items: [
      { text: 'Acceso directo a una cartera exclusiva de proyectos mineros validados por peritos calificados.' },
      { text: 'Análisis de riesgos integral en los frentes legal, técnico, operativo y ambiental.' },
      { text: "Servicio de 'Due Diligence' de campo y seguimiento especializado durante el desembolso." },
      { text: 'Acompañamiento corporativo y constructivo en cualquier etapa de desarrollo de la campaña.' }
    ]
  },
  pillars: [
    {
      id: 'pillar-categoria',
      title: 'CATEGORÍA DE PROYECTO',
      description: 'Clasificamos el tipo de operación disponible para estructurar un modelo de participación claro: cesión total, asociación estratégica (Joint Venture) o maquila de beneficio.',
      bullets: ['Oro (Au) / Plata (Ag)', 'Cobre (Cu) / Plomo (Pb) / Zinc (Zn)', 'Asociaciones estratégicas estructuradas']
    },
    {
      id: 'pillar-valoracion',
      title: 'VALORACIÓN TÉCNICA',
      description: 'Analizamos de manera exhaustiva bajo tres vectores fundamentales para certificar el desarrollo del yacimiento:',
      bullets: ['Certeza jurídica y vigencia de derechos (Aspecto Legal).', 'Evidencia empírica de mineralización (Aspecto Técnico).', 'Logística, accesos terrestres y agua (Infraestructura).']
    },
    {
      id: 'pillar-potencial',
      title: 'POTENCIAL GEOLÓGICO',
      description: 'Clasificamos con absoluta honestidad el nivel de madurez geológica para ponderar la relación riesgo-retorno del activo:',
      bullets: ['Potencial Alto: Campaña diamantina certificada y mineral a la vista.', 'Potencial Medio: Mapeo estructural definido con muestreo superficial rico.', 'Potencial Bajo: Prospección preliminar o geofísica de primer orden.']
    },
    {
      id: 'pillar-verificacion',
      title: 'VERIFICACIÓN DE CAMPO',
      description: 'Filtramos proyectos especulativos de escritorio. Cada propiedad listada en MinLink cuenta con una inspección física hecha por expertos de COSMIN.',
      bullets: ['Inspección pericial en sitio.', 'Muestreos de control verificados en laboratorios certificados.', 'Estructuración de paquetes de datos limpios listos para data room.']
    }
  ]
};
