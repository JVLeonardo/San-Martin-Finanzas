# San Martin Finanzas — Reglas de trabajo para Codex

## Identidad y objetivo

San Martin Finanzas es una plataforma regional formal, segura, transparente y auditable para gestionar progresivamente el ciclo de micropréstamos. El alcance inicial se limita a la región San Martín. La operación con dinero real requiere gates legales, financieros y regulatorios aprobados.

## Orden de lectura

Antes de trabajar, leer en este orden:

1. `AGENTS.md`.
2. `docs/scrum/sprint-01.md` y la tarea autorizada.
3. Los ADR aplicables en `docs/adr/`.
4. La documentación del módulo y el código existente.
5. La Skill aplicable en `.codex/skills/`.

## Arquitectura base

- `apps/web/`: Next.js, TypeScript y App Router.
- `services/api/`: Spring Boot y Spring Security como backend modular.
- PostgreSQL para persistencia de negocio.
- AWS Cognito/OIDC para identidad, credenciales, verificación, recuperación y MFA cuando sea aprobado.
- BFF con sesión server-side y cookies protegidas; el navegador no maneja tokens sensibles.
- Redis para sesiones server-side cuando el despliegue lo requiera.
- Monolito modular como estructura inicial del backend.
- Flyway para migraciones versionadas.
- UUIDv7 para identificadores de entidades principales cuando exista soporte validado.
- RBAC combinado con permisos explícitos y auditoría.

La organización física del monorepo está documentada en `docs/adr/ADR-001-monorepo-organization.md`. Por esa decisión previa, las ADR técnicas comienzan en ADR-002.

## Reglas fuertes de no invasividad

- No hacer refactor oportunista.
- No modificar módulos fuera del alcance de la tarea o sprint autorizado.
- No cambiar arquitectura, proveedor, patrón de seguridad o estructura de módulos sin crear o actualizar un ADR y obtener aprobación explícita.
- No introducir dependencias nuevas sin justificar su necesidad, impacto, licencia, mantenimiento, seguridad y alternativa.
- No implementar Sprint 2 o sprints futuros mientras se trabaja en Sprint 1.
- No inventar tasas, montos, plazos, cargos, reglas de mora, scoring, políticas de aprobación ni criterios regulatorios.
- Detenerse ante una decisión legal, financiera, tributaria, contractual, de privacidad o regulatoria no aprobada y registrarla como pendiente.
- No almacenar contraseñas, `password_hash`, tokens sensibles ni secretos en PostgreSQL, código fuente, logs o archivos versionados.
- No asumir que autenticación equivale a identidad civil, KYC, residencia regional o aprobación crediticia.
- No prometer aprobación de préstamos ni condiciones comerciales no validadas.
- No borrar archivos ni reescribir documentación existente sin explicar el impacto y obtener autorización.
- No modificar CI/CD, infraestructura, cuentas cloud o recursos externos salvo que el usuario lo pida expresamente.
- Mantener los cambios pequeños, reversibles y trazables.
- Antes de cambiar código, mostrar el plan de archivos.
- Después de cada tarea, ejecutar pruebas, presentar diff/resumen y esperar revisión antes de avanzar a otra tarea.

## Gobierno de decisiones

- La fuente de verdad de decisiones arquitectónicas son los ADR aceptados.
- Un ADR puede estar `Propuesto`, `Aceptado`, `Rechazado`, `Reemplazado` o `Pendiente de validación`.
- Los ADR técnicos no sustituyen aprobación legal, financiera o regulatoria.
- Si hay conflicto entre código, documentación y ADR, detenerse, señalarlo y pedir decisión.
- Cada tarea debe tener plan, implementación acotada, pruebas, diff y cierre.
- Las reglas de este archivo no autorizan ampliar el alcance de una tarea.

## Documentación por tarea

- La implementación exacta queda registrada en Git mediante el commit correspondiente.
- Al finalizar cada tarea autorizada, actualizar únicamente el apartado `Resumen de tareas ejecutadas` del documento del Sprint.
- El resumen debe incluir tarea, alcance realizado, commit, verificaciones y pendientes.
- No crear un archivo Markdown individual por cada tarea salvo solicitud explícita de Leonardo.

## Uso de la documentación técnica

- `docs/api/`: contratos externos de API: endpoints, métodos, parámetros, respuestas, errores, autenticación y permisos. Actualizarlo únicamente cuando se cree o modifique una interfaz API.
- `docs/architecture/`: arquitectura vigente, componentes, límites entre módulos, flujos, despliegue y relaciones entre sistemas. Actualizarlo cuando cambie la estructura o el comportamiento arquitectónico.
- `docs/adr/`: decisiones arquitectónicas y sus motivos; no usarlo como registro de avances.
- `docs/scrum/`: planificación, estado y resumen ejecutivo de las tareas del Sprint.
- Git: historial técnico completo mediante commits y diffs.

### Regla de actualización

- Endpoint nuevo o modificado: actualizar código, pruebas, `docs/api/` y el resumen del Sprint.
- Cambio de módulos, BFF, persistencia o infraestructura: actualizar código, pruebas, `docs/architecture/` y crear o actualizar un ADR cuando corresponda.
- Corrección interna sin impacto contractual ni arquitectónico: actualizar código, pruebas y el resumen del Sprint.
- Decisión estructural: registrar un ADR y actualizar `docs/architecture/` si afecta la arquitectura vigente.
- Toda tarea cerrada debe dejar su resumen del Sprint y referencia al commit correspondiente.

## Comandos y verificación reales

Ejecutar desde la raíz del repositorio, salvo indicación contraria:

```powershell
docker compose config
docker compose ps

cd apps/web
npm run lint
npm run build

cd ..\..\services\api
.\mvnw.cmd test
.\mvnw.cmd package
```

Para desarrollo local:

```powershell
docker compose up -d
docker compose ps
```

Maven global no es requisito: el backend usa Maven Wrapper. Si un comando no puede ejecutarse por una dependencia ausente o una integración externa no configurada, reportar la causa y no ocultar el fallo.

## Skills controladas

Las cuatro Skills locales son complementarias y controladas:

- `smf-engineering-standards`: estándares de arquitectura y calidad.
- `smf-feature-implementation`: flujo para implementar una tarea autorizada.
- `smf-testing-standard`: estrategia y evidencia de pruebas.
- `smf-security-review`: revisión acotada de seguridad.

Ninguna Skill otorga autorización para ampliar alcance, cambiar arquitectura, introducir dependencias o avanzar de sprint.
