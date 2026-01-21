import { cn } from "@/lib/utils"

export const Section = ({ children, className = "" }) => {
    return (
        <section className={cn("px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 max-w-7xl mx-auto", className)}>
            {children}
        </section>
    )
}

export const Container = ({ children, className = "" }) => {
    return (
        <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
            {children}
        </div>
    )
}
