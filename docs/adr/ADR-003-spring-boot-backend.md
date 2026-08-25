# ADR-003: Spring Boot como backend REST modular

- Estado: Aceptado según el contrato técnico del Sprint 1
- Fecha: 2026-08-24

## Contexto

La plataforma necesita reglas de negocio, validación, autorización, auditoría e integraciones futuras en un backend mantenible.

## Decisión

Usar Java 21, Spring Boot, Spring Security, OAuth2 Resource Server, Spring Data JPA, Bean Validation y Maven en `services/api/`.

## Consecuencias

Se obtiene un ecosistema empresarial maduro para seguridad y transacciones; requiere disciplina de módulos y pruebas.

## Alternativas consideradas

Node.js backend, microservicios tempranos y backend gestionado. Se mantienen como posibles revisiones, no como alcance inicial.

## Reglas de implementación

- Controllers delgados y DTOs en los límites.
- Separar aplicación, dominio, persistencia e integraciones.
- No exponer entidades JPA como contrato público.
- Validar entrada y documentar errores HTTP.
- No mezclar credenciales Cognito con reglas de negocio.

## Riesgos y pendientes

La versión actual del proyecto es Spring Boot 3.5.16; cualquier actualización requiere evaluación y aprobación.

## Referencias

ADR-001, ADR-005, ADR-010.
