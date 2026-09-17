export const site = {
  name: "Ross Digital Studio",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/rossdigitalstudio/",
};

export const webPlans = [
  {
    name: "Landing Express",
    price: "$150.000",
    kicker: "Una página, todo lo importante.",
    ideal: "Emprendimientos, profesionales y servicios que necesitan presencia online rápido.",
    features: ["Página única personalizada", "Diseño responsive", "Servicios, galería y contacto", "Botones a WhatsApp y redes", "Publicación online", "1 ronda de ajustes"],
  },
  {
    name: "Web Negocio",
    price: "$300.000",
    kicker: "Más espacio para contar lo que hacés.",
    ideal: "Comercios, estudios y marcas que necesitan varias secciones o páginas.",
    featured: true,
    features: ["Inicio + secciones internas", "Diseño personalizado", "Responsive completo", "Formularios y WhatsApp", "Portfolio, FAQ y contacto", "2 rondas de ajustes"],
  },
  {
    name: "Web Personalizada",
    price: "Desde $500.000",
    kicker: "Cuando tu idea necesita algo propio.",
    ideal: "Proyectos con flujos, integraciones o funcionalidades especiales.",
    features: ["Arquitectura a medida", "Funciones especiales", "Integraciones externas", "Animaciones y secciones únicas", "Alcance y tiempos personalizados", "Presupuesto según proyecto"],
  },
];

export const invitePlans = [
  {
    name: "Modelo",
    price: "$25.000",
    kicker: "Elegís el diseño. Lo hacemos tuyo.",
    features: ["Modelo existente", "Datos, fotos y colores", "Ubicación y enlaces", "Versión mobile", "Link listo para compartir", "1 ronda de ajustes"],
  },
  {
    name: "Temática",
    price: "$40.000",
    kicker: "Una invitación pensada para tu temática.",
    featured: true,
    features: ["Estética temática", "Diseño adaptado al evento", "Ubicación y confirmación", "Cuenta regresiva según diseño", "Link listo para compartir", "2 rondas de ajustes"],
  },
  {
    name: "Personalizada",
    price: "$50.000",
    kicker: "Diseño desde cero para tu evento.",
    features: ["Concepto visual propio", "Paleta y estilo a medida", "Estructura personalizada", "Funciones según necesidad", "Versión mobile", "2 rondas de ajustes"],
  },
];

export const webProjects = [
  {
    slug: "claveras-perforaciones",
    title: "Claveras Perforaciones",
    type: "Web institucional",
    previewUrl: "https://claveras-perforaciones.vercel.app/",
    href: "https://claveras-perforaciones.vercel.app/",
    tags: ["Corporativa", "Servicios", "WhatsApp"],
    description: "Una presencia online clara y sólida para una empresa con más de 50 años de trayectoria.",
    objective: "Ordenar una propuesta técnica amplia y transmitir experiencia, confianza y capacidad operativa desde el primer scroll.",
    solution: "Diseño institucional con jerarquía visual fuerte, accesos rápidos a servicios, trabajos y contacto, con foco en legibilidad y consulta directa.",
    highlights: ["Arquitectura de servicios", "CTA de presupuesto", "WhatsApp integrado", "Diseño responsive"],
  },
  {
    slug: "moto-jet",
    title: "Moto-Jet",
    type: "Web de servicios",
    previewUrl: "https://moto-jet-web.vercel.app/",
    href: "https://moto-jet-web.vercel.app/",
    tags: ["Conversión", "Servicios", "Mobile"],
    description: "Identidad fuerte, navegación directa y foco en consultas por WhatsApp.",
    objective: "Comunicar con rapidez qué hace el servicio, dónde trabaja y cómo contratarlo, evitando fricción para consultas urgentes.",
    solution: "Interfaz oscura y urbana, estructura de servicios simple, cobertura destacada y llamadas a WhatsApp visibles durante todo el recorrido.",
    highlights: ["Foco en conversión", "Cobertura visible", "CTA persistentes", "Experiencia mobile"],
  },
  {
    slug: "tarotini",
    title: "Tarotini",
    type: "Marca personal",
    previewUrl: "https://tarotini-web.vercel.app/",
    href: "https://tarotini-web.vercel.app/",
    tags: ["Identidad", "Servicios", "Reserva"],
    description: "Una experiencia editorial que acompaña la personalidad y propuesta de la marca.",
    objective: "Trasladar a web una marca con identidad muy marcada, organizando servicios, formación y experiencias sin perder cercanía.",
    solution: "Dirección editorial, tipografía protagonista, fotografía de marca y recorridos claros hacia servicios y reserva.",
    highlights: ["Identidad editorial", "Servicios organizados", "Reserva directa", "Responsive"],
  },
];

export const inviteProjects = [
  { slug: "merlina", code: "INV-01", title: "Merlina", type: "Invitación temática", category: "Infantil", theme: "dark", tags: ["Cuenta regresiva", "Ubicación", "Confirmación"], status: "actualizando" },
  { slug: "seleccion-argentina", code: "INV-02", title: "Selección Argentina", type: "Invitación temática", category: "Infantil", theme: "sky", tags: ["Cumpleaños", "Mobile", "WhatsApp"], status: "actualizando" },
  { slug: "encanto", code: "INV-03", title: "Encanto", type: "Invitación temática", category: "Infantil", theme: "purple", tags: ["Cumpleaños", "Personalizada", "Mobile"], status: "actualizando" },
  { slug: "spider-man", code: "INV-04", title: "Spider-Man", type: "Invitación temática", category: "Infantil", theme: "red", tags: ["Cumpleaños", "Temática", "Mobile"], status: "actualizando" },
  { slug: "emilia-mernes", code: "INV-05", title: "Emilia Mernes", type: "Invitación temática", category: "Cumpleaños", theme: "violet", tags: ["Música", "Mobile", "Confirmación"], status: "próximamente" },
  { slug: "granja-de-zenon", code: "INV-06", title: "Granja de Zenón", type: "Invitación temática", category: "Infantil", theme: "sky", tags: ["Cumpleaños", "Ubicación", "Mobile"], status: "próximamente" },
  { slug: "paw-patrol", code: "INV-07", title: "Paw Patrol", type: "Invitación temática", category: "Infantil", theme: "red", tags: ["Cumpleaños", "Mobile", "WhatsApp"], status: "próximamente" },
  { slug: "toy-story", code: "INV-08", title: "Toy Story", type: "Invitación temática", category: "Infantil", theme: "sky", tags: ["Cumpleaños", "Ubicación", "Confirmación"], status: "próximamente" },
  { slug: "plim-plim", code: "INV-09", title: "Plim Plim", type: "Invitación temática", category: "Infantil", theme: "purple", tags: ["Cumpleaños", "Mobile", "Confirmación"], status: "próximamente" },
  { slug: "mario-bros", code: "INV-10", title: "Mario Bros", type: "Invitación temática", category: "Infantil", theme: "red", tags: ["Cumpleaños", "Mobile", "Ubicación"], status: "próximamente" },
  { slug: "osito", code: "INV-11", title: "Osito", type: "Invitación digital", category: "Baby shower", theme: "violet", tags: ["Evento", "Mobile", "Confirmación"], status: "próximamente" },
];

export const faqs = [
  ["¿Cuánto tarda una web?", "Una Landing Express suele tomar entre 5 y 7 días hábiles. Una Web Negocio, entre 7 y 15 días. Los tiempos empiezan cuando contamos con todo el material y la seña."],
  ["¿Cómo se paga?", "Para webs trabajamos con 50% para iniciar y 50% antes de publicar. En invitaciones Modelo se abona por adelantado; Temática y Personalizada, 50% + 50%."],
  ["¿La web se ve bien en celular?", "Sí. Todos los proyectos se diseñan y revisan para mobile, tablet y desktop."],
  ["¿Puedo pedir cambios?", "Sí. Cada servicio incluye rondas de ajustes. Los cambios extra o fuera del alcance inicial se cotizan aparte."],
  ["¿Qué tengo que enviar para empezar?", "Logo si tenés, textos, fotos, datos de contacto y referencias. Si es una invitación: fecha, horario, lugar, temática, fotos e información del evento."],
  ["¿Las invitaciones se comparten por WhatsApp?", "Sí. Se entregan mediante un link fácil de abrir y compartir desde el celular."],
];
