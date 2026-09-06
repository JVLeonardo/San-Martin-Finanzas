# San Martín Finanzas — Screen Map

## Rutas

| Route | Screen |
|---|---|
| `/` | Home |
| `/simulador` | Simulator |
| `/simulador/continuar` | Continue Gate |
| `/ingresar` | Login |
| `/registro` | Register |
| `/recuperar-acceso` | Forgot Password |
| `/verificar` | Verification |
| `/nueva-contrasena` | New Password |
| `/contrasena-actualizada` | Password Updated |

## Scope classification

- `/`, las rutas de autenticación, `/simulador` y `/simulador/continuar` se implementan en Sprint 1 como frontend visual con estados simulados.
- El Simulator es estrictamente `REFERENCIAL`; sus datos son demostrativos y no representan una oferta, evaluación o resultado crediticio real.
- Fórmulas, persistencia, endpoints, scoring, elegibilidad, KYC y solicitud de crédito permanecen en Sprint 2 o en la fase funcional que se autorice posteriormente.
- `Continuar` solo resuelve navegación visual hacia `/registro` o `/ingresar` y no inicia una solicitud.

## Main Flow

```text
/
└─ Simular ahora → /simulador
   └─ Continuar → /simulador/continuar
      ├─ Comenzar → /registro
      ├─ Ingresar → /ingresar
      └─ Volver al simulador → /simulador
```

## Auth Flow

```text
/ingresar ↔ /registro
```

## Recovery Flow

```text
/ingresar
→ /recuperar-acceso
→ /verificar
→ /nueva-contrasena
→ /contrasena-actualizada
→ /ingresar
```

## Responsive

No crear rutas distintas para Desktop y Mobile. Cada route debe responder al viewport.

- Pantallas canónicas: `04 — Sprint 01 · Public & Auth` y `05 — Sprint 02 · Simulator`.
- Referencia responsive: `06 — Flows & Prototype`.
