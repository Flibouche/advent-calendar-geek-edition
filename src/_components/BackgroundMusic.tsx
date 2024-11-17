import { useRef, useState } from "react";
import { FaMusic, FaVolumeMute } from "react-icons/fa";

export const BackgroundMusic = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handleToggleMusic = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
        }
        setIsPlaying(prevState => !prevState); // Inverse l'état pour jouer ou arrêter la musique
    }

    return (
        <div>
            {/* Bouton pour jouer ou arrêter la musique */}
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

            {/* L'élément audio qui contient la musique */}
            <audio ref={audioRef} loop>
                <source src="/winter.mp3" type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};
