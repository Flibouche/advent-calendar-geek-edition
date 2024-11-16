import { gameData } from "../data/gameData";
import { CalendarCaseWindowProps } from "../lib/types/types"

const CalendarCaseWindow = ({ number }: CalendarCaseWindowProps) => {

    // Fonction pour récupérer le contenu de la case
    const getContent = () => {
        return gameData.find(game => game.number === number); // Je récupère le jeu correspondant au nombre
    }

    const content = getContent(); // Je stocke le contenu de la case dans une variable

    return (
        <div className="absolute inset-0 flex justify-center items-center z-[10000]">
            <div className="flex rounded-lg w-[250px] h-[500px] bg-red-500">
                {content && (
                    <div>
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