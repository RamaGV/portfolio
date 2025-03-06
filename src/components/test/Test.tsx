import React, { useRef, useEffect } from 'react';
import CanvasKitInit from 'canvaskit-wasm';  // asegúrate de instalar canvaskit-wasm@0.39.1

function GradientCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let canvasKit: any = null;
    CanvasKitInit({
      locateFile: (file) => `https://unpkg.com/canvaskit-wasm@0.39.1/bin/${file}`
    }).then((CanvasKit) => {
      canvasKit = CanvasKit;
      // Crear el Surface de Skia usando el <canvas> del DOM
      const surface = CanvasKit.MakeCanvasSurface(canvasRef.current as unknown as HTMLCanvasElement);
      if (!surface) {
        console.error("No se pudo crear el Canvas Surface");
        return;
      }
      const canvas = surface.getCanvas();

      // Crear Paint y Shader de degradado
      const paint = new CanvasKit.Paint();
      paint.setStyle(CanvasKit.PaintStyle.Fill);
      paint.setAntiAlias(true);
      // Definir colores de inicio y fin (azul -> verde)
      const startColor = CanvasKit.parseColorString('#0000FF'); // azul
      const endColor   = CanvasKit.parseColorString('#00FF00'); // verde
      // Crear shader de degradado lineal (de izquierda a derecha)
      const shader = CanvasKit.Shader.MakeLinearGradient(
        [0, 0],            // punto inicial (x=0,y=0 en el canvas)
        [300, 0],          // punto final (x=300,y=0, horizontal)
        [startColor, endColor], // colores del degradado
        null,              // posiciones equidistantes (0 y 1)
        CanvasKit.TileMode.Clamp
      );
      paint.setShader(shader);

      // Dibujar un rectángulo que cubra el área deseada con el paint de degradado
      const rect = CanvasKit.LTRBRect(0, 0, 300, 150);
      canvas.drawRect(rect, paint);

      // Volcar los comandos de dibujo a la pantalla
      surface.flush();
      // (También podríamos usar surface.drawOnce() en lugar de flush manual.)

      // Limpieza: liberar objetos de WASM para evitar fugas de memoria
      shader.delete();
      paint.delete();
      // *No* borrar surface aquí si queremos mantener el dibujo persistente
    });

    // Cleanup: opcionalmente, cancelar acciones pendientes si el componente se desmonta
    return () => {
      if (canvasKit) {
        // Aquí podríamos limpiar o indicar que no se usará más CanvasKit
        // (En este ejemplo simple no hay un loop activo que cancelar.)
      }
    };
  }, []);

  return <canvas ref={canvasRef} width={300} height={150}></canvas>;
}

export default GradientCanvas;
