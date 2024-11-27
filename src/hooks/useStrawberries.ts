import { useEffect } from "react";

// Hook pour créer des fraises à intervalles réguliers
export function useStrawberries(incrementCount: () => void) {
    useEffect(() => {
        const createStrawberry = () => {
            const strawberry = document.createElement("img");
            strawberry.classList.add("strawberry");
            strawberry.src = "strawberry.png";
            strawberry.classList.add("w-10");
            strawberry.style.left = Math.random() * 100 + "vw";
            strawberry.style.animationDuration = Math.random() * 3 + 5 + "s";

            strawberry.addEventListener("click", () => {
                incrementCount();
                strawberry.remove();
            });

            document.body.appendChild(strawberry);
        };

        const removeAutomaticallyStrawberry = () => {
            const strawberry = document.querySelectorAll(".strawberry");
            if (strawberry.length > 0) {
                strawberry.forEach(strawberry => {
                    strawberry.remove();
                })
            }
        }

        const strawberriesInterval = setInterval(createStrawberry, 7000);
        const strawberriesIntervalRemove = setInterval(removeAutomaticallyStrawberry, 20000);

        return () => {
            clearInterval(strawberriesInterval);
            clearInterval(strawberriesIntervalRemove);
        };
    }, []);
}