import { useEffect, useState } from "react"
import { cn } from "../lib/utils"
import { Menu, X } from "lucide-react";

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

                {/* large screen Navbar */}
                <div className="hidden md:flex space-x-8">
                    {navItem.map((item, key) => (
                        <a key={key} href={item.href} className="hover:text-primary text-secondary transition-colors duration-300">{item.name}</a>
                    ))}
                </div>
                {/* small screen Navbar */}

                <button onClick={()=>setIsOpenMenu((prev)=> !prev)}
                   className="md:hidden p-2 z-50 text-foreground" 
                    aria-label={isOpenMenu ?"Colse Menu" :"Open Menu"}
                    >{isOpenMenu ? <X size={24} />: <Menu size={24} />}</button>
                <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center", "transition-all duration-300 md:hidden",
                    isOpenMenu ?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"
                )}>
                  <div className="flex flex-col space-y-8 text-xl">
                    {navItem.map((item, key) => (
                        <a key={key} href={item.href} className="hover:text-primary transition-colors duration-300"
                        onClick={()=>setIsOpenMenu(false)}
                        >{item.name}</a>
                    ))}
                </div>
                </div>
            </div>
        </nav>
    )
}


                       
                        // <div className="group perspective w-full h-48">
                        //     <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                            
                        //         <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl flex flex-col justify-center items-center px-4 backface-hidden">
                        //             <Bug className="h-8 w-8 mb-2" />
                        //             <h4 className="text-lg font-bold">Debug & Fix</h4>
                        //         </div>
                             
                        //         <div className="absolute inset-0 bg-white text-green-600 rounded-xl p-4 flex flex-col justify-center items-center  backface-hidden shadow-lg">
                        //             <p className="text-center text-sm">
                        //                 I troubleshoot and fix UI/UX bugs and performance issues.
                        //             </p>
                        //         </div>
                        //     </div>
                        // </div>

                      
                        // <div className="group perspective w-full h-48">
                        //     <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                             
                        //         <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl flex flex-col justify-center items-center px-4 backface-hidden">
                        //             <Palette className="h-8 w-8 mb-2" />
                        //             <h4 className="text-lg font-bold">UI Design</h4>
                        //         </div>
                                
                        //         <div className="absolute inset-0 bg-white text-pink-600 rounded-xl p-4 flex flex-col justify-center items-center rotate-y-180 backface-hidden shadow-lg">
                        //             <p className="text-center text-sm">
                        //                 I design clean and user-friendly interfaces using Figma and Tailwind.
                        //             </p>
                        //         </div>
                        //     </div>
                        // </div>