import { FC, InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { FiAlertCircle } from 'react-icons/fi';

// Props base que son comunes entre input y textarea
interface BaseFormFieldProps {
  label: string;
  error?: string;
  isDirty?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  containerClass?: string;
  labelClass?: string;
  inputClass?: string;
  errorClass?: string;
  className?: string;
}

type InputProps = InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

// Unión discriminada usando 'as' como discriminante
type FormFieldProps = 
  | (BaseFormFieldProps & InputProps & { as?: 'input' })
  | (BaseFormFieldProps & TextareaProps & { as: 'textarea' });

export const FormField: FC<FormFieldProps> = ({
  label,
  name,
  error,
  isDirty,
  leftIcon,
  rightIcon,
  as = 'input',
  containerClass = '',
  labelClass = '',
  inputClass = '',
  errorClass = '',
  className = '',
  ...props
}) => {
  // Determinar si se debe mostrar el error (solo cuando está sucio)
  const showError = Boolean(error && isDirty);
  
  // Variantes de animación para los errores
  const errorVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: { opacity: 1, y: 0, height: 'auto' }
  };

  // Clase para el campo de entrada con estado de error
  const fieldClasses = `
    w-full py-3 px-4 text-gray-900 bg-gray-50 border 
    rounded-lg focus:ring-primary-600 focus:border-primary-600 
    dark:bg-gray-800 dark:border-gray-700 dark:text-white
    transition-all duration-200 outline-none
    ${showError ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'}
    ${leftIcon ? 'pl-10' : ''}
    ${rightIcon ? 'pr-10' : ''}
    ${className}
    ${inputClass}
  `.trim();

  // Clase del contenedor principal
  const containerClasses = `
    relative mb-6 group
    ${containerClass}
  `.trim();

  // Clase de la etiqueta
  const labelClasses = `
    block mb-2 text-sm font-medium text-gray-900 dark:text-white
    ${labelClass}
  `.trim();

  // Clase para el contenedor de errores
  const errorContainerClasses = `
    text-red-500 text-sm mt-1
    ${errorClass}
  `.trim();

  return (
    <div className={containerClasses}>
      <label htmlFor={name} className={labelClasses}>
        {label}
      </label>
      
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
            {leftIcon}
          </div>
        )}
        
        {as === 'textarea' ? (
          <textarea
            id={name}
            name={name}
            className={fieldClasses}
            {...props as TextareaProps}
          />
        ) : (
          <input
            type="text"
            id={name}
            name={name}
            className={fieldClasses}
            {...props as InputProps}
          />
        )}
        
        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
            {rightIcon}
          </div>
        )}
      </div>
      
      <motion.div
        initial="hidden"
        animate={showError ? 'visible' : 'hidden'}
        variants={errorVariants}
        className={errorContainerClasses}
      >
        {showError && (
          <div className="flex items-center">
            <FiAlertCircle className="mr-1" />
            <span>{error}</span>
          </div>
        )}
      </motion.div>
    </div>
  );
}; 