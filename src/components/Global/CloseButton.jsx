const CloseButton = ({ onClick }) => {
    return (
        <button
        onClick={onClick}
        className="w-[40px] h-[40px] rounded-full bg-white/40 flex items-center justify-center transition-all duration-300 hover:bg-white/60"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    );
};

export default CloseButton;