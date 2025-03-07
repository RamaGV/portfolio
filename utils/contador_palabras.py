import statistics


def contar_palabras(texto):
    # Separamos el texto en palabras utilizando el espacio como separador
    palabras = texto.split()
    return len(palabras)

# - Descripción promedio de Sobre mi
    # texto_1 = "Desarrollador de Software con más de 4 años de experiencia, originario de Puerto Madryn, Argentina . Apasionado por las nuevas tecnologías y el desarrollo tanto web como móvil. Graduado como Licenciado en Informática en la Universidad Nacional de la Patagonia San Juan Bosco y con amplia experiencia trabajando principalmente con Node.js, React y PostgreSQL. Actualmente disponible para trabajar, motivado de seguir aprendiendo y crecer profesionalmente Durante gran parte de mi vida he estado involucrado en el Handball y Beach Handball como jugador. Por ello, cuento con más de 5 años de experiencia como coordinador y entrenador de todas las categorías del club J. L. Grilli en el área de Beach Handball durante las temporadas de verano.."
    # texto_2 = "Desarrollador full stack apasionado por la creación de aplicaciones web. Actualmente en busca de oportunidades para seguir desarrollando mis habilidades en un entorno profesional. En mi tiempo libre, disfruto de la carpintería, lo que me permite explorar mi creatividad y atención al detalle."
    # texto_3 = "A student of Computer Systems Administration at UNAL in Colombia. I am on a journey to become a competent full-stack developer. My goal is to create efficient, scalable and easy to use applications that can make a difference."

    # # Contamos las palabras
    # cantidad1 = contar_palabras(texto_1)
    # cantidad2 = contar_palabras(texto_2)
    # cantidad3 = contar_palabras(texto_3)

    # promedio = statistics.mean([cantidad1, cantidad2, cantidad3])
    # print("El promedio de palabras es:", promedio)

# - Descriprción promedio de Proyectos
    # txt_1 = "Sitio web estilo marketplace donde el usuario puede subir y/o comprar productos de segunda mano para los padres primerizos. Se permite el almacenamiento tanto de los usuarios, publicaciones y verificación por JWT."
    # txt_2 = "Mi portafolio web personal, donde se encuentran algunos de mis proyectos más destacados, mis habilidades técnicas y un poco sobre mi formación."
    # txt_3 = "Un completo sistema de gestión para gimnasios que facilita el manejo de membresías, la programación de entrenamientos y la interacción entre entrenadores y alumnos."
    # txt_4 = "Una herramienta de colaboración en tiempo real para desarrolladores, con funciones de compartir código en vivo, chat de equipo e integración con control de versiones."
    # txt_5 = "Aplicación que ayuda a los usuarios a monitorear su huella de carbono y sugiere alternativas ecológicas para reducir el impacto ambiental."
    # txt_6 = "Una aplicación inteligente de planificación de comidas que genera listas de compras personalizadas y sugiere recetas basadas en preferencias dietéticas e ingredientes disponibles."
    # txt_7 = "Aplicación PWA diseñada para centralizar la cultura, el deporte y el turismo en un solo lugar. Facilita el acceso a eventos y actividades culturales de tu ciudad, promoviendo la participación y el consumo cultural local. Disponible en la web y en Google Play."
    # txt_8 = "Proyecto de tesina de grado en Licenciatura en Informática. Sistema de análisis de noticias que identifica los temas predominantes en los medios de Chubut y su evolución a lo largo del tiempo. Utiliza Machine Learning (ML) y técnicas avanzadas de procesamiento de lenguaje natural para el modelado de tópicos."
    # txt_9 = "Plataforma web diseñada para recopilar la experiencia de los visitantes en Península Valdés. El sistema de encuestas dinámico se adapta en tiempo real a las respuestas de los usuarios. Cuenta con internacionalización y visualización de indicadores estadísticos."
    # txt_10 = "Permite a los usuarios llenar un formulario en el frontend, enviar los datos al backend para su procesamiento, generar un archivo PDF con los datos organizados en una tabla y, finalmente, entregar el archivo PDF mediante un bot de Telegram."
    # txt_11 = "La aplicación permite a los usuarios acortar URLs largas en enlaces más cortos y manejables. Además, redirige automáticamente a los usuarios al sitio original cuando acceden al enlace acortado."
    # txt_12 = "Presenta un sintetizador de mono-oscilador desarrollado con React.js y Tone.js. La aplicación permite a los usuarios manipular varios parámetros de sonido, como el envelope, el reverb y el delay, además de seleccionar entre diferentes tipos de ondas."
    # txt_13 = "Está hecho con HTML5, CSS y JavaScript, apoyado en la biblioteca p5.js para la programación y lógica física del juego. También implementa sonidos y música (creados por mí) para brindar una experiencia completa de lo que se puede lograr con estas tecnologías."
    # txt_14 = "Created as the final project of Solvd, Inc' React course. If you want to explore from the user's perspective, use the following credentials: mail: bdiaz.laba@solvd.com password: Bd270100"
    # txt_15 = "Created as an MVP in a job simulation at NoCountry during January 2025. If you want to explore from the user's perspective, use the following credentials: Mail: 123test@gmail.com Password: P4ssw@rd"

    # cantidades = []

    # cantidades.append(contar_palabras(txt_1))
    # cantidades.append(contar_palabras(txt_2))
    # cantidades.append(contar_palabras(txt_3))
    # cantidades.append(contar_palabras(txt_4))
    # cantidades.append(contar_palabras(txt_5))
    # cantidades.append(contar_palabras(txt_6))
    # cantidades.append(contar_palabras(txt_7))
    # cantidades.append(contar_palabras(txt_8))
    # cantidades.append(contar_palabras(txt_9))
    # cantidades.append(contar_palabras(txt_10))
    # cantidades.append(contar_palabras(txt_11))
    # cantidades.append(contar_palabras(txt_12))
    # cantidades.append(contar_palabras(txt_13))
    # cantidades.append(contar_palabras(txt_14))
    # cantidades.append(contar_palabras(txt_15))


    # promedio = statistics.mean(cantidades)
    # print(promedio)

desc_1 = "HydroEdge es un innovador sistema automatizado de hidroponia que integra aplicación móvil, sensores IoT y microcontrolador. Permite monitorear y controlar parámetros de crecimiento, ajustando el ambiente y la nutrición a través de lógica de backend."
print(contar_palabras(desc_1))
