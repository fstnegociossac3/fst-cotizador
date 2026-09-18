export const routes = {
  home: "/",

  auth: {
    login: "/login",
  },

  dashboard: "/dashboard",

  clients: {
    root: "/clientes",
    create: "/clientes/nuevo",
  },

  catalog: {
    root: "/catalogo",
    create: "/catalogo/nuevo",
  },

  quotations: {
    root: "/cotizaciones",
    create: "/cotizaciones/nueva",
  },

  approvals: "/aprobaciones",

  reports: "/reportes",

  users: "/usuarios",

  roles: "/roles",

  audit: "/auditoria",

  settings: "/configuracion",
} as const;
