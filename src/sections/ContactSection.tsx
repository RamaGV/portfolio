import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiUser, FiMail, FiMessageSquare, FiSend, FiCheck, FiFileText } from 'react-icons/fi';
import { FormField } from '../components/ui/FormField';
import { Button } from '../components/ui/Button';
import { useContactForm } from '../hooks/useContactForm';
import { SectionContainer } from './SectionContainer';

// Los ID de su cuenta de EmailJS (sustituir por los reales)
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_id';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_id';
const EMAILJS_USER_ID = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'user_id';

export const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  // Custom hook para manejar el formulario
  const { 
    formData, 
    errors, 
    isDirty,
    isSubmitting, 
    submitStatus,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid
  } = useContactForm({
    serviceId: EMAILJS_SERVICE_ID,
    templateId: EMAILJS_TEMPLATE_ID,
    userId: EMAILJS_USER_ID
  });

  // Variantes de animación para el contenedor
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Variantes de animación para los elementos hijos
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  // Variantes para las animaciones de éxito/error
  const resultVariants = {
    hidden: { opacity: 0, height: 0, marginBottom: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      marginBottom: '1rem',
      transition: {
        duration: 0.4
      }
    }
  };
  
  // Variantes para el formulario
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100
      }
    }
  };

  const statusMessages = {
    success: (
      <motion.div
        variants={resultVariants}
        initial="hidden"
        animate={submitStatus === 'success' ? 'visible' : 'hidden'}
        className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 rounded-lg p-4 mb-4 flex items-start"
      >
        <FiCheck className="mr-3 flex-shrink-0 mt-0.5 text-green-500" size={20} />
        <div>
          <h4 className="font-medium text-lg">¡Mensaje enviado correctamente!</h4>
          <p className="mt-1">Gracias por contactarme. Te responderé lo antes posible.</p>
        </div>
      </motion.div>
    ),
    error: (
      <motion.div
        variants={resultVariants}
        initial="hidden"
        animate={submitStatus === 'error' ? 'visible' : 'hidden'}
        className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 rounded-lg p-4 mb-4 flex items-start"
      >
        <FiCheck className="mr-3 flex-shrink-0 mt-0.5 text-red-500" size={20} />
        <div>
          <h4 className="font-medium text-lg">Error al enviar el mensaje</h4>
          <p className="mt-1">Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde o contáctame directamente por correo.</p>
        </div>
      </motion.div>
    )
  };

  return (
    <SectionContainer id="contact">
      <div ref={sectionRef} className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Hablamos sobre tu proyecto?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Estoy disponible para colaborar en tu proyecto. Rellena el formulario y me pondré en contacto contigo a la mayor brevedad.
            </p>
          </motion.div>

          {(statusMessages.success || statusMessages.error)}

          <motion.form 
            variants={formVariants}
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 md:p-8 backdrop-blur-sm border border-gray-100 dark:border-gray-700"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                label="Nombre completo"
                name="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                onBlur={() => handleBlur('name')}
                error={errors.name}
                isDirty={isDirty.name}
                leftIcon={<FiUser size={18} />}
                required
              />

              <FormField
                label="Correo electrónico"
                name="email"
                type="email"
                placeholder="tucorreo@ejemplo.com"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur('email')}
                error={errors.email}
                isDirty={isDirty.email}
                leftIcon={<FiMail size={18} />}
                required
              />
            </div>

            <FormField
              label="Asunto"
              name="subject"
              placeholder="¿De qué quieres hablar?"
              value={formData.subject}
              onChange={handleChange}
              onBlur={() => handleBlur('subject')}
              error={errors.subject}
              isDirty={isDirty.subject}
              leftIcon={<FiFileText size={18} />}
              className="mt-6"
              required
            />

            <FormField
              as="textarea"
              label="Mensaje"
              name="message"
              placeholder="Cuéntame sobre tu proyecto o consulta..."
              value={formData.message}
              onChange={handleChange}
              onBlur={() => handleBlur('message')}
              error={errors.message}
              isDirty={isDirty.message}
              leftIcon={<FiMessageSquare size={18} />}
              className="mt-6"
              rows={6}
              required
            />

            <div className="mt-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  onBlur={() => handleBlur('consent')}
                  className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  required
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Acepto que mis datos sean guardados para responder a mi consulta.
                </span>
              </label>
              {errors.consent && isDirty.consent && (
                <p className="mt-1 text-sm text-red-500">{errors.consent}</p>
              )}
            </div>

            <div className="mt-8">
              <Button
                type="submit"
                isLoading={isSubmitting}
                disabled={isSubmitting || !isValid}
                rightIcon={<FiSend />}
                fullWidth
                size="lg"
              >
                {isSubmitting ? 'Enviando mensaje...' : 'Enviar mensaje'}
              </Button>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
              También puedes contactarme directamente en{' '}
              <a href="mailto:contacto@ejemplo.com" className="text-primary-600 dark:text-primary-400 hover:underline">
                contacto@ejemplo.com
              </a>
            </div>
          </motion.form>

          {/* Decoración de fondo */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-400/10 dark:bg-primary-700/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-400/10 dark:bg-primary-700/10 rounded-full blur-3xl -z-10"></div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}; 