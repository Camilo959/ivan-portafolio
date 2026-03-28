import { useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa"
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiPostgresql, SiPhp } from "react-icons/si"
import { SiLaravel, SiMongodb, SiGithub } from "react-icons/si"

const CATEGORIES = ["all", "frontend", "backend", "tools"]

const SKILLS = [
    { key: "html", icon: FaHtml5, category: "frontend", color: "#ff6b6b" },
    { key: "css", icon: FaCss3Alt, category: "frontend", color: "#4ecdc4" },
    { key: "javascript", icon: FaJs, category: "frontend", color: "#ffd93d" },
    { key: "react", icon: FaReact, category: "frontend", color: "#61dafb" },
    { key: "typescript", icon: SiTypescript, category: "frontend", color: "#3178c6" },
    { key: "tailwind", icon: SiTailwindcss, category: "frontend", color: "#06b6d4" },
    { key: "nextjs", icon: SiNextdotjs, category: "frontend", color: "#111827" },
    { key: "laravel", icon: SiLaravel, category: "backend", color: "#ff2d20" },
    { key: "mongodb", icon: SiMongodb, category: "backend", color: "#13aa52" },
    { key: "postgresql", icon: SiPostgresql, category: "backend", color: "#336791" },
    { key: "php", icon: SiPhp, category: "backend", color: "#777bb4" },
    { key: "gitgithub", icon: SiGithub, category: "tools", color: "#f05032" },
]

export const Skills = () => {
    const { t } = useTranslation()
    const [activeCategory, setActiveCategory] = useState("all")

    const filteredSkills = useMemo(() => (
        activeCategory === "all"
            ? SKILLS
            : SKILLS.filter(skill => skill.category === activeCategory)
    ), [activeCategory])

    return (
        <section id="skills" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary">
                    {t("skills.title.prefix")} <span className="text-primary">{t("skills.title.highlight")}</span>
                </h2>

                {/* Categorías */}
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    {CATEGORIES.map(cat => (
                        <button
                            type="button"
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            aria-pressed={activeCategory === cat}
                            className={`px-4 py-2 rounded-lg font-medium transition-all
                ${activeCategory === cat ? "bg-primary text-white" : "bg-secondary/10 text-secondary hover:bg-primary/20"}`}
                        >
                            {t(`skills.categories.${cat}`)}
                        </button>
                    ))}
                </div>

                {/* Grid de habilidades */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
                    {filteredSkills.map((skill, index) => {
                        const Icon = skill.icon
                        const skillName = t(`skills.items.${skill.key}`)

                        return (
                            <div
                                key={skill.key}
                                style={{ animationDelay: `${index * 60}ms` }}
                                className="relative group cursor-pointer opacity-0 animate-fade-in motion-reduce:animate-none motion-reduce:opacity-100 transition-transform duration-300 hover:scale-110 hover:rotate-2"
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
                                            <Icon aria-hidden="true" size={40} />
                                        </div>
                                        <div className="text-sm font-semibold text-center text-secondary group-hover:text-primary transition-colors">
                                            {skillName}
                                        </div>
                                    </div>

                                    {/* Tooltip */}
                                    <div className="absolute -top-6 opacity-0 group-hover:opacity-100 bg-secondary text-white text-xs px-2 py-1 rounded shadow-lg transition-opacity pointer-events-none">
                                        {skillName}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
