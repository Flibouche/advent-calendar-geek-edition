import { useState } from "react";
import { FaMusic, FaVolumeMute } from "react-icons/fa";

export const BackgroundMusic = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handleToggleMusic = () => {
        setIsPlaying(prevState => !prevState); // Inverse l'état pour jouer ou arrêter la musique
    }

    return (
        <div>
            <button
                onClick={handleToggleMusic}
                className="bg-blue-500 text-white px-4 py-2 rounded"
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

            {isPlaying && (
                <audio autoPlay loop>
                    <source src="/winter.mp3" type="audio/mpeg" />
                    Your browser does not support the audio tag.
                </audio>
            )}
        </div>
    );
};
