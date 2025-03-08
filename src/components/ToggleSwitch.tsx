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
  return (
    <div className="flex items-center h-10 px-1 bg-[#1a1a1a] rounded-2xl border border-[#232323]">
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
  );
}
