# 🚀 Documentación del Proyecto: NEXUS SPACE

## 📋 Descripción General
**Nexus Space** es una aplicación web futurista diseñada para mostrar un catálogo de vehículos espaciales, estructuras y especies alienígenas. El proyecto destaca por su diseño visual de alto impacto ("Neon/Cyberpunk"), interactividad fluida y optimización completa para dispositivos móviles.

---

## 📂 Estructura del Proyecto

El proyecto consta de los siguientes archivos principales:

### 1. `index.html`
Es la estructura principal de la página.
- **Splash Screen**: Pantalla de bienvenida con animación de entrada.
- **Header**: Contiene el logo y el menú de navegación con dropdowns.
- **Hero Section**: Banner principal con título y subtítulo.
- **Stats Section**: Contadores animados de estadísticas.
- **Main Content**:
    - Barra de búsqueda y filtros.
    - Grid de tarjetas de vehículos (generado dinámicamente).
- **Modal**: Ventana emergente para ver detalles de cada ítem.
- **Footer**: Pie de página con enlaces y créditos.

### 2. `styles.css`
Maneja todo el diseño visual y las animaciones.
- **Variables CSS (`:root`)**: Define la paleta de colores y variables de personalización (`--text-custom-color`, `--border-custom-color`, `--card-bg-custom-color`).
- **Diseño Responsivo**: Media queries para adaptar el diseño a móviles y tablets.
- **Animaciones**:
    - `nebula-drift`, `warp-speed`, `matrix-rain` para los fondos.
    - Transiciones suaves en botones y tarjetas (`hover`).
- **Estilos Específicos**:
    - Efectos de "Glassmorphism" (vidrio esmerilado).
    - Bordes con brillo neón (`box-shadow`).

### 3. `script.js`
Contiene toda la lógica de la aplicación.
- **Base de Datos (`vehiclesData`)**: Objeto JSON que contiene toda la información de Naves, Motos, Estructuras, Edificios y Especies.
- **Funciones Principales**:
    - `loadSection(sectionName)`: Genera el HTML de las tarjetas basado en la sección seleccionada.
    - `openModal(vehicle)`: Abre la ventana modal con los detalles y galería del vehículo.
    - `setupCustomization()`: Maneja el cambio de colores (Texto, Bordes, Tarjetas) actualizando las variables CSS.
    - `setupBackgroundSelector()`: Cambia el atributo `data-bg` del body para activar diferentes animaciones de fondo.
    - `updateStats()`: Calcula y anima los contadores de estadísticas.

### 4. `images/`
Carpeta que contiene los recursos gráficos (`.png`) para cada categoría.

---

## ✨ Funcionalidades Clave

### 🎨 Sistema de Personalización
El usuario puede personalizar la apariencia del sitio en tiempo real desde el menú "Personalizar":
- **Color de Texto**: Cambia el color principal de los textos.
- **Color de Bordes**: Cambia el color de los bordes y el brillo neón.
- **Fondo de Tarjetas**: Permite cambiar el fondo de las tarjetas (blanco, gris, oscuro, negro).

### 📱 Optimización Móvil
- Diseño completamente responsivo.
- Menús adaptados para pantallas táctiles.
- **Modal Mejorado**: Scroll interno independiente para evitar que la página de fondo se mueva o el modal se corte en pantallas pequeñas.

### 🖼️ Manejo de Imágenes
- **Fallback Automático**: Si una imagen no carga, se muestra una imagen por defecto (`onerror`).
- **Anti-Caché**: Se agrega un timestamp a las URLs de las imágenes para asegurar que siempre se cargue la versión más reciente.

---

## 🚀 Guía de Despliegue (GitHub Pages)

Para publicar cambios en GitHub Pages:

1.  **Guardar cambios locales**:
    ```bash
    git add .
    git commit -m "Descripción de los cambios"
    ```

2.  **Subir a GitHub**:
    ```bash
    git push origin main
    ```

3.  **Verificar Despliegue**:
    - Ir a `Settings > Pages` en el repositorio de GitHub.
    - Asegurar que la rama `main` esté seleccionada.
    - Visitar la URL proporcionada por GitHub.

---

## 🛠️ Mantenimiento

Para agregar nuevos vehículos, simplemente edita el objeto `vehiclesData` en `script.js` siguiendo este formato:

```javascript
{
    name: "NOMBRE DEL VEHÍCULO",
    image: "images/nombre-archivo.png",
    category: "tipo", // pesado, ligero, rapido
    angles: [{ view: "Vista", image: "images/nombre-archivo.png" }],
    specs: { 
        "Dato1": "Valor1",
        "Dato2": "Valor2" 
        // ... hasta 8 especificaciones
    },
    description: "Descripción detallada..."
}
```

---
*Generado por Antigravity AI - 2024*
