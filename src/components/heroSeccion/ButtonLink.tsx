// src/components/ButtonLink.tsx

import { HiOutlineDocumentText } from 'react-icons/hi';
import { FiLinkedin } from "react-icons/fi";
import { FiMail } from 'react-icons/fi'

interface ButtonLinkProps {
  icon: string;
  link: string;
}

function ButtonLink({ icon, link }: ButtonLinkProps) {
  return (
    <>
      <a
        href={link}
        className="p-2 rounded-xl bg-[#212121] hover:bg-[#232323] text-[#CDCDCD] hover:text-[#FAFAFA] hover:scale-105 transition-transform"
        aria-label={icon}
        target="_blank"
        rel="noreferrer"
      >
        {icon === 'correo' && <FiMail className="w-4 h-4" />}
        {icon === 'linkedin' && <FiLinkedin className="w-4 h-4" />}
        {icon === 'cv' && <HiOutlineDocumentText className="w-4 h-4" />}
      </a>
    </>
  )
}

export default ButtonLink
