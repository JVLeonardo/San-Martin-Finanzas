# ADR-012: Dependencias y Compose completo para desarrollo local

- Estado: Aceptado
- Fecha: 2026-08-24

## Contexto

S1-01 necesita un entorno local reproducible para que el equipo pueda levantar la web, la API y sus dependencias con un único comando. El repositorio ya tenía PostgreSQL y Redis en Compose, pero la API todavía no tenía persistencia, migraciones ni la base técnica para seguridad futura.

Vercel será el destino del frontend, mientras que Spring Boot deberá ejecutarse posteriormente en una plataforma compatible con procesos Java persistentes. Por ello, el Compose completo se limita al desarrollo local y no representa el despliegue productivo.

## Decisión

Se agregan al backend las siguientes dependencias administradas por Spring Boot:

- Spring Data JPA para la futura persistencia de entidades.
- PostgreSQL JDBC para conectar con la base definida en Compose.
- Flyway Core y el módulo PostgreSQL para migraciones SQL versionadas.
- Spring Data Redis para la futura sesión server-side y datos temporales con TTL.
- Spring Security para centralizar la autoridad de seguridad en el backend.
- OAuth2 Resource Server para validar posteriormente tokens emitidos por Cognito/OIDC.
- Spring Boot DevTools como dependencia opcional de desarrollo.

Flyway queda habilitado sin migraciones funcionales, entidades ni tablas nuevas. Cognito queda documentado, pero no se agrega SDK de AWS ni se activa Resource Server hasta contar con la configuración aprobada y las tareas S1-03/S1-04.

El Compose local incluye `web`, `api`, `postgres` y `redis`, con volúmenes para datos y cachés de desarrollo, healthchecks y dependencias ordenadas por salud.

## Consecuencias

- El entorno local se puede levantar con `docker compose up --build`.
- La API puede validar su conexión futura con PostgreSQL y Redis desde el mismo entorno.
- Se introduce una base técnica mayor antes de crear funcionalidades; su uso debe mantenerse dentro del alcance de cada tarea.
- El perfil local permite que el esqueleto continúe accesible sin autenticación real.
- Las imágenes actuales son para desarrollo y no definen una estrategia productiva.

## Alternativas consideradas

- Mantener solo PostgreSQL y Redis: menor configuración, pero no permite validar la integración local de la web y API.
- Agregar solo Flyway: insuficiente para probar el arranque completo de la API con sus dependencias objetivo.
- Agregar el SDK de AWS Cognito ahora: descartado porque no existe todavía un flujo aprobado ni secretos/configuración de proveedor.
- Desplegar el Compose completo en Vercel: descartado porque Vercel no sustituye una plataforma de ejecución persistente para Spring Boot.
- Crear microservicios: descartado; la API continúa como monolito modular.

## Reglas de implementación

- No crear migraciones funcionales hasta que exista un modelo aprobado.
- No almacenar secretos en `.env.example`, Git, logs o imágenes.
- No activar Cognito por defecto en local.
- No usar los volúmenes locales como almacenamiento productivo.
- Cualquier cambio de proveedor, despliegue o extracción de servicio requiere un ADR específico.

## Referencias

- `docs/adr/ADR-001-monorepo-organization.md`
- `docs/adr/ADR-003-spring-boot-backend.md`
- `docs/adr/ADR-004-postgresql.md`
- `docs/adr/ADR-005-aws-cognito.md`
- `docs/adr/ADR-008-redis-server-side-sessions.md`
- `docs/adr/ADR-010-flyway-migrations.md`
