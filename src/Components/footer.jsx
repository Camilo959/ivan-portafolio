import { SiGithub, SiLinkedin, SiX, SiGmail } from "react-icons/si"

const LINKS = [
    { name: "Inicio", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
]

const SOCIALS = [
    { icon: SiGithub, href: "https://github.com/Camilo959", label: "Github" },
    { icon: SiLinkedin, href: "https://www.linkedin.com/in/ivan-camilo-morales-74248736a", label: "LinkedIn" },
    { icon: SiX, href: "https://x.com", label: "X" },
    { icon: SiGmail, href: "mailto:ivan.morales.ds@gmail.com", label: "Email" },
]

export const Footer = () => {
    return (
        <footer className="border-t border-primary/10 bg-background/50 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Logo/Nombre */}
                    <div className="opacity-0 animate-fade-in motion-reduce:animate-none motion-reduce:opacity-100">
                        <h3 className="text-2xl font-bold text-primary">Ivan</h3>
                        <p className="text-secondary/70 text-sm mt-2">Desarrollador Web Full Stack</p>
                    </div>

                    {/* Links */}
                    <div style={{ animationDelay: "100ms" }} className="opacity-0 animate-fade-in motion-reduce:animate-none motion-reduce:opacity-100">
                        <h4 className="font-semibold text-secondary mb-4">Navegación</h4>
                        <ul className="space-y-2">
                            {LINKS.map(link => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-secondary/70 dark:text-secondary/80 hover:text-primary transition-colors text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Redes Sociales */}
                    <div style={{ animationDelay: "200ms" }} className="flex flex-col items-center opacity-0 animate-fade-in motion-reduce:animate-none motion-reduce:opacity-100">
                        <h4 className="font-semibold text-secondary mb-4 text-center">Sígueme</h4>

                        <div className="flex gap-3 justify-center">
                            {SOCIALS.map(social => {
                                const Icon = social.icon
                                const isExternal = social.href.startsWith("http")
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target={isExternal ? "_blank" : undefined}
                                        rel={isExternal ? "noopener noreferrer" : undefined}
                                        aria-label={social.label}
                                        className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all hover:scale-110"
                                    >
                                        <Icon aria-hidden="true" size={20} />
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                    {/* CTA */}
                    <div style={{ animationDelay: "300ms" }} className="opacity-0 animate-fade-in motion-reduce:animate-none motion-reduce:opacity-100">
                        <h4 className="font-semibold text-secondary mb-4">¿Trabajemos juntos?</h4>
                        <a
                            href="#contact"
                            className="inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-all text-sm font-medium"
                        >
                            Contactar
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-primary/10 pt-8">
                    <p className="text-center text-secondary/70 dark:text-secondary/80 text-sm">
                        &copy; {new Date().getFullYear()} Ivan Developer. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}
