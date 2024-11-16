import { CalendarCaseProps } from "../lib/types/types";

const CalendarCase = ({ number, style, onClick }: CalendarCaseProps) => {
    return (
        <div
            onClick={onClick}
            className={`flex items-center justify-center cursor-pointer text-white rounded-lg shadow-xl min-h-[50px] ${style.colorClass} ${style.colSpanClass} ${style.rowSpanClass}`}
        >
            {number}
        </div>
    );
};

export default CalendarCase;