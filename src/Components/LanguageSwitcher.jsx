import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { cn } from "../lib/utils"

const SWITCH_ANIMATION_MS = 280

export const LanguageSwitcher = ({ className }) => {
  const { t, i18n } = useTranslation()
  const [powerState, setPowerState] = useState(null)
  const animationTimerRef = useRef(null)

  useEffect(() => {
    return () => {
      if (animationTimerRef.current) {
        window.clearTimeout(animationTimerRef.current)
      }
    }
  }, [])

  const resolvedLanguage = i18n.resolvedLanguage ?? i18n.language ?? "es"
  const isEnglishActive = resolvedLanguage.startsWith("en")
  const nextLanguage = isEnglishActive ? "es" : "en"

  const handleToggleLanguage = () => {
    if (animationTimerRef.current) {
      window.clearTimeout(animationTimerRef.current)
    }

    setPowerState(nextLanguage === "en" ? "on" : "off")
    i18n.changeLanguage(nextLanguage)

    animationTimerRef.current = window.setTimeout(() => {
      setPowerState(null)
      animationTimerRef.current = null
    }, SWITCH_ANIMATION_MS)
  }

  return (
    <button
      type="button"
      onClick={handleToggleLanguage}
      role="switch"
      aria-checked={isEnglishActive}
      aria-label={t("languageSwitcher.switchTo", { language: t(`languages.${nextLanguage}`) })}
      className={cn(
        "relative inline-flex h-9 w-[78px] items-center rounded-full border border-primary/35 px-1",
        "transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70",
        isEnglishActive ? "bg-primary/20" : "bg-card/85",
        className
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-200",
          powerState === "on" && "opacity-100 bg-primary/20",
          powerState === "off" && "opacity-100 bg-secondary/10"
        )}
      />

      <span
        aria-hidden="true"
        className={cn(
          "absolute left-2 text-[10px] font-bold uppercase tracking-wide transition-opacity duration-200",
          isEnglishActive ? "opacity-55 text-secondary" : "opacity-100 text-secondary"
        )}
      >
        ES
      </span>

      <span
        aria-hidden="true"
        className={cn(
          "absolute right-2 text-[10px] font-bold uppercase tracking-wide transition-opacity duration-200",
          isEnglishActive ? "opacity-100 text-primary" : "opacity-55 text-secondary"
        )}
      >
        EN
      </span>

      <span
        aria-hidden="true"
        className={cn(
          "relative z-10 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-[10px] font-black uppercase",
          "shadow-[0_4px_12px_rgba(0,0,0,0.2)] transition-all duration-300 ease-out",
          isEnglishActive ? "translate-x-[40px] text-primary" : "translate-x-0 text-secondary",
          powerState === "on" && "scale-105 shadow-[0_0_0_4px_rgba(59,130,246,0.2)]",
          powerState === "off" && "scale-95"
        )}
      >
        {isEnglishActive ? "EN" : "ES"}
      </span>
    </button>
  )
}
