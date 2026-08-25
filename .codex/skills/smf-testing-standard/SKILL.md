---
name: smf-testing-standard
description: Estrategia proporcional y evidencia de pruebas para San Martin Finanzas.
---

# Estándar de pruebas

## Estrategia

- Usar pruebas unitarias para reglas y servicios.
- Usar pruebas de integración para base de datos, seguridad y APIs.
- Usar Testcontainers o equivalente solo si ya existe o se aprueba introducirlo.
- Usar REST Assured/MockMvc para backend según la convención existente.
- Usar Playwright u otra herramienta existente para recorridos frontend/end-to-end.
- Cubrir casos felices y negativos de registro, verificación, login, logout y recuperación.
- Probar autorización, expiración, rate limiting y mensajes no reveladores.
- Probar migraciones reproducibles sobre una base limpia.
- No usar cobertura como único criterio de calidad.

## Evidencia

Registrar comando, entorno, resultado, fallas bloqueantes y evidencia relevante. Una prueba que falla no debe ocultarse, desactivarse ni relajarse sin explicar la causa y obtener aprobación.

## Límites

No instalar herramientas, crear pruebas de features futuras ni cambiar producción para hacer pasar una prueba sin autorización explícita.
