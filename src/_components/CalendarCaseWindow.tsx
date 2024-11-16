import { CalendarCaseWindowProps } from "../lib/types/types"

const CalendarCaseWindow = ({ number }: CalendarCaseWindowProps) => {
    return (
        <div className="text-3xl">
            <h2>{number}</h2>
        </div>
    )
}

export default CalendarCaseWindow