# ADR-010: Flyway para migraciones

- Estado: Aceptado según el contrato técnico del Sprint 1
- Fecha: 2026-08-24

## Contexto

El esquema debe reproducirse en local, CI, pruebas y despliegues. Cambios manuales o `ddl-auto=update` generan divergencias.

## Decisión

Usar Flyway con migraciones SQL versionadas e inmutables.

## Consecuencias

Existe historial explícito y reproducibilidad; una migración aplicada no se edita y los cambios destructivos requieren estrategia.

## Alternativas consideradas

Hibernate `ddl-auto=update`, scripts manuales y Liquibase. No se adoptan como estándar inicial.

## Reglas de implementación

- Numeración única y nombres descriptivos.
- Constraints explícitas y revisión SQL.
- Probar desde base vacía y desde una versión anterior.
- No guardar secretos en migraciones.
- Documentar datos de prueba y estrategia de rollback.

## Riesgos y pendientes

Definir baseline, naming final, configuración por entorno y tratamiento de datos existentes antes de la primera migración funcional.

## Referencias

ADR-004, ADR-009, ADR-003.
