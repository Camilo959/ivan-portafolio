import { cn } from "@/lib/utils"

export const Button = ({ 
    children, 
    variant = "primary", 
    size = "md",
    className, 
    ...props 
}) => {
    const baseStyles = "rounded-lg font-medium transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
    
    const variants = {
        primary: "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/50 hover:scale-105",
        outline: "border-2 border-primary text-primary hover:bg-primary/10",
        secondary: "bg-surface text-primary hover:bg-surface/80 border border-primary/20"
    }

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    }
    
    return (
        <button 
            className={cn(baseStyles, variants[variant], sizes[size], className)} 
            {...props}
        >
            {children}
        </button>
    )
}
