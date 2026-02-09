import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

interface RelatedProjectsProps {
    tag: string;
    title?: string;
    description?: string;
}

export function RelatedProjects({ tag, title, description }: RelatedProjectsProps) {
    // Filter projects that have the tag
    const related = projects.filter(p => p.tags.includes(tag)).slice(0, 3); // Max 3 projects

    if (related.length === 0) return null;

    return (
        <section className="py-24 bg-voltura-slate border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h3 className="text-voltura-gold font-bold uppercase tracking-widest text-sm mb-2">Portfolio</h3>
                        <h2 className="text-3xl md:text-4xl font-serif text-white">
                            {title || `Proyectos de ${tag}`}
                        </h2>
                        {description && <p className="text-gray-400 mt-2 max-w-2xl">{description}</p>}
                    </div>
                    <Link href="/proyectos" className="inline-flex items-center gap-2 text-white hover:text-voltura-gold transition-colors font-medium">
                        Ver todos los proyectos <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {related.map((project) => (
                        <Link
                            key={project.id}
                            href={`/proyectos/${project.slug}`}
                            className="group block relative rounded-sm overflow-hidden border border-white/5 bg-voltura-blue hover:border-voltura-gold/30 transition-all duration-300"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={project.mainImage}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-voltura-blue/20 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-voltura-gold transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm line-clamp-2">
                                    {project.summary}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
