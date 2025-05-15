// src/components/ui/Card.jsx
const Card = ({ image, title }) => {
return (
    <div className="w-64 h-80 bg-cover bg-center rounded-lg overflow-hidden shadow-lg">
    <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
    ></div>
    <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
        {title}
    </div>
    </div>
);
};

export default Card;