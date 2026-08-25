# San Martin Finanzas

Monorepo del Sprint 1 para la plataforma de micropréstamos San Martin Finanzas.

## Requisitos

- Java 21
- Node.js 20.9 o superior y npm
- Docker Desktop con Docker Compose

El backend incluye Maven Wrapper, por lo que Maven global no es necesario.

## Estructura inicial

- `apps/web/`: Next.js App Router, TypeScript, Tailwind CSS y ESLint.
- `services/api/`: Spring Boot 3.5 con Web, Validation, Actuator, persistencia, Flyway, Redis y seguridad preparada.
- `infrastructure/`: directorios reservados para Docker auxiliar y scripts operativos.
- `docker-compose.yml`: web, API, PostgreSQL 17 y Redis 7 para desarrollo local.
- `docs/`: ADR, arquitectura, Scrum, seguridad y diagramas.

## Entorno local

Copie los archivos de ejemplo si necesita sobrescribir valores locales. Nunca suba archivos `.env` ni credenciales reales.

```powershell
Copy-Item .env.example .env
Copy-Item apps/web/.env.example apps/web/.env
Copy-Item services/api/.env.example services/api/.env
docker compose up --build
docker compose ps
```

Los servicios locales se exponen en `localhost:3000` (web), `localhost:8080` (API), `localhost:5432` (PostgreSQL) y `localhost:6379` (Redis). Los valores `smf_local` y `smf_local_only` son exclusivos de desarrollo local.

Para detenerlos:

```powershell
docker compose down
```

## Ejecutar los esqueletos

```powershell
cd apps/web
npm run dev
```

```powershell
cd services/api
.\mvnw.cmd spring-boot:run
```

## Verificaciones

```powershell
docker compose ps

cd apps/web
npm run lint
npm run build

cd ..\..\services\api
.\mvnw.cmd test
.\mvnw.cmd package
```

Flyway está habilitado, pero todavía no existen migraciones funcionales, entidades ni reglas de negocio. Cognito, BFF y autenticación real se incorporarán en las tareas autorizadas del Sprint 1.
