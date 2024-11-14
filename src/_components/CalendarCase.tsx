import { CaseStyle } from "../lib/types/types";

interface CalendarCaseProps {
    number: number;
    style: CaseStyle;
}

const CalendarCase = ({ number, style }: CalendarCaseProps) => {
    return (
        <div className={`flex items-center justify-center text-white rounded-lg shadow-xl min-h-[50px] ${style.colorClass} ${style.colSpanClass} ${style.rowSpanClass}`}>
            {number}
        </div>
    );
};

export default CalendarCase;