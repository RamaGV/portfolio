// src/data/portfolio.ts

export const personalInfo = {
  name: 'Ramiro Vazquez',
  title: 'Desarrollador Full Stack',
  subtitle: 'Especialista en soluciones web innovadoras',
  location: 'Uruguay',
  email: 'ramagv23@gmail.com',
  about: 'Desarrollador Full Stack apasionado por crear soluciones web innovadoras y experiencias de usuario excepcionales. Me especializo en el desarrollo de aplicaciones web modernas utilizando las últimas tecnologías y mejores prácticas de la industria.',
  social: {
    github: 'https://github.com/RamaGV',
    email: 'mailto:ramagv23@gmail.com',
  },
}

export const skills = {
  frontend: [
    {
      name: 'React & React Native',
      level: 'Avanzado',
      description: 'Desarrollo de aplicaciones web y móviles con React'
    },
    {
      name: 'JavaScript (ES6+)',
      level: 'Avanzado',
      description: 'Programación funcional y orientada a objetos'
    },
    {
      name: 'CSS Moderno',
      level: 'Avanzado',
      description: 'Flexbox, Grid, Animaciones y diseño responsive'
    },
    {
      name: 'TypeScript',
      level: 'Intermedio',
      description: 'Desarrollo tipado y seguro'
    },
    {
      name: 'TailwindCSS',
      level: 'Avanzado',
      description: 'Diseño responsive y moderno'
    }
  ],
  backend: [
    {
      name: 'Node.js',
      level: 'Avanzado',
      description: 'Desarrollo de servidores y APIs'
    },
    {
      name: 'Express.js',
      level: 'Avanzado',
      description: 'Frameworks y arquitectura REST'
    },
    {
      name: 'MongoDB',
      level: 'Intermedio',
      description: 'Bases de datos NoSQL'
    },
    {
      name: 'PostgreSQL',
      level: 'Intermedio',
      description: 'Bases de datos relacionales'
    },
    {
      name: 'API Rest',
      level: 'Avanzado',
      description: 'Diseño e implementación de APIs'
    }
  ],
  embedded: [
    {
      name: 'C/C++',
      level: 'Avanzado',
      description: 'Programación para microcontroladores y sistemas embebidos'
    },
    {
      name: 'ROS',
      level: 'Intermedio',
      description: 'Sistema de control de versiones distribuido para robótica'
    },
    {
      name: 'MQTT',
      level: 'Avanzado',
      description: 'Protocolos de comunicación para IoT y sistemas distribuidos'
    },
    {
      name: 'Programación Ladder',
      level: 'Intermedio',
      description: 'Desarrollo para controladores lógicos programables (PLC)'
    },
    {
      name: 'Sistemas Embebidos',
      level: 'Avanzado',
      description: 'Integración hardware-software y optimización de recursos'
    }
  ],
  tools: [
    {
      name: 'Git & GitHub',
      level: 'Avanzado',
      description: 'Control de versiones y colaboración'
    },
    {
      name: 'VS Code',
      level: 'Avanzado',
      description: 'IDE y herramientas de desarrollo'
    },
    {
      name: 'Figma',
      level: 'Intermedio',
      description: 'Diseño de interfaces y prototipado'
    },
    {
      name: 'Vercel',
      level: 'Intermedio',
      description: 'Despliegue y hosting'
    },
    {
      name: 'Docker',
      level: 'Intermedio',
      description: 'Contenedores y entornos aislados'
    }
  ],
}

export const projects = [
  {
    id: 2,
    title: 'Task Management App',
    description: 'Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real.',
    longDescription: 'Sistema completo para gestión de tareas y proyectos con colaboración en tiempo real, notificaciones, asignaciones y seguimiento de progreso. Implementa un sistema de usuarios con roles y permisos personalizables.',
    technologies: ['React', 'Firebase', 'TailwindCSS', 'Redux', 'Node.js'],
    image: '/projects/task-manager.jpg',
    github: 'https://github.com/ramagv23/task-manager',
    demo: 'https://task-manager-demo.com',
    features: [
      'Colaboración en tiempo real',
      'Gestión de permisos y roles',
      'Sistema de notificaciones',
      'Seguimiento de progreso',
      'Filtros y búsqueda avanzada'
    ]
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Dashboard del clima con visualización de datos y gráficos interactivos.',
    longDescription: 'Aplicación web para visualizar datos climáticos de cualquier ciudad del mundo con previsiones horarias y diarias. Incluye gráficos interactivos, historial de búsquedas y alertas meteorológicas personalizables.',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'Axios', 'GeolocationAPI'],
    image: '/projects/weather-dashboard.jpg',
    github: 'https://github.com/ramagv23/weather-dashboard',
    demo: 'https://weather-dashboard-demo.com',
    features: [
      'Pronóstico por geolocalización',
      'Gráficos interactivos',
      'Historial de búsquedas',
      'Alertas meteorológicas',
      'Modo offline'
    ]
  },
  {
    id: 4,
    title: 'Blog Platform',
    description: 'Plataforma de blog con sistema de autenticación y gestión de contenido.',
    longDescription: 'Sistema completo para blogs con editor WYSIWYG, gestión de contenido, categorías, etiquetas y SEO integrado. Incluye autenticación, roles de usuarios y sistema de comentarios con moderación.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth', 'TailwindCSS'],
    image: '/projects/blog-platform.jpg',
    github: 'https://github.com/ramagv23/blog-platform',
    demo: 'https://blog-platform-demo.com',
    features: [
      'Editor WYSIWYG',
      'Sistema de autenticación',
      'Gestión de categorías y etiquetas',
      'SEO optimizado',
      'Comentarios y moderación'
    ]
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'Sitio web de portfolio personal con diseño moderno y responsive.',
    longDescription: 'Portfolio profesional desarrollado con React y TailwindCSS, con animaciones fluidas, modo oscuro/claro, optimización para dispositivos móviles y métricas de rendimiento integradas.',
    technologies: ['React', 'TailwindCSS', 'Framer Motion', 'Vite'],
    image: '/projects/portfolio.jpg',
    github: 'https://github.com/ramagv23/portfolio',
    demo: 'https://portfolio-demo.com',
    features: [
      'Diseño responsive',
      'Modo oscuro/claro',
      'Animaciones fluidas',
      'Optimizado para SEO',
      'Métricas de rendimiento'
    ]
  },
  {
    id: 6,
    title: 'Chat Application',
    description: 'Aplicación de chat en tiempo real con funcionalidades de mensajería instantánea.',
    longDescription: 'Plataforma de mensajería instantánea con soporte para chats individuales y grupales, intercambio de archivos, notificaciones y estados de lectura. Implementa cifrado de extremo a extremo y sincronización entre dispositivos.',
    technologies: ['React', 'Socket.io', 'MongoDB', 'Express', 'WebRTC'],
    image: '/projects/chat-app.jpg',
    github: 'https://github.com/ramagv23/chat-app',
    demo: 'https://chat-app-demo.com',
    features: [
      'Mensajería en tiempo real',
      'Chats grupales',
      'Transferencia de archivos',
      'Cifrado de mensajes',
      'Notificaciones push'
    ]
  },
]

export const experience = [
  {
    id: 1,
    company: '',
    position: 'Desarrollador Full Stack',
    period: '2022 - Presente',
    description: 'Desarrollo y mantenimiento de aplicaciones web utilizando React, Node.js y MongoDB. Implementación de nuevas características y optimización de rendimiento.',
    achievements: [
      'Implementación de nuevas características que mejoraron la eficiencia en un 40%',
      'Optimización del rendimiento de la aplicación reduciendo el tiempo de carga en un 60%',
      'Desarrollo de nuevas APIs RESTful para mejorar la integración con sistemas externos'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript']
  },
  {
    id: 2,
    company: 'Colegio San Ignacio',
    position: 'Auxiliar de Sistemas de Información',
    period: '2020 - 2022',
    description: 'Gestión y mantenimiento de sistemas informáticos, soporte técnico y desarrollo de soluciones internas.',
    achievements: [
      'Implementación de sistema de inventario que redujo los tiempos de gestión en un 30%',
      'Desarrollo de dashboard para monitoreo de sistemas críticos',
      'Automatización de procesos de backup y seguridad'
    ],
    technologies: ['Python', 'MySQL', 'PHP', 'Shell scripting', 'Windows Server']
  },
]

export const education = [
  {
    id: 1,
    institution: 'OpenBootcamp',
    degree: 'Desarrollo Web Full Stack',
    period: '2020 - 2021',
    description: 'Formación completa en desarrollo web full stack, incluyendo tecnologías frontend y backend.',
    achievements: [
      'Graduado con honores',
      'Proyecto final destacado',
      'Certificaciones en tecnologías principales'
    ]
  },
  {
    id: 2,
    institution: 'Universidad de Chile',
    degree: 'Ingeniería en Informática',
    period: '2015 - 2019',
    description: 'Formación académica en ingeniería informática con enfoque en desarrollo de software.',
    achievements: [
      'Tesis sobre optimización de sistemas distribuidos',
      'Participación en proyectos de investigación',
      'Beca de excelencia académica'
    ]
  },
] 