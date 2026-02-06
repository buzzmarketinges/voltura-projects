# Configuración de Variables de Entorno en Vercel

Para que el sistema de envío de correos funcione en producción, debes configurar la variable de entorno en Vercel.

## Pasos para configurar en Vercel:

1. **Accede a Vercel**
   - Ve a https://vercel.com
   - Inicia sesión con tu cuenta

2. **Selecciona el proyecto**
   - Busca y selecciona el proyecto **voltura-projects**

3. **Accede a la configuración**
   - Haz clic en **Settings** (Configuración) en la barra superior
   - En el menú lateral, selecciona **Environment Variables**

4. **Añade la variable SMTP_PASSWORD**
   - Haz clic en el botón **Add New**
   - Completa los campos:
     - **Name:** `SMTP_PASSWORD`
     - **Value:** `?T@!JRv3@bW.`
     - **Environments:** Marca las tres opciones:
       - ✅ Production
       - ✅ Preview
       - ✅ Development

5. **Guarda los cambios**
   - Haz clic en **Save**

6. **Redeploy el proyecto**
   - Ve a la pestaña **Deployments**
   - Busca el último deployment
   - Haz clic en los tres puntos (...) a la derecha
   - Selecciona **Redeploy**
   - Confirma el redeploy

## Verificación

Una vez completado el redeploy:
1. Ve a https://volturaprojects.es
2. Abre el formulario de contacto
3. Envía un mensaje de prueba
4. Deberías recibir:
   - Un email de confirmación en el correo que proporcionaste
   - Un email de notificación en info@volturaprojects.es

## Solución de problemas

Si el formulario sigue sin funcionar:
1. Verifica que la variable `SMTP_PASSWORD` esté correctamente escrita
2. Asegúrate de haber marcado las tres opciones de Environment
3. Confirma que has hecho el redeploy después de añadir la variable
4. Revisa los logs en Vercel (Deployments > [último deployment] > Functions)

## Credenciales SMTP

- **Servidor:** smtp.hostinger.com
- **Puerto:** 465 (SSL)
- **Usuario:** info@volturaprojects.es
- **Contraseña:** (configurada en SMTP_PASSWORD)
