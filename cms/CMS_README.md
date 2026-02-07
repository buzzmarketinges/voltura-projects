# Voltura Projects - CMS (Strapi)

Este es el panel de administración (backoffice) para gestionar los servicios y proyectos de Voltura Projects.

## 🚀 Inicio Rápido

### Instalación
```bash
cd cms
npm install
```

### Desarrollo
```bash
npm run develop
```

El panel de administración estará disponible en: `http://localhost:1337/admin`

### Producción
```bash
npm run build
npm start
```

## 📋 Content Types Disponibles

### 1. **Servicios** (`/admin/content-manager/collection-types/api::servicio.servicio`)
Gestiona todos los servicios ofrecidos por Voltura Projects:
- Reformas Integrales
- Reformas de Baños
- Reformas de Cocinas
- Instalaciones Eléctricas
- Instalaciones de Fontanería
- Instalaciones de Climatización
- Instalaciones de Aerotermia
- Energía Fotovoltaica
- Trabajos Verticales

**Campos principales:**
- Título
- Slug (URL amigable)
- Descripción corta y larga
- Imágenes (principal y hero)
- Características
- FAQs
- Beneficios
- Meta tags (SEO)
- Relación con proyectos

### 2. **Proyectos** (`/admin/content-manager/collection-types/api::proyecto.proyecto`)
Gestiona el portafolio de proyectos realizados:

**Campos principales:**
- Título
- Slug
- Descripción
- Imágenes (principal y galería)
- Ubicación
- Fecha de realización
- Duración
- Superficie
- Presupuesto
- Cliente
- Tags
- Características técnicas
- Relación con servicios
- Meta tags (SEO)

## 🔧 Configuración

### Idioma
El CMS está configurado en **español** por defecto.

### Base de Datos
Por defecto usa SQLite (`.tmp/data.db`). Para producción, se recomienda PostgreSQL.

### API
Las APIs REST están disponibles en:
- Servicios: `http://localhost:1337/api/servicios`
- Proyectos: `http://localhost:1337/api/proyectos`

## 🔐 Primer Acceso

1. Ejecuta `npm run develop`
2. Accede a `http://localhost:1337/admin`
3. Crea tu cuenta de administrador
4. ¡Comienza a gestionar contenido!

## 📚 Documentación

- [Documentación oficial de Strapi](https://docs.strapi.io)
- [Guía de Content Types](https://docs.strapi.io/dev-docs/backend-customization/models)
- [API REST](https://docs.strapi.io/dev-docs/api/rest)

## 🌐 Integración con Next.js

Para consumir el contenido desde el frontend de Next.js, usa las APIs REST o GraphQL que Strapi proporciona automáticamente.

Ejemplo de fetch:
```typescript
const response = await fetch('http://localhost:1337/api/servicios?populate=*');
const { data } = await response.json();
```

## 📝 Notas

- Los content types están en `src/api/`
- Los componentes reutilizables están en `src/components/`
- La configuración del admin está en `src/admin/app.tsx`
