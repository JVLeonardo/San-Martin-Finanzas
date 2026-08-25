# ADR-006: Monolito modular

- Estado: Aceptado según el contrato técnico del Sprint 1
- Fecha: 2026-08-24

## Contexto

El equipo es pequeño y microservicios tempranos añadirían red, despliegue, observabilidad, consistencia y pruebas distribuidas antes de demostrar la necesidad.

## Decisión

Mantener un único despliegue Spring Boot con límites internos para `identity`, `customer`, `onboarding`, `authorization`, `audit` y `shared`.

## Consecuencias

Se simplifican desarrollo, transacciones y operación local; un fallo puede afectar al despliegue completo y no existe escalado independiente inicial.

## Alternativas consideradas

Microservicios desde el inicio, monolito sin límites y serverless. Se descartan para el Sprint 1.

## Reglas de implementación

- Mantener contratos y servicios internos por módulo.
- Evitar acceso directo indiscriminado a repositorios de otros módulos.
- Extraer un servicio solo con volumen, límites, equipo, observabilidad y beneficio demostrados.
- Crear un ADR específico antes de extraer cualquier módulo.

## Riesgos y pendientes

La modularidad debe comprobarse mediante dependencias y pruebas, no solo por nombres de paquetes.

## Referencias

ADR-001, ADR-003.
