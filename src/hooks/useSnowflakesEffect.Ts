import { useEffect } from "react";

// Hook pour créer des flocons de neige à intervalles réguliers
export function useSnowflakesEffect(): void {
    useEffect(() => {
        const createSnowflake = () => {
            const snowflake = document.createElement("div");
            snowflake.classList.add("snowflake");
            snowflake.innerText = "❄️";

            snowflake.style.left = Math.random() * 100 + "vw";
            snowflake.style.fontSize = `${Math.random() * 20 + 10}px`;
            snowflake.style.opacity = `${Math.random() * 1 + 0.3}`;
            snowflake.style.animationDuration = Math.random() * 3 + 5 + "s";

            snowflake.addEventListener("click", () => {
                snowflake.remove();
            });

            document.body.appendChild(snowflake);
        };

        const snowInterval = setInterval(createSnowflake, 300);
        const timeout = setTimeout(() => clearInterval(snowInterval), 10000);

        return () => {
            clearInterval(snowInterval);
            clearTimeout(timeout);
        };
    }, []);
}