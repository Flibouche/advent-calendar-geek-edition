import { MouseEvent } from "react";
import { gameData } from "../data/gameData";
import { CalendarCaseWindowProps } from "../lib/types/types";
import Confetti from 'react-confetti';
import { FaEye } from "react-icons/fa";

const CalendarCaseWindow = ({ number, onClose }: CalendarCaseWindowProps) => {

    // Fonction pour récupérer le contenu de la case
    const getContent = () => {
        return gameData.find(game => game.number === number); // Je récupère le jeu correspondant au nombre
    }

    const content = getContent(); // Je stocke le contenu de la case dans une variable

    // Fonction pour gérer la fermeture de la fenêtre si on clique en dehors de la fenêtre
    const handleBackgroundClick = (event: MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    }

    const handleSeeMore = () => {
        const description = document.querySelector('.description');
        const seeMore = document.querySelector('.see-more');
        description?.classList.remove('line-clamp-2');
        seeMore?.remove();
    }

    return (
        <div
            className="fixed inset-0 flex justify-center items-center z-[10000] bg-black bg-opacity-50"
            onClick={handleBackgroundClick}
        >
            <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                numberOfPieces={300}
                recycle={false}
            />
            <div className="relative flex flex-col rounded-xl w-[90%] max-w-md backdrop-blur bg-white/30 shadow-lg p-6">
                <button
                    className="absolute top-1 right-4 text-4xl text-black hover:bg-gradient-to-r from-[#FF675E] via-[#FF44EC] to-[#44BCFF] hover:text-transparent hover:bg-clip-text duration-300"
                    onClick={onClose}
                >
                    &times;
                </button>
                {content && (
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <img
                            src={content.imgUrl}
                            alt={content.game}
                            className="rounded-2xl"
                        />
                        <h2 className="text-3xl font-bold capitalize mb-4">
                            {content.game}
                        </h2>
                        <p className="description text-black line-clamp-2 mb-4">{content.description}</p>
                        {content.description.length > 100 && (
                            <div className="flex w-full">
                                <button
                                    className="see-more flex flex-row gap-2 items-center bg-black/20 py-1 px-2 rounded-lg hover:bg-white/60 transition duration-300"
                                    onClick={handleSeeMore}
                                >
                                    <FaEye className="w-[15px]" />
                                    <span>See more</span>
                                </button>
                            </div>
                        )}
                        <div className="flex flex-row gap-2">
                            {content.steamLink && (
                                <a href={content.steamLink} target="_blank" className="hover:-translate-y-1 duration-300">
                                    <img src="/steam.svg" alt="Steam logo" />
                                </a>
                            )}
                            {content.epicLink && (
                                <a href={content.epicLink} target="_blank" className="hover:-translate-y-1 duration-300">
                                    <img src="/epic.svg" alt="Epic logo" />
                                </a>
                            )}
                            {content.itchLink && (
                                <a href={content.itchLink} target="_blank" className="hover:-translate-y-1 duration-300">
                                    <img src="/itch.svg" alt="Itch.io logo" />
                                </a>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CalendarCaseWindow;