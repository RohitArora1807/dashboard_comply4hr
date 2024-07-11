import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SummaryCards = () => {
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/data.json'); 
                setCardsData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); 

    return (
        <div className="flex flex-wrap space-x-0 md:space-x-2 mb-2">
            {cardsData.map((card, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg p-2 w-full md:flex-1 mb-2 md:mb-0">
                    <h2 className="text-xl font-bold mb-1">{card.content}</h2>
                    <p className="text-sm font-bold ">{card.heading}</p>
                </div>
            ))}
            
            <div className="bg-white shadow-md rounded-lg p-2 w-full md:flex-1 mb-2 md:mb-0">
            <h2 className="text-xl font-bold mb-1">3</h2>
            <p className="text-sm font-bold ">Factory Sites</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-2 w-full md:flex-1 mb-2 md:mb-0">
            <h2 className="text-xl font-bold mb-1">30</h2>
            <p className="text-sm font-bold ">S&E Sites</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-2 w-full md:flex-1 mb-2 md:mb-0">
            <h2 className="text-xl font-bold mb-1">100</h2>
            <p className="text-sm font-bold ">Client Sites</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-2 w-full md:flex-1 mb-2 md:mb-0">
            <h2 className="text-xl font-bold mb-1">96.85%</h2>
            <p className="text-sm font-bold ">Org. Score</p>
            </div>
        </div>
    );
}

export default SummaryCards;
