import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;

    // Validación de campos requeridos
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    // Validar que la contraseña SMTP esté configurada
    if (!process.env.SMTP_PASSWORD) {
      console.error("SMTP_PASSWORD no está configurada en las variables de entorno");
      return NextResponse.json(
        { error: "Error de configuración del servidor" },
        { status: 500 }
      );
    }

    // Configuración del transportador SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "info@volturaprojects.es",
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Verificar la conexión SMTP
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error("Error verificando conexión SMTP:", verifyError);
      return NextResponse.json(
        { error: "Error de conexión con el servidor de correo" },
        { status: 500 }
      );
    }

    // Obtener la URL de origen
    const referer = request.headers.get("referer") || "URL no disponible";

    // Email de confirmación al usuario
    const userEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #0F172A;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; max-width: 100%; border-collapse: collapse; background-color: #1E293B; border: 1px solid rgba(255, 255, 255, 0.1);">
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 20px 40px; text-align: center;">
              <img src="https://volturaprojects.es/oro-imagotipo.png" alt="Voltura Projects" style="width: 120px; height: auto;">
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 20px 40px 40px 40px;">
              <h1 style="color: #D4AF37; font-size: 24px; margin: 0 0 20px 0; font-family: Georgia, serif;">Hola %%nombre%%,</h1>
              
              <p style="color: #E2E8F0; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                Hemos recibido tu solicitud correctamente y queremos agradecerte por ponerte en contacto con nosotros.
              </p>
              
              <p style="color: #E2E8F0; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                Nuestro equipo revisará tu mensaje y nos pondremos en contacto contigo en la <strong style="color: #D4AF37;">máxima brevedad posible</strong>.
              </p>
              
              <div style="background-color: rgba(212, 175, 55, 0.1); border-left: 4px solid #D4AF37; padding: 20px; margin: 30px 0;">
                <p style="color: #CBD5E1; font-size: 14px; margin: 0; line-height: 1.6;">
                  <strong style="color: #D4AF37;">Tu mensaje:</strong><br>
                  %%mensaje%%
                </p>
              </div>
              
              <p style="color: #94A3B8; font-size: 14px; line-height: 1.6; margin: 30px 0 0 0;">
                Si tienes alguna pregunta urgente, no dudes en llamarnos al <a href="tel:+34640801491" style="color: #D4AF37; text-decoration: none;">+34 640 80 14 91</a>
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 30px 40px; background-color: #0F172A; border-top: 1px solid rgba(255, 255, 255, 0.1);">
              <p style="color: #64748B; font-size: 12px; margin: 0 0 10px 0; text-align: center;">
                <strong style="color: #D4AF37;">Voltura Projects</strong><br>
                Carrer de Bernat Metge, 14, 08019 Barcelona<br>
                <a href="tel:+34640801491" style="color: #64748B; text-decoration: none;">+34 640 80 14 91</a> | 
                <a href="mailto:info@volturaprojects.es" style="color: #64748B; text-decoration: none;">info@volturaprojects.es</a>
              </p>
              <p style="color: #475569; font-size: 11px; margin: 15px 0 0 0; text-align: center;">
                © ${new Date().getFullYear()} Voltura Projects. Todos los derechos reservados.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `
      .replace(/%%nombre%%/g, firstName)
      .replace(/%%mensaje%%/g, message.replace(/\n/g, "<br>"));

    // Email de notificación a Voltura Projects
    const adminEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #F1F5F9;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; max-width: 100%; border-collapse: collapse; background-color: #FFFFFF; border: 1px solid #E2E8F0; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="padding: 30px; background-color: #0F172A; text-align: center;">
              <h1 style="color: #D4AF37; font-size: 24px; margin: 0; font-family: Georgia, serif;">Nueva Solicitud de Contacto</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #E2E8F0;">
                    <strong style="color: #475569; font-size: 14px;">Nombre completo:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #E2E8F0; text-align: right;">
                    <span style="color: #0F172A; font-size: 14px;">${firstName} ${lastName}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #E2E8F0;">
                    <strong style="color: #475569; font-size: 14px;">Email:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #E2E8F0; text-align: right;">
                    <a href="mailto:${email}" style="color: #D4AF37; font-size: 14px; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #E2E8F0;">
                    <strong style="color: #475569; font-size: 14px;">Teléfono:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #E2E8F0; text-align: right;">
                    <a href="tel:${phone}" style="color: #D4AF37; font-size: 14px; text-decoration: none;">${phone || "No proporcionado"}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #E2E8F0;">
                    <strong style="color: #475569; font-size: 14px;">Página de origen:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #E2E8F0; text-align: right;">
                    <a href="${referer}" style="color: #3B82F6; font-size: 12px; text-decoration: none; word-break: break-all;">${referer}</a>
                  </td>
                </tr>
              </table>
              
              <div style="margin-top: 30px; padding: 20px; background-color: #F8FAFC; border-left: 4px solid #D4AF37;">
                <p style="color: #475569; font-size: 14px; margin: 0 0 10px 0; font-weight: bold;">Mensaje:</p>
                <p style="color: #0F172A; font-size: 14px; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
              
              <div style="margin-top: 30px; padding: 20px; background-color: #FEF3C7; border-left: 4px solid #F59E0B; border-radius: 4px;">
                <p style="color: #92400E; font-size: 13px; margin: 0; line-height: 1.5;">
                  <strong>⏰ Recordatorio:</strong> Responde a este cliente lo antes posible para mantener un alto nivel de servicio.
                </p>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 20px; background-color: #F8FAFC; border-top: 1px solid #E2E8F0; text-align: center;">
              <p style="color: #64748B; font-size: 12px; margin: 0;">
                Recibido el ${new Date().toLocaleString("es-ES", {
      dateStyle: "full",
      timeStyle: "short"
    })}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // Enviar email de confirmación al usuario
    try {
      await transporter.sendMail({
        from: '"Voltura Projects" <info@volturaprojects.es>',
        to: email,
        subject: "Hemos recibido tu solicitud - Voltura Projects",
        html: userEmailHtml,
      });
    } catch (emailError) {
      console.error("Error enviando email al usuario:", emailError);
      throw emailError;
    }

    // Enviar notificación al equipo
    try {
      await transporter.sendMail({
        from: '"Sistema Voltura" <info@volturaprojects.es>',
        to: "info@volturaprojects.es",
        subject: `Nueva solicitud de contacto - ${firstName} ${lastName}`,
        html: adminEmailHtml,
        replyTo: email,
      });
    } catch (emailError) {
      console.error("Error enviando email al admin:", emailError);
      // No lanzamos error aquí porque el email al usuario ya se envió
    }

    return NextResponse.json(
      { message: "Emails enviados correctamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en el endpoint de contacto:", error);
    return NextResponse.json(
      { error: "Error al enviar los emails. Por favor, inténtalo de nuevo." },
      { status: 500 }
    );
  }
}
