# Configuración del Formulario de Contacto

## EmailJS Setup

El formulario de contacto utiliza [EmailJS](https://www.emailjs.com/) para enviar correos electrónicos sin necesidad de un servidor backend. Para configurarlo correctamente, sigue estos pasos:

1. **Crea una cuenta en EmailJS**: Regístrate en [https://www.emailjs.com/](https://www.emailjs.com/)

2. **Crea un servicio de correo electrónico**:
   - Ve a la sección "Email Services"
   - Haz clic en "Add New Service"
   - Selecciona tu proveedor de correo (Gmail, Outlook, etc.)
   - Sigue las instrucciones para conectar tu cuenta

3. **Crea una plantilla de correo electrónico**:
   - Ve a la sección "Email Templates"
   - Haz clic en "Create New Template"
   - Diseña tu plantilla utilizando las siguientes variables:
     - `{{from_name}}`: Nombre del remitente (usuario que rellena el formulario)
     - `{{reply_to}}`: Email del remitente para responder
     - `{{subject}}`: Asunto del mensaje
     - `{{message}}`: Cuerpo del mensaje

4. **Configura las variables de entorno**:
   - Copia el archivo `.env.example` a `.env.local`
   - Completa las siguientes variables:
     - `VITE_EMAILJS_SERVICE_ID`: ID del servicio que creaste
     - `VITE_EMAILJS_TEMPLATE_ID`: ID de la plantilla que creaste
     - `VITE_EMAILJS_PUBLIC_KEY`: Tu clave pública (disponible en la sección "Account" > "API Keys")

## Características implementadas

Este formulario de contacto avanzado incluye:

- **Validación en tiempo real** usando Zod
- **Feedback instantáneo** para errores de formulario
- **Animaciones suaves** con Framer Motion
- **Estados de carga** durante el envío
- **Mensajes de éxito/error** con diseño atractivo
- **Diseño totalmente responsive**
- **Consistencia visual** con el resto del portfolio
- **Campos con iconos** para mejorar la UX
- **Validación de GDPR** con checkbox de consentimiento
- **Microcopy contextual** para guiar al usuario

## Componentes creados

- `useContactForm`: Hook personalizado para gestionar el estado y validación del formulario
- `FormField`: Componente reutilizable para campos de formulario (input y textarea)
- `Button`: Componente flexible para botones con diferentes variantes y estados
- `ContactSection`: Componente principal que integra todo el formulario

## Tecnologías utilizadas

- React + TypeScript
- Zod para validación
- EmailJS para envío de correos
- Framer Motion para animaciones
- TailwindCSS para estilos
- React Icons para iconografía 