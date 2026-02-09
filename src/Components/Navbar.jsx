import { useEffect, useState } from "react"
import { cn } from "../lib/utils"
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/Components/ThemeToggle"

export const Navbar = () => {
    const [Scrolling, setScrolling] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const navItem = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ]
    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 50);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])
    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-300",
            Scrolling ? "py-3 bg-background/80 backdrop-blur-md shadow-md" : "py-5"
        )}>

            <div className="container flex items-center justify-between">
                <a className="text-xl font-bold  flex items-center" href="#home">
                    <span className="relative z-10">
                        <span className="text-glow text-primary"> Ivan </span> <span className="text-secondary">
                            Portifolio
                            </span> 
                    </span>
                </a>

                {/* Right side: desktop links + theme + mobile button */}
                <div className="flex items-center gap-4">
                    {/* large screen Navbar */}
                    <div className="hidden md:flex space-x-8">
                        {navItem.map((item, key) => (
                            <a key={key} href={item.href} className="hover:text-primary text-secondary transition-colors duration-300">{item.name}</a>
                        ))}
                    </div>

                    {/* Theme toggle (moves with navbar) */}
                    <ThemeToggle />

                    {/* small screen Navbar button */}
                    <button onClick={()=>setIsOpenMenu((prev)=> !prev)}
                        className="md:hidden p-2 z-50 text-foreground" 
                        aria-label={isOpenMenu ?"Close Menu" :"Open Menu"}
                    >{isOpenMenu ? <X size={24} />: <Menu size={24} />}</button>
                </div>

                {/* small screen overlay */}
                <div className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isOpenMenu ?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"
                )}>
                    <div className="flex flex-col space-y-8 text-xl items-center">
                        {navItem.map((item, key) => (
                            <a key={key} href={item.href} className="hover:text-primary transition-colors duration-300"
                                onClick={()=>setIsOpenMenu(false)}
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