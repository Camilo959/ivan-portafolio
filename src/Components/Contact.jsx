import { useState } from "react"
import { cn } from "@/lib/utils"
import { SiInstagram, SiLinkedin, SiX, SiGmail, SiResend } from "react-icons/si"

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState({})

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newErrors = {}
        if (!formData.name.trim()) newErrors.name = "Por favor ingresa tu nombre"
        if (!validateEmail(formData.email)) newErrors.email = "Por favor ingresa un email válido"
        if (!formData.message.trim()) newErrors.message = "Por favor ingresa un mensaje"

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setSubmitted(true)
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setSubmitted(false), 5000)
    }

    return (
        <section id="contact" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-secondary">
                    Ponte en <span className="text-primary">Contacto</span>
                </h2>
                <p className="text-center text-secondary mb-12 max-w-2xl mx-auto">
                    ¿Tienes un proyecto en mente o quieres colaborar? Siempre estoy abierto a discutir nuevas oportunidades.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
                                    <SiResend className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-secondary mb-2">Sígueme</h4>
                                    <div className="flex space-x-3">
                                        <a
                                            href="#"
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

                    {/* Formulario */}
                    <div className="glass rounded-xl p-8 text-secondary">
                        <h3 className="text-2xl font-semibold mb-6">Envía un Mensaje</h3>
                        {submitted && (
                            <div className="mb-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400">
                                ¡Gracias! Tu mensaje ha sido enviado correctamente.
                            </div>
                        )}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Nombre */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Tu Nombre
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={cn(
                                        "w-full px-4 py-3 rounded-lg border bg-background transition-all outline-none",
                                        errors.name
                                            ? "border-red-500 focus:ring-2 focus:ring-red-500"
                                            : "border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary"
                                    )}
                                    placeholder="Tu nombre..."
                                />
                                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Tu Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={cn(
                                        "w-full px-4 py-3 rounded-lg border bg-background transition-all outline-none",
                                        errors.email
                                            ? "border-red-500 focus:ring-2 focus:ring-red-500"
                                            : "border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary"
                                    )}
                                    placeholder="tu@email.com..."
                                />
                                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                            </div>

                            {/* Mensaje */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Tu Mensaje
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className={cn(
                                        "w-full px-4 py-3 rounded-lg border bg-background transition-all outline-none resize-none",
                                        errors.message
                                            ? "border-red-500 focus:ring-2 focus:ring-red-500"
                                            : "border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary"
                                    )}
                                    placeholder="Tu mensaje..."
                                />
                                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                            </div>

                            {/* Botón */}
                            <button
                                type="submit"
                                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                            >
                                <SiResend size={18} />
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}