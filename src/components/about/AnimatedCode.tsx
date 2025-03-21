// src/components/about/AnimatedCode.tsx

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCode: React.FC = () => {
  const codeRef = useRef(null);
  const isInView = useInView(codeRef, { once: false });
  const [lineIndex, setLineIndex] = useState(0);
  
  const codeLines = [
    "// Mi enfoque de desarrollo",
    "function resolverProblema(problema) {",
    "  const analisis = entenderRequisitos(problema);",
    "  const soluciones = pensarAlternativas(analisis);",
    "  const mejor = evaluarOpciones(soluciones);",
    "  return implementar(mejor);",
    "}",
    "",
    "// El resultado siempre es valioso",
    "function desarrollador(yo) {",
    "  return {",
    "    creativo: true,",
    "    perseverante: true,",
    "    aprendizaje: 'constante'",
    "  };",
    "}"
  ];
  
  useEffect(() => {
    if (isInView) {
      if (lineIndex < codeLines.length) {
        const timer = setTimeout(() => {
          setLineIndex(prev => prev + 1);
        }, 150);
        return () => clearTimeout(timer);
      }
    } else {
      setLineIndex(0);
    }
    return undefined;
  }, [isInView, lineIndex, codeLines.length]);

  return (
    <motion.div
      ref={codeRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white p-6 rounded-xl font-mono text-sm overflow-hidden"
    >
      <pre>
        {codeLines.slice(0, lineIndex).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className={line.includes("//") ? "text-green-400" : ""}
          >
            {line}
          </motion.div>
        ))}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-2 h-4 bg-white ml-1"
        ></motion.span>
      </pre>
    </motion.div>
  );
};

export default AnimatedCode; 