import React from 'react';

const Upcoming_Card = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-2  overflow-hidden">

      <h2 className="text-sm font-bold mb-1">UPCOMING</h2>
      <ul className="divide-y divide-gray-200">
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={index} className="flex flex-col sm:flex-row justify-between items-center mb-1 p-1 bg-gray-200 rounded">
            <span className="text-xs mb-1 sm:mb-0">Event of pending tasks {index + 1}</span>
            <button className="text-xs bg-gray-300 rounded px-2 py-1 mt-1 sm:mt-0 sm:ml-2">View</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Upcoming_Card;
