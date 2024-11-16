const LocalStorageButton = () => {
    // Fonction pour réinitialiser le localStorage
    const resetLocalStorage = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <div>
            <button
                onClick={resetLocalStorage}
                className="text-white bg-red-500 p-2 rounded"
            >
                Reset local storage
            </button>
        </div>
    )
}

export default LocalStorageButton