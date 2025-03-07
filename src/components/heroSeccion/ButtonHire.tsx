
function ButtonHire() {
  return (
    <>
      <button
        className="
          inline-flex items-center 
          px-2.5 py-1.5
          rounded-full text-xs font-medium
          bg-[#133022] text-[#6BC493] 
          hover:bg-[#173623] hover:text-[#86EFAC]
          transition-colors
        "
      >
        {/* Indicador circular (opcional) */}
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#6BC493] mr-2"></span>
        Disponible para trabajar
      </button>
    </>
  )
}

export default ButtonHire
