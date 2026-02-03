import { SiInstagram, SiLinkedin, SiX, SiGmail } from "react-icons/si"
import { IoIosSend } from "react-icons/io";

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
                    {/* Información de Contacto */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>

                        <div className="space-y-6">
                            {/* Email */}
                            <div className="flex items-start space-x-4 group hover:translate-x-2 transition-transform">
                                <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                                    <SiGmail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-secondary">Email</h4>
                                    <a
                                        href="mailto:ivan.morales.ds@gmail.com"
                                        className="text-secondary/70 hover:text-primary transition-colors"
                                    >
                                        ivan.morales.ds@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Teléfono */}
                            <div className="flex items-start space-x-4 group hover:translate-x-2 transition-transform">
                                <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                                    {/* Mantengo PhoneCall de lucide porque Simple Icons no tiene teléfono */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-primary"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5h2l3.6 7.59-1.35 2.45a11.037 11.037 0 005.65 5.65l2.45-1.35L19 19v2a1 1 0 01-1 1C9.163 22 2 14.837 2 6a1 1 0 011-1z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium text-secondary">Teléfono</h4>
                                    <a href="tel:+57 3174783043" className="text-secondary/70 hover:text-primary transition-colors">
                                        +57 3174783043
                                    </a>
                                </div>
                            </div>

                            {/* Redes Sociales */}
                            <div className="flex items-start space-x-4 group">
                                <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                                    <IoIosSend className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-secondary mb-2">Sígueme</h4>
                                    <div className="flex space-x-3">
                                        <a
                                            href="https://www.linkedin.com/in/ivan-camilo-morales-74248736a"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all hover:scale-110"
                                        >
                                            <SiLinkedin size={18} />
                                        </a>
                                        <a
                                            href="#"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all hover:scale-110"
                                        >
                                            <SiX size={18} />
                                        </a>
                                        <a
                                            href="#"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all hover:scale-110"
                                        >
                                            <SiInstagram size={18} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}