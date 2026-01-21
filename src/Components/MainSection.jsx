import { ArrowDown } from "lucide-react"

export const MainSection = () => {
    return <section id="main"
        className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
        {/* Fondo animado con gradientes */}
        <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold">
                    <span className="text-secondary opacity-0 animate-fade-in">Hi, I'm </span>
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent opacity-0 animate-fade-in-delay-1"> Ivan</span>
                    <span className="text-secondary opacity-0 animate-fade-in-delay-2"> Developer</span>
                </h1>

                <p className="text-lg md:text-xl text-secondary/80 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    Desarrollador web full-stack con 4 años de experiencia. Creo interfaces modernas,
                    responsivas y altamente funcionales usando React, Tailwind CSS y tecnologías actuales.
                </p>
            </div>
            <div className="pt-8 opacity-0 animate-fade-in-delay-4 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#projects" className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-105 active:scale-95">
                    Ver Proyectos
                </a>
                <a href="#contact" className="px-8 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary/10 font-medium transition-all duration-300 active:scale-95">
                    Contactarme
                </a>
            </div>
        </div>
        <div className="absolute text-secondary bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span>Scroll</span>
            <ArrowDown className="h-6 w-6 text-primary" />
        </div>
    </section>
}