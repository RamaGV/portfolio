// @/src/context/CanvasKitContext.tsx

import { createContext, useEffect, useState, ReactNode } from 'react';
import CanvasKitInit from 'canvaskit-wasm';

type CanvasKitContextProps = {
  canvasKit: any;
}

export const CKContext = createContext<CanvasKitContextProps | null>(null);

type Props = {
  children: ReactNode;
}

export function CanvasKitProvider({ children }: Props) {
  const [canvasKit, setCanvasKit] = useState<any>(null);

  useEffect(() => {
    // Carga del WASM (CanvasKit) una sola vez
    CanvasKitInit({
      locateFile: (file) => `/canvaskit/${file}`, // Ajusta la ruta según tu proyecto
    })
      .then((CK) => {
        setCanvasKit(CK);
      })
      .catch((err) => console.error('Error al cargar CanvasKit:', err));
  }, []);

  // Mientras se carga CanvasKit, puedes mostrar un spinner o texto
  if (!canvasKit) {
    return <div>Cargando CanvasKit...</div>;
  }

  return (
    <CKContext.Provider value={{ canvasKit }}>
      {children}
    </CKContext.Provider>
  );
}
