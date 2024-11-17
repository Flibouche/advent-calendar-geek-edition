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