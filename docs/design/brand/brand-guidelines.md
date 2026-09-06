# Guía de marca — San Martín Finanzas

> **Estado del documento:** guía operativa de las nueve láminas visuales aprobadas y de la pieza documental 10.  
> **Última actualización:** 27 de agosto de 2026.  
> **Ámbito:** identidad de marca, comunicación, preparación para Figma y traslado controlado a producto digital.

## Propósito y límites

Esta guía traduce el sistema visual aprobado de San Martín Finanzas en reglas aplicables por Brand/Marketing, Product Design, Frontend, QA y Legal/Compliance. No rediseña ni sustituye las láminas 01–09; las explica para su uso operativo.

No define productos financieros, tasas, requisitos, claims, comportamiento de interfaz ni condiciones legales. Tampoco aprueba por sí sola componentes, tokens semánticos, medidas de UI o assets de producción que aún no existan.

### Estados usados

- **Aprobado:** decisión visual o normativa cerrada en las láminas aprobadas.
- **Aprobado conceptualmente / pendiente de producción:** decisión cerrada, pero falta master, export, token, componente, licencia o validación de producción.
- **Pendiente de cierre:** requiere una decisión adicional antes de convertirse en regla de producción.
- **No definido:** no debe inferirse ni implementarse como norma.

## Fuente de verdad

Las láminas son la referencia visual aprobada. La prioridad operativa es:

1. Assets maestros vectoriales aprobados y manifiestos de licencia.
2. Figma Foundations, variables, estilos y componentes publicados.
3. Tokens, assets y componentes versionados en el repositorio.
4. Esta guía Markdown.
5. Láminas visuales aprobadas, como referencia editorial y de decisión.

Capturas, PNG exportados, prompts, chats, presentaciones o recreaciones manuales no son fuente de verdad de producción. Ante una discrepancia, no se improvisa: se registra y se somete a Brand + Product Design.

## Estructura recomendada del repositorio

```text
docs/design/brand/
├── brand-guidelines.md
├── CHANGELOG.md
├── assets/
│   ├── logos/
│   ├── icons/
│   ├── patterns/
│   └── photography/
├── tokens/
├── references/
└── decisions/
```

Cada asset debe conservar, cuando aplique: nombre estable, propósito, versión, fuente, estado, responsable por rol, licencia y release. No duplicar ni sobrescribir assets publicados sin trazabilidad.

---

## 01. Logo maestro

**Estado:** **Aprobado conceptualmente / pendiente de producción** para masters vectoriales finales.

### Objetivo

Expresar una identidad financiera contemporánea con raíz regional: claridad, confianza, cercanía, progreso, identidad regional y responsabilidad.

### Principios y reglas

- El logo maestro vertical integra águila, montañas, río/camino, `SAN MARTÍN`, `FINANZAS` y el slogan `Tu crecimiento, nuestra misión`.
- El artwork es una composición cerrada; wordmark, símbolo, proporciones, color, espaciados y slogan no se reconstruyen como texto editable ni se reinterpretan.
- El águila comunica visión y libertad; el territorio, origen e inspiración; `FINANZAS`, sector; el slogan, propósito. Son lecturas aprobadas, no elementos separables.
- Usar siempre el archivo maestro aprobado cuando exista.

### Usos recomendados

- Portadas, documentos institucionales y comunicación de alta jerarquía.
- Formatos con espacio suficiente y legibilidad íntegra del slogan.

### Prohibiciones

- Redibujar, simplificar libremente o separar águila, montañas, río, wordmark o slogan.
- Cambiar postura, alas, cabeza, montañas, río, tipografía, tracking o color.
- Presentar una recreación, imagen raster o variante no aprobada como logo oficial.

### Checklist

- [ ] ¿Proviene de un master aprobado?
- [ ] ¿Se conserva íntegro y legible?
- [ ] ¿El contexto permite usar el slogan?

### Entregables / pendientes reales

- Master vectorial y exportaciones derivadas: **pendientes de producción**.
- Lámina 01 — Logo Maestro: **aprobada**.

---

## 02. Sistema de variantes

**Estado:** **Aprobado conceptualmente / pendiente de producción** para archivos finales y pruebas a tamaño real.

### Objetivo

Adaptar la identidad al formato sin deformar ni reducir indefinidamente una versión compleja.

### Reglas

| Contexto | Variante aprobada |
|---|---|
| Institucional o gran formato | Logo maestro vertical |
| Header desktop | Logo horizontal |
| Header móvil | Logo compacto / mobile |
| Espacio reducido | Isotipo |
| Microformato de UI | Símbolo reducido |
| Navegador | Favicon |
| PWA, app o avatar social | App / PWA icon |
| Header oscuro | Logo horizontal negativo |

- También están aprobadas versiones monocromáticas oscura y clara, en sus usos correspondientes.
- La reducción es progresiva: maestro → horizontal/compacto → isotipo → símbolo reducido → favicon. Al llegar al mínimo, cambiar de variante; no encoger la anterior.
- El slogan no se utiliza cuando su lectura no pueda garantizarse.

### Usos recomendados

- Header claro: horizontal oficial. Header oscuro: horizontal negativo.
- Social avatar: app icon. Favicon: símbolo reducido, nunca el logo maestro encogido.

### Prohibiciones

- Crear variantes para canales, breakpoints o campañas sin aprobación.
- Mantener slogan o detalles no legibles.
- Usar una variante distinta de la autorizada para el nivel de espacio disponible.

### Checklist

- [ ] ¿La variante existe en el sistema aprobado?
- [ ] ¿Es legible en el soporte final?
- [ ] ¿La simplificación siguió la reducción progresiva?

### Entregables / pendientes reales

- SVG de cada variante, favicon y app icon: **pendientes de producción**.
- Lámina 02 — Sistema de Variantes: **aprobada**.

---

## 03. Área de seguridad y tamaños mínimos

**Estado:** **Aprobado**.

### Objetivo

Proteger legibilidad, reconocimiento y jerarquía de marca en soportes digitales e impresos.

### Reglas obligatorias

- Reservar **1X** alrededor de logos maestro, horizontal, compacto e isotipo. No incluir dentro de esa zona texto, bordes, fotografías, iconos ni elementos decorativos.
- Para lockups con texto, `X` es la altura de la `S` mayúscula de `SAN MARTÍN`.
- Para el isotipo, `X` es aproximadamente la altura de la cabeza blanca del águila, de coronilla a base del cuello.
- Favicon y app icon usan área segura interna aproximada de 15% del contenedor.

| Variante | Mínimo digital | Mínimo impreso |
|---|---:|---:|
| Maestro + slogan | 240 px de ancho | 55 mm |
| Maestro sin slogan | 180 px | 40 mm |
| Horizontal | 160 px | 38 mm |
| Compacto / mobile | 120 px | 30 mm |
| Isotipo | 64 px | 16 mm |
| Símbolo reducido | 24 px | 8 mm |
| Favicon | 16 × 16 px | No aplica |
| App / PWA icon | Validar desde 48 × 48 px; master recomendado 512 × 512 px o superior | No aplica |

- Header desktop: ancho recomendado 180–210 px; mínimo 160 px.
- Header mobile: ancho recomendado 125–145 px; mínimo 120 px. Por debajo, usar isotipo.

### Usos recomendados

- Verificar tamaño, contraste y área libre en el soporte real, no únicamente en el lienzo.

### Prohibiciones

- Reducir bajo mínimo, recortar iconos fuera de su área segura o aproximar el logo a UI y bordes.

### Checklist

- [ ] ¿Se respetó 1X o el área segura interna correspondiente?
- [ ] ¿Se supera el mínimo aprobado?
- [ ] ¿Se verificó en dispositivo o formato de destino?

### Entregables / assets

- Lámina 03 — Área de Seguridad y Tamaños Mínimos: **aprobada**.
- Plantillas Figma de revisión / exports: **pendientes de producción**.

---

## 04. Sistema de color y tipografía

**Estado:** marca base **aprobada**; colores semánticos de producto **pendientes de cierre**.

### Objetivo

Mantener una identidad institucional cálida, sobria y legible entre piezas editoriales y producto.

### Reglas obligatorias

| Token de referencia | Valor | Uso aprobado |
|---|---|---|
| `brand.forest.900` | `#0E3F2B` | Identidad, fondo institucional, titulares, navegación oscura |
| `brand.forest.700` | `#145C3A` | Fondos, componentes y énfasis |
| `brand.forest.500` | `#2F7D57` | Estados sutiles, acentos internos y gráficos |
| `brand.gold` | `#C79A52` | Acento institucional; no dominante |
| `surface.warm` | `#F7F4EE` | Fondos cálidos y contenedores |
| `surface.default` | `#FFFFFF` | Fondos principales y respiración |
| `text.primary` | `#24312B` | Texto principal y alta legibilidad |
| `text.secondary` | `#66736D` | Texto secundario, iconos y etiquetas |
| `border.default` | `#DCE5DF` | Bordes, líneas divisorias y separadores |

- Orientación de jerarquía: 70–80% neutros, 15–25% verdes y 3–8% Earth Gold. Es guía compositiva, no token de implementación.
- Verde identifica; dorado acentúa. Earth Gold no es color dominante de interfaz, texto largo ni fondo de grandes superficies.
- Los colores de marca no sustituyen los estados semánticos. Success, warning, error e info deben usar colores semánticos independientes, aún **pendientes de cierre**.
- Tipografía de marca/editorial: **Cormorant Garamond SemiBold**. Tipografía digital/interfaz: **Source Sans 3**; Regular 400, Medium 500, SemiBold 600 y Bold 700 solo cuando sea necesario.
- Cormorant se usa en identidad, títulos editoriales y comunicación institucional. Source Sans 3 se usa en interfaz, lectura continua, formularios, navegación y datos financieros.

| Rol | Desktop | Mobile |
|---|---|---|
| Display | Cormorant 48–64 px | No definido |
| H1 | Cormorant 40–48 px | 34–40 px |
| H2 | Cormorant 32–36 px | 28–32 px |
| H3 | Source Sans 3 22–24 px | 20–22 px |
| Body | Source Sans 3 16 px / 24 px | 16 px / 24 px |
| Body large | Source Sans 3 18 px / aprox. 28 px | No definido |
| Small | Source Sans 3 14 px / 20 px | 14 px / 20 px |
| Caption | Source Sans 3 12–13 px | No definido |
| Button | Source Sans 3 14–16 px | 14–16 px |

Los rangos son una escala aprobada de referencia; cualquier ajuste responsive requiere validación. No introducen breakpoints ni medidas de componente.

### Usos recomendados

- Fondo White/Warm White con Forest 900 o Ink; texto blanco sobre Forest 900 o Forest 700 cuando se valide contraste.
- Cormorant para jerarquía editorial y Source Sans 3 para operación y lectura.

### Prohibiciones

- Usar Cormorant en formularios extensos o tablas densas.
- Introducir una tercera familia, deformar tipografía, usar tracking extremo o ALL CAPS sostenido para lectura.
- Declarar ratios WCAG sin validación específica.

### Checklist

- [ ] ¿HEX y familias corresponden a las láminas?
- [ ] ¿Earth Gold funciona solo como microacento?
- [ ] ¿Los estados de producto no se confunden con marca?
- [ ] ¿El contraste se verificó en tamaño y superficie reales?

### Entregables / pendientes reales

- Lámina 04 — Sistema de Color y Tipografía: **aprobada**.
- Variables Figma y tokens versionados: **pendientes de producción**.
- Valores de color semántico, focus y estados: **pendientes de cierre**.

---

## 05. Usos correctos e incorrectos

**Estado:** **Aprobado**.

### Objetivo

Preservar proporción, color, legibilidad, área de seguridad y jerarquía de la marca.

### Reglas obligatorias

- Sobre White o Warm White, usar variante oficial a color o monocromática oscura.
- Sobre Forest 900, usar versión negativa/clara aprobada. Forest 700 puede usarse para elementos destacados con versión clara aprobada.
- En fotografía, elegir zona limpia y variante de mayor contraste; usar superficie de legibilidad solo cuando sea necesaria.
- Usar únicamente variantes y colores oficiales, manteniendo el área 1X.

### Usos recomendados

- Maestro para institucional; horizontal para header desktop; compacto para mobile; símbolo reducido para UI/microespacio; favicon para navegador; app icon para app/PWA/avatar.

### Prohibiciones

- Deformar, comprimir, estirar, rotar, inclinar, recortar o aplicar gradientes, sombras, glow, relieve o 3D al logo.
- Recolorear o usar dorado como logo completo, fondo dominante o interfaz mayoritaria.
- Modificar águila, montañas, río, wordmark, tracking, acento de `MARTÍN` o slogan.
- Usar sobre fondos de bajo contraste, textura compleja o espacios reducidos con slogan ilegible.

### Checklist

- [ ] ¿El asset y la variante son oficiales?
- [ ] ¿No tiene efectos ni alteraciones manuales?
- [ ] ¿Hay contraste y área libre suficientes?
- [ ] ¿El dorado sigue siendo acento?

### Entregables / assets

- Lámina 05 — Usos Correctos e Incorrectos: **aprobada**.
- Plantilla Figma de revisión: **pendiente de producción**.

---

## 06. Sistema gráfico regional: La Ruta, Topografía y Horizonte

**Estado:** **Aprobado conceptualmente / pendiente de producción** para biblioteca vectorial y reglas ejecutables de densidad/escala.

### Objetivo

Extender el reconocimiento de la marca con territorio, recorrido y estabilidad, sin caer en turismo ni en gráficos financieros ficticios.

### Principios y reglas

- **La Ruta** es el recurso principal: línea orgánica de progreso, acompañamiento, recorrido y conexión. Guía la mirada; no simula métricas ni se usa como flecha.
- **Topografía** es secundaria: textura de profundidad y sofisticación, de baja opacidad; nunca información principal.
- **Horizonte / Territorio** es terciario: abstracción de relieve y recorrido; aporta estabilidad y visión. Es apto para héroes, CTAs, inicio de sesión, pie de página y banners.
- La Ruta puede usar Forest 700 u 900 sobre fondos claros y blanco sobre fondos oscuros; Earth Gold se reserva a punto final o microacento.
- Grosores aprobados por intención: large (hero/fondo), medium (sección/documento), small (detalle). Curvas suaves y orgánicas, ritmo natural; no puntas de flecha, trazos irregulares, sombras/brillos ni estilo manuscrito.
- Usar como máximo un recurso gráfico protagonista en una composición; no superponer La Ruta, Topografía, Horizonte y logo como protagonistas.
- Jerarquía: 1) contenido principal; 2) logo/identidad cuando corresponda; 3) sistema gráfico regional.
- Densidad: baja recomendada en producto, formularios y datos financieros; media en home/onboarding; alta solo en comunicación institucional o campañas específicas. No usar alta densidad en UI operativa.

### Aplicación digital aprobada como dirección

| Área | Aplicación permitida |
|---|---|
| Header | Usualmente sin recursos gráficos |
| Hero | La Ruta u Horizonte permitidos |
| Fondo de sección | Topografía sutil permitida |
| Contenido secundario | Fragmentos de Ruta pequeños |
| CTA / botones | Ruta discreta; no contenido funcional |
| Footer | Topografía mínima o Ruta |
| Formularios | Sin recursos dentro de campos |
| Tablas / datos financieros | Sin decoración gráfica |

### Prohibiciones

- Convertir los recursos en mapa turístico, patrones dominantes, dashboards, iconografía funcional, flechas financieras, billetes, monedas, tarjetas flotantes o gráficos ascendentes.
- Añadir trópicos, palmeras, fauna, cataratas, soles decorativos o clichés regionales/financieros.
- Usar grandes fondos dorados, topografía completa sobre contenido o todas las líneas en oro.

### Checklist

- [ ] ¿El recurso acompaña y no compite con contenido o acción?
- [ ] ¿Se eligió un único protagonista gráfico?
- [ ] ¿La densidad corresponde al contexto?
- [ ] ¿No aparece dentro de campos ni tablas?

### Entregables / pendientes reales

- Lámina 06 — Sistema Gráfico Regional de Marca: **aprobada**.
- Assets vectoriales de La Ruta, Topografía, Horizonte y patrones: **pendientes de producción**.
- Reglas cuantitativas de escala/densidad: **pendientes de cierre**; no inferirlas de los ejemplos.

---

## 07. Dirección fotográfica de marca

**Estado:** dirección y criterios **aprobados**; selección productiva, metadatos y releases **pendientes de producción/cierre**.

### Objetivo

Mostrar personas, actividad económica y territorio cotidiano con una mirada humana, creíble y contemporánea. Concepto emocional: **confianza tranquila**.

### Principios y reglas

- Jerarquía: primero persona, luego actividad y finalmente territorio.
- Familias: personas; actividad económica; digital/celular; territorio; detalle.
- Personas reales, expresión natural, vestimenta cotidiana y actividad auténtica. El retrato preferido es environmental portrait o medium shot; close-up de uso limitado y full body solo si está justificado.
- Actividad: pequeño comercio, emprendimiento, servicios, talleres y trabajo independiente; comunicar autonomía, trabajo y progreso.
- Digital/celular: tecnología integrada a la actividad, no protagonista; pantalla fuera de foco o no legible, sin datos reales ni interfaces inventadas.
- Territorio: vida cotidiana y contexto regional, no destino turístico. El territorio puede inspirar, pero no desplaza a la persona.
- Detalle: manos, herramientas, productos, gestos y espacios reales que acompañen una narrativa.
- Luz natural, suave/direccional, cálida-neutral; color realista, verdes naturales, piel realista, blancos cálidos, contraste medio, saturación moderada y sombras limpias.
- Composición documental con espacio negativo. Para copy left, sujeto/acción hacia la derecha; para copy right, sujeto/acción hacia la izquierda. No centrar por defecto.
- Hero: persona + actividad + contexto + espacio para interfaz/copy; referencia de encuadre desktop 16:9 o 3:2 y mobile 4:5/crop vertical, sujeto protegido de zonas de corte.
- Sobre fotografía, usar máximo un recurso gráfico protagonista. Para texto, priorizar espacio limpio y contraste; no situarlo sobre rostros, manos o zonas complejas.

### Usos recomendados

- Fotografía real producida para la marca o stock auténtico con licencia apta y releases cuando correspondan.
- Login/registro: imagen silenciosa, sobria y secundaria al formulario. La referencia visual 40% identidad / 60% formulario es una dirección de layout, no especificación final de componente.

### Prohibiciones

- Fotografías generadas por IA como recurso final de marca, cliente real o evidencia documental.
- Stock bancario genérico, estética IA, teatralidad, personas necesitadas, pobreza dramatizada, lujo artificial, corporativismo rígido, turismo amazónico, fauna/cataratas protagonistas.
- Fajos, lluvia o monedas de dinero; tarjetas ficticias; apretón de manos; ejecutivos señalando pantallas; dashboards o interfaces inventadas; celebraciones de préstamo; alcancías.
- Flash duro, estudio evidente, neón, contraluz dramático, filtros verdes forzados, saturación tropical, color grading excesivo o `teal & orange`.
- Presentar una persona de stock como cliente, aval o caso real de San Martín Finanzas.

### Checklist

- [ ] ¿Es fotografía real con origen, licencia y release verificables?
- [ ] ¿Persona, actividad y territorio se leen en el orden correcto?
- [ ] ¿La escena mantiene dignidad, naturalidad y contexto real?
- [ ] ¿Hay crop seguro y espacio de copy cuando se usará como hero?
- [ ] ¿Evita clichés financieros, turísticos y estética artificial?

### Entregables / pendientes reales

- Lámina 07 — Dirección Fotográfica de Marca: **aprobada**.
- Selección de producción y `assets/photography/manifest.*`: **pendientes de producción**.
- Licencias y model/property releases: **pendientes de cierre con Legal/Compliance**.

---

## 08. Aplicaciones digitales de marca

**Estado:** dirección de aplicación **aprobada**; los ejemplos no son componentes finales de producto.

### Objetivo

Aplicar identidad de forma clara, confiable y reconocible en web, autenticación, correo, social, documentos y producto, sin que la marca compita con la tarea.

### Principios y reglas

- La marca acompaña la experiencia; no compite con ella. Principios: primero persona, luego actividad y finalmente territorio.
- Header desktop claro: logo horizontal; fondo White/Warm White; ancho recomendado 180–210 px, mínimo 160 px.
- Header desktop oscuro: Forest 900, logo horizontal negativo, navegación blanca y Earth Gold como microacento.
- Header mobile: variante compacta; ancho recomendado 125–145 px, mínimo 120 px. Usar isotipo si el espacio no permite legibilidad.
- Favicon: símbolo reducido sobre Forest 900, en 16 × 16, 32 × 32 y 48 × 48; reconocimiento inmediato, no reproducción completa de logo.
- App/PWA: usar app icon aprobado con safe area; 512 × 512 como master de referencia de export, con derivados 192 × 192, 128 × 128, 64 × 64 y 48 × 48 según se requiera.
- Auth desktop: identidad/foto como apoyo; la referencia 40% identidad / 60% formulario no define layout de implementación.
- Auth móvil: reducir elementos de identidad antes que formulario; conservar claridad y accesibilidad.
- Email transaccional/OTP: contenido y acción primero; variante oficial en cabecera; no introducir claims ni imágenes que opaquen la acción.
- Social: avatar con app icon; posts, stories y hero pueden integrar fotografía real y un único recurso gráfico protagonista.
- Datos financieros, formularios, tablas y estados de producto priorizan precisión, lectura y semántica sobre decoración.
- Densidad de marca: low para producto/formularios/datos; medium para home/onboarding; high solo para comunicación institucional/campañas, con control de uso.

### Usos recomendados

- Usar La Ruta, Topografía u Horizonte según la sección y las reglas de la sección 06.
- Mantener el producto primero, contenido después e identidad como acompañamiento.

### Prohibiciones

- Convertir los mockups de la lámina 08 en componentes, estados, copy, comportamiento o especificaciones aprobadas.
- Usar recursos dentro de campos de entrada, sobrecargar pantallas operativas o sacrificar legibilidad por decoración.
- Publicar email, PWA, headers o social con assets no aprobados, sin accesibilidad o sin revisión de contenido.

### Checklist

- [ ] ¿Se usó variante, tamaño y fondo correctos?
- [ ] ¿La tarea y el contenido prevalecen sobre la identidad?
- [ ] ¿La aplicación conserva legibilidad, CTA y accesibilidad?
- [ ] ¿Se evitó convertir el ejemplo editorial en especificación funcional?

### Entregables / pendientes reales

- Lámina 08 — Aplicaciones Digitales de Marca: **aprobada**.
- Assets finales por canal, pantallas aprobadas y matriz de exports: **pendientes de producción**.
- Componentes, estados y comportamiento de UI: **pendientes de cierre en Product Design System**.

---

## 09. Mini Brand Guidelines

**Estado:** **Aprobado** como vista maestra de referencia rápida.

### Objetivo

Sintetizar el sistema para reconocer y aplicar la marca sin reemplazar las láminas 01–08 ni esta guía operativa.

### Principios y reglas

- Esencia: identidad financiera contemporánea con raíz regional.
- Principios: claridad, confianza, cercanía, progreso, identidad regional y responsabilidad.
- Síntesis: una identidad financiera seria y contemporánea construida desde San Martín, sin clichés turísticos ni financieros.
- Resume identidad principal, sistema de logo, paleta, tipografías, sistema regional, dirección fotográfica, tono visual, aplicación digital, densidad y reglas de oro.
- Regla crítica: no utilizar los tres recursos regionales como protagonistas de una misma composición; Earth Gold solo como microacento.
- Firma del sistema: personas reales, actividad real, identidad regional, tecnología natural y claridad financiera.

### Usos recomendados

- Onboarding de proveedores, consulta rápida de equipos y control inicial de piezas.

### Prohibiciones

- Usarla como sustituto de masters, reglas detalladas, Figma Foundations o componentes de producción.
- Inferir medidas, comportamientos o nuevos recursos desde su síntesis.

### Checklist

- [ ] ¿La decisión se verificó también contra la lámina específica correspondiente?
- [ ] ¿La composición conserva claridad y densidad apropiada?
- [ ] ¿Se respetan las reglas de oro y los límites de marca/UI?

### Entregables / assets

- Lámina 09 — Mini Brand Guidelines: **aprobada**.

---

## 10. Gobernanza, handoff y mantenimiento de marca

**Estado:** marco operativo **aprobado conceptualmente / pendiente de cierre organizacional** para responsables, herramientas y cadencias concretas.

### 10.1 Principio de gobernanza

La consistencia depende de una fuente de verdad, cambios controlados, assets versionados, decisiones documentadas y sincronía entre Figma, repositorio y producto. La aprobación visual no equivale automáticamente a disponibilidad productiva.

### 10.2 Brand System y Product Design System

| Brand System | Product Design System |
|---|---|
| Logo, variantes, color de marca, tipografía de marca, La Ruta, Topografía, Horizonte, fotografía y reglas de uso | Tokens, spacing, radios, sombras, colores semánticos, iconografía, controles, navegación, formularios, tablas, feedback, responsive y accesibilidad |

La marca aporta reconocimiento; la interfaz aporta funcionalidad. Esta guía no crea ni aprueba las especificaciones faltantes del Product Design System.

### 10.3 Flujo oficial

```text
Brand Guidelines
        ↓
Figma Foundations
        ↓
Figma Components
        ↓
Product Screens
        ↓
Frontend
        ↓
QA
```

- Cada etapa consume la versión aprobada de la anterior.
- No publicar implementación que contradiga un master, una foundation o una decisión vigente.
- Si un cambio se origina aguas abajo y afecta una regla transversal, debe volver a decisión y aprobación antes de propagarse.

### 10.4 Gobernanza de Figma

- Usar variables para colores y tokens cerrados; Text Styles para tipografía; componentes o assets protegidos para variantes de logo.
- Conservar La Ruta, Topografía y Horizonte como assets oficiales, no recreaciones manuales.
- Crear componentes UI solo cuando sus fundamentos y especificaciones sean aprobados.
- Publicar versiones de biblioteca y documentar cambios relevantes y su relación con el repositorio.
- No rasterizar masters vectoriales, reconstruir logos ni usar capturas como assets.
- Los nombres exactos de archivos, páginas y librerías Figma son **no definidos** hasta ser formalizados.

### 10.5 Gobernanza de repositorio

Mantener `docs/design/brand/` como ubicación de documentación, decisiones, assets aprobados, referencias y changelog. Los tokens que correspondan a producción deben versionarse junto con su fuente y relación con Figma.

- `assets/`: masters y manifiestos; no copias sin procedencia.
- `tokens/`: exportaciones aprobadas; no valores exploratorios.
- `references/`: láminas aprobadas, fuentes de fotografía y vínculos/versiones de Figma.
- `decisions/`: ADRs o decisiones de diseño transversales.
- `CHANGELOG.md`: cambios aprobados, fecha de vigencia e impacto.

### 10.6 Versionado

Se recomienda versionado semántico como convención, sin imponerlo si el proyecto aún no lo adopta:

- **MAJOR:** cambio estructural de identidad o migración incompatible.
- **MINOR:** nuevo recurso/capacidad compatible aprobado.
- **PATCH:** corrección técnica que no cambia el concepto ni la aplicación autorizada.

Nunca sobrescribir una versión publicada sin registro, impacto y ruta de migración.

### 10.7 ADR / Design Decision

Registrar decisión formal cuando se cambie o introduzca logo, variante, paleta, tipografía, recurso regional, sistema fotográfico, color semántico, foundation transversal, comportamiento responsive global, política de accesibilidad, fuente de verdad o proceso de aprobación.

Las correcciones de export que no alteren diseño ni uso pueden ir a `CHANGELOG.md`. Si modifican apariencia, alcance o compatibilidad, requieren decisión.

### 10.8 Responsabilidades por rol

| Rol | Propone / implementa | Revisa / aprueba |
|---|---|---|
| Brand / Marketing | Necesidad de identidad, campañas, assets de comunicación | Revisión y aprobación de expresión de marca |
| Product Design / UX | Foundations, componentes, pantallas y handoff | Revisión de coherencia de experiencia y uso de tokens |
| Frontend | Implementación de assets, tokens y UI | Fidelidad, semántica, responsive y accesibilidad técnica |
| Backend / Platform, si aplica | Distribución, configuración y automatización | Integración técnica y operación |
| Legal / Compliance | Condiciones, licencias y mensajes sensibles | Usos que lo requieran |
| QA | Pruebas visuales, de regresión y criterios de aceptación | Conformidad de release |

Las personas, niveles de aprobación, SLA y herramienta de aprobación son **pendientes de cierre**.

### 10.9 Alta de nuevos recursos

Para fotografía, iconografía, patterns, variantes, campañas, templates o assets digitales:

```text
Necesidad → Propuesta → Revisión de Marca → Revisión de Product Design
→ Legal / Compliance (si aplica) → Aprobación → Figma → Repositorio → Changelog
```

No crear variantes ni recursos nuevos por conveniencia local. La aprobación debe incluir propósito, alcance, asset/master, licencia cuando aplique, impacto, versión y plan de actualización.

### 10.10 Fotografía, licencia y releases

Cada foto aprobada debe conservar fuente, autor, licencia, fecha, restricciones, territorio/medio de uso y model/property releases cuando correspondan. No presentar stock como cliente real ni sustituir fotografía licenciada por IA sin aprobación explícita.

### 10.11 Accesibilidad

Objetivo de diseño: **orientado a WCAG 2.2 AA**. No constituye una afirmación de cumplimiento hasta validación técnica y de contenido.

- Verificar contraste por combinación y tamaño reales.
- Mantener foco visible, lectura clara, objetivos táctiles adecuados y comportamiento responsive.
- No depender solo del color; usar texto, iconografía o estructura cuando sea necesario.
- Usar alt text apropiado y HTML/roles semánticos en implementación.

### 10.12 Proceso de cambio

1. Identificar necesidad y motivo.
2. Evaluar impacto en marca, producto, legal, accesibilidad, Figma, repo y dependencias.
3. Crear ADR/decisión si es transversal.
4. Obtener las revisiones y aprobación requeridas.
5. Actualizar Figma, masters/tokens de repositorio, guía y changelog.
6. Ejecutar migración, QA visual y regresión.

### 10.13 Deprecación

No eliminar silenciosamente un asset o token reemplazado. Marcarlo como deprecated, identificar el reemplazo, documentar versión y fecha/ruta de migración, y retirarlo solo cuando no existan dependencias.

### 10.14 Checklist de release de marca

- [ ] Asset y variante aprobados.
- [ ] Tokens / referencias de Figma correctos.
- [ ] Responsive y accesibilidad revisados.
- [ ] Licencias y releases verificados cuando aplican.
- [ ] Figma, repositorio, guía y changelog actualizados.
- [ ] QA visual y de regresión aprobado.

---

## Handoff: de marca a Figma y luego a Next.js

### Fase A — Cerrar assets

- Reunir masters de logo, variantes, iconos, La Ruta, Topografía, Horizonte y fotografía aprobada.
- Registrar versión, fuente, licencia, restricciones y estado de cada asset.
- Mantener como pendiente aquello que no tenga master, token o autorización productiva.

### Fase B — Construir Figma Foundations

- Incorporar masters aprobados; crear variables para tokens cerrados y estilos tipográficos.
- Documentar explícitamente tokens aún no definidos: spacing, radii, sombras, estados semánticos, focus, iconografía y breakpoints.
- No inventar valores para completar la biblioteca.

### Fase C — Construir / refinar Components

- Definir y validar componentes únicamente tras cerrar sus foundations y requerimientos de producto.
- Documentar estados, accesibilidad y responsive cuando se aprueben. Las muestras de lámina 08 no son la especificación final.

### Fase D — Aplicar a pantallas existentes

- Mapear cada pantalla a assets/tokens/componentes aprobados.
- Mantener datos, formularios y tareas por encima de decoración; aplicar densidad de marca adecuada.

### Fase E — Validar responsive y accesibilidad

- Verificar jerarquía, tamaños de logo, contraste, foco, semántica, lectura, teclado, touch y contenido en contextos reales.
- No afirmar cumplimiento WCAG sin evidencia de validación.

### Fase F — Trasladar a frontend

- Versionar fuentes, SVG, iconos y tokens aprobados.
- Implementar sin reemplazar nombres, HEX o assets arbitrariamente; conservar HTML semántico y referencias de versión.

### Fase G — Visual QA y regresión

- Comparar contra Figma, masters y esta guía; probar cambios en breakpoints, flujos y assets.
- Registrar discrepancias, decisiones, migraciones y resultado de QA antes de liberar.

---

## Pendientes antes de considerar el sistema “Production Ready”

### Brand assets

- Masters vectoriales aprobados de logo, todas las variantes, símbolo reducido, favicon y app/PWA icon.
- Biblioteca vectorial productiva de La Ruta, Topografía, Horizonte y patrones.
- Manifiestos, exports y control de versiones de assets.

### Figma Foundations

- Variables publicadas para valores de marca aprobados y estilos tipográficos.
- Decisiones y valores de spacing, radios, sombras, focus, iconografía, breakpoints y colores semánticos accesibles.

### Product Design System

- Especificaciones, componentes, estados, comportamiento y documentación de UI aprobados.
- Validación de que los ejemplos de aplicación se traduzcan a producto sin asumir que ya son componentes.

### Frontend

- Tokens y assets versionados, integración de fuentes y componentes implementados.
- Validación visual, responsive, semántica, accesibilidad y regresión.

### Photography / licensing

- Selección final de fotografía real/stock licenciado.
- Fuente, autor, licencia, restricciones y releases completos por asset.

### Governance

- Responsables por rol, herramienta/cadencia de aprobación y política de releases.
- `CHANGELOG.md`, decisiones/ADRs y sincronización operativa Figma–repositorio.

---

## Checklist para auditoría del Figma existente

No realizar esta auditoría sin contrastar el archivo Figma contra las láminas aprobadas, masters disponibles y esta guía.

### Logo

- ¿Cada instancia usa una variante oficial y asset maestro, no una recreación?
- ¿Tamaño mínimo, 1X y versión positiva/negativa son correctos?

### Color

- ¿Los valores y usos coinciden con la paleta aprobada?
- ¿Los colores de marca se mantienen separados de los estados semánticos?

### Typography

- ¿Cormorant se limita a identidad/editorial y Source Sans 3 a interfaz/lectura?
- ¿La escala responde a los rangos aprobados sin nuevas familias ni ajustes arbitrarios?

### Layout

- ¿La jerarquía deja primero contenido/acción y después identidad?
- ¿El layout evita asumir especificaciones no definidas?

### Regional graphics

- ¿La Ruta, Topografía y Horizonte son assets oficiales y se aplican según jerarquía/densidad?
- ¿Existe más de un recurso protagonista o decoración en formularios/tablas?

### Photography

- ¿Las imágenes siguen la dirección aprobada y disponen de trazabilidad de licencia?
- ¿Evitan IA final, clichés financieros/turísticos y presentación engañosa de personas?

### Headers

- ¿Desktop y mobile usan variante, ancho y fondo correspondientes?
- ¿El header evita recursos gráficos innecesarios?

### Auth

- ¿La identidad se reduce antes que el formulario en móvil?
- ¿La foto/patrón es secundaria, legible y no interfiere con la tarea?

### Forms

- ¿Los campos están libres de recursos decorativos y mantienen labels, foco y errores claros?
- ¿No se asumieron tokens o comportamientos aún no definidos?

### Components

- ¿Los componentes tienen foundations y estados aprobados, o están marcados como pendientes?
- ¿Se evitó declarar como final un ejemplo editorial de lámina 08?

### Responsive

- ¿La tarea, semántica y acción primaria permanecen claras en cada tamaño revisado?
- ¿La reducción de logo y densidad de marca sigue las reglas aprobadas?

### Accessibility

- ¿Contraste, foco visible, teclado, touch, semántica y alternativas textuales fueron verificados?
- ¿Se evita depender únicamente del color?

### Brand density

- ¿Producto/formularios/datos usan densidad baja, home/onboarding media y campañas alta controlada?
- ¿La marca acompaña sin competir con la experiencia?

### Content

- ¿El contenido evita claims, tasas, seguridad o condiciones no aprobadas?
- ¿La voz es clara, seria, cercana y sin clichés?

### Assets

- ¿Cada asset tiene versión, fuente, licencia y estado rastreables?
- ¿No hay capturas, PNG de referencia o recreaciones funcionando como masters?

### Tokens

- ¿Los valores usados proceden de variables/tokens aprobados?
- ¿Los valores no definidos están documentados como pendientes, sin inferencias locales?
