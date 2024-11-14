interface CalendarCaseProps {
    number: number
}

const CalendarCase = ({ number }: CalendarCaseProps) => {
    const evenColors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-pink-500", "bg-purple-500"];
    const oddColors = ["bg-red-700", "bg-blue-700", "bg-green-700", "bg-yellow-700", "bg-pink-700", "bg-purple-700"];

    const colSpan = ["col-span-1", "col-span-2"];
    const rowSpan = ["row-span-1", "row-span-2"];

    const colors = number % 2 === 0 ? evenColors : oddColors;

    const randomColorClass = colors[Math.floor(Math.random() * colors.length)];
    const randomColSpanClass = colSpan[Math.floor(Math.random() * colSpan.length)];
    const randomRowSpanClass = rowSpan[Math.floor(Math.random() * rowSpan.length)];

    return (
        <div className={`flex items-center justify-center text-white rounded-lg shadow-xl min-h-[50px] ${randomColorClass} ${randomColSpanClass} ${randomRowSpanClass}`}>
            {number}
        </div>
    )
}

export default CalendarCase