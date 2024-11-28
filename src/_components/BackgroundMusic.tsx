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
        <div className="relative inline-flex group hover:-translate-y-1 duration-300">
            <div
                className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#FF675E] via-[#FF44EC] to-[#44BCFF] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 group-hover:animate-pulse">
            </div>
            {/* Bouton pour jouer ou arrêter la musique */}
            <button
                onClick={handleToggleMusic}
                className="relative inline-flex items-center justify-center px-2 py-2 text-lg font-bold text-white transition-all duration-200 bg-gradient-to-r from-[#FF675E] via-[#FF44EC] to-[#44BCFF] rounded-xl focus:ring-2 focus:ring-white"
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
