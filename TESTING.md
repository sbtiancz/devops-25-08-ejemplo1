# Guía de Pruebas Unitarias - Bohío

## Descripción General

Este documento describe la suite completa de pruebas unitarias para la aplicación Bohío, una plataforma financiera inclusiva desarrollada en Angular.

## Estructura de Pruebas

### Componentes Principales

#### 1. AppComponent (`src/app/app.spec.ts`)
- **Propósito**: Pruebas del componente raíz de la aplicación
- **Cobertura**: 
  - Creación del componente
  - Propiedades por defecto
  - Renderizado del DOM
  - Configuración standalone

#### 2. RegistrationService (`src/app/services/registration.spec.ts`)
- **Propósito**: Pruebas del servicio de registro
- **Cobertura**:
  - Observables públicos
  - Actualización de datos
  - Verificación de email y teléfono
  - Envío de códigos de verificación
  - Gestión del localStorage
  - Finalización del registro

### Componentes UI

#### 3. ButtonComponent (`src/app/components/ui/button/button.spec.ts`)
- **Propósito**: Pruebas del componente de botón reutilizable
- **Cobertura**:
  - Variantes de botón (primary, secondary, accent, ghost)
  - Tamaños (small, medium, large)
  - Estados (disabled, loading, fullWidth)
  - Eventos de click
  - Generación de clases CSS
  - Accesibilidad

#### 4. InputComponent (`src/app/components/ui/input/input.spec.ts`)
- **Propósito**: Pruebas del componente de input reutilizable
- **Cobertura**:
  - Implementación de ControlValueAccessor
  - Tipos de input (text, email, tel, date, number, password)
  - Validaciones y manejo de errores
  - Estados (focused, disabled, error)
  - Generación de IDs únicos
  - Accesibilidad ARIA

#### 5. BannerComponent (`src/app/components/ui/banner/banner.spec.ts`)
- **Propósito**: Pruebas del componente de banner informativo
- **Cobertura**:
  - Tipos de banner (info, success, warning, error)
  - Estados (dismissible, showIcon)
  - Eventos (dismiss, action)
  - Renderizado condicional
  - Roles de accesibilidad

#### 6. StepIndicatorComponent (`src/app/components/ui/step-indicator/step-indicator.spec.ts`)
- **Propósito**: Pruebas del indicador de pasos del formulario
- **Cobertura**:
  - Navegación entre pasos
  - Estados de pasos (current, completed, pending)
  - Orientación (horizontal, vertical)
  - Interactividad (clickable)
  - Accesibilidad de navegación

### Componentes de Registro

#### 7. BasicInfoComponent (`src/app/components/registration/basic-info/basic-info.spec.ts`)
- **Propósito**: Pruebas del formulario de información básica
- **Cobertura**:
  - Validaciones de formulario
  - Campos requeridos y opcionales
  - Integración con RegistrationService
  - Manejo de errores
  - Carga de datos existentes

#### 8. EmailVerificationComponent (`src/app/components/registration/email-verification/email-verification.spec.ts`)
- **Propósito**: Pruebas de verificación de email
- **Cobertura**:
  - Envío de códigos de verificación
  - Validación de códigos
  - Reenvío de códigos
  - Límites de intentos
  - Estados de envío

#### 9. PhoneVerificationComponent (`src/app/components/registration/phone-verification/phone-verification.spec.ts`)
- **Propósito**: Pruebas de verificación de teléfono
- **Cobertura**:
  - Verificación por SMS y voz
  - Cambio entre métodos de verificación
  - Validación de códigos
  - Reenvío de códigos
  - Límites de intentos

#### 10. AssistedModeComponent (`src/app/components/registration/assisted-mode/assisted-mode.spec.ts`)
- **Propósito**: Pruebas del modo asistido
- **Cobertura**:
  - Tipos de asistencia disponibles
  - Preferencias de accesibilidad
  - Configuración del formulario
  - Integración con el servicio
  - Validaciones condicionales

### Páginas

#### 11. RegistrationPage (`src/app/pages/registration/registration.spec.ts`)
- **Propósito**: Pruebas de la página principal de registro
- **Cobertura**:
  - Navegación entre pasos
  - Estado de verificación
  - Modo asistido
  - Integración con componentes
  - Validación de flujo

#### 12. WelcomePage (`src/app/pages/welcome/welcome.spec.ts`)
- **Propósito**: Pruebas de la página de bienvenida
- **Cobertura**:
  - Características de la plataforma
  - Botones de acción
  - Navegación
  - Renderizado responsivo
  - Accesibilidad

## Configuración de Pruebas

### Dependencias
```json
{
  "@types/jasmine": "~5.1.0",
  "jasmine-core": "~5.8.0",
  "karma": "~6.4.0",
  "karma-chrome-launcher": "~3.2.0",
  "karma-coverage": "~2.2.0",
  "karma-jasmine": "~5.1.0",
  "karma-jasmine-html-reporter": "~2.1.0"
}
```

### Archivo de Configuración
- **`src/test.ts`**: Configuración principal de pruebas
- **`karma.conf.js`**: Configuración de Karma (generado por Angular CLI)

## Ejecución de Pruebas

### Comando Principal
```bash
ng test
```

### Comandos Adicionales
```bash
# Ejecutar pruebas con cobertura
ng test --code-coverage

# Ejecutar pruebas en modo watch
ng test --watch

# Ejecutar pruebas específicas
ng test --include="**/*.spec.ts"
```

### Configuración de Cobertura
```bash
# Generar reporte de cobertura
ng test --code-coverage --watch=false

# Ver reporte en navegador
open coverage/index.html
```

## Estándares de Pruebas

### Convenciones de Nomenclatura
- **Archivos**: `*.spec.ts`
- **Describe**: `describe('ComponentName', () => {})`
- **Tests**: `it('debe [comportamiento esperado]', () => {})`

### Estructura de Pruebas
```typescript
describe('ComponentName', () => {
  let component: ComponentName;
  let fixture: ComponentFixture<ComponentName>;

  beforeEach(async () => {
    // Configuración del TestBed
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  describe('Funcionalidad específica', () => {
    it('debe comportarse correctamente', () => {
      // Arrange
      // Act
      // Assert
    });
  });
});
```

### Mocks y Spies
- **Servicios**: Usar `jasmine.createSpyObj()`
- **Console**: `spyOn(console, 'log').and.stub()`
- **Router**: `RouterTestingModule`
- **Forms**: `ReactiveFormsModule`

## Cobertura de Pruebas

### Métricas Objetivo
- **Líneas de código**: > 90%
- **Funciones**: > 90%
- **Branches**: > 85%
- **Statements**: > 90%

### Áreas Críticas
- **Validaciones de formulario**
- **Integración con servicios**
- **Manejo de errores**
- **Accesibilidad**
- **Navegación**

## Pruebas de Accesibilidad

### Estándares WCAG 2.1
- **Roles ARIA**: Verificar atributos `role`
- **Labels**: Verificar asociación de labels con campos
- **DescribedBy**: Verificar `aria-describedby`
- **Current**: Verificar `aria-current` en navegación

### Componentes de Accesibilidad
- **ButtonComponent**: `aria-label`, `disabled`
- **InputComponent**: `aria-describedby`, `aria-label`
- **StepIndicator**: `role="navigation"`, `aria-current`
- **Banner**: `role="alert"` o `role="status"`

## Pruebas de Responsividad

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Clases CSS
- Verificar clases responsivas
- Verificar grid layouts
- Verificar flexbox properties

## Pruebas de Internacionalización

### Idiomas Soportados
- **Español**: Idioma principal
- **Caracteres especiales**: á, é, í, ó, ú, ñ

### Validaciones
- Verificar textos en español
- Verificar descripciones en español
- Verificar mensajes de error en español

## Mantenimiento de Pruebas

### Actualizaciones
- Mantener pruebas sincronizadas con cambios de código
- Actualizar mocks cuando cambien interfaces
- Verificar cobertura después de refactorizaciones

### Debugging
- Usar `fdescribe()` para ejecutar solo un grupo de pruebas
- Usar `fit()` para ejecutar solo una prueba
- Usar `console.log()` temporalmente para debugging

### Performance
- Ejecutar pruebas en paralelo cuando sea posible
- Optimizar mocks y fixtures
- Usar `beforeEach()` eficientemente

## Recursos Adicionales

### Documentación
- [Angular Testing Guide](https://angular.io/guide/testing)
- [Jasmine Documentation](https://jasmine.github.io/)
- [Karma Documentation](https://karma-runner.github.io/)

### Herramientas
- **Chrome DevTools**: Para debugging de pruebas
- **VS Code Extensions**: Angular Test Snippets
- **Browser Extensions**: Karma Debugger

### Comunidad
- **Stack Overflow**: Etiquetas `angular`, `jasmine`, `karma`
- **Angular Discord**: Canal de testing
- **GitHub Issues**: Reportar bugs en repositorios

## Conclusión

Esta suite de pruebas unitarias proporciona una base sólida para garantizar la calidad y funcionalidad de la aplicación Bohío. Las pruebas cubren todos los componentes críticos, servicios y funcionalidades, asegurando que la plataforma financiera inclusiva funcione correctamente para todos los usuarios.

Para mantener la calidad del código, es importante:
1. Ejecutar pruebas antes de cada commit
2. Mantener cobertura de código alta
3. Actualizar pruebas cuando se modifique funcionalidad
4. Revisar reportes de cobertura regularmente
5. Documentar nuevas funcionalidades con pruebas correspondientes
