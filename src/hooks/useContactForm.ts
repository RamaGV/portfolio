import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { z } from 'zod';
import { debounce } from 'lodash';
import emailjs from 'emailjs-com';

// Esquema de validación con Zod
export const contactFormSchema = z.object({
  name: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
  email: z.string().email('Por favor, introduce un correo electrónico válido'),
  subject: z.string().min(5, 'El asunto debe tener al menos 5 caracteres'),
  message: z.string().min(20, 'El mensaje debe tener al menos 20 caracteres'),
  consent: z.boolean().refine((val: boolean) => val === true, {
    message: 'Debes aceptar la política de privacidad'
  })
});

type ContactFormData = z.infer<typeof contactFormSchema>;

type FormErrors = {
  [K in keyof ContactFormData]?: string;
};

interface UseContactFormProps {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
  serviceId?: string;
  templateId?: string;
  userId?: string;
}

interface UseContactFormReturn {
  formData: ContactFormData;
  errors: FormErrors;
  isDirty: Record<keyof ContactFormData, boolean>;
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleBlur: (field: keyof ContactFormData) => void;
  handleSubmit: (e: FormEvent) => Promise<void>;
  resetForm: () => void;
  isValid: boolean;
}

export function useContactForm({ 
  onSuccess, 
  onError,
  serviceId = 'default_service',
  templateId = 'template_default',
  userId = 'user_default'
}: UseContactFormProps = {}): UseContactFormReturn {
  const initialData: ContactFormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false
  };

  const [formData, setFormData] = useState<ContactFormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isDirty, setIsDirty] = useState<Record<keyof ContactFormData, boolean>>({
    name: false,
    email: false,
    subject: false,
    message: false,
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isValid, setIsValid] = useState(false);

  // Función para validar un campo específico
  const validateField = (field: keyof ContactFormData, value: string | boolean) => {
    try {
      const schema = z.object({ [field]: contactFormSchema.shape[field] });
      schema.parse({ [field]: value });
      return { valid: true, error: undefined };
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldError = error.errors[0]?.message;
        return { valid: false, error: fieldError };
      }
      return { valid: false, error: 'Error de validación' };
    }
  };

  // Validar el formulario completo
  const validateForm = () => {
    try {
      contactFormSchema.parse(formData);
      setErrors({});
      setIsValid(true);
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: FormErrors = {};
        error.errors.forEach((err) => {
          const field = err.path[0] as keyof ContactFormData;
          if (typeof field === 'string') {
            newErrors[field] = err.message;
          }
        });
        setErrors(newErrors);
      }
      setIsValid(false);
      return false;
    }
  };
  
  // Debounce para la validación de campos
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedValidateField = debounce((field: keyof ContactFormData, value: string | boolean) => {
    const result = validateField(field, value);
    setErrors(prev => ({
      ...prev,
      [field]: result.error
    }));
  }, 300);

  // Efecto para validar el formulario cuando cambian los datos
  useEffect(() => {
    validateForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  // Manejador de cambios en los campos
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));

    setIsDirty(prev => ({
      ...prev,
      [name]: true
    }));

    // Validar el campo después de un delay
    debouncedValidateField(name as keyof ContactFormData, newValue as string | boolean);
  };

  // Manejador de blur para validación inmediata
  const handleBlur = (field: keyof ContactFormData) => {
    setIsDirty(prev => ({
      ...prev,
      [field]: true
    }));

    const result = validateField(field, formData[field]);
    setErrors(prev => ({
      ...prev,
      [field]: result.error
    }));
  };

  // Manejador de envío del formulario
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Marcar todos los campos como "sucios" para mostrar todos los errores
    const allDirty = Object.keys(formData).reduce((acc, key) => {
      acc[key as keyof ContactFormData] = true;
      return acc;
    }, {} as Record<keyof ContactFormData, boolean>);
    
    setIsDirty(allDirty);
    
    // Validar antes de enviar
    const isFormValid = validateForm();
    if (!isFormValid) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Preparar datos para EmailJS
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        subject: formData.subject,
        message: formData.message
      };
      
      // Enviar el correo usando EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        userId
      );
      
      setSubmitStatus('success');
      if (onSuccess) onSuccess();
      resetForm();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      if (onError) onError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Función para resetear el formulario
  const resetForm = () => {
    setFormData(initialData);
    setErrors({});
    setIsDirty({
      name: false,
      email: false,
      subject: false,
      message: false,
      consent: false
    });
    setSubmitStatus('idle');
  };

  return {
    formData,
    errors,
    isDirty,
    isSubmitting,
    submitStatus,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    isValid
  };
} 