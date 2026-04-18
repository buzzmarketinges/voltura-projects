import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

export const metadata = {
    alternates: {
        canonical: "https://volturaprojects.es/ca/projectes",
        languages: {
            "es": "https://volturaprojects.es/proyectos",
            "ca": "https://volturaprojects.es/ca/projectes",
            "x-default": "https://volturaprojects.es/proyectos",
        },
    },
    title: "Projectes Realitzats | Voltura Projects Barcelona",
    description: "Descobreix la nostra selecció de projectes de reformes integrals, instal·lacions i rehabilitacions a Barcelona.",
};

export default async function ProjectesPage() {
    const dbProjects = await prisma.project.findMany({
        where: { slug_ca: { not: null } },
        orderBy: { createdAt: 'desc' }
    });

    return (
        <main className="min-h-screen bg-voltura-blue text-voltura-stone font-sans selection:bg-voltura-gold selection:text-white">
            <Navbar switchLanguagePath="/proyectos" />

            {/* Header */}
            <section className="pt-32 pb-16 px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    Els Nostres Projectes
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                    Una mostra del nostre compromís amb l'excel·lència, el disseny i l'eficiència energètica.
                </p>
            </section>

            {/* Projects Grid */}
            <section className="pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dbProjects.map((project, idx) => {
                        const tagsList = project.tags_ca ? JSON.parse(project.tags_ca) : [];
                        const title = project.title_ca || project.title;
                        const summary = project.summary_ca || project.summary;
                        const slug = project.slug_ca; // Since we filtered, it is guaranteed

                        return (
                            <Link
                                key={project.id}
                                href={`/ca/projectes/${slug}`}
                                className="group block relative bg-voltura-slate border border-white/5 rounded-sm overflow-hidden hover:border-voltura-gold/50 transition-all duration-300 animate-in fade-in zoom-in"
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    {project.mainImage && (
                                        <Image
                                            src={project.mainImage}
                                            alt={title || ''}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-voltura-blue/20 group-hover:bg-transparent transition-colors duration-300"></div>
                                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                        {tagsList.slice(0, 2).map((tag: string) => ( // Show only first 2 tags
                                            <span key={tag} className="bg-voltura-blue/90 backdrop-blur-sm text-voltura-gold text-xs font-bold px-2 py-1 uppercase tracking-wider rounded-sm border border-voltura-gold/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="text-xs text-gray-400 flex items-center gap-1">
                                            <MapPin className="w-3 h-3" /> {project.location}
                                        </div>
                                        <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-voltura-gold transition-colors" />
                                    </div>
                                    <h2 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-voltura-gold transition-colors">
                                        {title}
                                    </h2>
                                    <p className="text-gray-400 text-sm line-clamp-2">
                                        {summary}
                                    </p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </section>

            <Footer />
        </main>
    );
}
