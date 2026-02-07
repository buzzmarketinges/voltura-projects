// Script para probar la conexión SMTP
// Ejecutar con: node test-smtp.js

const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

async function testSMTP() {
    console.log('🔍 Probando conexión SMTP...\n');
    
    // Verificar que la contraseña esté configurada
    if (!process.env.SMTP_PASSWORD) {
        console.error('❌ ERROR: SMTP_PASSWORD no está configurada en .env.local');
        process.exit(1);
    }
    
    console.log('✅ Variable SMTP_PASSWORD encontrada');
    
    // Configurar transportador
    const transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.com',
        port: 465,
        secure: true,
        auth: {
            user: 'info@volturaprojects.es',
            pass: process.env.SMTP_PASSWORD,
        },
        debug: true, // Mostrar logs detallados
    });
    
    try {
        console.log('\n🔌 Verificando conexión con el servidor SMTP...');
        await transporter.verify();
        console.log('✅ Conexión SMTP exitosa!\n');
        
        console.log('📧 Enviando email de prueba...');
        const info = await transporter.sendMail({
            from: '"Voltura Projects Test" <info@volturaprojects.es>',
            to: 'info@volturaprojects.es',
            subject: 'Test de conexión SMTP',
            html: `
                <h1>Test exitoso</h1>
                <p>Este es un email de prueba del sistema de contacto de Voltura Projects.</p>
                <p>Fecha: ${new Date().toLocaleString('es-ES')}</p>
            `,
        });
        
        console.log('✅ Email enviado exitosamente!');
        console.log('📬 Message ID:', info.messageId);
        console.log('\n✨ Todas las pruebas pasaron correctamente!\n');
        
    } catch (error) {
        console.error('\n❌ ERROR:', error.message);
        if (error.code) {
            console.error('Código de error:', error.code);
        }
        if (error.response) {
            console.error('Respuesta del servidor:', error.response);
        }
        process.exit(1);
    }
}

testSMTP();
