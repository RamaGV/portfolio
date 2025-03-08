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
  // Base classes for all states
  const baseClasses = `
    flex items-center justify-center 
    rounded-xl 
    transition-all duration-300
    ${label.length > 2 ? 'w-10' : 'w-8'} h-8
  `;
  
  // Classes for active state
  const activeClasses = `
    bg-[#171717] 
    text-yellow-600 
    font-medium 
    hover:text-yellow-400
    shadow-inner shadow-[#101010]
  `;
  
  // Classes for inactive state
  const inactiveClasses = `
    bg-transparent 
    text-gray-400 
    hover:text-yellow-400
    hover:bg-[#202020]
  `;
  
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
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
