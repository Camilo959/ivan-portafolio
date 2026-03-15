import { lazy, Suspense, useEffect, useState } from "react"
import { BackgroundAnimations } from "@/Components/Background"
import { Navbar } from "@/Components/Navbar"
import { MainSection } from "@/Components/MainSection"

const AboutSection = lazy(() =>
    import("@/Components/About").then((module) => ({ default: module.AboutSection }))
)

const Skills = lazy(() =>
    import("@/Components/Skills").then((module) => ({ default: module.Skills }))
)

const Project = lazy(() =>
    import("@/Components/Project").then((module) => ({ default: module.Project }))
)

const Contact = lazy(() =>
    import("@/Components/Contact").then((module) => ({ default: module.Contact }))
)

const Footer = lazy(() =>
    import("@/Components/footer").then((module) => ({ default: module.Footer }))
)

const SECTION_FALLBACK = <div className="py-16" aria-hidden="true" />

export const Home = () => {
    const [loadSecondaryContent, setLoadSecondaryContent] = useState(false)

    useEffect(() => {
        let timeoutId
        let idleId

        const scheduleLoad = () => setLoadSecondaryContent(true)

        if ("requestIdleCallback" in window) {
            idleId = window.requestIdleCallback(scheduleLoad, { timeout: 1200 })
        } else {
            timeoutId = window.setTimeout(scheduleLoad, 800)
        }

        return () => {
            if (idleId) {
                window.cancelIdleCallback(idleId)
            }
            if (timeoutId) {
                window.clearTimeout(timeoutId)
            }
        }
    }, [])

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Background Effect */}
            <BackgroundAnimations />
            {/* Navbar */}
            <Navbar />
            {/* Main Content */}

            <main>
                <MainSection />

                {loadSecondaryContent && (
                    <Suspense fallback={SECTION_FALLBACK}>
                        <AboutSection />
                        <Skills />
                        <Project />
                        <Contact />
                    </Suspense>
                )}
            </main>

            {/* Footer */}
            {loadSecondaryContent && (
                <Suspense fallback={SECTION_FALLBACK}>
                    <Footer />
                </Suspense>
            )}
        </div>
    )
}