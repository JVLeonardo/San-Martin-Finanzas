---
name: smf-feature-implementation
description: Flujo controlado para implementar features autorizadas en San Martin Finanzas.
---

# Implementación de features

## Flujo obligatorio

1. Leer `AGENTS.md`, el Sprint Backlog y la historia autorizada.
2. Leer los ADR relacionados.
3. Inspeccionar código, configuración y pruebas existentes.
4. Confirmar alcance, exclusiones, dependencias y supuestos.
5. Presentar el plan exacto de archivos antes de editar.
6. Esperar autorización explícita.
7. Implementar el mínimo necesario.
8. Añadir o actualizar pruebas pertinentes.
9. Ejecutar las validaciones disponibles.
10. Presentar diff, resultados, riesgos y checklist de aceptación.
11. Esperar revisión antes de tocar otra tarea.

## Reglas de alcance

- No hacer refactors no solicitados.
- No hacer trabajo especulativo ni preparar capas futuras sin necesidad.
- No cambiar arquitectura sin ADR y aprobación.
- No introducir dependencias sin justificación aprobable.
- No inventar reglas financieras, legales, de privacidad o regulatorias.
- No guardar secretos, contraseñas, tokens u OTP.

## Límites

La Skill no autoriza implementación automática ni avance de sprint. Si falta una definición que cambie el comportamiento, detenerse y solicitarla.
