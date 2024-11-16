import { MouseEvent } from "react";
import { gameData } from "../data/gameData";
import { CalendarCaseWindowProps } from "../lib/types/types"

const CalendarCaseWindow = ({ number, onClose }: CalendarCaseWindowProps) => {

    // Fonction pour récupérer le contenu de la case
    const getContent = () => {
        return gameData.find(game => game.number === number); // Je récupère le jeu correspondant au nombre
    }

    const content = getContent(); // Je stocke le contenu de la case dans une variable

    const handleBackgroundClick = (event: MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    }

    return (
        <div
            className="absolute inset-0 flex justify-center items-center z-[10000]"
            onClick={handleBackgroundClick}
        >
            <div className="relative flex flex-col rounded-lg w-[250px] h-[500px] bg-red-500">
                <p
                    className="absolute top-0 right-0 mr-2 cursor-pointer"
                    onClick={onClose}
                >
                    X
                </p>
                {content && (
                    <div className="">
                        <h2>{content.number}</h2>
                        <h3>{content.game}</h3>
                        <p>{content.description}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CalendarCaseWindow