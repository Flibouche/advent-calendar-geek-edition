import { CaseStyle } from "../types/types";

// Génère un gradient aléatoire
function generateRandomGradient(gradients: string[] = []) {
    return gradients[Math.floor(Math.random() * gradients.length)];
}

// Génération des styles initiaux pour chaque case
export function generateInitialStyles(numbers: number[]): Record<number, CaseStyle> {
    // Je crée des tableaux de colSpan et de rowSpan
    const gradients = [
        'bg-gradient-to-r from-fuchsia-500 to-cyan-500',
        'bg-gradient-to-r from-pink-500 to-rose-500',
        'bg-gradient-to-r from-blue-600 to-violet-600',
        'bg-gradient-to-r from-fuchsia-600 to-purple-600',
        'bg-gradient-to-r from-rose-400 to-red-500',
    ]

    // Je crée un objet qui contiendra les styles pour chaque case
    const styles: Record<number, CaseStyle> = {};

    // Pour chaque nombre, je choisis un gradient aléatoire, un colSpan et un rowSpan
    numbers.forEach(number => {
        styles[number] = {
            colorClass: generateRandomGradient(gradients),
            colSpanClass: number === 1 || number === 24
                ? "col-span-2 lg:col-span-3" : "col-span-1",
            rowSpanClass: number === 1 || number === 24
                ? "row-span-3 lg:row-span-10" : "row-span-1 lg:row-span-8",
        };
    });
    return styles;
}