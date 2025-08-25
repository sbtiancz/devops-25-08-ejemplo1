# Historias de Usuario - Funcionalidades Faltantes MVP Bohío

## 1. Validación de Identidad

### HU-001: Subir Documento de Identidad
**Como** usuario que completó el registro básico  
**Quiero** subir fotos de mi documento de identidad (frontal y reverso)  
**Para** validar mi identidad y continuar con el proceso de apertura de cuenta

**Criterios de Aceptación:**
- [ ] El usuario puede acceder a la pantalla de validación de identidad después del registro
- [ ] Se muestran instrucciones claras sobre qué documentos son válidos
- [ ] El usuario puede tomar foto del frente del documento usando la cámara
- [ ] El usuario puede tomar foto del reverso del documento usando la cámara
- [ ] Se valida que las fotos sean legibles y del documento correcto
- [ ] Se muestran mensajes de error claros si las fotos no son válidas
- [ ] Se incluye opción de "Ayuda" con ejemplos visuales
- [ ] El proceso es accesible para lectores de pantalla

**Estimación:** 8 puntos

---

### HU-002: Capturar Selfie para Verificación Biométrica
**Como** usuario que subió su documento de identidad  
**Quiero** tomar una selfie para verificación biométrica  
**Para** completar el proceso de validación de identidad

**Criterios de Aceptación:**
- [ ] Se muestra una guía visual de cómo posicionar el rostro
- [ ] El usuario puede tomar la selfie usando la cámara frontal
- [ ] Se valida que la foto sea clara y muestre el rostro completo
- [ ] Se incluye opción de retomar la foto si no es válida
- [ ] Se muestran instrucciones de accesibilidad para usuarios con discapacidad visual
- [ ] El proceso incluye indicadores de progreso

**Estimación:** 5 puntos

---

### HU-003: Revisión y Confirmación de Validación
**Como** usuario que completó la captura de documentos y selfie  
**Quiero** revisar y confirmar toda la información de validación  
**Para** proceder con la solicitud de tarjeta de crédito

**Criterios de Aceptación:**
- [ ] Se muestra un resumen de todos los documentos subidos
- [ ] El usuario puede revisar las fotos antes de confirmar
- [ ] Se incluye opción de rehacer cualquier paso
- [ ] Se muestra el tiempo estimado de validación (24-48 horas)
- [ ] Se envía confirmación por email y SMS
- [ ] Se redirige al usuario a la solicitud de tarjeta

**Estimación:** 3 puntos

---

## 2. Solicitud de Tarjeta Modular

### HU-004: Configurar Tipo de Tarjeta
**Como** usuario con identidad validada  
**Quiero** elegir el tipo de tarjeta de crédito que mejor se adapte a mis necesidades  
**Para** obtener beneficios personalizados según mi perfil

**Criterios de Aceptación:**
- [ ] Se muestran 3-4 tipos de tarjeta con beneficios claros
- [ ] Cada tipo incluye: cupo inicial, tasa de interés, beneficios principales
- [ ] Se incluyen ejemplos de uso para cada tipo
- [ ] El usuario puede ver una vista previa de la tarjeta seleccionada
- [ ] Se incluye comparador visual entre opciones
- [ ] El lenguaje es simple y no técnico

**Estimación:** 6 puntos

---

### HU-005: Personalizar Cupo y Fechas de Pago
**Como** usuario que seleccionó un tipo de tarjeta  
**Quiero** configurar el cupo inicial y las fechas de pago  
**Para** adaptar la tarjeta a mi capacidad de pago

**Criterios de Aceptación:**
- [ ] Se muestra un slider para seleccionar cupo inicial (RD$ 5,000 - RD$ 50,000)
- [ ] Se incluye calculadora de cuota mensual estimada
- [ ] El usuario puede elegir fecha de corte (1-28 de cada mes)
- [ ] Se muestra fecha de pago correspondiente (20 días después)
- [ ] Se incluyen alertas si el cupo es muy alto para el perfil
- [ ] Se muestran opciones de recordatorios de pago

**Estimación:** 8 puntos

---

### HU-006: Seleccionar Beneficios Adicionales
**Como** usuario que configuró cupo y fechas  
**Quiero** seleccionar beneficios adicionales para mi tarjeta  
**Para** maximizar los beneficios según mis hábitos de consumo

**Criterios de Aceptación:**
- [ ] Se muestran beneficios disponibles: cashback, puntos, seguros
- [ ] Cada beneficio incluye explicación simple y ejemplos
- [ ] El usuario puede seleccionar múltiples beneficios
- [ ] Se muestra el costo adicional de cada beneficio
- [ ] Se incluye calculadora de ahorro estimado anual
- [ ] Se pueden activar/desactivar beneficios sin costo

**Estimación:** 7 puntos

---

### HU-007: Vista Previa y Confirmación de Tarjeta
**Como** usuario que completó la configuración  
**Quiero** ver una vista previa de mi tarjeta personalizada  
**Para** confirmar que todo está correcto antes de solicitar

**Criterios de Aceptación:**
- [ ] Se muestra una vista previa realista de la tarjeta
- [ ] Se incluye resumen de todas las configuraciones
- [ ] Se muestran términos y condiciones simplificados
- [ ] El usuario puede hacer cambios antes de confirmar
- [ ] Se incluye opción de guardar configuración para más tarde
- [ ] Se envía confirmación por email con detalles

**Estimación:** 5 puntos

---

## 3. Educación Financiera

### HU-008: Acceso al Módulo de Educación
**Como** usuario registrado en la plataforma  
**Quiero** acceder a contenido educativo sobre finanzas personales  
**Para** mejorar mi conocimiento financiero y tomar mejores decisiones

**Criterios de Aceptación:**
- [ ] Se incluye acceso desde el menú principal
- [ ] Se muestra dashboard con progreso general
- [ ] Se organizan lecciones por categorías: básico, intermedio, avanzado
- [ ] Se incluye indicador de lecciones completadas
- [ ] Se muestran recomendaciones personalizadas según el perfil
- [ ] El contenido es accesible offline

**Estimación:** 5 puntos

---

### HU-009: Microlecciones Interactivas
**Como** usuario del módulo educativo  
**Quiero** consumir lecciones cortas y fáciles de entender  
**Para** aprender conceptos financieros básicos sin abrumarme

**Criterios de Aceptación:**
- [ ] Cada lección dura máximo 3-5 minutos
- [ ] Se incluyen formatos: texto, audio, video corto
- [ ] Se incluyen ejemplos prácticos y casos reales
- [ ] El usuario puede pausar y reanudar lecciones
- [ ] Se incluyen mini-quizzes para reforzar aprendizaje
- [ ] Se adapta el contenido según el nivel de alfabetización digital

**Estimación:** 8 puntos

---

### HU-010: Glosario de Términos Bancarios
**Como** usuario que encuentra términos técnicos  
**Quiero** consultar un glosario simple de términos bancarios  
**Para** entender mejor la información financiera

**Criterios de Aceptación:**
- [ ] Se incluye búsqueda por palabra clave
- [ ] Cada término tiene explicación simple y ejemplo
- [ ] Se incluyen traducciones para usuarios migrantes
- [ ] Se puede acceder desde cualquier pantalla de la app
- [ ] Se incluyen términos más consultados en la parte superior
- [ ] Se guarda historial de términos consultados

**Estimación:** 4 puntos

---

### HU-011: Seguimiento de Progreso Educativo
**Como** usuario que consume contenido educativo  
**Quiero** ver mi progreso y logros  
**Para** mantenerme motivado y continuar aprendiendo

**Criterios de Aceptación:**
- [ ] Se muestra porcentaje de lecciones completadas
- [ ] Se incluyen badges/insignias por logros
- [ ] Se muestra streak de días consecutivos de aprendizaje
- [ ] Se incluyen certificados por módulos completados
- [ ] Se puede compartir logros en redes sociales
- [ ] Se incluyen recordatorios personalizados

**Estimación:** 6 puntos

---

## 4. Funcionalidades de Soporte y Accesibilidad

### HU-012: Chat de Soporte Integrado
**Como** usuario que necesita ayuda  
**Quiero** acceder a soporte en tiempo real  
**Para** resolver dudas durante el proceso de registro o uso

**Criterios de Aceptación:**
- [ ] Se incluye botón de chat flotante en todas las pantallas
- [ ] Soporte disponible en español, creole y portugués
- [ ] Se incluyen respuestas automáticas para preguntas frecuentes
- [ ] Opción de transferir a agente humano si es necesario
- [ ] Se puede adjuntar capturas de pantalla
- [ ] Historial de conversaciones disponible

**Estimación:** 7 puntos

---

### HU-013: Modo de Accesibilidad Avanzado
**Como** usuario con discapacidad visual  
**Quiero** acceder a todas las funcionalidades de forma independiente  
**Para** usar la aplicación sin necesidad de asistencia

**Criterios de Aceptación:**
- [ ] Compatibilidad completa con lectores de pantalla
- [ ] Navegación por teclado en todas las funcionalidades
- [ ] Contraste alto configurable
- [ ] Tamaño de fuente ajustable
- [ ] Descripciones de audio para imágenes importantes
- [ ] Vibración háptica para confirmaciones

**Estimación:** 8 puntos

---

## Resumen de Estimaciones

| Funcionalidad | Puntos | Prioridad |
|---------------|--------|-----------|
| Validación de Identidad | 16 | Alta |
| Solicitud de Tarjeta Modular | 26 | Alta |
| Educación Financiera | 23 | Media |
| Soporte y Accesibilidad | 15 | Media |

**Total estimado:** 80 puntos

**Tiempo estimado de desarrollo:** 16-20 semanas (considerando 4-5 puntos por semana por desarrollador)
