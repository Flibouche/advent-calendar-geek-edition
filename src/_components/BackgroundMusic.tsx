import { useState } from "react";
import { FaMusic, FaVolumeMute } from "react-icons/fa";

export const BackgroundMusic = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handleToggleMusic = () => {
        setIsPlaying(prevState => !prevState); // Inverse l'état pour jouer ou arrêter la musique
    }

    return (
        <button
            onClick={handleToggleMusic}
            className="bg-blue-500 text-white px-4 py-2 rounded z-10"
        >
            {isPlaying ? (
                <div className="flex items-center gap-2">
                    <span>Stop music</span>
                    <FaVolumeMute />
                </div>
            ) : (
                <div className="flex items-center gap-2">
                    <span>Play Music</span>
                    <FaMusic />
                </div>
            )
            }
        </button>
    );
};
