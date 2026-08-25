---
name: smf-security-review
description: Revisión acotada de seguridad antes de cerrar tareas sensibles de San Martin Finanzas.
---

# Revisión de seguridad

## Controles

Revisar, según el alcance:

- Secretos en repositorio, variables de entorno y logs.
- Cookies `HttpOnly`, `Secure` y `SameSite` según entorno.
- CSRF/CORS y validación de origen.
- JWT: issuer, firma, expiración y claims necesarios.
- Rate limiting, reintentos y errores no reveladores.
- Separación entre Cognito/identidad, customer, autorización y auditoría.
- Ausencia de contraseñas en el modelo de negocio.
- Mínimo privilegio y RBAC/permisos en backend.
- Datos personales y minimización.
- Dependencias vulnerables, configuración insegura y endpoints expuestos.
- Trazabilidad sin códigos, tokens ni datos innecesarios.

## Clasificación y cierre

Clasificar hallazgos como `crítico`, `alto`, `medio` o `bajo`. Detener el cierre ante hallazgos críticos o altos sin decisión explícita. Registrar evidencia, impacto, recomendación, responsable y estado.

## Límites

Esta Skill no reemplaza una auditoría especializada ni aprobación legal, de privacidad o regulatoria. No autoriza introducir controles o dependencias fuera del alcance.
