const ExpandButton = ({ onClick, title = "Agrandar", className = "" }) => {
    return (
        <button
        type="button"
        onClick={onClick}
        title={title}
        className={`absolute right-4 bottom-6 h-9 w-9 rounded-full hover:bg-white/25 border-2 border-white text-white grid place-items-center backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/70 ${className}`}
        >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 3H3v5" />
            <path d="M3 3l7 7" />
            <path d="M16 21h5v-5" />
            <path d="M21 21l-7-7" />
        </svg>
        </button>
    );
};

export default ExpandButton;