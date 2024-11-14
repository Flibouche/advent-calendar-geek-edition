import CalendarCase from "./_components/CalendarCase"

// Utilisation de l'algorithme de Fisher-Yates pour mélanger les nombres
function shuffle(array: number[]) {
    for (let currentIndex = array.length - 1; currentIndex > 0; currentIndex--) {
        const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

function App() {
    const numbers = Array.from({ length: 24 }, (_, i) => i + 1);
    const shuffledNumbers = shuffle(numbers);

    return (
        <main className="relative h-screen overflow-hidden">
            <video className="absolute w-full object-fill -z-10" autoPlay muted loop>
                <source src="/public/celeste.mp4" />
            </video>
            <h1 className="text-4xl font-bold text-white text-center">Advent Calendar Geek Edition</h1>
            <div className="grid grid-cols-2 place-items-center h-screen">
                <div></div>
                <div className="grid grid-cols-6 gap-4 mr-5">
                    {shuffledNumbers.map((number) => (
                        <CalendarCase number={number} />
                    ))}
                </div>
            </div>
        </main>
    )
}

export default App
