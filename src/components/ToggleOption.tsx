// src/components/ToggleOption.tsx
import { ReactNode } from 'react';

/**
 * Props para el componente ToggleOption
 */
export type ToggleOptionProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
  ariaLabel: string;
  icon?: ReactNode;
};

/**
 * @component ToggleOption
 * @description Componente para opciones dentro de un toggle
 */
export default function ToggleOption({ label, isActive, onClick, ariaLabel, icon }: ToggleOptionProps) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center justify-center rounded-full transition-all duration-300
        ${label.length > 2 ? 'w-12' : 'w-10'} h-8
      ${isActive 
        ? 'bg-[#232323] text-blue-400 font-medium' 
        : 'bg-transparent text-gray-400'
      }
    `}
    aria-label={ariaLabel}
  >
    {icon ? (
      <span className="flex items-center justify-center">{icon}</span>
    ) : (
      <span className="text-xs font-medium">{label}</span>
    )}
  </button>
  );
}
