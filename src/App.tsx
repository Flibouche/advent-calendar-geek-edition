import Countdown from "react-countdown";
import { useEffect, useRef, useState } from "react";
import { CalendarState } from "./lib/types/types";

// Components
import CalendarCase from "./_components/CalendarCase";
import { BackgroundMusic } from "./_components/BackgroundMusic";
import LocalStorageButton from "./_components/LocalStorageButton";
import CalendarCaseWindow from "./_components/CalendarCaseWindow";

// Utils
import { shuffle } from "./utils/utils";
import { generateInitialStyles } from "./lib/utils/styles";

// Hooks
import { useSnowflakes } from "./hooks/useSnowflakes.ts";
import { useStrawberries } from "./hooks/useStrawberries.ts";
import { useCalendarState } from "./hooks/useCalendarState.ts";
import { toast } from "react-toastify";
import { MobileMenu } from "./_components/MobileMenu.tsx";

function App() {
    // * --------------- CALENDRIER --------------
    // Je crée un tableau de nombres de 1 à 24
    const numbers = Array.from({ length: 24 }, (_, i) => i + 1);
    // Je crée un état pour stocker les nombres et les styles des cases
    const [calendarState, setCalendarState] = useState<CalendarState>({
        numbers: [],
        styles: {}
    });

    // * -------------- MODALS --------------
    // Je crée un état pour gérer l'ouverture des modals
    const [showModal, setShowModal] = useState(false);
    // Je crée un état pour stocker le nombre de la case sélectionnée
    const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
    // Je crée un état pour stocker les cases cliquées dans le localStorage
    const [clickedCases, setClickedCases] = useState(() => {
        const saved = localStorage.getItem("clickedCases");
        return saved ? JSON.parse(saved) : {};
    })

    // Ouvre une modal avec le numéro de la case sélectionnée
    const openWindow = (number: number) => {
        // Je récupère les cases déjà cliquées dans le localStorage
        const clickedCases = JSON.parse(localStorage.getItem("clickedCases") || "{}");

        // Si la case est déjà ouverte, j'affiche un message
        if (clickedCases[number]) {
            toast.info(`You have already opened this case ! 👀 `);
            return;
        }

        // Je récupère le numéro le plus élevé des cases cliquées
        const maxClickedNumber = Math.max(0, ...Object.keys(clickedCases).map(Number));

        // Je vérifie si la case cliquée est la suivante
        if (!clickedCases[number] && number !== maxClickedNumber + 1) {
            toast.warning(`To open the case, you have to click to the following number : ${maxClickedNumber + 1} 🤦 !`);
            return;
        }

        pageRef.current?.classList.add("blur-sm");
        snowflakes.forEach(snowflake => snowflake.classList.add("blur-sm"));
        strawberries.forEach(strawberry => strawberry.classList.add("blur-sm"));
        setSelectedNumber(number);
        // Je mets à jour l'état des cases cliquées
        setClickedCases((prev: Record<number, boolean>) => {
            const newClickedCases = {
                ...prev, // Je garde les cases déjà cliquées
                [number]: true
            };
            localStorage.setItem("clickedCases", JSON.stringify(newClickedCases));
            return newClickedCases;
        });
        setShowModal(true);
    }

    // Ferme la modal
    const closeWindow = () => {
        pageRef.current?.classList.remove("blur-sm");
        snowflakes.forEach(snowflake => snowflake.classList.remove("blur-sm"));
        strawberries.forEach(strawberry => strawberry.classList.remove("blur-sm"));
        setShowModal(false);
    }

    // * --------------- VIDEO --------------
    const [scrollPosition, setScrollPosition] = useState(0);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        // Fonction pour mettre à jour la position du scroll
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        // Ajout de l'événement de scroll
        window.addEventListener("scroll", handleScroll);
    }, []);

    const videoStyle = { transform: `translateY(${scrollPosition * 1}px)` };

    // * -------------- COMPTEURS --------------
    // Je crée un état pour stocker le nombre de fraises attrapées
    const [count, setCount] = useState(0);

    // Incrémente le nombre de fraises attrapées
    const incrementCount = () => {
        setCount(count => {
            const newCount = count + 1;
            localStorage.setItem("count", JSON.stringify(newCount));
            return newCount;
        });
    }

    // * -------------- DOM ELEMENTS --------------
    // Récupère les éléments DOM pour gérer les effets de flou
    const pageRef = useRef<HTMLDivElement | null>(null);
    const snowflakes = document.querySelectorAll(".snowflake");
    const strawberries = document.querySelectorAll(".strawberry");

    // * -------------- UTILS --------------
    // Utilitaires pour générer les styles initiaux et mélanger les cases
    generateInitialStyles(numbers);
    shuffle(numbers);

    // * ------------ HOOKS ------------
    // Appelle des hooks personnalisés pour gérer le calendrier, les flocons de neige, et les fraises
    useCalendarState(numbers, setCalendarState, setCount, shuffle, generateInitialStyles);
    useSnowflakes();
    useStrawberries(incrementCount);

    return (
        <section className="flex flex-col min-h-screen">
            {/* Modals */}
            <>
                {showModal && selectedNumber !== null && (
                    <CalendarCaseWindow
                        number={selectedNumber}
                        onClose={closeWindow}
                    />
                )}
            </>


            {/* Page */}
            <div ref={pageRef} className="relative flex flex-col flex-grow">
                <MobileMenu />
                {/* Video */}
                <video
                    ref={videoRef}
                    className="absolute h-screen w-full object-cover -z-10"
                    autoPlay
                    muted
                    loop
                    style={videoStyle}
                >
                    <source src="/celeste.mp4" />
                </video>

                {/* Logo */}
                <div className="flex justify-center">
                    <img
                        src='advent-calendar-logo.gif'
                        alt='Advent Calendar Geek Edition Logo'
                        className="w-[750px]"
                    />
                </div>

                {/* Timer */}
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

                {/* Calendar */}
                <div className="flex my-auto md:mt-auto justify-around md:py-7">
                    <div className="hidden md:block"></div>
                    <div className="grid grid-cols-5 lg:grid-cols-6 bg-white bg-opacity-10 rounded-lg p-5 gap-x-2 gap-y-3 grid-flow-dense w-[300px] md:min-w-[700px]">
                        {calendarState.numbers.map(number => (
                            <CalendarCase
                                key={number}
                                number={number}
                                onClick={() => openWindow(number)}
                                style={calendarState.styles[number]}
                                isClicked={clickedCases[number]}
                            />
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="hidden md:flex mt-auto w-full flex-col gap-y-5 md:flex-row justify-center md:items-end md:justify-between bottom-0 left-0 mb-4">
                    <div className="flex justify-center gap-x-2 md:ml-5">
                        <LocalStorageButton />
                        <BackgroundMusic />
                    </div>
                    <span className="text-center text-sm mr-5">
                        Music by ConcernedApe (Eric Barone) - Winter (The Wind Can Be Still)
                    </span>
                </div>

            </div>

        </section>
    );
}

export default App;