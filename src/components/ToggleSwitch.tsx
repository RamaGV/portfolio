// src/components/ToggleSwitch.tsx

import { ReactNode } from 'react';

import ToggleOption from './ToggleOption';

/**
 * Props para el componente ToggleSwitch
 */
export type ToggleSwitchProps = { 
  options: {
    label: string, 
    value: string, 
    ariaLabel: string,
    icon?: ReactNode
  }[],
  activeOption: string,
  onToggle: (value: string) => void
};

/**
 * @component ToggleSwitch
 * @description Componente para switches de toggle (tema, idioma)
 */
export default function ToggleSwitch({ options, activeOption, onToggle }: ToggleSwitchProps) {
  // Outer container classes
  const containerClasses = `
    flex flex-row items-center justify-between 
    p-1 px-2 
    rounded-xl 
    bg-[#1a1a1a]
    shadow-lg shadow-[#151515]
  `;
  
  // Inner container classes
  const optionsContainerClasses = `
    flex items-center 
    p-1 
    rounded-xl
    shadow-inner shadow-[#151515]
  `;
  
  return (
    <div className={containerClasses}>
      <div className={optionsContainerClasses}>
        {options.map((option) => (
          <ToggleOption
            key={option.value}
            label={option.label}
            icon={option.icon}
            isActive={activeOption === option.value}
            onClick={() => onToggle(option.value)}
            ariaLabel={option.ariaLabel}
          />
        ))}
      </div>
    </div>
  );
}
