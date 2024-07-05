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
        <div className="flex space-x-2 mb-2">
            {/* Card 1 */}
            {cardsData.map((card, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg p-2 flex-1">
                    <h2 className="text-lg font-bold mb-1">{card.heading}</h2>
                    <p className="text-sm">{card.content}</p>
                </div>
            ))}

            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-2 flex-1">
                <h2 className="text-lg font-bold mb-1">Card 2 Heading</h2>
                <p className="text-sm">Content for Card 2</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-lg p-2 flex-1">
                <h2 className="text-lg font-bold mb-1">Card 3 Heading</h2>
                <p className="text-sm">Content for Card 3</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-md rounded-lg p-2 flex-1">
                <h2 className="text-lg font-bold mb-1">Card 4 Heading</h2>
                <p className="text-sm">Content for Card 4</p>
            </div>

            {/* Card 5 */}
            <div className="bg-white shadow-md rounded-lg p-2 flex-1">
                <h2 className="text-lg font-bold mb-1">Card 5 Heading</h2>
                <p className="text-sm">Content for Card 5</p>
            </div>
        </div>
    );
}

export default SummaryCards;
