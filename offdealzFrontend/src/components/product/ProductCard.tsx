// src/components/Card.tsx
import React from 'react';

interface CardProps {
    image: string;
    title: string;
    price: string;
    onButtonClick: () => void;
}

const Card: React.FC<CardProps> = ({ image, title, price, onButtonClick }) => {
    return (
        <div className="sm:max-w-72 w-full sm:m-0 m-10 mt-5 mb-5 rounded sm:mt-10 overflow-hidden shadow-lg  transform transition-transform duration-500 hover:scale-105">
            <img className="w-full" src={image} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{price}</p>
            </div>
            <div className="px-6 py-4">
            </div>
        </div>
    );
};

export default Card;
