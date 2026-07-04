import { defineBlogConfig } from 'astro-blog-kit';

export default defineBlogConfig({
  wpUrl: import.meta.env.WP_API_URL || 'http://paneldetecho.local/',
  postsPerPage: 5,
  defaultLayout: 'magazine',
  locale: 'es',

  theme: {
    accent: '#f97316',     // Naranja vibrante (--color-accent)
    background: '#f8fafc', // Fondo gris muy claro pizarra (--color-bg)
    surface: '#ffffff',    // Fondo de las tarjetas (--color-surface)
    text: '#1e293b',       // Gris oscuro para legibilidad de texto (--color-text)
    muted: '#64748b',      // Gris intermedio para extractos (--color-text-muted)
    mutedLight: '#94a3b8', // Gris claro para fechas y categorías (--color-dark-muted)
    border: '#e2e8f0',     // Color de las líneas divisorias (--color-border)
    black: '#0f172a',      // Tono casi negro pizarra para títulos fuertes (--color-dark)
    white: '#ffffff',      // Blanco puro (--color-surface)
    fontHeading: '"Inter", sans-serif', // Fuente base unificada
    fontBody: '"Inter", sans-serif',    // --font-base
    fontMono: 'monospace',
    fontDisplay: '"Inter", sans-serif',
    containerMax: '1280px', // Correspondiente a las 80rem de --container-max
  },

  // ── Hero ──────────────────────────────────────────────────────
  hero: {
    en: {
      tagline: 'Our Blog',
      titleLine1: 'Latest',
      titleLine2: 'Articles',
      description: 'Welcome to our blog.',
    },
    es: {
      tagline: 'Nuestro Blog',
      titleLine1: 'Últimos',
      titleLine2: 'Artículos',
      description: 'Bienvenido a nuestro blog.',
    },
  },

  // ── UI labels ────────────────────────────────────────────────
  ui: {
    en: {
      readMoreLabel: 'Read more →',
      btnPrev: 'Previous',
      btnNext: 'Next',
      commentButtonColor: 'var(--bk-accent)',
      commentButtonTextColor: 'var(--bk-white)',
      paginationStyle: 'minimal',
      // Paginación corporativa usando el azul primario y el naranja de acento
      paginationBtnBg: '#ffffff',          // Fondo blanco interactivo
      paginationBtnText: '#1e3a8a',        // Texto con el azul primario
      paginationBtnHoverBg: '#1e3a8a',     // Hover sólido azul marino
      paginationBtnHoverText: '#ffffff',   // Texto blanco en hover
      paginationActiveBg: '#f97316',       // Página activa en naranja vibrante
      paginationActiveText: '#ffffff',     // Texto blanco para contraste limpio
    },
    es: {
      readMoreLabel: 'Leer más →',
      btnPrev: 'Anterior',
      btnNext: 'Siguiente',
    },
  },
});