# ADR-007: BFF para autenticación web

- Estado: Aceptado según el contrato técnico del Sprint 1
- Fecha: 2026-08-24

## Contexto

Guardar tokens en el navegador aumenta el impacto de XSS y dificulta controlar renovación, logout e invalidación server-side.

## Decisión

Next.js actuará como BFF para callback OAuth, tokens server-side, cookie de sesión y llamadas a Spring Boot.

## Consecuencias

El navegador recibe una cookie opaca y no tokens; el BFF se vuelve una pieza crítica que requiere CSRF, observabilidad y pruebas.

## Alternativas consideradas

JWT directo al navegador, `localStorage`, Spring como callback y llamadas directas desde el navegador. No se adoptan.

## Reglas de implementación

- Cookie `HttpOnly`, `Secure` fuera de local y `SameSite=Lax` por defecto.
- Sesiones aleatorias e impredecibles.
- No devolver access tokens o refresh tokens al navegador.
- Invalidar sesión en logout y expiración.
- Proteger mutaciones contra CSRF.
- No colocar negocio financiero en el BFF.

## Riesgos y pendientes

Deben definirse TTL, renovación, estrategia de múltiples instancias y límites de confianza entre BFF y API.

## Referencias

ADR-005, ADR-008.
