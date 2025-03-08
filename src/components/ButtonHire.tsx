import React from 'react';
import { HiOutlineStatusOnline } from 'react-icons/hi';

/**
 * @component ButtonHire
 * @description Botón que indica la disponibilidad para trabajar
 */
function ButtonHire() {
  return (
    <button
      className="
        inline-flex items-center gap-2
        px-3 py-2
        rounded-xl text-sm font-medium
        bg-[#133022] text-[#6BC493] 
        hover:bg-[#173623] hover:text-[#86EFAC]
        transition-all duration-300
        hover:shadow-md hover:shadow-[#133022]/30
        focus:outline-none focus:ring-2 focus:ring-[#6BC493]/50
        transform hover:scale-105
      "
      aria-label="Disponible para trabajar"
    >
      <HiOutlineStatusOnline className="w-4 h-4" />
      <span>Disponible para trabajar</span>
    </button>
  );
}

export default ButtonHire;
