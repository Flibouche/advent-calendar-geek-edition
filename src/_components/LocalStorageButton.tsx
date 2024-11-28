import { MdOutlineStorage } from "react-icons/md";

const LocalStorageButton = () => {
    // Fonction pour réinitialiser le localStorage
    const resetLocalStorage = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <div className="relative inline-flex group hover:-translate-y-1 duration-300">
            <div
                className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 group-hover:animate-pulse">
            </div>
            <button
                onClick={resetLocalStorage}
                className="relative inline-flex items-center justify-center px-2 py-2 text-lg font-bold text-white transition-all duration-200 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl focus:ring-2 focus:ring-white"
            >
                <div className="flex items-center gap-2">
                    <span>Reset local storage</span>
                    <MdOutlineStorage />
                </div>
            </button>
        </div>
    )
}

export default LocalStorageButton