interface CalendarCaseProps {
    number: number
}

const CalendarCase = ({ number }: CalendarCaseProps) => {
    const evenColors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-pink-500", "bg-purple-500"];
    const oddColors = ["bg-red-700", "bg-blue-700", "bg-green-700", "bg-yellow-700", "bg-pink-700", "bg-purple-700"];

    const isEven = number % 2 === 0;
    const colors = isEven ? evenColors : oddColors;
    const randomColorClass = colors[Math.floor(Math.random() * colors.length)];

    return (
        <div className={`${randomColorClass} w-[125px] h-[50px] flex items-center justify-center text-white`}>
            {number}
        </div>
    )
}

export default CalendarCase