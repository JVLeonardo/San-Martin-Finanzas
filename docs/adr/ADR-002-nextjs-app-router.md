# ADR-002: Next.js App Router

- Estado: Aceptado según el contrato técnico del Sprint 1
- Fecha: 2026-08-24

## Contexto

Se necesita una experiencia pública responsive, formularios de autenticación, una zona privada futura y una capa server-side para el BFF.

## Decisión

Usar Next.js con TypeScript y App Router en `apps/web/`.

## Consecuencias

Se aprovechan layouts, routing y Server Components; se debe mantener una separación estricta entre código servidor y cliente.

## Alternativas consideradas

React SPA independiente, Pages Router y otro framework. Se descartan inicialmente para mantener un estándar único.

## Reglas de implementación

- Separar componentes de servidor y cliente.
- Validar también en backend.
- Mantener secretos fuera del navegador.
- No colocar tokens sensibles en `localStorage` o `sessionStorage`.
- Mantener negocio financiero en Spring Boot.

## Riesgos y pendientes

Confirmar estrategia de despliegue y límites del BFF antes de producción.

## Referencias

ADR-001, ADR-006, `SAN_MARTIN_FINANZAS_CODEX_MASTER.md`.
