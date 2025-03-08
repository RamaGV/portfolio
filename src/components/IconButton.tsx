// src/components/IconButton.tsx
import React from 'react';

/**
 * Props para el componente IconButton
 */
export type IconButtonProps = {
  icon: React.ReactNode;
  onClick?: () => void;
  href?: string;
  download?: boolean;
  target?: string;
  rel?: string;
  className?: string;
  isActive?: boolean;
};

/**
 * @component IconButton
 * @description Componente reutilizable para botones con íconos
 */
const IconButton = ({
  icon,
  onClick,
  href,
  download = false,
  target,
  rel,
  className = '',
  isActive = false
}: IconButtonProps) => {
  const baseClasses = `
    flex items-center justify-center w-10 h-10 rounded-xl 
    bg-[#1a1a1a] text-gray-400 transition-colors duration-300 
    border border-[#232323] ${className} ${isActive ? 'text-green-400' : ''}
  `; 

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={baseClasses}
      >
        {icon}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={baseClasses}
    >
      {icon}
    </button>
  );
};

export default IconButton;
