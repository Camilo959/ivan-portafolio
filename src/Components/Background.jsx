import { useCallback, useEffect, useState } from "react"

export const BackgroundAnimations = () => {
    const [stars, setStars] = useState([])

    const generateStarsAnimation = useCallback(() => {
        const countStars = Math.floor((window.innerWidth * window.innerHeight) / 1000)
        const neonColors = ["#ffffff", "rgb(19,0,247)", "#ffffff", "rgb(254,6,110)", "#ffffff"]

        const newStars = []
        for (let i = 0; i < countStars; i++) {
            const color = neonColors[Math.floor(Math.random() * neonColors.length)]
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.4 + 0.3,
                animationDuration: (Math.random() * 5 + 1).toFixed(2),
                animationDelay: (Math.random() * 2).toFixed(2),
                color,
            })
        }
        setStars(newStars)
    }, [])

    useEffect(() => {
        generateStarsAnimation()

        let frameId = null
        const handleResize = () => {
            if (frameId) return
            frameId = window.requestAnimationFrame(() => {
                generateStarsAnimation()
                frameId = null
            })
        }

        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
            if (frameId) {
                window.cancelAnimationFrame(frameId)
            }
        }
    }, [generateStarsAnimation])

    return (
        <div aria-hidden="true" className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((item) => (
                <div
                    key={item.id}
                    className="absolute rounded-full animate-float"
                    style={{
                        width: `${item.size}px`,
                        height: `${item.size}px`,
                        left: `${item.x}%`,
                        top: `${item.y}%`,
                        opacity: item.opacity,
                        background: item.color,
                        animationDuration: `${item.animationDuration}s`,
                        animationDelay: `${item.animationDelay}s`,
                    }}
                ></div>
            ))}
        </div>
    )
}
