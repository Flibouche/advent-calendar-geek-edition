import { CalendarCaseProps } from "../lib/types/types";

const CalendarCase = ({ number, onClick, style, isClicked }: CalendarCaseProps) => {
    return (
        <button
            onClick={onClick}
            className={`flex items-center justify-center cursor-pointer z-10 transition-all duration-300 hover:scale-110 rounded-lg shadow-xl min-h-[50px] ${style.colSpanClass} ${style.rowSpanClass} ${isClicked
                ? `bg-emerald-600`
                : `${style.colorClass}`
                }`}
        >
            <span className="text-xl md:text-4xl font-bold text-white">
                {number}
            </span>
        </button>
    );
};

export default CalendarCase;