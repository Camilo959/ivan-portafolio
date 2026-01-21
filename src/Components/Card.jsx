import { cn } from "@/lib/utils"

export const Card = ({ children, className = "", hover = true }) => {
    return (
        <div className={cn(
            "rounded-lg bg-card border border-primary/10 p-6 transition-all duration-300",
            hover && "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20",
            className
        )}>
            {children}
        </div>
    )
}

export const CardImage = ({ src, alt, className = "" }) => {
    return (
        <div className={cn("w-full h-48 rounded-lg overflow-hidden bg-surface", className)}>
            <img 
                src={src} 
                alt={alt}
                className="w-full h-full object-cover"
            />
        </div>
    )
}

export const CardHeader = ({ title, subtitle, className = "" }) => {
    return (
        <div className={cn("space-y-2", className)}>
            <h3 className="text-xl font-semibold text-secondary">{title}</h3>
            {subtitle && <p className="text-muted text-sm">{subtitle}</p>}
        </div>
    )
}

export const CardContent = ({ children, className = "" }) => {
    return <div className={cn("space-y-4", className)}>{children}</div>
}

export const CardFooter = ({ children, className = "" }) => {
    return <div className={cn("flex gap-3 pt-4", className)}>{children}</div>
}
