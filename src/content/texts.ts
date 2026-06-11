export const texts = {
  meta: {
    title: "paneldepoliuretano.com | Especificaciones Técnicas de Ingeniería",
    description:
      "Portal técnico especializado en paneles sandwich PUR, PIR y lana de roca para proyectos industriales de alta exigencia.",
  },
  nav: {
    comparative: "Comparativa",
    products: "Productos",
    certifications: "Certificaciones",
    blog: "Blog",
    contact: "Contacto",
    cta: "Solicitar Cotización Técnica",
  },
  hero: {
    badge: "ESPECIFICACIONES TÉCNICAS",
    title: "Ingeniería en Aislamiento Térmico y Resistencia al Fuego",
    description:
      "Portal técnico especializado en paneles de poliuretano (PUR), polisocianurato (PIR) y lana de roca para proyectos industriales de alta exigencia.",
    ctaPrimary: "Ver Tablas Técnicas",
    ctaSecondary: "Catálogo B2B (PDF)",
    stat: {
      value: "λ 0.022",
      label: "Conductividad Térmica W/mK",
    },
  },
  comparative: {
    title: "Análisis Comparativo de Núcleos",
    subtitle:
      "Diferencias técnicas entre PUR, PIR y Lana de Roca según normativa europea.",
    headers: {
      property: "Propiedad Técnica",
      pur: "PUR (Poliuretano)",
      pir: "PIR (Polisocianurato)",
      rock: "Lana de Roca",
    },
    rows: [
      {
        label: "Conductividad Térmica (λ)",
        pur: "≈ 0.022 W/mK",
        pir: "≈ 0.022 W/mK",
        rock: "≈ 0.040 W/mK",
      },
      {
        label: "Reacción al Fuego (Euroclases)",
        pur: "B-s2, d0 / C-s3, d0",
        pir: "B-s1, d0 (Alta resistencia)",
        rock: "A1 / A2-s1, d0 (Incombustible)",
      },
      {
        label: "Rango de Temperatura",
        pur: "-40°C a +80°C",
        pir: "-40°C a +100°C",
        rock: "Hasta 1000°C",
      },
      {
        label: "Aislamiento Acústico (Rw)",
        pur: "Bajo (~25 dB)",
        pir: "Bajo (~26 dB)",
        rock: "Excelente (>32 dB)",
      },
      {
        label: "Uso Recomendado",
        pur: "Cámaras frigoríficas",
        pir: "Naves industriales",
        rock: "Sectorización cortafuego",
      },
    ],
  },
  products: {
    title: "Soluciones por Aplicación",
    subtitle: "Sistemas de cerramiento para cada requerimiento técnico.",
    ctaThickness: "Ver todos los espesores (30mm - 200mm)",
    items: [
      {
        tag: "CUBIERTA",
        tagColor: "default",
        title: "Panel Sandwich Cubierta",
        description:
          "Perfilado de 3 o 5 grecas. Ideal para naves industriales con gran luz entre apoyos.",
        spec: "Desde 30mm",
        image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop",
        imageAlt: "Panel de cubierta industrial",
      },
      {
        tag: "FRIGORÍFICO",
        tagColor: "blue",
        title: "Panel Frigorífico PUR/PIR",
        description:
          "Juntas estancas de alta precisión para conservación y congelación de alimentos.",
        spec: "Espesores hasta 200mm",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
        imageAlt: "Cámara frigorífica industrial",
      },
      {
        tag: "FUEGO",
        tagColor: "orange",
        title: "Panel Lana de Roca",
        description:
          "Núcleo de fibras minerales incombustibles. Certificación EI30 a EI240.",
        spec: "Incombustible A1",
        // https://images.unsplash.com/photo-1608283833336-5fb6f919e5ea?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
        imageAlt: "Panel de lana de roca",
      },
    ],
  },
  certifications: {
    title: "Garantía y Certificación Internacional",
    description: "Nuestros productos cumplen con los estándares más exigentes de la normativa europea e internacional.",
    items: [
      { icon: "shield", label: "Marcado CE (EN 14509)" },
      { icon: "fire", label: "Euroclases B-s1, d0" },
      { icon: "check", label: "ISO 9001 / 14001" },
      { icon: "leaf", label: "Certificación EPD / LEED" },
    ],
  },
  footer: {
    description:
      "Especialistas en soluciones de cerramiento industrial y eficiencia energética para el mercado profesional.",
    relatedTitle: "Dominios Relacionados",
    contactTitle: "Contacto",
    email: "ventas@mequipo.com",
    support: "Avenida Presidente Masaryk No. 61, Int. 901, Polanco V Sección, C.P. 11560, Miguel Hidalgo, Mexico City, Mexico",
    googleMapsHref: "https://www.google.com/maps/search/?api=1&query=Avenida+Presidente+Masaryk+61+Polanco+Ciudad+de+Mexico",
    copyright: `© ${new Date().getFullYear()} paneldepoliuretano.com - Todos los derechos reservados.`,
  },
  contact: {
    title: "Consulta para Proyectos",
    subtitle:
      "Envíenos sus especificaciones técnicas para un estudio de materiales sin compromiso.",
    fields: {
      name: "Nombre / Empresa",
      email: "Email Corporativo",
      material: "Tipo de Material Requerido",
      details: "Detalles del Proyecto (m², Ubicación, Aplicación)",
    },
    options: [
      "PUR - Estándar",
      "PIR - Alta Resistencia Fuego",
      "Lana de Roca - Acústico/Ignífugo",
      "No estoy seguro (Requerir asesoría)",
    ],
    submit: "Enviar Solicitud Técnica",
    info: {
      phone: "+52 55 9990 3546",
      phoneHref: "tel:+525599903546",
      address:
        "Avenida Presidente Masaryk No. 61, Int. 901, Polanco V Sección, C.P. 11560, Miguel Hidalgo, Ciudad de México",
      mapsHref:
        "https://maps.google.com/?cid=15759084979067732314&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",
      email: "ventas@mequipo.com",
      hours: "Lunes a Viernes, 9:00 — 18:00 hrs",
    },
    map: {
      lat: 19.4326,
      lng: -99.1938,
      zoom: 16,
      markerColor: "#f97316",
    },
  },
  comparativa: {
    meta: {
      title: "Comparativa Técnica | paneldepoliuretano.com",
      description:
        "Análisis técnico detallado entre paneles PUR, PIR y Lana de Roca. Guía de selección, gráficas comparativas y casos de uso reales.",
    },
    hero: {
      badge: "ANÁLISIS TÉCNICO",
      title: "Comparativa Técnica de Materiales",
      description:
        "Guía técnica completa para seleccionar el núcleo de aislamiento óptimo según las exigencias de su proyecto industrial.",
    },
    tableExtended: {
      title: "Propiedades Técnicas Detalladas",
      subtitle: "Comparativa exhaustiva según normativa europea EN 14509.",
      rows: [
        {
          label: "Conductividad Térmica (λ)",
          pur: "≈ 0.022 W/mK",
          pir: "≈ 0.022 W/mK",
          rock: "≈ 0.040 W/mK",
        },
        {
          label: "Reacción al Fuego (Euroclases)",
          pur: "B-s2, d0 / C-s3, d0",
          pir: "B-s1, d0",
          rock: "A1 / A2-s1, d0",
        },
        {
          label: "Rango de Temperatura",
          pur: "-40°C a +80°C",
          pir: "-40°C a +100°C",
          rock: "-15°C a +80°C",
        },
        {
          label: "Aislamiento Acústico (Rw)",
          pur: "~25 dB",
          pir: "~26 dB",
          rock: ">32 dB",
        },
        {
          label: "Densidad",
          pur: "40 kg/m³ ±3",
          pir: "40 kg/m³ ±3",
          rock: "45-150 kg/m³",
        },
        {
          label: "Resistencia a la Humedad",
          pur: "Excelente",
          pir: "Excelente",
          rock: "Buena",
        },
        {
          label: "Resistencia a la Compresión",
          pur: "≥ 100 kPa",
          pir: "≥ 100 kPa",
          rock: "≥ 60 kPa",
        },
        {
          label: "Espesores disponibles",
          pur: "30 — 200 mm",
          pir: "30 — 200 mm",
          rock: "40 — 100 mm",
        },
        {
          label: "Certificación",
          pur: "Marcado CE EN 14509",
          pir: "Marcado CE EN 14509",
          rock: "Marcado CE EN 14509",
        },
        {
          label: "Uso Recomendado",
          pur: "Cámaras frigoríficas — Naves industriales",
          pir: "Cámaras frigoríficas — Naves industriales",
          rock: "Aislamiento Termoacústico — Sectorización cortafuego",
        },
      ],
    },
    charts: {
      title: "Análisis Gráfico Comparativo",
      subtitle: "Visualización de propiedades clave entre los tres materiales.",
      bar: {
        title: "Comparativa por Propiedad",
        labels: ["Conductividad Térmica", "Temp. Máxima", "Aislamiento Acústico"],
        datasets: [
          {
            label: "PUR",
            color: "#1e3a8a",
            values: [95, 60, 55],
          },
          {
            label: "PIR",
            color: "#f97316",
            values: [95, 75, 58],
          },
          {
            label: "Lana de Roca",
            color: "#64748b",
            values: [50, 100, 90],
          },
        ],
      },
      radar: {
        title: "Perfil General de Materiales",
        labels: [
          "Aislamiento Térmico",
          "Resistencia al Fuego",
          "Aislamiento Acústico",
          "Resistencia Húmedad",
          "Ligereza",
          "Temperatura Máxima",
        ],
        datasets: [
          {
            label: "PUR",
            color: "#1e3a8a",
            values: [95, 55, 55, 95, 90, 60],
          },
          {
            label: "PIR",
            color: "#f97316",
            values: [95, 75, 58, 95, 90, 75],
          },
          {
            label: "Lana de Roca",
            color: "#64748b",
            values: [50, 100, 90, 70, 60, 100],
          },
        ],
      },
    },
    guide: {
      title: "Guía de Selección",
      subtitle: "¿Cuál es el material adecuado para su proyecto?",
      items: [
        {
          material: "PUR — Poliuretano",
          color: "blue",
          icon: "thermometer",
          when: "Cuando necesita el mejor rendimiento térmico al menor coste.",
          ideal: [
            "Cámaras frigoríficas y de congelación",
            "Almacenes de temperatura controlada",
            "Industria alimentaria y farmacéutica",
            "Proyectos con presupuesto ajustado",
          ],
          avoid: [
            "Zonas con alta exigencia de resistencia al fuego",
            "Aplicaciones a temperaturas superiores a 80°C",
          ],
        },
        {
          material: "PIR — Polisocianurato",
          color: "orange",
          icon: "flame",
          when: "Cuando necesita alto rendimiento térmico con mejor comportamiento al fuego.",
          ideal: [
            "Naves industriales y logísticas",
            "Edificios con normativa estricta de incendios",
            "Cubiertas y fachadas de uso intensivo",
            "Proyectos con certificación LEED o BREEAM",
          ],
          avoid: [
            "Aplicaciones donde se requiere clase A1",
            "Entornos con temperaturas superiores a 100°C",
          ],
        },
        {
          material: "Lana de Roca",
          color: "gray",
          icon: "shield",
          when: "Cuando la seguridad contra incendios y el aislamiento acústico son prioritarios.",
          ideal: [
            "Sectorización cortafuego EI30 a EI240",
            "Salas de máquinas y cuartos técnicos",
            "Instalaciones con alta carga de fuego",
            "Proyectos con requisitos acústicos estrictos",
          ],
          avoid: [
            "Proyectos donde el peso es crítico",
            "Aplicaciones donde se requiere máximo aislamiento térmico",
          ],
        },
      ],
    },
    cases: {
      title: "Casos de Uso Reales",
      subtitle: "Aplicaciones industriales donde cada material destaca.",
      items: [
        {
          tag: "FRIGORÍFICO",
          tagColor: "blue",
          title: "Cámaras de Congelación Industrial",
          material: "PUR / PIR",
          description:
            "Los paneles de poliuretano son el estándar en la industria del frío. Su baja conductividad térmica permite mantener temperaturas de -40°C con el mínimo consumo energético.",
          specs: [
            "Temperatura: -40°C a +4°C",
            "Espesor recomendado: 100 — 200 mm",
            "Junta: machihembrado de alta estanqueidad",
          ],
        },
        {
          tag: "INDUSTRIAL",
          tagColor: "orange",
          title: "Naves Logísticas y de Producción",
          material: "PIR",
          description:
            "El PIR ofrece el equilibrio perfecto entre rendimiento térmico y resistencia al fuego para grandes superficies industriales con normativa exigente.",
          specs: [
            "Superficie típica: 5,000 — 50,000 m²",
            "Espesor recomendado: 80 — 120 mm",
            "Certificación: Euroclase B-s1, d0",
          ],
        },
        {
          tag: "CORTAFUEGO",
          tagColor: "red",
          title: "Sectorización y Muros Cortafuego",
          material: "Lana de Roca",
          description:
            "La lana de roca es la única opción válida para sectorización cortafuego certificada. Su núcleo mineral incombustible garantiza la integridad estructural bajo exposición directa al fuego.",
          specs: [
            "Resistencia al fuego: EI30 a EI240",
            "Temperatura de fusión: > 1000°C",
            "Clasificación: A1 Incombustible",
          ],
        },
      ],
    },
  },
  productos: {
    meta: {
      title: "Productos | paneldepoliuretano.com",
      description:
        "Catálogo completo de paneles sandwich PUR, PIR y lana de roca para proyectos industriales de alta exigencia.",
    },
    hero: {
      badge: "CATÁLOGO TÉCNICO",
      title: "Soluciones de Cerramiento Industrial",
      description:
        "Sistemas de panel sandwich para cada aplicación. Desde cámaras frigoríficas hasta sectorización cortafuego.",
    },
    items: [
      {
        slug: "panel-cubierta",
        tag: "CUBIERTA",
        tagColor: "default",
        title: "Panel Sandwich Cubierta",
        shortDescription:
          "Perfilado de 3 o 5 grecas. Ideal para naves industriales con gran luz entre apoyos.",
        description:
          "El panel sandwich de cubierta es la solución óptima para el cerramiento superior de naves industriales, logísticas y comerciales. Su núcleo de poliuretano de alta densidad garantiza un rendimiento térmico excepcional, mientras que su perfil grecado aporta la rigidez estructural necesaria para grandes luces entre apoyos.",
        image:
          "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop",
        imageAlt: "Panel sandwich de cubierta industrial",
        specs: [
          { label: "Material del núcleo", value: "PUR / PIR" },
          { label: "Espesores disponibles", value: "30 — 200 mm" },
          { label: "Ancho útil", value: "1000 mm" },
          { label: "Longitud máxima", value: "16 m" },
          { label: "Conductividad térmica", value: "λ ≈ 0.022 W/mK" },
          { label: "Reacción al fuego", value: "B-s2, d0 / B-s1, d0" },
          { label: "Carga máxima", value: "≥ 0.6 kN/m²" },
          { label: "Certificación", value: "Marcado CE EN 14509" },
        ],
        applications: [
          "Naves industriales y logísticas",
          "Centros comerciales y de distribución",
          "Instalaciones deportivas",
          "Edificios agroindustriales",
          "Hangares y talleres",
        ],
        highlights: [
          {
            label: "Rendimiento térmico",
            value: "λ 0.022",
            unit: "W/mK",
          },
          {
            label: "Espesor máximo",
            value: "200",
            unit: "mm",
          },
          {
            label: "Ancho útil",
            value: "1000",
            unit: "mm",
          },
        ],
      },
      {
        slug: "panel-frigorifico",
        tag: "FRIGORÍFICO",
        tagColor: "blue",
        title: "Panel Frigorífico PUR/PIR",
        shortDescription:
          "Juntas estancas de alta precisión para conservación y congelación de alimentos.",
        description:
          "El panel frigorífico es el sistema de cerramiento de referencia para instalaciones de frío industrial. Su núcleo de poliuretano o polisocianurato inyectado de alta densidad y sus juntas machihembradas de precisión garantizan la estanqueidad total necesaria para mantener temperaturas desde -40°C hasta +12°C con el mínimo consumo energético.",
        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
        imageAlt: "Panel frigorífico para cámara industrial",
        specs: [
          { label: "Material del núcleo", value: "PUR / PIR" },
          { label: "Espesores disponibles", value: "60 — 200 mm" },
          { label: "Ancho útil", value: "1000 / 1200 mm" },
          { label: "Rango de temperatura", value: "-40°C a +12°C" },
          { label: "Conductividad térmica", value: "λ ≈ 0.022 W/mK" },
          { label: "Tipo de junta", value: "Machihembrado de precisión" },
          { label: "Densidad del núcleo", value: "40 — 42 kg/m³" },
          { label: "Certificación", value: "Marcado CE EN 14509" },
        ],
        applications: [
          "Cámaras de conservación y congelación",
          "Industria alimentaria y procesamiento",
          "Industria farmacéutica",
          "Almacenes frigoríficos logísticos",
          "Salas limpias y laboratorios",
        ],
        highlights: [
          {
            label: "Temperatura mínima",
            value: "-40",
            unit: "°C",
          },
          {
            label: "Espesor máximo",
            value: "200",
            unit: "mm",
          },
          {
            label: "Densidad núcleo",
            value: "42",
            unit: "kg/m³",
          },
        ],
      },
      {
        slug: "panel-lana-de-roca",
        tag: "FUEGO",
        tagColor: "orange",
        title: "Panel Lana de Roca",
        shortDescription:
          "Núcleo de fibras minerales incombustibles. Certificación EI30 a EI240.",
        description:
          "El panel de lana de roca es la solución definitiva para proyectos donde la seguridad contra incendios es prioritaria. Su núcleo de fibras minerales incombustibles, con punto de fusión superior a 1000°C, garantiza la integridad estructural y la compartimentación del fuego durante el tiempo necesario para la evacuación y la intervención de los servicios de emergencia.",
        image:
          "https://images.unsplash.com/photo-1590674899484-13da0d1b58f5?q=80&w=2070&auto=format&fit=crop",
        imageAlt: "Panel de lana de roca para sectorización",
        specs: [
          { label: "Material del núcleo", value: "Lana de Roca mineral" },
          { label: "Espesores disponibles", value: "40 — 100 mm" },
          { label: "Ancho útil", value: "1000 mm" },
          { label: "Clasificación al fuego", value: "A1 / A2-s1, d0" },
          { label: "Resistencia al fuego", value: "EI30 a EI240" },
          { label: "Temperatura de fusión", value: "> 1000°C" },
          { label: "Aislamiento acústico", value: "> 32 dB (Rw)" },
          { label: "Certificación", value: "Marcado CE EN 14509" },
        ],
        applications: [
          "Muros y techos cortafuego",
          "Sectorización de riesgo EI30 a EI240",
          "Salas de máquinas y cuartos técnicos",
          "Garajes y aparcamientos",
          "Instalaciones con alta carga de fuego",
        ],
        highlights: [
          {
            label: "Temperatura de fusión",
            value: "1000",
            unit: "°C",
          },
          {
            label: "Resistencia al fuego",
            value: "EI240",
            unit: "",
          },
          {
            label: "Aislamiento acústico",
            value: ">32",
            unit: "dB",
          },
        ],
      },
    ],
  },
  blog: {
    tagline: "Perspectivas del Sector",
    title_line1: "Conocimiento",
    title_line2: "Técnico",
    description: "Guías de ingeniería, mejores prácticas de instalación y noticias del sector para profesionales del aislamiento de piso industrial.",
    btncta: "Leer Más",
    btn_prev: "Anterior",
    btn_next: "Siguiente",
  },
} as const;