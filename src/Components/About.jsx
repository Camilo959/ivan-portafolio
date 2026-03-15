import { Bug, Code, Palette } from "lucide-react"

const ABOUT_SKILLS = [
    { icon: Code, title: "Desarrollo Web", description: "Creo aplicaciones web modernas y escalables con React y Next.js", color: "from-blue-500 to-indigo-600" },
    { icon: Bug, title: "Soluciono Bugs", description: "Identifico y resuelvo problemas complejos en la interfaz y rendimiento", color: "from-green-500 to-emerald-600" },
    { icon: Palette, title: "Diseño UI/UX", description: "Diseño interfaces limpias y amigables usando Figma y Tailwind", color: "from-purple-500 to-pink-500" }
]

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-secondary">
                    Sobre <span className="text-primary">Mí</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-secondary">
                    <div className="space-y-6 opacity-0 animate-fade-in motion-reduce:animate-none motion-reduce:opacity-100">
                        <h3 className="text-2xl font-semibold">Desarrollador Web & Tecnología</h3>
                        <p className="text-muted/80 leading-relaxed">
                            Me interesa crear aplicaciones web funcionales y visualmente atractivas, enfocándome en que sean fáciles de usar y mantener.
                        </p>
                        <p className="text-muted/80 leading-relaxed">
                            Disfruto aprender nuevas herramientas y tecnologías, mejorar la experiencia del usuario y aplicar buenas prácticas en cada proyecto.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a href="#contact" className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105 active:scale-95 text-center">
                                Contactarme
                            </a>
                            <a href="mailto:ivan.morales.ds@gmail.com?subject=Solicitud%20de%20CV" className="px-8 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 font-medium transition-all duration-300 text-center">
                                Solicitar CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {ABOUT_SKILLS.map((skill, index) => {
                            const Icon = skill.icon;
                            return (
                                <div
                                    key={skill.title}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                    className="group relative overflow-hidden rounded-lg p-6 bg-gradient-to-br from-surface to-surface/50 border border-primary/10 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 opacity-0 animate-fade-in motion-reduce:animate-none motion-reduce:opacity-100"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                                    <div className="relative z-10 space-y-3">
                                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center`}>
                                            <Icon aria-hidden="true" className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="text-lg font-bold text-secondary">{skill.title}</h4>
                                        <p className="text-sm text-muted/80">{skill.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
