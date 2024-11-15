import { useEffect } from "react";
import { CalendarState, CaseStyle } from "../lib/types/types";

// Je récupère les données du localStorage si elles existent, sinon je les crée
export function useCalendarState(
    numbers: number[],
    setCalendarState: (state: CalendarState) => void,
    setCount: (count: number) => void,
    shuffle: (array: number[]) => number[],
    generateInitialStyles: (numbers: number[]) => Record<number, CaseStyle>
) {
    useEffect(() => {
        const savedState = localStorage.getItem("calendarState");
        const savedStrawberries = localStorage.getItem("count");

        if (savedState) {
            setCalendarState(JSON.parse(savedState));
        } else {
            const shuffledNumbers = shuffle([...numbers]);
            const newStyles = generateInitialStyles(shuffledNumbers);
            const newState = {
                numbers: shuffledNumbers,
                styles: newStyles
            };
            setCalendarState(newState);
            localStorage.setItem("calendarState", JSON.stringify(newState));
        }

        if (savedStrawberries) {
            setCount(JSON.parse(savedStrawberries));
        } else {
            setCount(0);
            localStorage.setItem("count", JSON.stringify(0));
        }

    }, []);
}

// Hook pour créer des flocons de neige à intervalles réguliers
export function useSnowflakes() {
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

        const strawberriesInterval = setInterval(createStrawberry, 10000);
        const strawberriesIntervalRemove = setInterval(removeAutomaticallyStrawberry, 20000);

        return () => {
            clearInterval(strawberriesInterval);
            clearInterval(strawberriesIntervalRemove);
        };
    }, []);
}