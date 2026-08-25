# Topología del entorno local

## Propósito

Describir la ejecución local de S1-01. Esta topología no representa el despliegue productivo.

```text
Navegador
   │
   ▼
web:3000 ───────► api:8080
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
   postgres:5432         redis:6379
```

## Componentes

| Servicio | Responsabilidad | Exposición local |
|---|---|---|
| `web` | Next.js en desarrollo con recarga | `localhost:3000` |
| `api` | Spring Boot en desarrollo | `localhost:8080` |
| `postgres` | Persistencia local PostgreSQL 17 | `localhost:5432` |
| `redis` | Redis 7 para desarrollo de sesiones/datos temporales | `localhost:6379` |

La comunicación entre contenedores utiliza los nombres de servicio de Compose. Cognito es externo y no forma parte del Compose.

## Límites

- No hay microservicios.
- No hay migraciones funcionales ni entidades de negocio.
- Los volúmenes son locales y no son almacenamiento productivo.
- Vercel despliega la aplicación web por separado.
