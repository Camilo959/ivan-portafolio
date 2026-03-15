import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"
import { cn } from "../lib/utils";

const THEME_EVENT = "theme-change"

export const ThemeToggle = ({ className }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

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
        }
    }, [])

    const toggleTheme = () => {
        const nextTheme = isDarkMode ? "light" : "dark"
        document.documentElement.classList.toggle("dark", nextTheme === "dark")
        localStorage.setItem("theme", nextTheme)
        setIsDarkMode(nextTheme === "dark")
        window.dispatchEvent(new Event(THEME_EVENT))
    }

    return (
        <button
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            className={cn("p-2 rounded-full transition-colors duration-300 focus:outline-none hover:bg-accent/20", className)}
        >
            {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300" /> : <Moon className="h-6 w-6 text-blue-900" />}
        </button>
    )
}