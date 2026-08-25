# ADR-009: UUIDv7 para identificadores internos

- Estado: Aceptado según el contrato técnico del Sprint 1
- Fecha: 2026-08-24

## Contexto

Se requieren identificadores no adivinables y adecuados para generación distribuida, con orden temporal aproximado.

## Decisión

Usar UUIDv7 para identificadores internos cuando el driver, la librería y PostgreSQL lo soporten de forma validada. `cognito_sub` será un identificador externo separado.

## Consecuencias

Se evita enumeración simple y se conserva orden aproximado; el soporte de librerías y serialización debe verificarse.

## Alternativas consideradas

BIGSERIAL, UUIDv4, ULID y usar `cognito_sub` como clave primaria. No se adoptan como base del modelo.

## Reglas de implementación

- Validar unicidad.
- Guardar timestamps explícitos.
- No confundir identificador con autorización.
- No migrar IDs existentes oportunistamente.
- Mantener `cognito_sub` separado del ID interno.

## Riesgos y pendientes

Validar soporte real del driver y definir la estrategia para entidades existentes antes de crear migraciones.

## Referencias

ADR-004, ADR-009 de esquema y migraciones.
