import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SummaryCards = () => {
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/https://github.com/RohitArora1807/dashboard_comply4hr/blob/main/public/data.json'); 
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
                    <h2 className=" font-montserrat text-3xl mb-1">{card.content}</h2>
                    <p className="  text-base font-montserrat ">{card.heading}</p>
                </div>
            ))}
            
            <div className="bg-white shadow-md rounded-lg p-2 w-full md:flex-1 mb-2 md:mb-0">
            <h2 className="text-3xl font-montserrat mb-1">3</h2>
            <p className="text-base font-montserrat ">Factory Sites</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-2 w-full md:flex-1 mb-2 md:mb-0">
            <h2 className="text-3xl font-montserrat mb-1">30</h2>
            <p className="text-base font-montserrat ">S&E Sites</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-2 w-full md:flex-1 mb-2 md:mb-0">
            <h2 className="text-3xl font-montserrat mb-1">100</h2>
            <p className="text-base font-montserrat ">Client Sites</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-2 w-full md:flex-1 mb-2 md:mb-0">
            <h2 className="text-3xl font-montserrat mb-1">96.85%</h2>
            <p className="text-base font-montserrat ">Org. Score</p>
            </div>
        </div>
    );
}

export default SummaryCards;
