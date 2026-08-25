# ADR-008: Redis para sesiones server-side

- Estado: Aceptado según el contrato técnico del Sprint 1
- Fecha: 2026-08-24

## Contexto

El BFF necesita sesiones temporales con expiración e invalidación rápida sin usar PostgreSQL como almacén de alta frecuencia.

## Decisión

Redis almacenará sesiones server-side con TTL obligatorio cuando el despliegue requiera sesiones compartidas o escalamiento horizontal.

## Consecuencias

Permite baja latencia, TTL e invalidación; la pérdida de Redis puede cerrar sesiones y añade una dependencia operativa.

## Alternativas consideradas

Memoria del proceso, PostgreSQL, tokens en navegador y DynamoDB. No se adoptan como opción base.

## Reglas de implementación

- TTL finito y namespace por entorno.
- Claves impredecibles y datos mínimos.
- No usar `KEYS` en producción.
- Aplicar timeouts y conexión autenticada donde corresponda.
- Redis no es fuente de verdad del negocio.

## Riesgos y pendientes

Deben definirse disponibilidad, respaldo, recuperación y comportamiento ante pérdida de Redis.

## Referencias

ADR-007, ADR-004.
