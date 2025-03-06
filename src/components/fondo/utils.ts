
export interface Punto {
  x: number;
  y: number;
}

export interface Linea {
  puntos: Punto[];
}

/**
 * Genera una línea de circuito con segmentos horizontales y verticales,
 * con un número aleatorio de tramos entre minTramos y maxTramos.
 * La línea se genera de manera que comience en un borde y finalice en el borde opuesto.
 *
 * @param anchoBase - Ancho del área de dibujo (p.ej., 800)
 * @param altoBase - Alto del área de dibujo (p.ej., 600)
 * @param minTramos - Mínimo de tramos (por defecto 5)
 * @param maxTramos - Máximo de tramos (por defecto 10)
 * @returns Objeto Linea con puntos generados
 */

export function generarLinea(
  anchoBase: number,
  altoBase: number,
  minTramos: number,
  maxTramos: number
): Linea {
  // Número aleatorio de tramos: entre minTramos y maxTramos
  const numTramos = Math.floor(Math.random() * (maxTramos - minTramos + 1)) + minTramos;
  const numPuntos = numTramos + 1; // puntos = tramos + 1
  const puntos: Punto[] = [];
  const margen = 20 + Math.random() * 10;

  // Elegir aleatoriamente un borde de inicio
  const bordes = ['izquierdo', 'derecho', 'superior', 'inferior'];
  const bordeInicio = bordes[Math.floor(Math.random() * bordes.length)];

  let puntoInicio: Punto;
  let orientacionInicial: 'horizontal' | 'vertical';
  switch (bordeInicio) {
    case 'izquierdo':
      puntoInicio = { x: 0, y: Math.random() * altoBase };
      orientacionInicial = 'horizontal'; // se mueve hacia la derecha
      break;
    case 'derecho':
      puntoInicio = { x: anchoBase, y: Math.random() * altoBase };
      orientacionInicial = 'horizontal'; // se mueve hacia la izquierda
      break;
    case 'superior':
      puntoInicio = { x: Math.random() * anchoBase, y: 0 };
      orientacionInicial = 'vertical'; // se mueve hacia abajo
      break;
    case 'inferior':
      puntoInicio = { x: Math.random() * anchoBase, y: altoBase };
      orientacionInicial = 'vertical'; // se mueve hacia arriba
      break;
    default:
      puntoInicio = { x: 0, y: 0 };
      orientacionInicial = 'horizontal';
  }
  puntos.push(puntoInicio);

  // La orientación se alterna para cada tramo
  let orientacionActual = orientacionInicial;
  // Para la dirección, si el borde es izquierdo o superior se avanzará en dirección positiva;
  // si es derecho o inferior, se avanzará en dirección negativa.
  const direccionHorizontal = bordeInicio === 'izquierdo' ? 1 : (bordeInicio === 'derecho' ? -1 : (Math.random() < 0.5 ? 1 : -1));
  const direccionVertical = bordeInicio === 'superior' ? 1 : (bordeInicio === 'inferior' ? -1 : (Math.random() < 0.5 ? 1 : -1));

  // Generar puntos intermedios
  for (let i = 1; i < numPuntos - 1; i++) {
    const ultimo = puntos[puntos.length - 1];
    // Elegir longitud aleatoria para el segmento (entre 75 y 150)
    const longitud = 75 + Math.random() * 50;
    let nuevo: Punto = { x: ultimo.x, y: ultimo.y };

    if (orientacionActual === 'horizontal') {
      nuevo.x = ultimo.x + direccionHorizontal * longitud;
      // Para mantener el movimiento recto, la coordenada y permanece igual.
    } else {
      nuevo.y = ultimo.y + direccionVertical * longitud;
      // Coordenada x permanece igual.
    }
    // Aseguramos que el punto no se salga de los límites (sin forzarlo al borde final aún)
    nuevo.x = Math.max(margen, Math.min(anchoBase - margen, nuevo.x));
    nuevo.y = Math.max(margen, Math.min(altoBase - margen, nuevo.y));
    
    puntos.push(nuevo);
    // Alterna la orientación
    orientacionActual = orientacionActual === 'horizontal' ? 'vertical' : 'horizontal';
  }

  // Ajustar el último punto para que finalice en el borde opuesto al de inicio, 
  // según la orientación inicial.
  const ultimo = puntos[puntos.length - 1];
  if (orientacionInicial === 'horizontal') {
    // Si comenzó en izquierdo, forzamos que termine en el borde derecho; si en derecho, en izquierdo.
    puntos[puntos.length - 1] = bordeInicio === 'izquierdo'
      ? { x: anchoBase, y: ultimo.y }
      : { x: 0, y: ultimo.y };
  } else { // vertical
    puntos[puntos.length - 1] = bordeInicio === 'superior'
      ? { x: ultimo.x, y: altoBase }
      : { x: ultimo.x, y: 0 };
  }

  return { puntos };
}

export function calcularDistancia(ax: number, ay: number, bx: number, by: number) {
  const dx = bx - ax;
  const dy = by - ay;
  return Math.sqrt(dx*dx + dy*dy);
}

