// src/components/navigation/NavigationControls.jsx
const NavigationControls = () => {
return (
    <div className="flex justify-center items-center gap-4 py-4">
    <button className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
        ◄
    </button>
    <div className="flex gap-2">
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
    </div>
    <button className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
        ►
    </button>
    </div>
);
};