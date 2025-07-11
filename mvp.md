# MVP - Plataforma Financiera Bohío

## Objetivo General
Diseñar e implementar una **aplicación móvil financiera inclusiva** que permita a personas tradicionalmente excluidas del sistema bancario en República Dominicana crear una cuenta, validar su identidad, solicitar una tarjeta de crédito modular y acceder a educación financiera básica. El MVP debe enfocarse en simplicidad, accesibilidad, transparencia y usabilidad, especialmente para usuarios con baja alfabetización digital.

---

## Funcionalidades del MVP

### 1. Registro de Cuenta Nueva
Permite a cualquier persona crear una cuenta ingresando sus datos personales y verificando su correo y número de celular. Debe ser un flujo paso a paso, accesible, y adaptado a dispositivos móviles básicos.

### 2. Validación de Identidad
Permite subir fotos del documento de identidad (frontal y reverso) y tomar una selfie para verificación biométrica. Debe incluir mensajes de error claros y accesibles si las fotos no son válidas.

### 3. Solicitud de Tarjeta Modular
Los usuarios pueden configurar una tarjeta de crédito según sus necesidades (cupos, fechas de pago, beneficios). Se deben presentar opciones visuales simples y una vista previa de la tarjeta.

### 4. Educación Financiera
Acceso a un módulo educativo que incluya:
- Microlecciones en texto, video o audio
- Glosario de términos bancarios
- Indicadores de progreso o completado

---

## Consideraciones de diseño

- **Diseño mobile-first**, adaptable a dispositivos de gama baja
- **Accesibilidad garantizada**, con soporte para lectores de pantalla y botones grandes
- **Lenguaje claro y no técnico**
- **Tipografía**: Manrope
- **Paleta de colores**:
  - Borgoña: `#660033`
  - Azul cielo: `#0090E0`
  - Morado: `#5661B4`
- **Iconografía**: Lucide Icons
- **Componentes reutilizables**: campos de texto, botones, step indicators, tarjetas, banners

---

## Usuario Final del MVP

Personas con alguno de los siguientes perfiles:
- Migrantes en proceso de regularización
- Usuarios con baja alfabetización digital
- Trabajadores informales
- Personas en zonas rurales con acceso limitado a internet
- Adultos mayores o personas con discapacidades visuales

---

## Alcance Técnico

- Solo aplicación móvil (Android/iOS)
- Flujos básicos de onboarding, verificación, solicitud y consulta
- No incluye operaciones bancarias avanzadas, ni integraciones con bancos reales aún
