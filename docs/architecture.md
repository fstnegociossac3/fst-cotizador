# Arquitectura — FST Cotizador

## Enfoque

El sistema utiliza Next.js con una arquitectura modular orientada
por dominios.

## Capas principales

### app

Responsable de las rutas y layouts de Next.js.

No contiene reglas de negocio.

### modules

Contiene los módulos funcionales del sistema.

- auth
- users
- roles
- clients
- catalog
- pricing
- quotations
- approvals
- payments
- documents
- tracking
- notifications
- dashboard
- reports
- audit
- settings

### shared

Contiene componentes, utilidades y tipos reutilizables.

### infrastructure

Contiene integraciones técnicas y servicios externos.

- database
- auth
- google-drive
- pdf
- storage
- logging

### config

Contiene configuración técnica de la aplicación.

## Reglas

- Las reglas de negocio no deben vivir en `app`.
- Los componentes no deben acceder directamente a credenciales.
- Google Drive se implementará mediante un adaptador.
- El motor PDF se implementará mediante un adaptador.
- Las operaciones sensibles se ejecutarán del lado servidor.
- Los módulos no deben depender directamente de implementaciones externas.
- TypeScript se mantendrá en modo estricto.
