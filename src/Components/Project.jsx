import { ExternalLink } from "lucide-react"
import { useTranslation } from "react-i18next"

const PROJECTS = [
    {
        id: 1,
        key: "geminiBot",
        image: "/projects/chatbot.png",
        url: "#"
    },
    {
        id: 2,
        key: "threeWebsite",
        image: "/projects/butterfly-three-js.png",
        url: "#"
    },
    {
        id: 3,
        key: "landingIntro",
        image: "/projects/landiing-page.png",
        url: "#"
    }
]

export const Project = () => {
    const { t } = useTranslation()

    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-secondary">
                {t("projects.title.prefix")} <span className="text-primary">{t("projects.title.highlight")}</span>
            </h2>
            <p className="text-center text-secondary mb-12 max-w-2xl mx-auto">
                {t("projects.description")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map((project, index) => {
                    const hasExternalUrl = project.url && project.url !== "#"
                    const projectTitle = t(`projects.items.${project.key}.title`)
                    const projectDescription = t(`projects.items.${project.key}.description`)
                    const tags = t(`projects.items.${project.key}.tags`, { returnObjects: true })

                    return (
                    <div
                        key={project.id}
                        style={{ animationDelay: `${index * 100}ms` }}
                        className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 border border-primary/10 hover:border-primary/50 opacity-0 animate-fade-in motion-reduce:animate-none motion-reduce:opacity-100"
                    >
                        <div className="relative h-48 overflow-hidden bg-surface">
                            <img 
                                src={project.image} 
                                alt={projectTitle} 
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        <div className="p-6 space-y-4">
                            <div className="flex flex-wrap gap-2">
                                {tags.map((tag) => (
                                    <span 
                                        key={`${project.id}-${tag}`}
                                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/15 text-primary hover:bg-primary/25 transition-colors"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            
                            <h3 className="text-xl font-semibold text-secondary group-hover:text-primary transition-colors">{projectTitle}</h3>
                            <p className="text-secondary/70 text-sm line-clamp-2">{projectDescription}</p>
                            
                            {hasExternalUrl ? (
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={project.url}
                                    aria-label={t("projects.openProject", { title: projectTitle })}
                                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mt-4 group/link"
                                >
                                    {t("projects.viewProject")}
                                    <ExternalLink aria-hidden="true" size={16} className="group-hover/link:translate-x-1 transition-transform" />
                                </a>
                            ) : (
                                <span className="inline-flex items-center gap-2 text-muted mt-4 cursor-not-allowed">
                                    {t("projects.comingSoon")}
                                </span>
                            )}
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    </section>
}