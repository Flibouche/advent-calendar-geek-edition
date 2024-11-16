import { CaseStyle } from "../types/types";

// Génère un gradient aléatoire
function generateRandomGradient(gradients: string[] = []) {
    return gradients[Math.floor(Math.random() * gradients.length)];
}

// Génération des styles initiaux pour chaque case
export function generateInitialStyles(numbers: number[]): Record<number, CaseStyle> {
    // Je crée des tableaux de colSpan et de rowSpan
    const gradients = [
        'bg-gradient-to-r from-red-500 to-orange-500',
        'bg-gradient-to-r from-blue-500 to-cyan-500',
        'bg-gradient-to-r from-green-500 to-emerald-500',
        'bg-gradient-to-r from-yellow-500 to-amber-500',
        'bg-gradient-to-r from-pink-500 to-rose-500',
        'bg-gradient-to-r from-purple-500 to-fuchsia-500',
        'bg-gradient-to-r from-orange-500 to-amber-500',
        'bg-gradient-to-r from-teal-500 to-cyan-500',
        'bg-gradient-to-r from-indigo-500 to-blue-500',
    ]

    const colSpan = ["col-span-1", "col-span-2"];
    const rowSpan = ["row-span-1", "row-span-2"];

    // Je crée un objet qui contiendra les styles pour chaque case
    const styles: Record<number, CaseStyle> = {};

    // Pour chaque nombre, je choisis un gradient aléatoire, un colSpan et un rowSpan
    numbers.forEach(number => {
        styles[number] = {
            colorClass: generateRandomGradient(gradients),
            colSpanClass: colSpan[Math.floor(Math.random() * colSpan.length)],
            rowSpanClass: rowSpan[Math.floor(Math.random() * rowSpan.length)]
        };
    });

    return styles;
}