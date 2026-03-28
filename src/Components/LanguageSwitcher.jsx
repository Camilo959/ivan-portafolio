import { useTranslation } from "react-i18next"
import { cn } from "../lib/utils"

const LANGUAGES = ["es", "en"]

export const LanguageSwitcher = ({ className }) => {
  const { t, i18n } = useTranslation()

  return (
    <div
      className={cn("inline-flex items-center gap-1 rounded-full border border-primary/30 bg-surface/70 p-1", className)}
      aria-label={t("languageSwitcher.label")}
      role="group"
    >
      {LANGUAGES.map((language) => {
        const isActive = i18n.resolvedLanguage === language || i18n.language?.startsWith(language)

        return (
          <button
            type="button"
            key={language}
            onClick={() => i18n.changeLanguage(language)}
            aria-pressed={isActive}
            aria-label={t("languageSwitcher.switchTo", { language: t(`languages.${language}`) })}
            className={cn(
              "px-3 py-1 rounded-full text-xs font-semibold uppercase transition-colors",
              isActive ? "bg-primary text-white" : "text-secondary hover:bg-primary/15"
            )}
          >
            {language}
          </button>
        )
      })}
    </div>
  )
}
