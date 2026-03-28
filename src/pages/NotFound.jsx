import { useTranslation } from "react-i18next"

export const NotFound = () => {
    const { t } = useTranslation()

    return (
        <div className="min-h-screen flex items-center justify-center px-4 text-center">
            <div className="space-y-4">
                <h1 className="text-3xl font-bold text-secondary">{t("notFound.title")}</h1>
                <p className="text-secondary/80">{t("notFound.description")}</p>
                <a href="/" className="inline-block px-6 py-2 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
                    {t("notFound.goHome")}
                </a>
            </div>
        </div>
    )
}