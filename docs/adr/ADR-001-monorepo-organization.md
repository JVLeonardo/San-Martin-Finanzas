# ADR-001: Organización física del monorepo

- Estado: Aceptado, parcialmente reemplazado por ADR-012
- Fecha: 2026-08-24

## Contexto

San Martin Finanzas inicia como un monolito modular con una aplicación web Next.js, una API Spring Boot y servicios locales de PostgreSQL y Redis. La estructura inicial `frontend/`, `backend/` e `infra/` no distingue con claridad aplicaciones, servicios e infraestructura, lo que dificulta el crecimiento ordenado del repositorio.

## Decisión

El repositorio se organiza de la siguiente forma:

```text
apps/web/                 Aplicación web Next.js
services/api/             API Spring Boot y monolito modular
infrastructure/docker/    Recursos Docker auxiliares futuros
infrastructure/scripts/   Scripts operativos futuros
docs/                     ADR, arquitectura, Scrum, seguridad y diagramas
docker-compose.yml        Servicios locales compartidos
```

PostgreSQL y Redis continúan definidos en el Docker Compose raíz. La API se mantiene como un único monolito modular y la aplicación web se mantiene como una única aplicación Next.js. La decisión inicial de no crear Dockerfiles ni servicios de aplicación en Compose fue reemplazada parcialmente por ADR-012 para el entorno local de desarrollo; no se crean microservicios.

## Consecuencias

- Las rutas de trabajo pasan a ser `apps/web` y `services/api`.
- La estructura permite añadir aplicaciones o servicios futuros sin imponer su creación anticipada.
- La organización física no cambia contratos, paquetes Java, componentes, dependencias, puertos ni comportamiento actual.
- Docker Compose conserva los nombres explícitos de los volúmenes locales existentes para evitar pérdida accidental de datos entre cambios de configuración.

## Alternativas consideradas

- Mantener `frontend/`, `backend/` e `infra/`: menor cambio inmediato, pero menos clara para un monorepo evolutivo.
- Crear microservicios ahora: descartado por complejidad operativa y porque no existe una necesidad de separación demostrada.
- Crear servicios web y API en Docker Compose: inicialmente descartado y posteriormente adoptado solo para desarrollo local mediante ADR-012.

## Reglas de implementación

- No mover módulos internos ni renombrar paquetes, clases, componentes o endpoints como parte de esta decisión.
- No crear microservicios ni cambiar versiones de runtime, framework, PostgreSQL o Redis como parte de la organización física.
- Cualquier extracción futura de un servicio requiere un ADR específico, límites de dominio claros y aprobación técnica.

## Riesgos y pendientes

- Los directorios vacíos de infraestructura y documentación no se versionarán hasta que contengan archivos necesarios.
- El despliegue productivo de los contenedores y la extracción de microservicios se evaluarán en tareas separadas.

## Referencias

- `SAN_MARTIN_FINANZAS_CODEX_MASTER.md`
