import { useEffect, useState } from "react"
import { cn } from "../lib/utils"
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/Components/ThemeToggle"

const NAV_ITEMS = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
]

export const Navbar = () => {
    const [scrolling, setScrolling] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const nextValue = window.scrollY > 50
            setScrolling((prevValue) => (prevValue === nextValue ? prevValue : nextValue))
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setIsMenuOpen(false)
            }
        }

        if (isMenuOpen) {
            document.body.style.overflow = "hidden"
            window.addEventListener("keydown", handleEscape)
        }

        return () => {
            document.body.style.overflow = ""
            window.removeEventListener("keydown", handleEscape)
        }
    }, [isMenuOpen])

    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-300",
            scrolling ? "py-3 bg-background/80 backdrop-blur-md shadow-md" : "py-5"
        )}>

            <div className="container flex items-center justify-between">
                <a className="text-xl font-bold  flex items-center" href="#home">
                    <span className="relative z-10">
                        <span className="text-glow text-primary"> Ivan </span> <span className="text-secondary">
                            Portafolio
                        </span>
                    </span>
                </a>

                {/* Right side: desktop links + theme + mobile button */}
                <div className="flex items-center gap-4">
                    {/* large screen Navbar */}
                    <div className="hidden md:flex space-x-8">
                        {NAV_ITEMS.map((item) => (
                            <a key={item.href} href={item.href} className="hover:text-primary text-secondary transition-colors duration-300">{item.name}</a>
                        ))}
                    </div>

                    {/* Theme toggle (moves with navbar) */}
                    <ThemeToggle />

                    {/* small screen Navbar button */}
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="md:hidden p-2 z-50 text-foreground"
                        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                    </button>
                </div>

                {/* small screen overlay */}
                <div
                    id="mobile-menu"
                    className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
                >
                    <div className="flex flex-col space-y-8 text-xl items-center">
                        {NAV_ITEMS.map((item) => (
                            <a key={item.href} href={item.href} className="hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >{item.name}</a>
                        ))}
                        {/* Theme toggle also inside mobile menu */}
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    )
}