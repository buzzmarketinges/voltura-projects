/**
 * Script de seed para poblar Strapi con los servicios existentes de Voltura Projects
 * Ejecutar con: npm run strapi seed
 */

const serviciosData = [
    {
        titulo: "Reformas Integrales",
        slug: "reformas-integrales",
        descripcionCorta: "Transformamos espacios completos con diseño, arquitectura y ejecución llave en mano.",
        descripcionLarga: `<p>En <strong>Voltura Projects</strong>, entendemos que una reforma integral no es solo una obra, es la materialización de un nuevo estilo de vida. Como empresa líder en reformas en Barcelona, combinamos la visión arquitectónica con una ejecución impecable.</p>
    <p>Gestionamos todo el proceso: desde el diseño inicial y la tramitación de licencias en el Ayuntamiento de Barcelona, hasta la entrega de llaves. Nuestro compromiso es la tranquilidad absoluta del cliente.</p>`,
        metaTitle: "Reformas Integrales en Barcelona | Voltura Projects",
        metaDescription: "Especialistas en reformas integrales de viviendas y locales en Barcelona. Proyectos llave en mano, arquitectura técnica y diseño de interiores de alta gama.",
        orden: 1,
        destacado: true,
        faqs: [
            {
                pregunta: "¿Cuánto cuesta una reforma integral en Barcelona?",
                respuesta: "El precio varía según las calidades y el estado inicial del inmueble. En Voltura Projects realizamos un estudio previo gratuito para ofrecerte un presupuesto detallado y ajustado a tus necesidades, sin costes ocultos."
            },
            {
                pregunta: "¿Tramitáis los permisos de obra?",
                respuesta: "Sí. Nos encargamos de toda la gestión burocrática con el Ayuntamiento de Barcelona, ya sea un 'Assabentat' (obra menor) o una Licencia de Obra Mayor, asegurando que tu proyecto cumple con toda la normativa vigente."
            },
            {
                pregunta: "¿Cuánto tiempo tarda una reforma completa?",
                respuesta: "El plazo medio para una reforma integral de un piso estándar (80-100m2) suele oscilar entre 3 y 4 meses. Establecemos un cronograma riguroso antes de empezar para garantizar la fecha de entrega."
            }
        ],
        beneficios: [
            {
                titulo: "Proyecto a Medida",
                descripcion: "Diseño personalizado adaptado a tus necesidades y a las características estructurales de tu vivienda.",
                icono: "Ruler"
            },
            {
                titulo: "Plazos Garantizados",
                descripcion: "Cronograma de obra detallado y compromiso de entrega en la fecha acordada por contrato.",
                icono: "Clock"
            },
            {
                titulo: "Garantía Total",
                descripcion: "Seguimiento post-obra y garantías legales en todos nuestros trabajos e instalaciones.",
                icono: "ShieldCheck"
            },
            {
                titulo: "Presupuesto Cerrado",
                descripcion: "Sin sorpresas. Transparencia total en costes desde el inicio hasta la finalización.",
                icono: "CheckCircle2"
            }
        ]
    },
    {
        titulo: "Reformas de Baños",
        slug: "reformas-banos",
        descripcionCorta: "Diseño y renovación completa de baños con acabados premium y funcionalidad optimizada.",
        descripcionLarga: "<p>Transformamos tu baño en un espacio de confort y diseño. Especialistas en reformas de baños en Barcelona con materiales de primera calidad.</p>",
        metaTitle: "Reformas de Baños en Barcelona | Voltura Projects",
        metaDescription: "Reforma tu baño con los mejores profesionales. Diseño moderno, materiales premium y ejecución impecable.",
        orden: 2,
        destacado: true
    },
    {
        titulo: "Reformas de Cocinas",
        slug: "reformas-cocinas",
        descripcionCorta: "Cocinas de diseño a medida con la mejor relación calidad-precio del mercado.",
        descripcionLarga: "<p>Creamos cocinas funcionales y estéticas que se adaptan a tu estilo de vida. Desde cocinas abiertas hasta diseños clásicos.</p>",
        metaTitle: "Reformas de Cocinas en Barcelona | Voltura Projects",
        metaDescription: "Diseño e instalación de cocinas modernas en Barcelona. Muebles a medida y electrodomésticos de alta gama.",
        orden: 3,
        destacado: true
    },
    {
        titulo: "Instalaciones Eléctricas",
        slug: "instalaciones-electricas",
        descripcionCorta: "Instalaciones eléctricas certificadas con boletín eléctrico y garantía total.",
        descripcionLarga: "<p>Realizamos instalaciones eléctricas completas cumpliendo con toda la normativa vigente. Boletín azul y blanco incluido.</p>",
        metaTitle: "Instalaciones Eléctricas en Barcelona | Voltura Projects",
        metaDescription: "Instalaciones eléctricas certificadas en Barcelona. Boletines eléctricos, cuadros y cableado profesional.",
        orden: 4,
        destacado: false
    },
    {
        titulo: "Instalaciones de Fontanería",
        slug: "instalaciones-fontaneria",
        descripcionCorta: "Fontanería profesional para viviendas y locales con materiales de primera calidad.",
        descripcionLarga: "<p>Instalación y renovación de sistemas de fontanería. Reparaciones, cambio de tuberías y sistemas de agua caliente.</p>",
        metaTitle: "Instalaciones de Fontanería en Barcelona | Voltura Projects",
        metaDescription: "Fontanería profesional en Barcelona. Instalación, reparación y mantenimiento de sistemas de agua.",
        orden: 5,
        destacado: false
    },
    {
        titulo: "Instalaciones de Climatización",
        slug: "instalaciones-climatizacion",
        descripcionCorta: "Sistemas de climatización eficientes para máximo confort durante todo el año.",
        descripcionLarga: "<p>Instalación de aire acondicionado, calefacción y ventilación. Sistemas eficientes y silenciosos.</p>",
        metaTitle: "Instalaciones de Climatización en Barcelona | Voltura Projects",
        metaDescription: "Instalación de aire acondicionado y calefacción en Barcelona. Sistemas eficientes y profesionales.",
        orden: 6,
        destacado: false
    },
    {
        titulo: "Instalaciones de Aerotermia",
        slug: "instalaciones-aerotermia",
        descripcionCorta: "Aerotermia de última generación para climatización y agua caliente sostenible.",
        descripcionLarga: "<p>La aerotermia es el sistema más eficiente para climatización y ACS. Ahorro energético de hasta el 75%.</p>",
        metaTitle: "Instalaciones de Aerotermia en Barcelona | Voltura Projects",
        metaDescription: "Instalación de aerotermia en Barcelona. Sistema eficiente para climatización y agua caliente sanitaria.",
        orden: 7,
        destacado: true
    },
    {
        titulo: "Energía Fotovoltaica",
        slug: "energia-fotovoltaica",
        descripcionCorta: "Instalación de paneles solares para autoconsumo y máxima eficiencia energética.",
        descripcionLarga: "<p>Aprovecha la energía solar con nuestras instalaciones fotovoltaicas. Reduce tu factura eléctrica hasta un 80%.</p>",
        metaTitle: "Energía Fotovoltaica en Barcelona | Voltura Projects",
        metaDescription: "Instalación de paneles solares en Barcelona. Autoconsumo fotovoltaico con máximo ahorro energético.",
        orden: 8,
        destacado: true
    },
    {
        titulo: "Trabajos Verticales",
        slug: "trabajos-verticales",
        descripcionCorta: "Trabajos en altura con técnicas de acceso por cuerda y máxima seguridad.",
        descripcionLarga: "<p>Realizamos trabajos en altura sin necesidad de andamios. Reparaciones de fachadas, limpieza y mantenimiento.</p>",
        metaTitle: "Trabajos Verticales en Barcelona | Voltura Projects",
        metaDescription: "Trabajos verticales en Barcelona. Reparación de fachadas, limpieza y mantenimiento en altura.",
        orden: 9,
        destacado: false
    }
];

async function seed() {
    console.log('🌱 Iniciando seed de servicios...');

    // Este script debe ejecutarse dentro del contexto de Strapi
    // Para usarlo, copia este contenido y ejecútalo desde el Strapi admin o mediante un script personalizado

    console.log(`📦 ${serviciosData.length} servicios listos para importar`);
    console.log('ℹ️  Para importar estos datos, usa el panel de administración de Strapi');
    console.log('   o crea un script de bootstrap en src/index.ts');
}

seed();

module.exports = { serviciosData };
