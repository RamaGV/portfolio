// CanvasKitExample.tsx

import { useContext, useEffect } from 'react';
import { CKContext } from './context/CanvasKitContext';

export default function CanvasKitExample() {
  const { canvasKit } = useContext(CKContext)!;

  useEffect(() => {
    // Paso 2: Una vez cargado CanvasKit, dibujamos algo
    if (!canvasKit) return;

    const canvasEl = document.getElementById('myCanvas') as HTMLCanvasElement;
    if (!canvasEl) return;

    // Creamos una superficie
    const surface = canvasKit.MakeCanvasSurface(canvasEl);
    if (!surface) {
      console.error('No se pudo crear la superficie de CanvasKit.');
      return;
    }

    const skCanvas = surface.getCanvas();

    // Limpiamos el canvas con color blanco
    skCanvas.clear(canvasKit.Color(255, 255, 255, 1));

    // Creamos una brocha/paint
    const paint = new canvasKit.Paint();
    paint.setColor(canvasKit.Color(255, 0, 0, 1)); // Rojo
    paint.setAntiAlias(true);

    // Dibujamos un círculo
    skCanvas.drawCircle(100, 100, 50, paint);

    // Aplicamos los comandos de dibujo
    surface.flush();
  }, [canvasKit]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Ejemplo CanvasKit + Vite + React</h1>
      <p>Si todo va bien, deberías ver un círculo rojo en el canvas:</p>
      <canvas
        id="myCanvas"
        width={400}
        height={300}
        style={{ border: '1px solid black' }}
      />
    </div>
  );
}
