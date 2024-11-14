import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { CalendarState, CaseStyle } from "./lib/types/types";

// Components
import CalendarCase from "./_components/CalendarCase";

// Utilisation de l'algorithme de Fisher-Yates pour mélanger les nombres
function shuffle(array: number[]) {
    for (let currentIndex = array.length - 1; currentIndex > 0; currentIndex--) {
        const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

// Génération des styles initiaux pour chaque case
function generateInitialStyles(numbers: number[]): Record<number, CaseStyle> {
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

function App() {
    // Je crée un tableau de nombres de 1 à 24
    const numbers = Array.from({ length: 24 }, (_, i) => i + 1);
    // Je crée un état pour stocker les nombres et les styles des cases
    const [calendarState, setCalendarState] = useState<CalendarState>({
        numbers: [],
        styles: {}
    });
    // Je crée un état pour stocker le nombre de fraises attrapées
    const [count, setCount] = useState(0);

    // Je récupère les données du localStorage si elles existent, sinon je les crée
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
            setCount(0);
            localStorage.setItem("calendarState", JSON.stringify(newState));
        }

        if (savedStrawberries) {
            setCount(JSON.parse(savedStrawberries));
        } else {
            setCount(0);
            localStorage.setItem("count", JSON.stringify(0));
        }

    }, []);

    // Fonction pour réinitialiser le localStorage
    const resetLocalStorage = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <section className="relative h-screen overflow-hidden">
            <video className="absolute h-screen w-full object-cover -z-10" autoPlay muted loop>
                <source src="/celeste.mp4" />
            </video>
            <div className="flex justify-center">
                <img
                    src='advent-calendar-logo.gif'
                    alt='Advent Calendar Geek Edition Logo'
                    className="w-[750px]"
                />
            </div>
            <div className="flex flex-col items-start">
                <div className="relative">
                    <div className="absolute bottom-0 -left-5 h-[27px] w-[250px] bg-black -z-10 -skew-x-[20deg]"></div>
                    <Countdown
                        date={new Date(2024, 12, 24)}
                        className="text-stroke text-4xl text-white font-bold ml-5 z-10"
                    />
                </div>
                <button
                    onClick={() => {
                        setCount(count => {
                            const newCount = count + 1;
                            localStorage.setItem("count", JSON.stringify(newCount));
                            return newCount;
                        });
                    }}
                    className="ml-5 text-white"
                >
                    Number of strawberries : {count}
                </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center mt-[75px]">
                <div className="hidden md:block"></div>
                <div className="grid grid-cols-6 gap-x-2 gap-y-3 grid-flow-dense w-[300px] md:min-w-[500px]">
                    {calendarState.numbers.map(number => (
                        <CalendarCase
                            key={number}
                            number={number}
                            style={calendarState.styles[number]}
                        />
                    ))}
                </div>
            </div>
            <div className="absolute bottom-0 left-0 mb-4 ml-5">
                <button
                    onClick={resetLocalStorage}
                    className="text-white bg-red-500 p-2 rounded"
                >
                    Reset local storage
                </button>
            </div>
        </section>
    );
}

export default App;