import { SiInstagram, SiLinkedin, SiX, SiGmail } from "react-icons/si"
import { IoIosSend } from "react-icons/io";

const SOCIALS = [
    {
        href: "https://www.linkedin.com/in/ivan-camilo-morales-74248736a",
        label: "LinkedIn",
        icon: SiLinkedin,
    },
    {
        href: "https://x.com",
        label: "X",
        icon: SiX,
    },
    {
        href: "https://instagram.com",
        label: "Instagram",
        icon: SiInstagram,
    },
]

export const Contact = () => {

    return (
        <section id="contact" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-secondary">
                    Ponte en <span className="text-primary">Contacto</span>
                </h2>
                <p className="text-center text-secondary mb-12 max-w-2xl mx-auto">
                    ¿Tienes un proyecto en mente o quieres colaborar? Siempre estoy abierto a discutir nuevas oportunidades.
                </p>

                <div className="grid grid-cols-1 gap-12">
                    {/* Información de Contacto en tarjetas */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Email */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center hover:translate-y-[-2px] hover:shadow-lg transition">
                            <div className="mx-auto mb-3 w-12 h-12 flex items-center justify-center rounded-full bg-primary/20">
                                <SiGmail aria-hidden="true" className="h-6 w-6 text-primary" />
                            </div>
                            <h4 className="font-medium text-secondary">Email</h4>
                            <a
                                href="mailto:ivan.morales.ds@gmail.com"
                                className="text-secondary/70 hover:text-primary transition-colors break-all"
                            >
                                ivan.morales.ds@gmail.com
                            </a>
                        </div>

                        {/* Teléfono */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center hover:translate-y-[-2px] hover:shadow-lg transition">
                            <div className="mx-auto mb-3 w-12 h-12 flex items-center justify-center rounded-full bg-primary/20">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l3.6 7.59-1.35 2.45a11.037 11.037 0 005.65 5.65l2.45-1.35L19 19v2a1 1 0 01-1 1C9.163 22 2 14.837 2 6a1 1 0 011-1z" />
                                </svg>
                            </div>
                            <h4 className="font-medium text-secondary">Teléfono</h4>
                            <a href="tel:+573174783043" className="text-secondary/70 hover:text-primary transition-colors">
                                +57 3174783043
                            </a>
                        </div>

                        {/* Sígueme */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center hover:translate-y-[-2px] hover:shadow-lg transition">
                            <div className="mx-auto mb-3 w-12 h-12 flex items-center justify-center rounded-full bg-primary/20">
                                <IoIosSend aria-hidden="true" className="h-6 w-6 text-primary" />
                            </div>
                            <h4 className="font-medium text-secondary mb-2">Sígueme</h4>
                            <div className="flex justify-center gap-3">
                                {SOCIALS.map((social) => {
                                    const Icon = social.icon
                                    return (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`Abrir ${social.label} en una nueva pestaña`}
                                            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all hover:scale-110"
                                        >
                                            <Icon aria-hidden="true" size={18} />
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}