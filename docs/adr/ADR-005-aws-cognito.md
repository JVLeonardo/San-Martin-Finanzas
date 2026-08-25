# ADR-005: AWS Cognito como proveedor de identidad

- Estado: Aceptado según el contrato técnico del Sprint 1
- Fecha: 2026-08-24

## Contexto

No se debe implementar desde cero el almacenamiento de contraseñas, recuperación, MFA, OTP y emisión de tokens para una plataforma financiera.

## Decisión

Usar AWS Cognito/OIDC para registro, credenciales, verificación, recuperación y MFA cuando la configuración sea aprobada. Spring Boot gobierna `customer`, onboarding, identidad de negocio, región, autorización y auditoría.

## Consecuencias

Reduce la superficie criptográfica propia, pero introduce dependencia, costos y configuración de AWS.

## Alternativas consideradas

Autenticación propia, Auth0/Okta, Keycloak y login social principal. No se adoptan inicialmente.

## Reglas de implementación

- Usar Authorization Code + PKCE.
- Mantener `cognito_sub` separado del identificador interno.
- No guardar contraseñas.
- Validar issuer, firma, audiencia, scopes y expiración.
- Separar consentimientos propios de la identidad del proveedor.

## Riesgos y pendientes

Deben definirse región, User Pool, App Client, correo, MFA, proveedor SMS, costos y URLs de desarrollo.

## Referencias

ADR-006, ADR-008, investigación legal y regulatoria.
