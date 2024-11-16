const LocalStorageButton = () => {
    // Fonction pour réinitialiser le localStorage
    const resetLocalStorage = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <button
            onClick={resetLocalStorage}
            className="text-white bg-red-500 p-2 rounded z-10"
        >
            Reset local storage
        </button>
    )
}

export default LocalStorageButton