import { motion as Motion } from "framer-motion";
import { useState } from "react"
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa"
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiPostgresql } from "react-icons/si"
import { SiLaravel, SiMongodb, SiGithub } from "react-icons/si"

export const Skills = () => {
    const categories = ["all", "frontend", "backend", "tools"]

    const skills = [
        { name: "HTML", icon: FaHtml5, category: "frontend", color: "#ff6b6b" },
        { name: "CSS", icon: FaCss3Alt, category: "frontend", color: "#4ecdc4" },
        { name: "JavaScript", icon: FaJs, category: "frontend", color: "#ffd93d" },
        { name: "React", icon: FaReact, category: "frontend", color: "#61dafb" },
        { name: "TypeScript", icon: SiTypescript, category: "frontend", color: "#3178c6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, category: "frontend", color: "#06b6d4" },
        { name: "Next.js", icon: SiNextdotjs, category: "frontend", color: "#111827" },
        { name: "Laravel", icon: SiLaravel, category: "backend", color: "#ff2d20" },
        { name: "MongoDB", icon: SiMongodb, category: "backend", color: "#13aa52" },
        { name: "PostgreSQL", icon: SiPostgresql, category: "backend", color: "#336791" },
        { name: "Git/GitHub", icon: SiGithub, category: "tools", color: "#f05032" },
    ]

    const [activeCategory, setActiveCategory] = useState("all")

    const filteredSkills =
        activeCategory === "all"
            ? skills
            : skills.filter(skill => skill.category === activeCategory)

    return (
        <section id="skills" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary">
                    Mis <span className="text-primary">Habilidades</span>
                </h2>

                {/* Categorías */}
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-lg font-medium transition-all
                ${activeCategory === cat ? "bg-primary text-white" : "bg-secondary/10 text-secondary hover:bg-primary/20"}`}
                        >
                            {cat === "all" ? "Todas" : cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Grid de habilidades */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
                    {filteredSkills.map((skill, key) => {
                        const Icon = skill.icon
                        return (
                            <Motion.div
                                key={key}
                                initial={{ opacity: 0, scale: 0.6 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: key * 0.06 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                className="relative group cursor-pointer"
                            >
                                <div
                                    className="w-28 h-28 rounded-xl flex flex-col items-center justify-center border-2 transition-all duration-300 relative"
                                    style={{ borderColor: skill.color }}
                                >
                                    {/* Glow background */}
                                    <div
                                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"
                                        style={{ background: skill.color, filter: "blur(20px)" }}
                                    ></div>
                                    <div
                                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity"
                                        style={{ background: skill.color }}
                                    ></div>

                                    {/* Icono + Nombre */}
                                    <div className="relative z-10 flex flex-col items-center justify-center h-full">
                                        <div
                                            className="text-4xl mb-2 group-hover:scale-110 transition-transform drop-shadow-lg"
                                            style={{ color: skill.color }}
                                        >
                                            <Icon size={40} />
                                        </div>
                                        <div className="text-sm font-semibold text-center text-secondary group-hover:text-primary transition-colors">
                                            {skill.name}
                                        </div>
                                    </div>

                                    {/* Tooltip */}
                                    <div className="absolute -top-6 opacity-0 group-hover:opacity-100 bg-secondary text-white text-xs px-2 py-1 rounded shadow-lg transition-opacity pointer-events-none">
                                        {skill.name}
                                    </div>
                                </div>
                            </Motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
