// LineBlurTest.tsx
import React, { useRef, useEffect } from 'react';
import CanvasKitInit from 'canvaskit-wasm';

export default function LineBlurTest() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    CanvasKitInit({
      locateFile: (file) => `https://unpkg.com/canvaskit-wasm@0.39.1/bin/${file}`,
    })
      .then((CanvasKit) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        // Ajusta el tamaño interno del canvas al tamaño visual
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        // Crear la superficie de CanvasKit a partir del canvas HTML
        const surface = CanvasKit.MakeCanvasSurface(canvas);
        if (!surface) {
          console.error("No se pudo crear la superficie de CanvasKit");
          return;
        }
        const skCanvas = surface.getCanvas();

        // Limpiar el canvas con un fondo oscuro
        skCanvas.clear(CanvasKit.Color(10, 10, 30, 1));

        // Crear una pintura para la línea
        const paint = new CanvasKit.Paint();
        paint.setStyle(CanvasKit.PaintStyle.Stroke);
        paint.setStrokeWidth(5);
        paint.setAntiAlias(true);
        // Establecer el color de la línea (verde)
        paint.setColor(CanvasKit.Color(0, 255, 0, 1));

        // Crear un filtro de desenfoque (blur)
        // La firma es: MakeBlur(sigmaX, sigmaY, input: ImageFilter | null, tileMode)
        const blurFilter = CanvasKit.ImageFilter.MakeBlur(4, 4, CanvasKit.TileMode.Clamp, null );
        if (blurFilter) {
          paint.setImageFilter(blurFilter);
        }

        // Dibujar una línea horizontal desde (100,100) hasta (700,100)
        skCanvas.drawLine(100, 100, 700, 100, paint);

        // Volcar el dibujo a la pantalla
        surface.flush();

        // Liberar recursos
        if (blurFilter) blurFilter.delete();
        paint.delete();
      })
      .catch((err) => {
        console.error("Error al inicializar CanvasKit:", err);
      });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: '100vh', display: 'block' }}
    />
  );
}
