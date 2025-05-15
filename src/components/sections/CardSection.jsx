// src/components/sections/CardSection.jsx
import Card from "../ui/Card";

const CardSection = () => {
const cards = [
{ image: "/Fondo1.svg", title: "El Café en Guatemala" },
{ image: "/Fondo1.svg", title: "Las 8 Regiones" },
{ image: "/Fondo1.svg", title: "Sistemas Agroforestales" },
];

return (
<div className="flex justify-center gap-6 py-10">
    {cards.map((card, index) => (
    <Card key={index} image={card.image} title={card.title} />
    ))}
</div>
);
};

export default CardSection;