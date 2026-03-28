import { Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { cn } from "../lib/utils";

const THEME_EVENT = "theme-change"
const THEME_TRANSITION_CLASS = "theme-power-transition"
const THEME_POWER_ON_CLASS = "theme-power-on"
const THEME_POWER_OFF_CLASS = "theme-power-off"
const THEME_TRANSITION_DURATION_MS = 240
const THEME_OVERLAY_DURATION_MS = 200
const THEME_SWITCH_DELAY_MS = 40

const applyTheme = (nextTheme) => {
    document.documentElement.classList.toggle("dark", nextTheme === "dark")
    localStorage.setItem("theme", nextTheme)
    window.dispatchEvent(new Event(THEME_EVENT))
}

export const ThemeToggle = ({ className }) => {
    const { t } = useTranslation()
    const [isDarkMode, setIsDarkMode] = useState(false);
    const switchTimerRef = useRef(null)
    const cleanupTimerRef = useRef(null)

    useEffect(() => {
        const applyResolvedTheme = () => {
            const storedTheme = localStorage.getItem("theme")
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
            const shouldUseDark = storedTheme ? storedTheme === "dark" : prefersDark

            document.documentElement.classList.toggle("dark", shouldUseDark)
            setIsDarkMode(shouldUseDark)
        }

        applyResolvedTheme()

        const syncTheme = () => applyResolvedTheme()
        window.addEventListener("storage", syncTheme)
        window.addEventListener(THEME_EVENT, syncTheme)

        return () => {
            window.removeEventListener("storage", syncTheme)
            window.removeEventListener(THEME_EVENT, syncTheme)

            if (switchTimerRef.current) {
                window.clearTimeout(switchTimerRef.current)
            }

            if (cleanupTimerRef.current) {
                window.clearTimeout(cleanupTimerRef.current)
            }
        }
    }, [])

    const toggleTheme = () => {
        const nextTheme = isDarkMode ? "light" : "dark"
        const root = document.documentElement

        if (switchTimerRef.current) {
            window.clearTimeout(switchTimerRef.current)
        }

        if (cleanupTimerRef.current) {
            window.clearTimeout(cleanupTimerRef.current)
        }

        root.classList.remove(THEME_TRANSITION_CLASS, THEME_POWER_ON_CLASS, THEME_POWER_OFF_CLASS)

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                root.classList.add(THEME_TRANSITION_CLASS, nextTheme === "dark" ? THEME_POWER_ON_CLASS : THEME_POWER_OFF_CLASS)
            })
        })

        switchTimerRef.current = window.setTimeout(() => {
            applyTheme(nextTheme)
            switchTimerRef.current = null
        }, THEME_SWITCH_DELAY_MS)

        cleanupTimerRef.current = window.setTimeout(() => {
            root.classList.remove(THEME_TRANSITION_CLASS, THEME_POWER_ON_CLASS, THEME_POWER_OFF_CLASS)
            cleanupTimerRef.current = null
        }, THEME_TRANSITION_DURATION_MS)

        setIsDarkMode(nextTheme === "dark")
    }

    return (
        <button
            onClick={toggleTheme}
            aria-label={isDarkMode ? t("theme.toLight") : t("theme.toDark")}
            className={cn("p-2 rounded-full transition-colors duration-300 focus:outline-none hover:bg-accent/20", className)}
        >
            {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300" /> : <Moon className="h-6 w-6 text-blue-900" />}
        </button>
    )
}