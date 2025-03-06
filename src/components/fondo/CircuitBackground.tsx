// FondoCircuitoVerde.tsx
import { useContext, useEffect, useRef } from 'react';
import { CKContext } from '../../context/CanvasKitContext';
import { generarLinea, Linea, calcularDistancia } from './utils';

 // Estructura de un destello
interface Destello {
  indiceLinea: number;   // Índice de la línea en el array
  progreso: number;      // Avance (0 a 1) a lo largo de la ruta total
  velocidad: number;     // Velocidad de avance
  opacidad: number;      // Opacidad actual
  estado: 'encendido' | 'desvanecer';
}

// Generar 20 líneas de circuito usando la función generarLinea
const lineasCircuito: Linea[] = Array.from({ length: 250 }, () => generarLinea(800, 600, 6, 10));

export default function FondoCircuitoVerde() {
  const { canvasKit } = useContext(CKContext)!;  
  const lienzoRef = useRef<HTMLCanvasElement>(null);

  // Arreglo de destellos activos
  const destellosRef = useRef<Destello[]>([]);
  const peticionRef = useRef<number | null>(null);
  const intervaloRef = useRef<number | null>(null);
  const superficieRef = useRef<any>(null);

  useEffect(() => {
    if (!canvasKit || !lienzoRef.current) return;

    const lienzo = lienzoRef.current;
    // Ajusta el tamaño interno del canvas a su tamaño visual
    lienzo.width = lienzo.offsetWidth;
    lienzo.height = lienzo.offsetHeight;

    // Crear la superficie de Skia (CanvasKit)
    const superficie = canvasKit.MakeCanvasSurface(lienzo);
    if (!superficie) return;
    superficieRef.current = superficie;

    const skCanvas = superficie.getCanvas();

    // Pintura para las líneas base (verde tenue tipo circuito)
    const pinturaBase = new canvasKit.Paint();
    pinturaBase.setStyle(canvasKit.PaintStyle.Stroke);
    pinturaBase.setStrokeWidth(.5);
    pinturaBase.setColor(canvasKit.Color(50, 200, 50, 60));

    // Función para dibujar un destello parcial en una línea con múltiples tramos
    function dibujarDestello(linea: Linea, ds: Destello) {
      const { puntos } = linea;
      if (puntos.length < 2) return;

      // 1) Calcular longitudes de cada segmento
      const longitudes: number[] = [];
      for (let i = 0; i < puntos.length - 1; i++) {
        const d = calcularDistancia(
          puntos[i].x,   puntos[i].y,
          puntos[i+1].x, puntos[i+1].y
        );
        longitudes.push(d);
      }
      // 2) Longitud total
      const longitudTotal = longitudes.reduce((acc, val) => acc + val, 0);
      // 3) Param en píxeles: cuántos px se han recorrido
      const paramPx = ds.progreso * longitudTotal;

      // Creamos un path parcial
      const path = new canvasKit.Path();
      path.moveTo(puntos[0].x, puntos[0].y);

      let distanciaRestante = paramPx; // cuántos px faltan por "dibujar"
      let xFinal = puntos[0].x, yFinal = puntos[0].y;

      // 4) Recorremos cada tramo para ver hasta dónde dibujamos
      for (let i = 0; i < longitudes.length; i++) {
        const segLen = longitudes[i];
        const pInicio = puntos[i];
        const pFin    = puntos[i+1];

        if (distanciaRestante <= 0) {
          // No dibujamos más, ya no hay progreso en este tramo
          break;
        }
        if (distanciaRestante >= segLen) {
          // Este tramo se dibuja completo
          path.lineTo(pFin.x, pFin.y);
          xFinal = pFin.x;
          yFinal = pFin.y;
          distanciaRestante -= segLen;
        } else {
          // Sólo dibujamos una parte de este tramo
          const frac = distanciaRestante / segLen;
          xFinal = pInicio.x + frac * (pFin.x - pInicio.x);
          yFinal = pInicio.y + frac * (pFin.y - pInicio.y);
          path.lineTo(xFinal, yFinal);
          distanciaRestante = 0;
          break;
        }
      }

      // Crear la pintura para el destello (shader degradado)
      const pinturaDestello = new canvasKit.Paint();
      pinturaDestello.setStyle(canvasKit.PaintStyle.Stroke);
      pinturaDestello.setStrokeWidth(1.5);
      pinturaDestello.setAntiAlias(true);

      // Crear el shader degradado
      const colorInicioD =   canvasKit.parseColorString(`rgba(0,0,0,0)`);
      const colorIntermedio1D = canvasKit.parseColorString(`rgba(5,25,5,${ds.opacidad * .2})`);
      const colorIntermedio2D = canvasKit.parseColorString(`rgba(10,50,10,${ds.opacidad * .4})`);
      const colorIntermedio3D = canvasKit.parseColorString(`rgba(20,180,20,${ds.opacidad * .6})`);
      const colorIntermedio4D = canvasKit.parseColorString(`rgba(25,200,25,${ds.opacidad * .8})`);
      const colorFinD = canvasKit.parseColorString(`rgba(30,255,30,${ds.opacidad})`);
      const colorsD = [colorInicioD, colorInicioD, colorInicioD, colorInicioD, colorIntermedio1D, colorIntermedio2D, colorIntermedio3D, colorIntermedio4D, colorFinD];
      

      // Crear shader de degradado lineal (de izquierda a derecha)
      const shader = canvasKit.Shader.MakeLinearGradient(
        [puntos[0].x, puntos[0].y],
        [xFinal, yFinal],
        colorsD,
        null,
        canvasKit.TileMode.Clamp
      );
      pinturaDestello.setShader(shader);

      // Blur
      const blurFilter = canvasKit.ImageFilter.MakeBlur(1, 1, canvasKit.TileMode.Clamp, null);
      pinturaDestello.setImageFilter(blurFilter);

      // Dibujar el path parcial
      skCanvas.drawPath(path, pinturaDestello);

      // Limpieza
      // if (blurFilter) blurFilter.delete();
      if (shader) shader.delete();
      pinturaDestello.delete();
      path.delete();
    }

    // Actualizar y dibujar todos los destellos
    function actualizarYDibujarDestellos() {
      const arr = destellosRef.current;
      for (let i = arr.length - 1; i >= 0; i--) {
        const ds = arr[i];
        const linea = lineasCircuito[ds.indiceLinea];

        if (ds.estado === 'encendido') {
          ds.progreso += ds.velocidad;
          if (ds.progreso >= 1) {
            ds.progreso = 1;
            ds.estado = 'desvanecer';
          }
        } else if (ds.estado === 'desvanecer') {
          ds.opacidad -= 0.02;
          if (ds.opacidad <= 0) {
            arr.splice(i, 1);
            continue;
          }
        }
        dibujarDestello(linea, ds);
      }
    }

    // Bucle de animación
    function animar() {
      peticionRef.current = requestAnimationFrame(animar);
    
      // Limpiar el canvas con un color de fondo
      skCanvas.clear(canvasKit.Color(10, 10, 10, 1));
    
      // Guardar estado actual de la matriz
      skCanvas.save();
    
      // Calcular factores de escala para ajustar 800×600 a lienzo.width×lienzo.height
      const baseAncho = 800;
      const baseAlto = 600;
      const escalaX = lienzo.width / baseAncho;
      const escalaY = lienzo.height / baseAlto;
    
      // Aplicar la transformación de escala
      skCanvas.scale(escalaX, escalaY);
    
      // Dibujar líneas base y destellos (con tus coordenadas de 0..800 y 0..600)
      actualizarYDibujarDestellos();
    
      // Restaurar la matriz
      skCanvas.restore();
    
      // Finaliza el frame
      superficie.flush();
    }
    
    // Iniciar la animación
    animar();

    // Generar destello nuevo cada 1s
    intervaloRef.current = setInterval(() => {
      // Generar 2 destellos simultáneos
        const indiceAleatorio = Math.floor(Math.random() * lineasCircuito.length);
        destellosRef.current.push({
          indiceLinea: indiceAleatorio,
          progreso: 0,
          velocidad: 0.001 + Math.random() * 0.0005,
          opacidad: 1,
          estado: 'encendido',
        });
    }, 500) as unknown as number;


    // Limpieza al desmontar
    return () => {
      if (peticionRef.current) {
        cancelAnimationFrame(peticionRef.current);
      }
      if (intervaloRef.current) {
        clearInterval(intervaloRef.current);
      }
      if (superficieRef.current) {
        superficieRef.current.delete();
      }
    };
  }, [canvasKit]);

  return (
    <canvas
      ref={lienzoRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}
