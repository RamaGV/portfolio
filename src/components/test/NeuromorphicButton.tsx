// @/src/components/NeuromorphicButton.tsx

import { useContext, useEffect, useRef } from 'react';
import { CKContext } from '../../context/CanvasKitContext';

export default function NeuromorphicButton() {
  const { canvasKit } = useContext(CKContext)!;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const surface = canvasKit.MakeCanvasSurface(canvasRef.current);
    if (!surface) return;
    const canvas = surface.getCanvas();
    
    // Limpia el canvas con un color de fondo claro
    canvas.clear(canvasKit.Color(240, 240, 240, 1));

    // Parámetros del botón
    const x = 50, y = 50, w = 200, h = 70, radius = 15;
    const offset = 5; // Desplazamiento para las sombras
    const offsetClara = 1; // Desplazamiento para las sombras

    // Pintura para la sombra oscura (parte inferior derecha)
    const darkPaint = new canvasKit.Paint();
    darkPaint.setAntiAlias(true);
    darkPaint.setColor(canvasKit.Color(200, 200, 200, 1));

    // Pintura para la sombra clara (parte superior izquierda)
    const lightPaint = new canvasKit.Paint();
    lightPaint.setAntiAlias(true);
    lightPaint.setColor(canvasKit.Color(230, 230, 230, 10));

    // Pintura para el botón principal
    const mainPaint = new canvasKit.Paint();
    mainPaint.setAntiAlias(true);
    mainPaint.setColor(canvasKit.Color(220, 220, 220, 1));

    // Dibujar la sombra oscura (desplazada +offset, +offset)
    const darkRect = canvasKit.XYWHRect(x + offset, y + offset, w, h);
    const darkRRect = canvasKit.RRectXY(darkRect, radius, radius);
    canvas.drawRRect(darkRRect, darkPaint);

    // Dibujar la sombra clara (desplazada -offset, -offset)
    const lightRect = canvasKit.XYWHRect(x - offsetClara, y - offsetClara, w, h);
    const lightRRect = canvasKit.RRectXY(lightRect, radius, radius);
    canvas.drawRRect(lightRRect, lightPaint);

    // Dibujar el botón principal en la posición original
    const mainRect = canvasKit.XYWHRect(x, y, w, h);
    const mainRRect = canvasKit.RRectXY(mainRect, radius, radius);
    canvas.drawRRect(mainRRect, mainPaint);

    // // Pintura para el texto
    // const textPaint = new canvasKit.Paint();
    // textPaint.setAntiAlias(true);
    // textPaint.setColor(canvasKit.Color(0, 0, 0, 1));
    // textPaint.setTextSize(20);

    // // Posicionar el texto de forma aproximada en el centro del botón
    // const text = "Press me";
    // const textX = x + w / 2 - 30; // Ajusta según el ancho real del texto
    // const textY = y + h / 2 + 7;  // Ajuste para la línea base
    // skCanvas.drawText(text, textX, textY, textPaint);
    

    // flush() para aplicar los comandos
    surface.flush();
  }, [canvasKit]);

  return (
    <div className="p-4 flex flex-col items-center">
        <canvas ref={canvasRef} width={300} height={160} />
    </div>
  );
}
