import { ExternalLink } from "lucide-react"
import { motion as Motion } from "framer-motion"

const projects = [
    {
        id: 1,
        title: "Chat Bot Like Gemini",
        description: "Chatbot interactivo basado en Gemini AI con interfaz moderna y responsiva",
        image: "/projects/chatbot.png",
        url: "#",
        tags: ["Html", "Css", "Javascript"]
    },
    {
        id: 2,
        title: "Website Three js",
        description: "Landing page 3D con animaciones inmersivas usando Three.js",
        image: "/projects/butterfly-three-js.png",
        url: "#",
        tags: ["Html", "Css", "Javascript", "Three.js"]
    },
    {
        id: 3,
        title: "Landing Intro Page",
        description: "Página de introducción con efectos visuales atractivos",
        image: "/projects/landiing-page.png",
        url: "#",
        tags: ["Html", "Css", "Javascript"]
    }
]

export const Project = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-secondary">
                Proyectos <span className="text-primary">Destacados</span>
            </h2>
            <p className="text-center text-secondary mb-12 max-w-2xl mx-auto">
                Estos son algunos de mis proyectos más destacados. Cada uno fue creado con atención al detalle y optimización de rendimiento.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <Motion.div
                        key={key}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: key * 0.1 }}
                        viewport={{ once: true }}
                        className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 border border-primary/10 hover:border-primary/50"
                    >
                        <div className="relative h-48 overflow-hidden bg-surface">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        <div className="p-6 space-y-4">
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, idx) => (
                                    <span 
                                        key={idx}
                                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/15 text-primary hover:bg-primary/25 transition-colors"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            
                            <h3 className="text-xl font-semibold text-secondary group-hover:text-primary transition-colors">{project.title}</h3>
                            <p className="text-secondary/70 text-sm line-clamp-2">{project.description}</p>
                            
                            <a 
                                target="_blank" 
                                rel="noopener noreferrer"
                                href={project.url} 
                                className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mt-4 group/link"
                            >
                                Ver Proyecto 
                                <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </Motion.div>
                ))}
            </div>
        </div>
    </section>
}