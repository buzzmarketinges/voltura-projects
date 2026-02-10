import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export function ProjectCarousel() {
    // Duplicate projects to ensure smooth infinite loop
    const carouselItems = [...projects, ...projects];

    return (
        <div className="w-full bg-voltura-blue py-12 border-y border-white/5 overflow-hidden">
            <div className="max-w-[1920px] mx-auto">
                <div className="mb-10 text-center px-4">
                    <h3 className="text-voltura-gold font-bold uppercase tracking-widest text-sm mb-2">Portfolio</h3>
                    <h2 className="text-3xl md:text-4xl font-serif text-white">Últimos Proyectos</h2>
                </div>

                {/* Carousel Track */}
                <div className="relative w-full overflow-hidden group">
                    <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused]">
                        {carouselItems.map((project, idx) => (
                            <Link
                                key={`${project.id}-${idx}`}
                                href={`/proyectos/${project.slug}`}
                                className="relative flex-none w-[300px] md:w-[400px] h-[250px] md:h-[300px] mx-4 rounded-sm overflow-hidden group/card"
                            >
                                <Image
                                    src={project.mainImage}
                                    alt={project.title}
                                    fill
                                    loading="lazy"
                                    quality={75}
                                    sizes="(max-width: 768px) 300px, 400px"
                                    className="object-cover transition-transform duration-700 group-hover/card:scale-110 grayscale-[30%] group-hover/card:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-voltura-blue/90 via-voltura-blue/20 to-transparent opacity-80 group-hover/card:opacity-90 transition-opacity"></div>

                                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300">
                                    <span className="inline-block bg-voltura-gold text-voltura-blue text-xs font-bold px-2 py-1 uppercase tracking-wider mb-2">
                                        {project.tags[0]}
                                    </span>
                                    <h3 className="text-xl font-serif font-bold text-white leading-tight group-hover/card:text-voltura-gold transition-colors">
                                        {project.title}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
