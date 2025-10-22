# 🧠 GIIT - Grupo de Investigación en Innovación y Tecnología

## 📋 Descripción

Landing page profesional y responsive para el **Grupo de Investigación en Innovación y Tecnología (GIIT)**, desarrollada con **React + Vite** y **CSS puro**.

## ✨ Características

- 🎨 **Diseño moderno y profesional**
- 📱 **Completamente responsive** (móvil, tablet, desktop)
- ⚡ **Rendimiento optimizado** con Vite
- 🎯 **Single Page Application (SPA)**
- 💎 **CSS puro** sin frameworks externos
- 🖼️ **Imágenes reales** del grupo de investigación

## 🏗️ Estructura del Proyecto

```
src/
├── App.jsx          # Componente principal con todas las secciones
├── App.css          # Estilos completos y responsive
├── main.jsx         # Punto de entrada
└── assets/          # Recursos estáticos
```

## 📄 Secciones Incluidas

1. **🏠 Inicio** - Hero section con presentación principal
2. **👥 Sobre Nosotros** - Historia, misión y visión del grupo
3. **🔬 Líneas de Investigación** - 5 áreas de investigación principales
4. **📊 Proyectos** - Portafolio de proyectos en curso y finalizados
5. **📚 Publicaciones** - Lista de artículos y trabajos académicos
6. **👨‍🔬 Integrantes** - Perfiles del equipo de investigadores
7. **📞 Contacto** - Formulario de contacto e información

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (v16 o superior)
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/jersonjjcr/landing_GI.git
cd landing_GI

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build
```

## 🎨 Tecnologías Utilizadas

- **React 19.1.1** - Biblioteca de UI
- **Vite 7.1.7** - Build tool y dev server
- **CSS3** - Estilos puros con Flexbox y Grid
- **Google Fonts** - Tipografía Poppins
- **ESLint** - Linting y calidad de código

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 **Móviles** (320px - 480px)
- 📱 **Tablets** (481px - 768px)
- 💻 **Desktop** (769px+)

## 🎯 Características Técnicas

- ✅ Navegación suave entre secciones
- ✅ Efectos hover y transiciones CSS
- ✅ Formulario de contacto funcional (UI)
- ✅ Imágenes optimizadas y responsive
- ✅ SEO-friendly structure
- ✅ Accesibilidad mejorada

## 👨‍💻 Desarrollo

### Estructura de Archivos Clave
- `App.jsx` - Componente principal con toda la funcionalidad
- `App.css` - Estilos completos con media queries
- `public/` - Imágenes y assets estáticos

### Scripts Disponibles
```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
npm run lint     # Ejecutar ESLint
```

## 🌐 Demo

Visita la página en: [http://localhost:5174](http://localhost:5174) (en desarrollo)

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

## 👥 Autor

Desarrollado para el Grupo de Investigación en Innovación y Tecnología (GIIT)

---

⭐ **¡Si te gusta este proyecto, dale una estrella en GitHub!** ⭐

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
