import { useState } from "react";
import LocalStorageButton from "./LocalStorageButton";
import { BackgroundMusic } from "./BackgroundMusic";

export const MobileMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className="absolute top-0 right-0 md:hidden cursor-pointer z-[2500]" onClick={handleMenuToggle}>
                <img src="/strawberry-fly.gif" alt="Menu" width={100} height={100} />
            </div>

            <div className={`md:hidden fixed top-0 right-0 w-full h-screen backdrop-blur bg-black/80 z-[3000] transition-transform duration-700 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button className="absolute top-3 right-12 text-6xl text-white hover:bg-gradient-to-r from-[#FF675E] via-[#FF44EC] to-[#44BCFF] hover:text-transparent hover:bg-clip-text duration-300" onClick={handleMenuToggle}>&times;</button>
                <nav className="flex flex-col justify-center items-center h-screen space-y-3">
                    <LocalStorageButton />
                    <BackgroundMusic />
                </nav>
            </div>
        </>
    )
}