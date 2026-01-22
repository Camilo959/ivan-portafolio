# Portafolio Web

Portafolio personal desarrollado con React y Vite. Muestra información básica sobre mí, mis proyectos, habilidades y una forma de contacto.

## Características

- Diseño responsivo
- Modo claro y oscuro
- Navegación entre secciones
- Animaciones simples
- Componentes reutilizables

## Tecnologías

- React
- Vite
- Tailwind CSS
- React Router DOM
- Framer Motion
- React Icons / Lucide React

## Estructura del proyecto


```
src/
├── Components/           # Componentes reutilizables
├── pages/               # Páginas principales
├── lib/                # Utilidades
├── assets/             # Recursos estáticos
├── App.jsx             # Componente principal
├── main.jsx            # Punto de entrada
└── index.css           # Estilos globales
```

## Requisitos Previos

- Node.js (v18 o superior)
- npm o yarn

## Instalación

1. Clona el repositorio:
```bash
git clone <tu-repositorio>
cd portafolio
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Vista previa de la construcción de producción
- `npm run lint` - Ejecuta ESLint para verificar el código

## Construir para Producción

```bash
npm run build
```

Esto generará una carpeta `dist` con los archivos optimizados listos para desplegar.

## Créditos

Basado en un proyecto de referencia de [ola67](https://github.com/ola67), adaptado y modificado para uso personal. Puedes ver el repositorio original aquí: [Portfolio-React](https://github.com/ola67/Portfolio-React)


## Licencia

Licencia MIT.