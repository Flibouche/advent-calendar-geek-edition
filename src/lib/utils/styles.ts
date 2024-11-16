import { CaseStyle } from "../types/types";

// Génération des styles initiaux pour chaque case
export function generateInitialStyles(numbers: number[]): Record<number, CaseStyle> {
    // Je crée des tableaux de couleurs, de colSpan et de rowSpan
    const evenColors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-pink-500", "bg-purple-500"];
    const oddColors = ["bg-red-700", "bg-blue-700", "bg-green-700", "bg-yellow-700", "bg-pink-700", "bg-purple-700"];
    const colSpan = ["col-span-1", "col-span-2"];
    const rowSpan = ["row-span-1", "row-span-2"];

    // Je crée un objet qui contiendra les styles pour chaque case
    const styles: Record<number, CaseStyle> = {};

    // Pour chaque nombre, je choisis aléatoirement une couleur, un colSpan et un rowSpan
    numbers.forEach(number => {
        const colors = number % 2 === 0 ? evenColors : oddColors;
        styles[number] = {
            colorClass: colors[Math.floor(Math.random() * colors.length)],
            colSpanClass: colSpan[Math.floor(Math.random() * colSpan.length)],
            rowSpanClass: rowSpan[Math.floor(Math.random() * rowSpan.length)]
        };
    });

    return styles;
}