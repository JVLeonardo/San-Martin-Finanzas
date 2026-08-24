# San Martin Finanzas — Guía maestra de implementación para Codex

**Versión:** 1.0  
**Responsable técnico:** Leonardo  
**Ámbito:** Sprint 1 — página inicial, autenticación, identidad, autorización y auditoría.

## 1. Propósito y reglas para Codex

San Martin Finanzas es una fintech peruana para micropréstamos, inicialmente dirigida a personas vinculadas a la Región San Martín. El sistema tratará identidad, residencia, información económica, solicitudes, préstamos, pagos, permisos y auditoría. Seguridad, privacidad, trazabilidad e integridad financiera son requisitos del producto.

Leonardo es el responsable técnico y programador principal. Codex es asistente de implementación y revisión; no sustituye la aprobación técnica de Leonardo.

Este documento es el contrato técnico del Sprint 1.

Reglas obligatorias:

1. Trabajar sobre el repositorio Git existente; no crear un proyecto paralelo ni reemplazar la estructura actual sin justificarlo.
2. Antes de editar, inspeccionar estado de Git, ramas, remotos, README, AGENTS.md, builds, tests, Docker y variables de entorno.
3. Conservar cambios existentes y no sobrescribir trabajo del equipo sin autorización.
4. Implementar una sola fase por vez, en el orden indicado.
5. No adelantarse a fases posteriores ni agregar funcionalidades fuera del alcance.
6. Al finalizar cada fase, ejecutar sus verificaciones, resumir archivos modificados y detenerse para revisión de Leonardo.
7. No guardar contraseñas, JWT, refresh tokens ni secretos en PostgreSQL, navegador, repositorio o logs.
8. No afirmar que AWS funciona si solo se probó con mocks, LocalStack o configuración local.
9. Ante contradicciones, informar el conflicto antes de decidir.
10. Mantener cambios pequeños, reversibles y revisables.

Respuesta obligatoria después de cada fase:

~~~text
Fase completada:
Cambios realizados:
Verificaciones y resultado PASS/FAIL:
Decisiones o supuestos:
Riesgos o pendientes:
Siguiente fase propuesta:
No iniciar la siguiente fase hasta recibir aprobación de Leonardo.
~~~

## 2. Objetivo del Sprint 1

Construir:

- página inicial pública y navegación básica;
- registro, verificación de contacto, login, logout y recuperación;
- sesión server-side mediante BFF;
- asociación entre Cognito y customer en PostgreSQL;
- estados iniciales de onboarding;
- RBAC y permisos base;
- auditoría de eventos de seguridad;
- API REST documentada con OpenAPI 3;
- pruebas unitarias, integración, API y navegador.

Fuera de alcance:

- originación completa de préstamos;
- scoring, desembolsos, cuotas, pagos y conciliación;
- KYC/RENIEC/biometría definitivos;
- back office completo;
- microservicios independientes;
- despliegue productivo irreversible;
- proveedor SMS definitivo sin evaluar costos y entregabilidad.

## 3. Arquitectura aprobada

~~~text
                         INTERNET
                             |
                    CloudFront + WAF
                             |
                    Next.js App Router
                    UI pública + privada
                    BFF de autenticación
                    /                 \
           AWS Cognito          Spring Boot API
           Identity Provider    OAuth2 Resource Server
                                      |
                                 PostgreSQL + Flyway
                                 Redis server-side
                                 sessions + TTL
~~~

El backend será un monolito modular:

~~~text
backend/src/main/java/.../sanmartinfinanzas/
├── identity/
├── customer/
├── onboarding/
├── authorization/
├── audit/
└── shared/
~~~

Responsabilidades:

| Capacidad | Sistema |
|---|---|
| Contraseña, MFA, OTP, recuperación y tokens | AWS Cognito |
| Customer, onboarding, KYC, región y consentimientos | Spring Boot + PostgreSQL |
| Roles, permisos y reglas de negocio | Spring Boot + PostgreSQL |
| Sesión de navegador y tokens del proveedor | Next.js BFF + Redis |
| Auditoría de negocio y seguridad | Spring Boot + PostgreSQL |

Flujo de login:

1. Next.js inicia Authorization Code Flow + PKCE con Cognito.
2. Cognito valida credenciales y MFA cuando corresponde.
3. El callback server-side recibe el código.
4. El BFF lo intercambia por tokens.
5. El BFF crea una sesión aleatoria y guarda los tokens en Redis.
6. El navegador recibe solo una cookie de sesión HttpOnly.
7. El BFF llama a Spring con el access token.
8. Spring valida el JWT y aplica autorización.

## 4. Stack

Frontend/BFF: Next.js App Router, TypeScript, React, Tailwind CSS, React Hook Form, Zod, TanStack Query y Playwright.

Backend: Java 21 LTS, Spring Boot, Spring Security, OAuth2 Resource Server con JWT, Spring Data JPA, Bean Validation y Maven.

Datos e infraestructura: PostgreSQL, Redis, Flyway, Docker, Docker Compose y Testcontainers.

AWS: Cognito User Pool, OAuth2/OIDC, SES o correo equivalente, proveedor SMS por decidir, CloudFront, WAF, CloudWatch y Secrets Manager.

Pruebas/API: JUnit 5, Mockito, Testcontainers, REST Assured, Playwright, OpenAPI 3 y Swagger UI protegido o deshabilitado en producción.

## 5. Seguridad y estados

- Cognito autentica; Spring gobierna el cliente y el negocio.
- No guardar password, password_hash ni salt en PostgreSQL.
- No guardar tokens en localStorage, sessionStorage ni cookies accesibles por JavaScript.
- Cookies: HttpOnly, Secure fuera de local y SameSite=Lax por defecto.
- Proteger mutaciones del BFF contra CSRF.
- Validar en frontend y backend.
- Autorizar en backend, no solo ocultando botones.
- Rate limiting y límites de reintentos para login, OTP, recuperación y acciones sensibles.
- No registrar secretos, tokens, OTP, documentos completos ni información financiera sensible.
- Usar mensajes que no permitan enumerar usuarios.
- Usar UTC.
- No usar float/double para dinero.
- Cambios de esquema exclusivamente mediante Flyway.

Estados separados:

~~~text
account_status
onboarding_status
identity_status
regional_status
~~~

Flujo:

~~~text
ACCOUNT_CREATED -> CONTACT_VERIFIED -> PROFILE_PENDING
-> IDENTITY_PENDING -> IDENTITY_VERIFIED
-> REGION_PENDING -> REGION_VERIFIED -> ACTIVE
~~~

Estados excepcionales: BLOCKED, SUSPENDED, REJECTED, CLOSED.

## 6. Estructura objetivo del repositorio

~~~text
/
├── frontend/
│   ├── app/
│   │   ├── (public)/
│   │   ├── (auth)/login/
│   │   ├── (auth)/register/
│   │   ├── (auth)/verify/
│   │   └── (private)/mi-cuenta/
│   ├── components/
│   ├── features/
│   ├── lib/
│   ├── tests/
│   └── .env.example
├── backend/
│   ├── src/main/java/.../{identity,customer,onboarding,authorization,audit}/
│   ├── src/main/resources/db/migration/
│   ├── src/test/
│   ├── pom.xml
│   └── .env.example
├── infra/docker-compose.yml
├── docs/{adr,api,security}/
├── .editorconfig
├── .gitignore
├── README.md
└── AGENTS.md
~~~

Si el repositorio ya tiene otra estructura, documentar la correspondencia y evitar movimientos masivos.

## 7. Orden de implementación

### Fase 0 — Inspección

Inspeccionar Git, estructura, versiones, documentación, AGENTS.md, Docker, frontend, backend, migraciones y tests. Entregar diagnóstico, conflictos y lista de archivos a tocar. No implementar funcionalidad.

### Fase 1 — Entorno local

Configurar Java, Maven, Node, gestor de paquetes, Docker Compose, PostgreSQL, Redis, healthchecks, archivos .env.example y README. Aceptación: servicios reproducibles, sin secretos y con comandos documentados.

### Fase 2 — Esqueleto

Adaptar Next.js App Router y Spring Boot, compilación, lint, tests base, health endpoint y errores base. No implementar login real.

### Fase 3 — PostgreSQL/Flyway

Crear mediante migraciones: customer, customer_consent, role, permission, customer_role, role_permission y audit_event. Usar UUIDv7, cognito_sub único, estados separados, timestamps UTC, restricciones, índices y claves foráneas. No guardar contraseñas ni tokens.

### Fase 4 — Cognito

Configurar User Pool, App Client, Authorization Code + PKCE, URLs de desarrollo, scopes, issuer, claims, correo, recuperación y MFA. SMS queda sujeto a evaluación. Separar integración real de mocks.

### Fase 5 — BFF/Redis

Implementar callback server-side, sesión aleatoria, tokens en Redis con TTL, cookie segura, logout, expiración, renovación controlada y CSRF. El navegador nunca recibe tokens.

### Fase 6 — Spring Security/API

Configurar OAuth2 Resource Server; validar firma, issuer, expiración y audience/claims; mapear cognito_sub a customer; proteger recursos e impedir acceso cruzado.

Endpoints iniciales:

~~~text
GET  /actuator/health
GET  /api/v1/auth/me
GET  /api/v1/customers/me
POST /api/v1/auth/logout
~~~

No agregar endpoints de préstamos.

### Fase 7 — UI

Implementar página inicial, registro, verificación, login, MFA/step-up según configuración, recuperación, logout, onboarding y estados de carga/error/accesibilidad. Zod mejora UX; backend vuelve a validar.

### Fase 8 — RBAC/auditoría

Roles: CUSTOMER, OPERATIONS, RISK_ANALYST, ADMIN.

Permisos: customer:read:self, customer:update:self, customer:read:any, onboarding:review, audit:read, authorization:manage.

Auditar registro, verificación, login exitoso/fallido, logout, recuperación, MFA, cambios sensibles, cambios de rol y accesos denegados. Nunca auditar secretos.

### Fase 9 — OpenAPI y pruebas

Unitarias con JUnit/Mockito; integración con PostgreSQL/Redis reales mediante Testcontainers; API con REST Assured; flujos con Playwright; pruebas negativas de autorización, expiración, CSRF, rate limiting y acceso entre clientes. Mantener OpenAPI actualizado y Swagger UI controlado.

### Fase 10 — Cierre

Actualizar README, revisar secretos y logs, migrar desde cero, ejecutar suite completa, preparar demo, registrar desviaciones y documentar Sprint 2. Leonardo aprueba.

## 8. Definition of Done

- El repositorio se configura desde cero siguiendo el README.
- Docker Compose levanta PostgreSQL y Redis.
- Frontend y backend compilan con versiones documentadas.
- La página inicial funciona.
- Registro, verificación, login, logout y recuperación están implementados o bloqueados por una dependencia externa documentada.
- Cognito es autoridad de credenciales.
- PostgreSQL no tiene contraseñas ni tokens.
- El navegador no expone JWT ni refresh tokens.
- Redis mantiene sesiones con TTL.
- Cookies tienen atributos de seguridad.
- Spring valida JWT como Resource Server.
- Un cliente no puede leer datos de otro.
- Estados de cuenta, onboarding, identidad y región están separados.
- RBAC y permisos se aplican en backend.
- Eventos críticos quedan auditados sin secretos.
- Todas las migraciones son Flyway.
- UUIDv7 está implementado según ADR-008.
- OpenAPI está actualizado.
- Pasan pruebas unitarias, integración, API y navegador.
- No hay secretos o datos comprometidos en Git.
- Riesgos y trabajo no incluido están documentados.
- Leonardo revisó y aprobó.

# 9. ADR iniciales completos

Crear en docs/adr/:

~~~text
ADR-001-nextjs-app-router.md
ADR-002-spring-boot-backend.md
ADR-003-postgresql.md
ADR-004-aws-cognito.md
ADR-005-modular-monolith.md
ADR-006-bff-authentication.md
ADR-007-redis-server-side-sessions.md
ADR-008-uuidv7.md
ADR-009-flyway-migrations.md
ADR-010-rbac-permissions.md
~~~

## ADR-001 — Next.js App Router para frontend y BFF

Estado: Aceptado  
Fecha: 2026-08-23  
Responsable: Leonardo

### Contexto

Se necesitan páginas públicas con buen rendimiento, una zona privada autenticada y una capa server-side para callback OAuth, cookies y llamadas a Spring sin exponer tokens.

### Decisión

Usaremos Next.js con App Router y TypeScript para frontend y BFF. Habrá rutas públicas y privadas en el mismo proyecto, con Server Components y Route Handlers/server-side code cuando corresponda.

### Alternativas

React SPA con backend separado; Next.js Pages Router; aplicaciones independientes; otro framework.

### Razones

Permite combinar SEO y zona autenticada, centralizar cookies y callback OAuth, compartir contratos y reducir despliegues iniciales.

### Consecuencias

Positivas: una aplicación, mejor control de sesión y menor infraestructura.  
Negativas: hay que distinguir código cliente/servidor y revisar variables públicas.

### Reglas

No usar variables públicas para secretos; no almacenar tokens en el navegador; usar middleware solo como apoyo; mantener negocio en Spring; documentar cada Route Handler del BFF.

## ADR-002 — Spring Boot como backend REST modular

Estado: Aceptado  
Fecha: 2026-08-23  
Responsable: Leonardo

### Contexto

La fintech necesita reglas de negocio, validación, autorización, auditoría e integraciones futuras.

### Decisión

Usaremos Java 21 LTS y Spring Boot con Spring Security, OAuth2 Resource Server, Spring Data JPA, Bean Validation y Maven para una API REST modular.

### Alternativas

Node.js; microservicios desde el día uno; serverless; autenticación propia.

### Razones

Ecosistema empresarial maduro, soporte de seguridad/OAuth2, integración con PostgreSQL/Flyway/Testcontainers y buenas capacidades de pruebas.

### Consecuencias

Positivas: backend tipado, validación y autorización centralizadas, preparado para dominios financieros.  
Negativas: mayor verbosidad y necesidad de disciplina modular.

### Reglas

Controllers delgados; DTOs en límites; no exponer entidades JPA; separar módulos; documentar errores y códigos HTTP con OpenAPI.

## ADR-003 — PostgreSQL como base transaccional

Estado: Aceptado  
Fecha: 2026-08-23  
Responsable: Leonardo

### Contexto

Se requieren transacciones, relaciones, restricciones, auditoría y evolución hacia préstamos y pagos.

### Decisión

PostgreSQL será la base relacional principal de los datos de negocio.

### Alternativas

MongoDB; DynamoDB; MySQL/MariaDB; una base por microservicio desde el inicio.

### Razones

Consistencia transaccional, claves foráneas, índices, tipos estructurados, buen soporte en Spring y Testcontainers.

### Consecuencias

Positivas: integridad referencial, consultas maduras y entorno local reproducible.  
Negativas: requiere diseño y migraciones disciplinadas; no será almacén de sesión.

### Reglas

No contraseñas ni tokens; no float/double para dinero; restricciones explícitas; UTC; cambios solo con Flyway.

## ADR-004 — AWS Cognito como proveedor de identidad

Estado: Aceptado  
Fecha: 2026-08-23  
Responsable: Leonardo

### Contexto

No se debe implementar desde cero almacenamiento de contraseñas, recuperación, MFA, OTP y emisión de tokens para una fintech.

### Decisión

AWS Cognito User Pool será el Identity Provider del Sprint 1. Gestionará credenciales, verificación, recuperación, MFA/OTP y tokens OIDC/OAuth2. Spring gestionará customer, onboarding, KYC, región, autorización y auditoría.

### Alternativas

Spring propio; Auth0/Okta; Keycloak; login social principal.

### Razones

Reduce código sensible, integra con OAuth2/OIDC/Spring Security y encaja con AWS.

### Consecuencias

Positivas: menor superficie criptográfica y separación identidad/negocio.  
Negativas: dependencia y costos de AWS; SMS puede tener restricciones; Cognito no reemplaza KYC.

### Reglas

Authorization Code + PKCE; cognito_sub único; no contraseñas; revisar issuer, audience, scopes y expiración; separar consentimientos propios.

## ADR-005 — Monolito modular

Estado: Aceptado  
Fecha: 2026-08-23  
Responsable: Leonardo

### Contexto

El equipo es pequeño y microservicios iniciales añadirían red, despliegue, observabilidad, consistencia y pruebas distribuidas.

### Decisión

Un único despliegue Spring Boot con módulos internos de identity, customer, onboarding, authorization y audit, preparados para extracción futura.

### Alternativas

Microservicios desde el inicio; monolito sin límites; serverless; auth como microservicio.

### Razones

Menor complejidad, transacciones y depuración simples, velocidad y límites suficientes para extraer después.

### Consecuencias

Positivas: desarrollo local y despliegue sencillos.  
Negativas: fallo potencialmente más amplio y sin escalado independiente inicial.

### Reglas

Servicios y contratos internos; prohibir acceso directo a repositorios de otros módulos; extraer solo con volumen, límites, equipo y beneficio demostrados.

## ADR-006 — BFF para autenticación

Estado: Aceptado  
Fecha: 2026-08-23  
Responsable: Leonardo

### Contexto

Guardar tokens en localStorage aumenta el impacto de XSS. Se requiere controlar tokens, renovación, logout y llamadas a Spring en servidor.

### Decisión

Next.js será BFF: callback OAuth, tokens en Redis, cookie de sesión y llamadas a Spring con access token.

### Alternativas

JWT directo al navegador; localStorage; Spring como callback; navegador llamando directamente a Cognito y Spring.

### Razones

Reduce exposición, centraliza integración, permite invalidación server-side y simplifica el frontend.

### Consecuencias

Positivas: cookie opaca, refresh token server-side y logout inmediato.  
Negativas: BFF crítico; cookies exigen CSRF y configuración correcta; no alojará negocio de préstamos.

### Reglas

Cookie HttpOnly, Secure fuera de local y SameSite=Lax; id aleatorio; no devolver tokens; invalidar sesión; no registrar secretos.

## ADR-007 — Redis para sesiones server-side

Estado: Aceptado  
Fecha: 2026-08-23  
Responsable: Leonardo

### Contexto

El BFF necesita sesiones temporales con expiración e invalidación rápida, sin usar PostgreSQL como almacén de alta frecuencia.

### Decisión

Redis almacenará sesiones server-side con TTL obligatorio y datos mínimos.

~~~text
smf:session:<random-id>
  customer_id
  access_token
  refresh_token
  expires_at
  created_at
~~~

### Alternativas

Memoria del proceso; PostgreSQL; tokens en navegador; DynamoDB.

### Razones

Baja latencia, TTL, invalidación y soporte para rate limiting.

### Consecuencias

Positivas: expiración, logout y escalado horizontal del BFF.  
Negativas: dependencia crítica; pérdida de Redis puede cerrar sesiones; valores sensibles.

### Reglas

TTL finito; claves impredecibles; namespace por entorno; no usar KEYS; timeouts; Redis no es fuente de negocio.

## ADR-008 — UUIDv7 para ids internos

Estado: Aceptado  
Fecha: 2026-08-23  
Responsable: Leonardo

### Contexto

Se requieren ids no adivinables y adecuados para sistemas distribuidos. UUIDv7 agrega orden temporal aproximado sin exponer secuencias simples.

### Decisión

Usaremos UUIDv7 para ids internos cuando driver y PostgreSQL lo soporten. cognito_sub será identificador externo separado.

### Alternativas

BIGSERIAL; UUIDv4; ULID; cognito_sub como PK.

### Razones

No enumerabilidad, orden aproximado, generación distribuida y desacoplamiento de Cognito.

### Consecuencias

Positivas: ids portables y auditoría más ordenable.  
Negativas: soporte variable y mayor tamaño; created_at sigue siendo obligatorio.

### Reglas

UUID no sustituye autorización; validar unicidad; guardar timestamps explícitos; no confundir id interno con cognito_sub.

## ADR-009 — Flyway para migraciones

Estado: Aceptado  
Fecha: 2026-08-23  
Responsable: Leonardo

### Contexto

El esquema debe reproducirse en local, CI, pruebas y despliegues; cambios manuales o ddl-auto generan divergencias.

### Decisión

Usaremos Flyway con migraciones SQL versionadas.

~~~text
V1__create_customer_and_identity_tables.sql
V2__create_authorization_tables.sql
V3__create_audit_event_table.sql
~~~

### Alternativas

Hibernate ddl-auto=update; scripts manuales; Liquibase; crear esquema al arrancar.

### Razones

Historial explícito, reproducibilidad, CI/CD y cambios auditables.

### Consecuencias

Positivas: base vacía reproducible y pruebas reales.  
Negativas: migraciones aplicadas no se editan; cambios destructivos requieren estrategia.

### Reglas

Migraciones inmutables; numeración única; restricciones explícitas; revisión SQL; probar desde cero y desde versión anterior; no ddl-auto=update compartido.

## ADR-010 — RBAC con permisos explícitos

Estado: Aceptado  
Fecha: 2026-08-23  
Responsable: Leonardo

### Contexto

Clientes, operaciones, riesgo y administración necesitan mínimo privilegio. is_admin no es granular ni auditable.

### Decisión

Usaremos roles y permisos:

~~~text
customer -> customer_role -> role -> role_permission -> permission
~~~

La autorización se aplica por permiso y alcance. customer:read:self solo permite leer datos propios.

Roles: CUSTOMER, OPERATIONS, RISK_ANALYST, ADMIN.

Permisos: customer:read:self, customer:update:self, customer:read:any, onboarding:review, audit:read, authorization:manage.

### Alternativas

Booleanos; solo Cognito Groups; ABAC completo desde Sprint 1; controles solo en frontend.

### Razones

Mínimo privilegio, permisos reutilizables, auditoría y evolución hacia reglas de dominio/ABAC.

### Consecuencias

Positivas: control granular y pruebas negativas claras.  
Negativas: más tablas y riesgo de acumulación; requiere revisión periódica.

### Reglas

Denegar por defecto; backend como autoridad; no confiar en roles del cliente; auditar cambios; prohibir autoasignación; MFA fuerte para administración; probar permitido, denegado y acceso cruzado.

## 10. Variables de entorno de referencia

Usar solo valores locales de ejemplo. Nunca subir secretos reales.

~~~dotenv
NEXT_PUBLIC_APP_URL=http://localhost:3000
BACKEND_INTERNAL_URL=http://localhost:8080
COGNITO_ISSUER_URL=
COGNITO_CLIENT_ID=
COGNITO_CLIENT_SECRET=
SESSION_COOKIE_NAME=smf_session
SESSION_TTL_SECONDS=1800
REDIS_URL=redis://localhost:6379

SPRING_PROFILES_ACTIVE=local
SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/sanmartinfinanzas
SPRING_DATASOURCE_USERNAME=smf_local
SPRING_DATASOURCE_PASSWORD=smf_local_only
SPRING_DATA_REDIS_URL=redis://localhost:6379
OAUTH2_ISSUER_URI=
OAUTH2_AUDIENCE=
~~~

## 11. Checklist de revisión

- ¿Se tocó solo el alcance de la fase?
- ¿Se conservaron cambios existentes?
- ¿Las dependencias están justificadas?
- ¿Hay secretos o datos personales en el diff?
- ¿Se validaron backend y frontend?
- ¿La autorización está en backend?
- ¿Hay pruebas de fallos y accesos denegados?
- ¿La migración funciona desde base vacía?
- ¿La documentación coincide con el código?
- ¿Se documentaron supuestos, riesgos y pendientes?



