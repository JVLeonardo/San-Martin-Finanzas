# ADR-011: RBAC con permisos explícitos

- Estado: Aceptado según el contrato técnico del Sprint 1
- Fecha: 2026-08-24

## Contexto

Clientes, operaciones, riesgo y administración necesitan mínimo privilegio. Un booleano o solo grupos de Cognito no es suficientemente granular ni auditable.

## Decisión

Usar roles y permisos explícitos con autorización por permiso y alcance:

```text
customer -> customer_role -> role -> role_permission -> permission
```

Roles iniciales: `CUSTOMER`, `OPERATIONS`, `RISK_ANALYST`, `ADMIN`.

Permisos iniciales: `customer:read:self`, `customer:update:self`, `customer:read:any`, `onboarding:review`, `audit:read`, `authorization:manage`.

## Consecuencias

Se obtiene mínimo privilegio, reutilización y auditoría; aumenta el número de tablas, reglas y pruebas requeridas.

## Alternativas consideradas

Booleanos, solo Cognito Groups, ABAC completo desde Sprint 1 y controles solo en frontend. No son suficientes como única estrategia inicial.

## Reglas de implementación

- Denegar por defecto.
- El backend es la autoridad.
- No confiar en roles enviados por el cliente.
- Prohibir autoasignación.
- Auditar cambios de rol y accesos denegados.
- Probar permitido, denegado y acceso cruzado.
- Exigir MFA fuerte para administración cuando esté disponible y aprobado.

## Riesgos y pendientes

El catálogo final, segregación de funciones y revisión periódica de permisos requieren validación funcional y de seguridad.

## Referencias

ADR-004, ADR-005, ADR-007.
