import { SiGithub, SiLinkedin, SiX, SiGmail } from "react-icons/si"
import { useTranslation } from "react-i18next"

const LINKS = [
    { nameKey: "home", href: "#home" },
    { nameKey: "about", href: "#about" },
    { nameKey: "projects", href: "#projects" },
    { nameKey: "contact", href: "#contact" },
]

const SOCIALS = [
    { icon: SiGithub, href: "https://github.com/Camilo959", labelKey: "github" },
    { icon: SiLinkedin, href: "https://www.linkedin.com/in/ivan-camilo-morales-74248736a", labelKey: "linkedin" },
    { icon: SiX, href: "https://x.com", labelKey: "x" },
    { icon: SiGmail, href: "mailto:ivan.morales.ds@gmail.com", labelKey: "email" },
]

export const Footer = () => {
    const { t } = useTranslation()

    return (
        <footer className="border-t border-primary/10 bg-background/50 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Logo/Nombre */}
                    <div className="opacity-0 animate-fade-in motion-reduce:animate-none motion-reduce:opacity-100">
                        <h3 className="text-2xl font-bold text-primary">{t("common.brandName")}</h3>
                        <p className="text-secondary/70 text-sm mt-2">{t("footer.role")}</p>
                    </div>

                    {/* Links */}
                    <div style={{ animationDelay: "100ms" }} className="opacity-0 animate-fade-in motion-reduce:animate-none motion-reduce:opacity-100">
                        <h4 className="font-semibold text-secondary mb-4">{t("footer.navigation")}</h4>
                        <ul className="space-y-2">
                            {LINKS.map(link => (
                                <li key={link.nameKey}>
                                    <a
                                        href={link.href}
                                        className="text-secondary/70 dark:text-secondary/80 hover:text-primary transition-colors text-sm"
                                    >
                                        {t(`footer.links.${link.nameKey}`)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Redes Sociales */}
                    <div style={{ animationDelay: "200ms" }} className="flex flex-col items-center opacity-0 animate-fade-in motion-reduce:animate-none motion-reduce:opacity-100">
                        <h4 className="font-semibold text-secondary mb-4 text-center">{t("footer.follow")}</h4>

                        <div className="flex gap-3 justify-center">
                            {SOCIALS.map(social => {
                                const Icon = social.icon
                                const isExternal = social.href.startsWith("http")
                                const label = t(`footer.socials.${social.labelKey}`)

                                return (
                                    <a
                                        key={social.labelKey}
                                        href={social.href}
                                        target={isExternal ? "_blank" : undefined}
                                        rel={isExternal ? "noopener noreferrer" : undefined}
                                        aria-label={label}
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
                        <h4 className="font-semibold text-secondary mb-4">{t("footer.workTogether")}</h4>
                        <a
                            href="#contact"
                            className="inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-all text-sm font-medium"
                        >
                            {t("footer.contact")}
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-primary/10 pt-8">
                    <p className="text-center text-secondary/70 dark:text-secondary/80 text-sm">
                        &copy; {t("footer.rights", { year: new Date().getFullYear() })}
                    </p>
                </div>
            </div>
        </footer>
    )
}
