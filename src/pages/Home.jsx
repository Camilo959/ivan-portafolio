import { ThemeToggle } from "@/Components/ThemeToggle"
import { BackgroundAnimations } from "@/Components/Background"
import { Navbar } from "@/Components/Navbar"
import { MainSection } from "@/Components/MainSection"
import { AboutSection } from "@/Components/About"
import { Skills } from "@/Components/Skills"
import { Project } from "@/Components/Project"
import { Contact } from "@/Components/Contact"
import { Footer } from "../Components/footer"

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-forground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />
            {/* Background Effect */}
            <BackgroundAnimations />
            {/* Navbar */}
            <Navbar />
            {/* Main Content */}
            <main>
                <MainSection />
                <AboutSection />
                <Skills />
                <Project />
                <Contact/>
            </main>

            {/* Footer */}
            <Footer/>
        </div>
    )
}