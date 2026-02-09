import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { projects } from "@/data/projects";
import Image from "next/image";
import Script from "next/script";
import { notFound } from "next/navigation";
import { MapPin, Calendar, Tag, ArrowLeft, ArrowRight, Lightbulb, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { ContactButton } from "@/components/contact-button";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return { title: "Proyecto no encontrado" };

    return {
        title: `${project.title} | Voltura Projects`,
        description: project.summary,
    };
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;
    const projectIndex = projects.findIndex((p) => p.slug === slug);
    const project = projects[projectIndex];

    if (!project) {
        notFound();
    }

    // Logic for "Next Project"
    const nextProjectIndex = (projectIndex + 1) % projects.length;
    const nextProject = projects[nextProjectIndex];

    return (
        <main className="min-h-screen bg-voltura-blue text-voltura-stone font-sans selection:bg-voltura-gold selection:text-white">
            <Navbar />

            <Script id="json-ld-project" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Project",
                    "name": project.title,
                    "description": project.summary,
                    "url": `https://volturaprojects.es/proyectos/${project.slug}`,
                    "location": {
                        "@type": "Place",
                        "name": project.location,
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Barcelona",
                            "addressRegion": "Barcelona",
                            "addressCountry": "ES"
                        }
                    },
                    "organizer": {
                        "@type": "Organization",
                        "name": "Voltura Projects",
                        "url": "https://volturaprojects.es"
                    }
                })}
            </Script>

            {/* Hero Detail */}
            <section className="relative h-[70vh] w-full overflow-hidden">
                <Image
                    src={project.mainImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-voltura-blue via-voltura-blue/50 to-transparent"></div>

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                    <div className="max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <Link href="/proyectos" className="inline-flex items-center text-voltura-gold hover:text-white mb-6 transition-colors text-sm uppercase tracking-widest font-bold gap-2">
                            <ArrowLeft className="w-4 h-4" /> Volver a Proyectos
                        </Link>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                            {project.title}
                        </h1>
                        <div className="flex flex-wrap gap-4 md:gap-8 text-sm md:text-base text-gray-300">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-voltura-gold" />
                                <span>{project.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-voltura-gold" />
                                <span>{project.year}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Tag className="w-5 h-5 text-voltura-gold" />
                                <span className="uppercase">{project.tags.join(" | ")}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content & Gallery */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Description Sidebar */}
                        <div className="lg:col-span-1 space-y-12 sticky top-32 self-start animate-in fade-in slide-in-from-left-4 duration-700 delay-200">

                            {/* General Desc */}
                            <div>
                                <h3 className="text-voltura-gold font-bold uppercase tracking-widest text-sm mb-4">El Proyecto</h3>
                                <p className="text-xl text-white font-serif leading-relaxed mb-6">
                                    {project.summary}
                                </p>
                                <div className="text-gray-400 space-y-4 leading-relaxed text-lg">
                                    <p>{project.description}</p>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/10">
                                <ContactButton className="w-full py-4 text-center justify-center">
                                    Consultar Proyecto Similar
                                </ContactButton>
                            </div>
                        </div>

                        {/* Gallery & Advanced Details */}
                        <div className="lg:col-span-2 space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">

                            {/* Reto y Solución Block - New!! */}
                            {(project.challenge || project.solution) && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                    {project.challenge && (
                                        <div className="bg-voltura-slate p-8 border border-white/5 rounded-sm">
                                            <div className="flex items-start gap-4">
                                                <Lightbulb className="w-6 h-6 text-voltura-gold mt-1 shrink-0" />
                                                <div>
                                                    <h3 className="text-lg font-bold text-white mb-2">El Reto</h3>
                                                    <p className="text-gray-400 text-sm leading-relaxed">{project.challenge}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {project.solution && (
                                        <div className="bg-voltura-slate p-8 border border-white/5 rounded-sm">
                                            <div className="flex items-start gap-4">
                                                <CheckCircle2 className="w-6 h-6 text-voltura-gold mt-1 shrink-0" />
                                                <div>
                                                    <h3 className="text-lg font-bold text-white mb-2">La Solución</h3>
                                                    <p className="text-gray-400 text-sm leading-relaxed">{project.solution}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Main Gallery Images */}
                            {project.gallery.map((img, idx) => (
                                <div key={idx} className="relative h-[50vh] md:h-[70vh] w-full rounded-sm overflow-hidden group border border-white/5 shadow-2xl">
                                    <Image
                                        src={img}
                                        alt={`Detalle ${project.title} - ${idx + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-voltura-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Next Project Navigation */}
            <section className="py-24 bg-voltura-slate border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-gray-500 mb-4 uppercase tracking-widest text-sm">Siguiente Proyecto</p>
                    <Link href={`/proyectos/${nextProject.slug}`} className="group inline-block">
                        <h2 className="text-4xl md:text-6xl font-serif text-white group-hover:text-voltura-gold transition-colors mb-6">
                            {nextProject.title}
                        </h2>
                        <div className="inline-flex items-center gap-3 text-voltura-gold uppercase tracking-widest font-bold text-sm border-b border-voltura-gold pb-1 group-hover:gap-6 transition-all duration-300">
                            Ver Proyecto <ArrowRight className="w-4 h-4" />
                        </div>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
