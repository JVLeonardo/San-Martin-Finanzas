# ADR-004: PostgreSQL como base transaccional

- Estado: Aceptado según el contrato técnico del Sprint 1
- Fecha: 2026-08-24

## Contexto

Se requieren transacciones, relaciones, constraints, auditoría y evolución hacia préstamos y pagos.

## Decisión

Usar PostgreSQL como base relacional principal de los datos de negocio.

## Consecuencias

Ofrece consistencia transaccional, claves foráneas e índices maduros; exige diseño de esquema, migraciones y backups disciplinados.

## Alternativas consideradas

MySQL/MariaDB, MongoDB, DynamoDB y una base por microservicio. No se adoptan inicialmente.

## Reglas de implementación

- No guardar contraseñas ni tokens.
- No usar `float` o `double` para dinero.
- Usar constraints, claves foráneas e índices justificados.
- Usar UTC.
- Cambiar el esquema únicamente mediante Flyway.

## Riesgos y pendientes

Capacidad, retención, cifrado, backups y recuperación deben validarse antes de producción.

## Referencias

ADR-009, investigación legal y regulatoria oficial del proyecto.
