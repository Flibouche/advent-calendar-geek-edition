import { useState } from "react";
import Countdown from "react-countdown";
import { CalendarState } from "./lib/types/types";

// Components
import CalendarCase from "./_components/CalendarCase";
import CalendarCaseWindow from "./_components/CalendarCaseWindow";
import { BackgroundMusic } from "./_components/BackgroundMusic";

// Utils
import { generateInitialStyles } from "./lib/utils/styles";
import { shuffle } from "./utils/utils";

// Hooks
import { useCalendarState } from "./hooks/useCalendarStateEffect";
import { useSnowflakes } from "./hooks/useSnowflakesEffect";
import { useStrawberries } from "./hooks/useStrawberriesEffect";
import LocalStorageButton from "./_components/LocalStorageButton";

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
    // Je crée un état pour gérer l'ouverture de la fenêtre
    const [showModal, setShowModal] = useState(false);
    // Je crée un état pour stocker le nombre de la case sélectionnée
    const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

    const incrementCount = () => {
        setCount(count => {
            const newCount = count + 1;
            localStorage.setItem("count", JSON.stringify(newCount));
            return newCount;
        });
    }

    const openWindow = (number: number) => {
        setSelectedNumber(number);
        setShowModal(true);
    }

    const closeWindow = () => {
        setSelectedNumber(null);
        setShowModal(false);
    }

    // J'appelle mes utilitaires personnalisés
    generateInitialStyles(numbers);
    shuffle(numbers);

    // J'appelle mes hooks personnalisés
    useCalendarState(numbers, setCalendarState, setCount, shuffle, generateInitialStyles);
    useSnowflakes();
    useStrawberries(incrementCount);

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
                        date={new Date(2024, 11, 24)}
                        className="text-stroke text-4xl text-white font-bold ml-5 z-10"
                    />
                </div>
                <p className="ml-5 text-white">Number of strawberries : {count}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center mt-[75px]">
                <div className="hidden md:block"></div>
                <div className="grid grid-cols-6 gap-x-2 gap-y-3 grid-flow-dense w-[300px] md:min-w-[500px]">
                    {calendarState.numbers.map(number => (
                        <CalendarCase
                            key={number}
                            number={number}
                            onClick={() => openWindow(number)}
                            style={calendarState.styles[number]}
                        />
                    ))}
                </div>
                <div>
                    {showModal && selectedNumber !== null && (
                        <CalendarCaseWindow
                            number={selectedNumber}
                            onClose={closeWindow}
                        />
                    )}
                </div>
            </div>
            <div className="absolute w-full flex flex-col gap-y-5 md:flex-row justify-center md:items-end md:justify-between bottom-0 left-0 mb-4">
                <div className="flex justify-center gap-x-2 md:ml-5">
                    <LocalStorageButton />
                    <BackgroundMusic />
                </div>
                <span className="text-center text-sm mr-5">
                    Music by ConcernedApe (Eric Barone) - Winter (The Wind Can Be Still)
                </span>
            </div>
        </section>
    );
}

export default App;