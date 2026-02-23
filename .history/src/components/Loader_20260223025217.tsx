const Loader = () => {
    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-[999]">
            <div className="w-14 h-14 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
    )
}

export default Loader