# Gitflow práctico — San Martín Finanzas

## Objetivo

Mantener `main` como la última versión aprobada, `dev` como integración, y todo cambio aislado en ramas temporales con Pull Request y CI obligatorio.

```text
feature/* ──PR──> dev ──cut──> release/* ──PR──> main ──tag──> vX.Y.Z
                         release/* ──PR──> dev (solo si recibió correcciones)

main ──cut──> hotfix/* ──PR──> main
                    └──PR──> dev
```

## Ramas

| Rama | Uso | Nace desde | Pull Request hacia |
|---|---|---|---|
| `main` | Última versión aprobada | — | — |
| `dev` | Integración del trabajo aceptado | `main` inicialmente | — |
| `feature/*` | Una tarea o capacidad | `dev` | `dev` |
| `release/vX.Y.Z` | Estabilizar una versión | `dev` | `main` y, si recibió correcciones, `dev` |
| `hotfix/vX.Y.Z` | Corregir producción urgentemente | `main` | `main` y `dev` |

No hacer commits ni pushes directos a `main` o `dev`.

Los comandos `gh` requieren GitHub CLI y una sesión iniciada con `gh auth login`. Si no está instalado, crear el mismo Pull Request desde `GitHub → Pull requests → New pull request`, eligiendo las ramas `base` y `compare` indicadas.

## Feature

```bash
git checkout dev
git pull --ff-only origin dev
git checkout -b feature/s1-foundations

# Trabajar y verificar
git status
git add <archivos>
git commit -m "feat(web): implement design foundations"
git push -u origin feature/s1-foundations
```

Crear el Pull Request hacia `dev`:

```bash
gh pr create --base dev --head feature/s1-foundations --web
gh pr checks --watch
```

En GitHub: revisar el diff, completar la descripción, esperar `Lint` y `Build`, resolver conversaciones y usar **Squash and merge**. Después:

```bash
git checkout dev
git pull --ff-only origin dev
git branch -d feature/s1-foundations
```

## Release

```bash
git checkout dev
git pull --ff-only origin dev
git checkout -b release/v0.1.0
git push -u origin release/v0.1.0
```

En `release/*` solo se permiten correcciones, pruebas, documentación y preparación de versión; no nuevas features.

```bash
gh pr create --base main --head release/v0.1.0 --web
```

Usar **Create a merge commit** para conservar la trazabilidad del release. Si el release recibió correcciones, abrir también un PR `release/v0.1.0 → dev` antes de eliminar la rama.

Después de aprobar y fusionar en `main`:

```bash
git checkout main
git pull --ff-only origin main
git tag -a v0.1.0 -m "Release v0.1.0"
git push origin v0.1.0
git branch -d release/v0.1.0
git push origin --delete release/v0.1.0
```

## Hotfix

```bash
git checkout main
git pull --ff-only origin main
git checkout -b hotfix/v0.1.1

# Corregir y verificar
git add <archivos>
git commit -m "fix(web): correct production issue"
git push -u origin hotfix/v0.1.1
```

Abrir dos Pull Requests y no borrar la rama hasta fusionar ambos:

```bash
gh pr create --base main --head hotfix/v0.1.1 --web
gh pr create --base dev --head hotfix/v0.1.1 --web
```

Si hay un `release/*` activo, incorporar allí el hotfix mediante otro PR. Tras fusionar en `main`, crear y publicar el tag:

```bash
git checkout main
git pull --ff-only origin main
git tag -a v0.1.1 -m "Hotfix v0.1.1"
git push origin v0.1.1
git branch -d hotfix/v0.1.1
git push origin --delete hotfix/v0.1.1
```

## Configuración recomendada en GitHub

En `Settings → Rules → Rulesets`, crear un ruleset activo para `main` y otro para `dev`:

- Require a pull request before merging.
- Require status checks: `Lint` y `Build`.
- Require branches to be up to date before merging.
- Require conversation resolution before merging.
- Block force pushes.
- Restrict deletions.
- Dismiss stale approvals when new commits are pushed.
- Requerir una aprobación cuando exista otro revisor; usar cero temporalmente si el repositorio tiene un único responsable.
- No permitir bypass habitual; reservarlo solo para una emergencia documentada.

En `Settings → General → Pull Requests`:

- Habilitar **Squash merging** para `feature/*`.
- Habilitar **Merge commits** para `release/*` y `hotfix/*`.
- Deshabilitar **Rebase merging** para evitar reescrituras innecesarias.
- No activar borrado automático: releases y hotfixes pueden necesitar un segundo PR hacia `dev`.

Configurar `dev` como rama predeterminada durante el desarrollo para que los nuevos Pull Requests apunten allí por defecto. Mantener `main` como rama de producción en Vercel.

### Importar los rulesets preparados

Los archivos importables están en:

- `.github/rulesets/main.json`
- `.github/rulesets/dev.json`

Importar cada uno desde `Settings → Rules → Rulesets → New ruleset → Import a ruleset`, revisar el target y seleccionar **Create**. Están activos, no conceden bypass y requieren Pull Request, `Lint` y `Build`, pero usan `0` aprobaciones para permitir trabajo individual.

Importar primero `dev.json` después de publicar la rama `dev`. Importar `main.json` cuando los checks `Lint` y `Build` ya hayan aparecido al menos una vez en un Pull Request. Si el plan de GitHub del repositorio no permite rulesets en repositorios privados, aplicar manualmente las mismas opciones mediante Branch protection rules.

Cuando se incorpore otro revisor, cambiar `required_approving_review_count` a `1`, activar `dismiss_stale_reviews_on_push` y considerar `require_last_push_approval`.

## Regla de cierre

Antes de cada Pull Request ejecutar, como mínimo:

```bash
cd apps/web
npm run lint
npm run build
```

No usar `git push --force`. Cada PR debe indicar alcance, archivos principales, verificaciones, capturas cuando cambie UI y pendientes conocidos.

## Referencias

- <https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets>
- <https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/managing-rulesets-for-a-repository#importing-a-ruleset>
- <https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request>
- <https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/about-merge-methods-on-github>
