# Sprint 01 — Página inicial + autenticación segura

- Estado: Planificado
- Fecha de referencia: 2026-08-24
- Responsable técnico: Leonardo Jesús Gonzales
- Product Owner propuesto: Ing. Ronal Ríos Romero
- Analista funcional: Carlos Humberto Gonzales

## Identificación y objetivo

El objetivo es entregar una primera experiencia pública confiable y una base de identidad digital segura que permita crear cuenta, verificar contacto, iniciar sesión y recuperar acceso. Para la demo visual se incorpora, como excepción expresa, un simulador estrictamente referencial y sin reglas de negocio definitivas. Autenticación no equivale a identidad civil, KYC, residencia regional ni aprobación crediticia.

## Alcance incluido

- Página inicial pública responsive.
- Simulador visual referencial y sus rutas de continuidad, exclusivamente con estados y datos de demostración aprobados para prototipado.
- Registro y verificación de correo o teléfono mediante proveedor aprobado.
- Login, logout y recuperación de acceso.
- Cognito/OIDC cuando la configuración sea aprobada.
- BFF y sesión protegida server-side.
- Referencia segura entre `subject` y `customer`.
- Spring Security como autoridad de autorización del backend.
- PostgreSQL/Flyway mínimos cuando corresponda al Sprint 1.
- Manejo de errores, límites de reintentos, rate limiting y auditoría técnica.
- Pruebas, documentación, evidencias y revisión de seguridad.

## Fuera de alcance

- Validación civil completa, biometría y KYC definitivo.
- Verificación concluyente de residencia regional.
- Solicitud, evaluación, aprobación, desembolso, pagos, mora o cobranza.
- Tasas, cargos y políticas financieras definitivas.
- Cálculos crediticios reales, persistencia de simulaciones, evaluación, scoring, elegibilidad y conexión del simulador con decisiones o datos funcionales del Sprint 2.
- Back office completo.
- Operación con dinero real.
- Promesas comerciales de aprobación o condiciones crediticias.
- Expansión regional adicional.
- MFA/step-up si no existe aprobación de configuración, costos y experiencia.

## Excepción de alcance — simulador referencial

Las rutas `/simulador` y `/simulador/continuar`, junto con el Simulator embebido en Home, quedan autorizadas dentro del Sprint 1 únicamente como frontend visual para la demo. Su propósito es validar composición, navegación, responsive, accesibilidad y estados de interfaz.

- Todos los valores visibles deben declararse explícitamente como referenciales o de demostración.
- No se implementan fórmulas financieras, tasas, TCEA, comisiones, seguros, scoring, elegibilidad ni decisiones de aprobación.
- No se persisten simulaciones ni se conectan estas pantallas con endpoints, Cognito, customer, KYC o bases de datos.
- `Continuar` solo conduce a las pantallas visuales aprobadas de registro o ingreso; no inicia una solicitud de crédito.
- Los datos, reglas e integraciones definitivos permanecen fuera de alcance hasta su definición y autorización en Sprint 2.

## Arquitectura de referencia

| Componente | Responsabilidad | Límite de seguridad |
|---|---|---|
| Next.js/TypeScript | UI pública, futura UI privada y BFF | No expone tokens sensibles ni sustituye autorización backend |
| Cognito/OIDC | Credenciales, verificación, recuperación y MFA aprobado | No representa KYC ni identidad civil por sí solo |
| Spring Boot/Spring Security | API, customer, reglas, autorización y auditoría | Valida JWT y permisos en servidor |
| PostgreSQL/Flyway | Persistencia y evolución del esquema de negocio | No almacena contraseñas ni tokens |
| Redis | Sesiones server-side y TTL cuando corresponda | No es fuente de verdad del negocio |
| Docker Compose | PostgreSQL y Redis locales | No implica despliegue productivo |
| JUnit/MockMvc/REST Assured/Playwright | Pruebas proporcionales | Evidencia registrada, sin secretos |

## Sprint Backlog

Cada elemento debe registrar responsable, dependencia, evidencia y checklist antes de marcarse terminado.

| ID | Elemento | Prioridad | Dependencia | Criterio de salida |
|---|---|---|---|---|
| S1-01 | Preparar entorno local y repositorio existente | Must | Ninguna | Proyecto reproducible, ramas y arranque actualizados |
| S1-02 | Construir página inicial responsive y simulador visual referencial | Must | S1-01, diseño aprobado | Contenido validado, rutas `/simulador` y `/simulador/continuar`, datos identificados como referenciales, navegación, responsive y accesibilidad básica; sin lógica ni integración de Sprint 2 |
| S1-03 | Registro y validación de contacto | Must | S1-01, proveedor aprobado | Flujo completo, estados claros y pruebas |
| S1-04 | Login y cierre de sesión | Must | S1-03 | Sesión protegida, errores controlados y acceso restringido |
| S1-05 | Recuperación de acceso | Must | S1-03 | Flujo probado sin revelar cuentas |
| S1-06 | Integrar API/cliente de negocio | Must | S1-04, ADR aplicables | Referencia segura identidad–customer y migraciones |
| S1-07 | Controles de seguridad y auditoría | Must | S1-04, S1-06 | Controles mínimos documentados y probados |
| S1-08 | Pruebas integrales y documentación | Must | S1-01 a S1-07 | Evidencias, DoD y riesgos abiertos registrados |
| S1-09 | MFA/step-up según configuración aprobada | Should | Proveedor, costos y UX aprobados | Solo implementar con aprobación explícita |

## Historias de usuario

### US-01 — Página pública

Como visitante de San Martín, quiero entender qué ofrece San Martin Finanzas y cómo contactarla para decidir si registrarme.

**Criterios:** propuesta regional y formal sin prometer aprobación; navegación a registro y login; simulador visual claramente referencial con continuidad hacia registro o ingreso; enlaces a seguridad, privacidad, términos y atención; responsive móvil y escritorio.

Checklist: `[ ]` contenido validado · `[ ]` navegación · `[ ]` simulador referencial sin lógica financiera · `[ ]` responsive · `[ ]` accesibilidad · `[ ]` evidencia de revisión.

### US-02 — Registro

Como persona interesada, quiero registrarme y aceptar consentimientos para crear una identidad digital.

**Criterios:** campos obligatorios y formatos; confirmación de contraseña; consentimientos obligatorios separados de marketing; contraseña nunca en backend de negocio; siguiente paso claro y no sensible.

Checklist: `[ ]` formulario · `[ ]` validación · `[ ]` consentimientos separados · `[ ]` errores no reveladores · `[ ]` pruebas.

### US-03 — Verificación de contacto

Como usuario registrado, quiero verificar correo o teléfono mediante código.

**Criterios:** expiración, intentos limitados, reenvío controlado, errores no reveladores, estado en Cognito y auditoría sin código en texto plano.

Checklist: `[ ]` proveedor · `[ ]` expiración · `[ ]` reintentos · `[ ]` reenvío · `[ ]` auditoría segura.

### US-04 — Login/logout

Como usuario verificado, quiero iniciar y cerrar sesión de forma segura.

**Criterios:** login crea sesión protegida; credenciales inválidas muestran mensaje genérico; expiración documentada; logout invalida sesión y bloquea reutilización.

Checklist: `[ ]` login · `[ ]` cookie protegida · `[ ]` expiración · `[ ]` logout · `[ ]` pruebas negativas.

### US-05 — Recuperación

Como usuario que olvidó su acceso, quiero recuperar mi cuenta.

**Criterios:** proveedor aprobado; no revela existencia de correo; límites y expiración; confirmación de cambio; eventos de seguridad.

Checklist: `[ ]` solicitud · `[ ]` mensaje genérico · `[ ]` límites · `[ ]` expiración · `[ ]` auditoría.

### US-06 — Separación técnica

Como responsable técnico, quiero separar autenticación, customer, autorización y auditoría.

**Criterios:** referencia `subject`–`customer`; ningún campo de contraseña en el modelo de negocio; Spring valida issuer, firma, expiración y claims; dependencias y decisiones pendientes documentadas.

Checklist: `[ ]` límites de módulos · `[ ]` referencia segura · `[ ]` JWT validado · `[ ]` permisos backend · `[ ]` pendientes documentados.

## Tareas técnicas

- [ ] Revisar repositorio, herramientas, versiones, configuración y documentación.
- [ ] Confirmar entorno reproducible y comandos documentados.
- [ ] Mantener límites `identity`, `customer`, `authorization`, `audit` y `shared`.
- [ ] Configurar Cognito sin secretos versionados.
- [ ] Implementar pantallas, estados y validaciones de UX aprobados.
- [ ] Implementar el Simulator, `/simulador` y `/simulador/continuar` como frontend visual con datos de demostración claramente aislados y sin integración funcional.
- [ ] Implementar BFF, cookies, CSRF y expiración según ADR.
- [ ] Configurar Spring Resource Server y claims necesarios.
- [ ] Crear migraciones Flyway reproducibles si forman parte del alcance aprobado.
- [ ] Cubrir errores, rate limiting, CSRF, CORS y logs seguros.
- [ ] Ejecutar pruebas unitarias, integración y end-to-end disponibles.
- [ ] Revisar dependencias y secretos.
- [ ] Preparar demo, evidencias, release notes y pendientes.

## Definition of Ready

Una tarea está Ready cuando tiene actor y propósito, épica y objetivo, criterios verificables, dependencias y datos conocidos, no requiere reglas financieras no aprobadas, tiene diseño mínimo, puede estimarse o dividirse y tiene identificados los riesgos de seguridad, privacidad y cumplimiento.

## Definition of Done

El Sprint está Done cuando el incremento está integrado, revisado, sin secretos, compilado y probado; registro, verificación, login, logout, recuperación y negativos tienen evidencia; el simulador visual y sus rutas están identificados como referenciales, no contienen lógica financiera real ni integración con Sprint 2 y fueron validados de forma responsive; existe sesión protegida, mensajes no reveladores, límites, logs seguros y permisos; las migraciones son reproducibles y no contienen contraseñas; la UI fue revisada en móvil y escritorio; la documentación de instalación, entorno, decisiones y riesgos está actualizada; no hay hallazgos críticos o altos sin decisión; Review y Retrospective fueron realizadas; las observaciones fueron aceptadas o devueltas al backlog.

## Riesgos y dependencias

| Riesgo/dependencia | Impacto | Respuesta | Responsable | Estado |
|---|---|---|---|---|
| Proveedor de identidad, correo o SMS | Bloqueo o costo no previsto | Confirmar configuración, límites y entregabilidad | Leonardo + proveedor | Pendiente |
| Suplantación o filtración de datos | Daño al usuario y al negocio | Minimización, controles, auditoría y revisión de seguridad | Leonardo + especialista | Pendiente |
| Reglas financieras no definidas | Implementación incorrecta | No inventar reglas; registrar decisión pendiente | Ronal + especialistas | Pendiente |
| Simulador referencial interpretado como oferta o resultado real | Riesgo comercial y de confianza | Etiquetar datos de demostración, evitar promesas y mantener aislada toda lógica futura | Leonardo + Product Owner | Mitigación definida para Sprint 1 |
| Residencia regional no definida | Alcance funcional incierto | Separar autenticación de verificación regional | Carlos + especialistas | Pendiente |
| Dependencia de una persona | Retrasos y continuidad | Documentar decisiones y accesos operativos | Equipo | Pendiente |
| Cambios frecuentes de alcance | Retrabajo | Backlog, ADR y aprobación formal | Product Owner | Pendiente |

## Métricas

Registrar historias comprometidas, terminadas y no terminadas; criterios demostrados; defectos por severidad; cobertura relevante; tiempo de ciclo; bloqueos; hallazgos de seguridad abiertos y cerrados; resultados de recorridos y acciones de retrospectiva.

## Entregables

- Página pública.
- Simulador visual referencial, `/simulador` y `/simulador/continuar`, sin lógica financiera ni integración de Sprint 2.
- Registro, verificación, login, logout y recuperación.
- Configuración de identidad sin secretos.
- API y referencia customer.
- Autorización y auditoría mínima.
- Migraciones aprobadas.
- Pruebas y checklist de seguridad.
- Guía de arranque.
- Review, retrospectiva y backlog actualizado.

## Review, Retrospective y seguimiento

### Sprint Review

- Fecha:
- Asistentes:
- Incremento demostrado:
- Historias aceptadas:
- Historias no aceptadas:
- Evidencias:
- Feedback:
- Decisiones:
- Nuevos elementos del backlog:
- Riesgos y gates pendientes:

### Retrospective

- Qué funcionó:
- Qué no funcionó:
- Qué se aprendió:
- Qué dejar de hacer:
- Qué comenzar:
- Acciones:

| Acción | Responsable | Fecha | Estado |
|---|---|---|---|
|  |  |  | Pendiente |

## Checklist operativo por épica

No marcar `[x]` sin evidencia y revisión del usuario. Cada línea debe conservar evidencia, fecha, responsable y observaciones.

| Estado | Épica/tarea | Relación | Evidencia | Fecha | Responsable | Observaciones |
|---|---|---|---|---|---|---|
| `[ ]` | E1 Presencia pública, confianza y simulación referencial | S1-02, US-01 |  |  |  |  |
| `[ ]` | E2 Identidad y acceso | S1-03, S1-04, S1-05, S1-09, US-02 a US-05 |  |  |  |  |
| `[ ]` | E9 Plataforma técnica y operación | S1-01, S1-06, S1-07, S1-08, US-06 |  |  |  |  |

## Resumen de tareas ejecutadas

| ID | Tarea | Estado | Resumen | Commit | Verificaciones |
|---|---|---|---|---|---|
| S1-01 | Preparar entorno local y repositorio existente | Completada técnicamente, pendiente de revisión | Compose local con web, API, PostgreSQL y Redis; dependencias base de persistencia, Flyway y seguridad preparada; documentación y ADR-012 actualizados. | Pendiente de commit | `docker compose config`; build de imágenes; cuatro servicios saludables; API `8080` y web `3000`; Flyway con 0 migraciones; Maven test/package; npm lint/build; `git diff --check` |
| S1-CI-01 | CI mínimo de frontend por Pull Request | Completada técnicamente, pendiente de revisión | Workflow con jobs independientes de lint y build sobre `apps/web`, Node.js 24, instalación reproducible y caché npm; cancela ejecuciones previas del mismo Pull Request. | Pendiente de commit | Validación estructural YAML; `npm ci`; `npm run lint`; `npm run build`. Pendiente: observar los checks en un Pull Request remoto. |
| S1-GIT-01 | Flujo Gitflow para el desarrollo frontend | Completada documentalmente, pendiente de revisión | Guía práctica para `dev`, `feature/*`, `release/*` y `hotfix/*`, con Pull Requests mediante GitHub CLI, sincronización de correcciones, versionado semántico y dos rulesets JSON importables para proteger `main` y `dev` durante el trabajo individual. | `d18ea52` | JSON parseado; targets y checks contrastados con el workflow; comandos y reglas contrastados con documentación oficial de GitHub; `git diff --check`. Pendiente: importar y validar los rulesets en GitHub. |
| S1-ARCH-01 | Arquitectura modular por capas para Next.js | Aprobada y materializada inicialmente, pendiente de revisión del código | Arquitectura feature-first con capas ligeras aceptada mediante ADR-013. La ruta `/` quedó como composición delgada dentro de `(public)` y la UI existente se encapsuló en la API pública de `features/home`, sin cambios visuales ni dependencias nuevas. | `11e4bf5` | `npm run lint`; `npm run build`; `git diff --check`. Pendiente: crear las demás capas incrementalmente con sus features autorizadas. |
| S1-FND-01 | Integrar Foundations aprobadas de Figma | Completada técnicamente, pendiente de revisión | Tokens de color, roles semánticos, superficies, tipografía, spacing, radius, sombras y focus visible integrados en la capa `styles/` existente y expuestos a Tailwind CSS 4. Cormorant Garamond y Source Sans 3 se cargan y autoalojan mediante `next/font`; no se crearon componentes ni pantallas. | `ef76c66` | `npm run lint`; `npx tsc --noEmit`; `npm run build`; inspección del CSS compilado y fuentes `.woff2`; `git diff --check`. Pendiente: contraste visual de los valores técnicos de sombras y focus contra Figma, ya que el handoff no aporta valores numéricos. |
| S1-02 | Especificación UI/UX para Home, simulador referencial y autenticación | Completada documentalmente, pendiente de revisión | Se creó la especificación Figma/UI y el paquete autónomo en inglés `figma-agent/` para Figma Agent. La identidad raster quedó completa con siete masters y 47 assets oficiales reproducibles. Por aprobación humana se incorporaron horizontal negativo, compacto negativo y monocromáticos dark/light, con cuatro canónicos y 12 tamaños útiles integrados al pipeline; se mantienen cinco omisiones para evitar upscale y cuatro monocromáticas por quedar bajo el mínimo legible del slogan. La Fase 2 incorporó un pipeline independiente para tres masters regionales aprobados (ruta, topografía y horizonte), con 42 derivados PNG/WebP reproducibles. Route White y las fotografías Hero corregidas están disponibles en las rutas canónicas del frontend; el patrón topográfico seamless y el horizonte oscuro permanecen como posibilidades futuras sujetas a masters y aprobación dedicados. Se cerró el handoff definitivo de `figma-agent/`: fuentes en inglés, contrato de ejecución de un solo prompt y 18 referencias oficiales curadas, sin masters, fotografías, PWA metadata, Figma ni frontend. Se añadió una plantilla Word en español para recabar decisiones funcionales de Home y autenticación antes de redactar la especificación Markdown. Por decisión humana, el Simulator, `/simulador` y `/simulador/continuar` se incorporan al Sprint 1 solo como frontend visual referencial con estados simulados, sin lógica financiera, persistencia ni integración funcional de Sprint 2. | Pendiente de commit | Siete masters y 47 assets de identidad preservados; tres masters gráficos preservados por hash; QA de 21 PNG y 21 WebP de gráficos: alpha, RGB/paleta, dimensiones, no-upscale, manifest y regeneración determinista/idempotente; handoff: rutas locales válidas, 18 referencias sin duplicados, coherencia de Markdown, prohibiciones financieras y `git diff --check`; Word generado y revisión estructural/a11y sin hallazgos altos; alcance referencial del simulador documentado |
| S1-PLN-01 | Informe de ruta de producto e inversión | Entregado, pendiente de revisión | Se preparó un informe para dirección e inversión que cubre arquitectura, capacidades, Sprint 1, primer tramo de elegibilidad regional/KYC, gates legales, controles de seguridad, proveedores posibles y rangos de costo. Es orientativo y no autoriza operación crediticia ni sustituye asesoría legal/regulatoria. | Pendiente de commit | Fuentes oficiales/primarias consultadas para INEI, ANPD, RENIEC, SBS/UIF, AWS Cognito, SES y Vercel; PDF de 8 páginas renderizado y revisado visualmente sin defectos de maquetación. |
