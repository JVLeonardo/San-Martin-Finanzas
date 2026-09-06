---
name: smf-engineering-standards
description: Buenas prácticas de ingeniería para implementar código mantenible y consistente en San Martín Finanzas.
---

# Engineering Standards

## Aplicación

Usar esta Skill cuando la tarea implique crear o modificar código.

Respetar siempre:

- `AGENTS.md`
- el alcance del prompt actual
- la arquitectura y convenciones existentes del repositorio

No cargar documentación adicional salvo que sea relevante para la tarea.

---

## Principios

- Preferir soluciones simples y mantenibles.
- Reutilizar componentes, utilidades y patrones existentes antes de crear nuevos.
- Mantener responsabilidades claras y evitar componentes o servicios excesivamente grandes.
- Evitar duplicación de lógica y estilos.
- No hacer refactors oportunistas fuera del alcance.
- No introducir abstracciones para necesidades futuras no requeridas.
- Mantener cambios pequeños y localizados.

---

## Frontend

- Separar presentación, estado y acceso a datos cuando aporte claridad.
- Mantener componentes presentacionales libres de lógica de negocio innecesaria.
- Reutilizar design tokens y componentes existentes.
- Evitar valores visuales arbitrarios cuando exista un token equivalente.
- Mantener comportamiento responsive fluido; no implementar layouts por viewport exacto.
- Preservar accesibilidad: HTML semántico, labels, focus visible y navegación por teclado.
- Evitar lógica de API dispersa dentro de componentes visuales.

---

## Backend

- Mantener controllers delgados.
- Mantener lógica de negocio fuera de controllers y adapters.
- Usar DTOs en límites de entrada y salida.
- No exponer entidades de persistencia como contratos públicos sin decisión explícita.
- Validar datos en los límites correspondientes.
- Mantener dependencias entre módulos explícitas y controladas.
- Respetar la estructura modular existente.

---

## Seguridad

- La autorización debe validarse en backend.
- Ocultar elementos en frontend no es un control de seguridad.
- No registrar secretos, tokens, OTP, contraseñas ni datos sensibles innecesarios.
- No almacenar secretos o credenciales en código fuente.
- Mantener mensajes de error sin revelar detalles internos sensibles.

Para tareas de autenticación, sesión, permisos, datos personales o seguridad, usar además `smf-security-review` cuando corresponda.

---

## Dependencias

No añadir una dependencia nueva si:

- la funcionalidad ya existe en el proyecto
- puede resolverse razonablemente con la plataforma o librerías actuales
- solo evita unas pocas líneas de código

Si una dependencia es realmente necesaria, explicar brevemente:

- propósito
- por qué las alternativas existentes no bastan
- impacto técnico

No instalarla si el prompt no autoriza cambios de dependencias.

---

## Calidad

Antes de cerrar una implementación:

- revisar TypeScript/compilación
- ejecutar las verificaciones relevantes
- comprobar errores evidentes de runtime
- evitar warnings nuevos
- mantener naming y estructura consistentes con el repositorio

Las pruebas deben ser proporcionales al cambio.

Para tareas que requieran estrategia de pruebas, usar `smf-testing-standard`.

---

## Límites

Esta Skill no autoriza:

- cambiar arquitectura
- cambiar proveedores
- modificar infraestructura
- ampliar el alcance de la tarea
- implementar features futuras
- inventar reglas financieras, legales o regulatorias
- hacer commits o push
