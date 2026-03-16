import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface Project {
    id: string;
    slug: string;
    title: string;
    description: string;
    summary: string;
    tags: string[];
    mainImage: string;
    gallery: string[];
    location: string;
    year: string;
    challenge: string;
    solution: string;
}

const projects: Project[] = [
    {
        id: "1",
        slug: "reforma-integral-penthouse-eixample",
        title: "Reforma Integral Penthouse Eixample",
        summary: "Transformación completa de un ático de 120m2 buscando luz y espacios abiertos.",
        description: "Este proyecto consistió en la demolición completa de la tabiquería interior para crear un espacio diáfano uniendo cocina, salón y comedor. Se restauraron los techos de vuelta catalana y se instaló un sistema de climatización por conductos invisible.",
        challenge: "El principal reto fue integrar la estructura original de vigas de madera y vuelta catalana, que estaba muy deteriorada, con un diseño moderno y minimalista, sin perder la altura libre del techo.",
        solution: "Reforzamos la estructura con vigas de acero dejándolas vistas como elemento estético. Utilizamos carpintería de aluminio de hoja oculta para maximizar la entrada de luz y diseñamos mobiliario a medida que actúa como separador de ambientes sin cerrar espacios.",
        tags: ["Reformas Integrales", "Climatización", "Electricidad"],
        mainImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2666&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop"
        ],
        location: "Eixample, Barcelona",
        year: "2023"
    },
    {
        id: "2",
        slug: "bano-luxury-spa-sarria",
        title: "Baño Luxury Spa en Sarrià",
        summary: "Conversión de un baño antiguo en un spa privado con materiales nobles.",
        description: "Utilizamos mármol travertino y grifería de oro cepillado empotrada. La instalación de fontanería se renovó por completo, incluyendo una ducha de lluvia y una bañera exenta.",
        challenge: "El espacio era reducido y carecía de luz natural directa. El cliente quería una sensación de amplitud y lujo tipo hotel de 5 estrellas en apenas 8m2.",
        solution: "Diseñamos un esquema de iluminación con foseados LED en el techo y retroiluminación en los espejos para simular luz natural. Distribuimos los elementos sanitarios suspendidos para despejar el suelo y usamos revestimientos continuos de gran formato.",
        tags: ["Reformas de baños", "Fontanería"],
        mainImage: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=2592&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2574&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1549400842-8877119d6519?q=80&w=2670&auto=format&fit=crop"
        ],
        location: "Sarrià, Barcelona",
        year: "2024"
    },
    {
        id: "3",
        slug: "cocina-isla-industrial-poblenou",
        title: "Cocina Industrial con Isla en Poblenou",
        summary: "Cocina abierta estilo loft neoyorquino en antigua fábrica rehabilitada.",
        description: "La protagonista es una isla de hormigón pulido de 4 metros. Se integraron electrodomésticos de alta gama panelados y se actualizó toda la instalación eléctrica para soportar placas de inducción de alto rendimiento.",
        challenge: "Instalar una isla de cocina de grandes dimensiones con suministros (agua y luz) en un suelo técnico existente sin levantar todo el pavimento original de la fábrica.",
        solution: "Canalizamos las instalaciones a través de un zócalo técnico diseñado a medida que se integra con la estética industrial. La extracción de humos se resolvió con una campana de superficie de alta potencia integrada en la placa.",
        tags: ["Reforma de cocina", "Electricidad", "Reformas Integrales"],
        mainImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2670&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2671&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=2670&auto=format&fit=crop"
        ],
        location: "Poblenou, Barcelona",
        year: "2023"
    },
    {
        id: "4",
        slug: "autoconsumo-solar-villa-pedralbes",
        title: "Autoconsumo Solar Villa Pedralbes",
        summary: "Instalación de 14 paneles solares con baterías para desconexión parcial de la red.",
        description: "Instalación fotovoltaica coplanar para respetar la estética de la cubierta. Incluye inversor híbrido Huawei y batería de 10kWh. El sistema cubre el 85% de la demanda energética de la vivienda.",
        challenge: "La cubierta de pizarra tenía una inclinación pronunciada y múltiples orientaciones, dificultando la captación solar óptima y el anclaje sin dañar la estética.",
        solution: "Utilizamos optimizadores de potencia en cada panel para gestionar las sombras parciales y diferentes orientaciones. El sistema de anclaje se realizó sin perforar la pizarra visible, garantizando la estanqueidad total.",
        tags: ["Energía Fotovoltaica", "Electricidad"],
        mainImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2672&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2658&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1592833159057-65a2845730bd?q=80&w=2670&auto=format&fit=crop"
        ],
        location: "Pedralbes, Barcelona",
        year: "2024"
    },
    {
        id: "5",
        slug: "rehabilitacion-fachada-modernista",
        title: "Rehabilitación Fachada Modernista",
        summary: "Restauración de estucos y cornisas mediante trabajos verticales sin andamios.",
        description: "Intervención delicada en edificio protegido. Nuestros técnicos verticales restauraron las molduras originales, repararon grietas estructurales y aplicaron revestimientos de silicato mineral transpirable.",
        challenge: "Acceder a zonas complejas de la ornamentación sin instalar andamios tubulares que el Ayuntamiento no permitía por ocupación de vía pública.",
        solution: "Desplegamos un equipo de especialistas en trabajos verticales con técnicas de posicionamiento por cuerdas. Esto permitió una restauración minuciosa de cada detalle a un coste un 40% menor que con andamiaje tradicional.",
        tags: ["Trabajos Verticales"],
        mainImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=2674&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1428366890462-dd4baecf492b?q=80&w=2574&auto=format&fit=crop"
        ],
        location: "Eixample Dret, Barcelona",
        year: "2023"
    },
    {
        id: "6",
        slug: "aerotermia-suelo-radiante-sant-cugat",
        title: "Aerotermia y Suelo Radiante",
        summary: "Climatización invisible y eficiente para vivienda unifamiliar de obra nueva.",
        description: "Sistema integral de aerotermia Daikin Altherma. Se instaló suelo radiante-refrescante en dos plantas, proporcionando un confort térmico inigualable sin corrientes de aire.",
        challenge: "Climatizar una vivienda de 250m2 con techos de doble altura minimizando el consumo eléctrico y eliminando radiadores visibles.",
        solution: "La combinación de aerotermia de baja temperatura con suelo radiante permitió una eficiencia estacional (SCOP) superior a 4.5. Añadimos control por zonas para gestionar la temperatura de cada planta independientemente.",
        tags: ["Aerotermia", "Climatización", "Fontanería"],
        mainImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2670&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1584622750111-9f67bfa8c6c8?q=80&w=2674&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1558227691-41ea78d1f631?q=80&w=2574&auto=format&fit=crop"
        ],
        location: "Sant Cugat, Barcelona",
        year: "2024"
    },
    {
        id: "7",
        slug: "renovacion-electrica-oficinas",
        title: "Renovación Eléctrica Oficinas Diagonal",
        summary: "Actualización de cuadro general y cableado estructurado para empresa tecnológica.",
        description: "Sustitución completa del cuadro eléctrico principal, sectorización de líneas por puestos de trabajo y certificación de red de datos Cat6A. Iluminación DALI domotizada.",
        challenge: "Realizar el cambio completo de la instalación eléctrica y de datos sin detener la actividad de la empresa, que opera 24/7.",
        solution: "Planificamos la obra en tres fases nocturnas de fin de semana. Instalamos un cuadro provisional para mantener servicios críticos y realizamos la sustitución línea a línea, asegurando 'cero downtime' en horario laboral.",
        tags: ["Electricidad", "Climatización"],
        mainImage: "https://images.unsplash.com/photo-1497215728101-856+4ea42174?q=80&w=2670&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2632&auto=format&fit=crop"
        ],
        location: "Diagonal, Barcelona",
        year: "2023"
    },
    {
        id: "8",
        slug: "cambio-bajantes-patio-luces",
        title: "Sustitución Bajantes Patio Interior",
        summary: "Retirada de fibrocemento y montaje de nuevos bajantes de PVC insonorizado.",
        description: "Trabajo vertical en patio de difícil acceso. Se retiraron antiguos bajantes de fibrocemento y se instalaron nuevas tuberías de PVC insonorizado.",
        challenge: "Trabajar en un patio de luces muy estrecho (1.5m de ancho) con presencia de amianto en las tuberías antiguas, requiriendo protocolos de seguridad estrictos.",
        solution: "Creamos un sistema de poleas motorizadas para la bajada segura de residuos. El equipo utilizó trajes estancos y máscaras de presión positiva, encapsulando el amianto in situ antes de su retirada.",
        tags: ["Fontanería", "Trabajos Verticales"],
        mainImage: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2669&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2670&auto=format&fit=crop"
        ],
        location: "Gràcia, Barcelona",
        year: "2023"
    },
    {
        id: "9",
        slug: "duplex-minimalista-ciutat-vella",
        title: "Dúplex Minimalista en Ciutat Vella",
        summary: "Reforma parcial centrada en la escalera y los acabados de madera.",
        description: "Se diseñó una escalera volada de acero y roble para unir dos plantas. Reforma de baño secundario y cocina americana integrada en el salón.",
        challenge: "Conectar dos plantas en un edificio histórico con forjados de madera antiguos que no permitían sobrecargas puntuales excesivas.",
        solution: "Diseñamos una escalera autoportante anclada a los muros de carga laterales, liberando de peso al forjado intermedio. El diseño ligero en acero permite además el paso de la luz a la planta inferior.",
        tags: ["Reformas Integrales", "Reforma de cocina", "Electricidad"],
        mainImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2574&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2574&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2670&auto=format&fit=crop"
        ],
        location: "El Born, Barcelona",
        year: "2024"
    },
    {
        id: "10",
        slug: "climatizacion-zonificada-les-corts",
        title: "Climatización Zonificada por Airzone",
        summary: "Control total de la temperatura en cada habitación mediante rejillas motorizadas.",
        description: "Instalación de máquina de conductos Mitsubishi Electric con sistema Airzone. Permite elegir una temperatura diferente en cada estancia.",
        challenge: "Integrar la red de conductos de aire en un piso con techos bajos sin realizar falsos techos que redujeran excesivamente la altura habitable.",
        solution: "Diseñamos una red de conductos de perfil bajo (fibra de alta densidad) que discurre por el pasillo central, distribuyendo a las habitaciones mediante rejillas laterales. Solo se bajó el techo en zonas de paso.",
        tags: ["Climatización", "Electricidad"],
        mainImage: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2670&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2671&auto=format&fit=crop"
        ],
        location: "Les Corts, Barcelona",
        year: "2023"
    }
];

const translations: Record<string, any> = {
    "1": {
        title: "Reforma Integral Àtic Eixample",
        slug: "reforma-integral-atic-eixample",
        summary: "Transformació completa d'un àtic de 120m2 buscant llum i espais oberts.",
        description: "Aquest projecte va consistir en la demolició completa de la barballera interior per a crear un espai diàfan unint cuina, saló i menjador. Es van restaurar els sostres de volta catalana...",
        challenge: "El principal repte va ser integrar l'estructura original de bigues de fusta i volta catalana...",
        solution: "Vam reforçar l'estructura amb bigues d'acer deixant-les vistes com a element estètic...",
        tags: ["Reformes Integrals", "Climatització", "Electricitat"]
    },
    "2": {
        title: "Bany Luxury Spa a Sarrià",
        slug: "bany-luxury-spa-sarria",
        summary: "Conversió d'un bany antic en un spa privat amb materials nobles.",
        description: "Vam utilitzar marbre travertí i griferia d'or raspallat encastada...",
        challenge: "L'espai era reduït i mancava de llum natural directa...",
        solution: "Vam dissenyar un esquema d'il·luminació amb fosejats LED al sostre...",
        tags: ["Reformes de banys", "Fontaneria"]
    },
    "3": {
        title: "Cuina Industrial amb Illa al Poblenou",
        slug: "cuina-industrial-illa-poblenou",
        summary: "Cuina oberta estil loft novaiorquès en antiga fàbrica rehabilitada.",
        description: "La protagonista és una illa de formigó polida de 4 metres...",
        challenge: "Instal·lar una illa de cuina de grans dimensions amb subministraments...",
        solution: "Vam canalitzar les instal·lacions a través d'un sòcol tècnic...",
        tags: ["Reforma de cuina", "Electricitat"]
    },
    "4": {
        title: "Autoconsum Solar Vil·la Pedralbes",
        slug: "autoconsum-solar-villa-pedralbes",
        summary: "Instal·lació de 14 panells solars amb bateries per a desconnexió parcial de la xarxa.",
        description: "Instal·lació fotovoltaica coplanar per a respectar l'estètica de la coberta...",
        challenge: "La coberta de pissarra tenia una inclinació pronunciada...",
        solution: "Vam utilitzar optimitzadors de potència en cada panell...",
        tags: ["Energia Fotovoltaica", "Electricitat"]
    },
    "5": {
        title: "Rehabilitació Façana Modernista",
        slug: "rehabilitacio-facana-modernista",
        summary: "Restauració d'estucs i cornises mitjançant treballs verticals sense bastides.",
        description: "Intervenció delicada en edifici protegit...",
        challenge: "Accedir a zones complexes de l'ornamentació sense instal·lar bastides...",
        solution: "Vam desplegar un equip d'especialistes en treballs verticals...",
        tags: ["Treballs Verticals"]
    },
    "6": {
        title: "Aerotèrmia i Terra Radiant",
        slug: "aerotermia-terra-radiant-sant-cugat",
        summary: "Climatització invisible i eficient per a habitatge unifamiliar d'obra nova.",
        description: "Sistema integral d'aerotèrmia Daikin Altherma...",
        challenge: "Climatitzar un habitatge de 250m2 amb sostres de doble alçada...",
        solution: "La combinació d'aerotèrmia de baixa temperatura amb terra radiant...",
        tags: ["Aerotèrmia", "Climatització"]
    },
    "7": {
        title: "Renovació Elèctrica Oficines Diagonal",
        slug: "renovacio-electrica-oficines-diagonal",
        summary: "Actualització de quadre general i cablejat estructurat per a empresa tecnològica.",
        description: "Substitució completa del quadre elèctric principal...",
        challenge: "Realitzar el canvi complet de la instal·lació elèctrica i de dades...",
        solution: "Vam planificar l'obra en tres fases nocturnes...",
        tags: ["Electricidad", "Climatizacion"]
    },
    "8": {
        title: "Substitució Baixants Safareig Interior",
        slug: "substitucio-baixants-safareig-interior",
        summary: "Retirada de fibrociment i muntatge de nous baixants de PVC insonoritzat.",
        description: "Treball vertical en safareig de difícil accés...",
        challenge: "Treballar en un safareig de llums molt estret...",
        solution: "Vam crear un sistema de politges motoritzades...",
        tags: ["Fontaneria", "Treballs Verticals"]
    },
    "9": {
        title: "Dúplex Minimalista a Ciutat Vella",
        slug: "duplex-minimalista-ciutat-vella",
        summary: "Reforma parcial centrada en l'escala i els acabats de fusta.",
        description: "Es va dissenyar una escala volada d'acer i roure...",
        challenge: "Connectar dues plantes en un edifici històric...",
        solution: "Vam dissenyar una escala autoportant ancorada als murs de càrrega...",
        tags: ["Reformes Integrals", "Reforma de cuina"]
    },
    "10": {
        title: "Climatització Zonificada per Airzone",
        slug: "climatitzacio-zonificada-airzone",
        summary: "Control total de la temperatura a cada habitació mitjançant reixetes motoritzades.",
        description: "Instal·lació de màquina de conductes Mitsubishi Electric...",
        challenge: "Integrar la xarxa de conductes d'aire en un pis amb sostres baixos...",
        solution: "Vam dissenyar una xarxa de conductes de perfil baix...",
        tags: ["Climatització", "Electricitat"]
    }
}

async function main() {
    console.log('Iniciant migració de Projectes...')

    for (const p of projects) {
        const trans = translations[p.id] || {}
        
        // Comprovar si ja existeix
        const existing = await prisma.project.findUnique({
            where: { slug: p.slug }
        })

        if (!existing) {
            await prisma.project.create({
                data: {
                    slug: p.slug,
                    slug_ca: trans.slug || p.slug,
                    title: p.title,
                    title_ca: trans.title || (p.title + ' (CA)'),
                    summary: p.summary,
                    summary_ca: trans.summary || p.summary,
                    description: p.description,
                    description_ca: trans.description || p.description,
                    challenge: p.challenge,
                    challenge_ca: trans.challenge || p.challenge,
                    solution: p.solution,
                    solution_ca: trans.solution || p.solution,
                    tags: JSON.stringify(p.tags),
                    tags_ca: JSON.stringify(trans.tags || p.tags),
                    mainImage: p.mainImage,
                    gallery: JSON.stringify(p.gallery),
                    location: p.location,
                    year: p.year
                }
            })
            console.log(`Projecte creat: ${p.title}`)
        } else {
            console.log(`Projecte ja existent, saltant: ${p.title}`)
        }
    }

    console.log('Migració completada amb èxit.')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
