# 🚀 Guía de Inicio - Strapi CMS para Voltura Projects

## Paso 1: Iniciar el CMS

Abre una terminal en la carpeta `cms` y ejecuta:

```bash
cd cms
npm run develop
```

Esto iniciará Strapi en modo desarrollo en `http://localhost:1337`

## Paso 2: Crear tu cuenta de administrador

1. Abre tu navegador y ve a: `http://localhost:1337/admin`
2. Verás un formulario para crear tu primer usuario administrador
3. Completa los siguientes campos:
   - **Nombre**: Tu nombre
   - **Apellido**: Tu apellido  
   - **Email**: tu@email.com
   - **Contraseña**: (mínimo 8 caracteres)
   - **Confirmar contraseña**

4. Haz clic en "Empezar"

## Paso 3: Configurar permisos de la API

Para que el frontend de Next.js pueda acceder a los datos:

1. Ve a **Configuración** → **Roles** → **Public**
2. En la sección **Permissions**:
   - Expande **Servicio**
     - ✅ Marca: `find` y `findOne`
   - Expande **Proyecto**
     - ✅ Marca: `find` y `findOne`
3. Haz clic en **Guardar**

## Paso 4: Crear tu primer servicio

1. En el menú lateral, ve a **Content Manager**
2. Haz clic en **Servicio** → **Crear nueva entrada**
3. Completa los campos:
   - **Título**: Reformas Integrales
   - **Slug**: reformas-integrales (se genera automáticamente)
   - **Descripción Corta**: Transformamos espacios completos...
   - **Descripción Larga**: (usa el editor rich text)
   - **Meta Title**: Reformas Integrales en Barcelona | Voltura Projects
   - **Meta Description**: Especialistas en reformas integrales...
   - **Orden**: 1
   - **Destacado**: ✅ Sí
   
4. Añade **Características** (botón "+ Añadir componente"):
   - Título: Proyecto a Medida
   - Descripción: Diseño personalizado...
   - Icono: Ruler

5. Añade **FAQs**:
   - Pregunta: ¿Cuánto cuesta una reforma integral?
   - Respuesta: El precio varía según...

6. Sube una **Imagen Principal** (arrastra y suelta)

7. Haz clic en **Guardar** y luego en **Publicar**

## Paso 5: Importar servicios existentes

Puedes usar el archivo `cms/seed/servicios-seed.js` como referencia para crear los 9 servicios:

1. Reformas Integrales ⭐
2. Reformas de Baños ⭐
3. Reformas de Cocinas ⭐
4. Instalaciones Eléctricas
5. Instalaciones de Fontanería
6. Instalaciones de Climatización
7. Instalaciones de Aerotermia ⭐
8. Energía Fotovoltaica ⭐
9. Trabajos Verticales

## Paso 6: Crear proyectos

1. Ve a **Content Manager** → **Proyecto** → **Crear nueva entrada**
2. Completa los campos:
   - **Título**: Reforma Integral Piso Eixample
   - **Slug**: reforma-integral-piso-eixample
   - **Descripción Corta**: Reforma completa de 120m²...
   - **Descripción Completa**: (editor rich text)
   - **Ubicación**: Barcelona, Eixample
   - **Fecha de Realización**: 2024-06-15
   - **Duración**: 4 meses
   - **Superficie**: 120m²
   - **Tags**: ["Reformas Integrales", "Barcelona", "Eixample"]
   - **Destacado**: ✅ Sí

3. Sube imágenes:
   - **Imagen Principal**: foto principal del proyecto
   - **Galería**: múltiples fotos del antes/después

4. Relaciona con **Servicios**:
   - Selecciona "Reformas Integrales"

5. **Guardar** y **Publicar**

## Paso 7: Verificar la API

Abre en tu navegador:

- Todos los servicios: `http://localhost:1337/api/servicios?populate=*`
- Un servicio específico: `http://localhost:1337/api/servicios?filters[slug][$eq]=reformas-integrales&populate=*`
- Todos los proyectos: `http://localhost:1337/api/proyectos?populate=*`

Deberías ver los datos en formato JSON.

## 🎨 Personalización del Panel

El panel ya está configurado en **español**. Si quieres personalizarlo más:

1. Edita `cms/src/admin/app.tsx`
2. Cambia colores, logos, etc.
3. Reinicia el servidor con `npm run develop`

## 📚 Próximos Pasos

1. **Integrar con Next.js**: Crea funciones para fetch de datos desde el frontend
2. **Añadir más campos**: Personaliza los content types según necesites
3. **Configurar producción**: Usa PostgreSQL en lugar de SQLite
4. **Deploy**: Despliega Strapi en un servidor (Railway, Heroku, VPS)

## 🆘 Problemas Comunes

### El panel no carga
- Verifica que el puerto 1337 no esté en uso
- Ejecuta `npm run develop` de nuevo

### No puedo subir imágenes
- Verifica los permisos de la carpeta `public/uploads`
- Aumenta el límite de tamaño en la configuración

### La API no devuelve datos
- Verifica los permisos en **Configuración** → **Roles** → **Public**
- Asegúrate de que el contenido esté **Publicado**

## 📞 Soporte

- Documentación oficial: https://docs.strapi.io
- Comunidad: https://discord.strapi.io
