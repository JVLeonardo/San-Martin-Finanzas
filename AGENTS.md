# San Martín Finanzas — Reglas para Codex

## Objetivo

San Martín Finanzas es una plataforma regional de microfinanzas para San Martín, Perú.

Trabajar únicamente dentro del alcance indicado por la tarea actual.

---

## Contexto base

Arquitectura principal:

- `apps/web/`: Next.js + TypeScript + App Router.
- `services/api/`: Spring Boot + Spring Security.
- PostgreSQL para persistencia.
- BFF con sesión server-side y cookies protegidas.
- Redis cuando el despliegue lo requiera.
- Flyway para migraciones.
- Monolito modular en backend.
- RBAC + permisos explícitos + auditoría.

Las decisiones arquitectónicas aceptadas están en `docs/adr/`.

---

## Lectura de contexto

Siempre leer:

1. `AGENTS.md`.
2. El prompt/tarea actual.
3. Los documentos que el prompt indique explícitamente.

Leer solo cuando sea relevante:

- `docs/adr/`: si la tarea toca una decisión arquitectónica existente.
- `docs/architecture/`: si modifica estructura, módulos o flujos.
- `docs/api/`: si modifica contratos o endpoints.
- `docs/scrum/`: si la tarea depende del alcance de un Sprint.
- `.codex/skills/`: solo si una Skill aporta instrucciones necesarias para la tarea.

No recorrer todos los ADR, documentos o Skills por defecto.

---

## Reglas de trabajo

- No hacer refactors fuera del alcance.
- No modificar módulos ajenos a la tarea.
- No cambiar arquitectura, seguridad, proveedor o estructura modular sin aprobación explícita.
- No introducir dependencias nuevas sin necesidad justificada.
- No avanzar a funcionalidades de otros Sprints sin autorización.
- Mantener cambios pequeños, localizados y reversibles.
- Reutilizar código, componentes y convenciones existentes antes de crear alternativas.
- Si hay conflicto entre código, documentación y un ADR aplicable, detenerse y reportarlo.
- No borrar o reescribir documentación relevante sin necesidad justificada.
- No modificar CI/CD, infraestructura, cloud o recursos externos salvo solicitud explícita.

---

## Git

Codex NO debe:

- hacer `git commit`
- hacer `git push`
- crear tags
- publicar cambios remotos

Puede inspeccionar `git status`, `git diff` y el historial cuando sea útil.

Los commits y pushes los realiza el usuario después de revisar los cambios.

---

## Seguridad y negocio

No inventar:

- tasas
- montos
- plazos
- comisiones
- mora
- scoring
- aprobación crediticia
- TCEA
- políticas financieras
- requisitos regulatorios

No asumir que autenticación implica:

- identidad civil validada
- KYC
- residencia regional
- elegibilidad
- aprobación de préstamo

No almacenar contraseñas, tokens sensibles, secretos o credenciales en código, logs o archivos versionados.

Ante una decisión legal, financiera, de privacidad o regulatoria no aprobada, reportarla como pendiente.

---

## Documentación

Actualizar documentación solo cuando la tarea lo requiera:

- cambio de API → `docs/api/`
- cambio arquitectónico → `docs/architecture/` y ADR si corresponde
- cambio de alcance/estado de Sprint → `docs/scrum/`

No crear documentación adicional por defecto.

---

## Verificación

Ejecutar únicamente las verificaciones relevantes para los archivos modificados.

Frontend, cuando corresponda:

```powershell
cd apps/web
npm run lint
npm run build

Backend, cuando corresponda:
cd services/api
.\mvnw.cmd test
.\mvnw.cmd package
Docker, solo si la tarea lo requiere:
docker compose config
docker compose ps
Si una verificación no puede ejecutarse, reportar la causa.
Cierre de tarea
Al terminar, informar de forma breve:
- qué se modificó
- archivos principales afectados
- verificaciones ejecutadas
- errores o pendientes
- decisiones que requieren aprobación
No hacer commit ni push.