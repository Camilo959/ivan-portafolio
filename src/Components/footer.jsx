import { motion as Motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiX, SiGmail } from "react-icons/si"

export const Footer = () => {
    const links = [
        { name: "Inicio", href: "#home" },
        { name: "Sobre", href: "#about" },
        { name: "Proyectos", href: "#projects" },
        { name: "Contacto", href: "#contact" },
    ]

    const socials = [
        { icon: SiGithub, href: "#", label: "Github" },
        { icon: SiLinkedin, href: "#", label: "LinkedIn" },
        { icon: SiX, href: "#", label: "X" },
        { icon: SiGmail, href: "#", label: "Email" },
    ]

    return (
        <footer className="border-t border-primary/10 bg-background/50 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Logo/Nombre */}
                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-primary">Ivan</h3>
                        <p className="text-muted text-sm mt-2">Desarrollador Web Full Stack</p>
                    </Motion.div>

                    {/* Links */}
                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="font-semibold text-secondary mb-4">Navegación</h4>
                        <ul className="space-y-2">
                            {links.map(link => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-muted/70 hover:text-primary transition-colors text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Motion.div>

                    {/* Redes Sociales */}
                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <h4 className="font-semibold text-secondary mb-4 text-center">Sígueme</h4>

                        <div className="flex gap-3 justify-center">
                            {socials.map(social => {
                                const Icon = social.icon
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all hover:scale-110"
                                    >
                                        <Icon size={20} />
                                    </a>
                                )
                            })}
                        </div>
                    </Motion.div>

                    {/* CTA */}
                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="font-semibold text-secondary mb-4">¿Trabajemos juntos?</h4>
                        <a
                            href="#contact"
                            className="inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-all text-sm font-medium"
                        >
                            Contactar
                        </a>
                    </Motion.div>
                </div>

                {/* Divider */}
                <div className="border-t border-primary/10 pt-8">
                    <p className="text-center text-muted text-sm">
                        &copy; {new Date().getFullYear()} Ivan Developer. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}
