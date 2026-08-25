---
name: smf-engineering-standards
description: Estándares de ingeniería, arquitectura y calidad para San Martin Finanzas.
---

# Estándares de ingeniería

## Aplicación

Leer `AGENTS.md`, la historia o tarea autorizada y los ADR relacionados antes de actuar. La arquitectura base usa Next.js/TypeScript, Spring Boot, PostgreSQL, Cognito/OIDC, BFF, Redis, UUIDv7, Flyway y RBAC con permisos explícitos. La organización actual continúa siendo un monolito modular.

## Reglas técnicas

- Mantener límites claros entre presentación, aplicación, dominio, persistencia e integraciones.
- Mantener controllers delgados, DTOs en los límites y validación en frontend y backend.
- No exponer entidades de persistencia como contratos públicos sin decisión explícita.
- Usar manejo consistente de errores, observabilidad suficiente y logs sin datos sensibles.
- No guardar contraseñas, tokens, OTP, secretos ni documentos completos en código, base de datos o logs.
- Autorizar en backend; ocultar una opción en frontend nunca es un control de seguridad.
- No añadir dependencias sin justificar necesidad, impacto, licencia, mantenimiento, seguridad y alternativa.
- Revisar compatibilidad con el repositorio existente antes de cambiar estructura o configuración.
- No modificar sprints futuros ni inventar reglas financieras, legales o regulatorias.

## Entrega mínima

Cada cambio debe dejar plan, diff, pruebas, riesgos y pendientes. Las decisiones de arquitectura requieren ADR y aprobación explícita cuando cambien proveedor, patrón, límites de módulo o contrato.

## Límites

Esta Skill no autoriza cambios por sí sola. No permite refactors oportunistas, cambios de versión, cambios de infraestructura externa ni trabajo fuera de la tarea autorizada.
