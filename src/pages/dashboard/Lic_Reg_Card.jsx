import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Lic_Reg_Card = () => {
  const [tableData, setTableData] = useState([]);
  const [toggleState, setToggleState] = useState(false);

  const toggleSwitch = () => {
    setToggleState(!toggleState);
  };

  const types = ["Factories License", "S&E Regn.", "CLRA License", "Trade License"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/Lic.json'); 
        setTableData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-2 w-full tablet:w-1/2 laptop:w-1/2 overflow-hidden h-48">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-montserrat">License & Registrations</h2>

        {/* Sliding Toggle Switch */}
        <div
          className="relative w-28 h-5 rounded bg-gray-300 cursor-pointer"
          onClick={toggleSwitch}
        >
          <div
            className={`absolute text-xs font-montserrat left-0 top-0 w-14 h-5 flex items-center justify-center rounded bg-white shadow-md transform transition-transform duration-300 ${
              toggleState ? "translate-x-full" : "translate-x-0"
            }`}
          >
            {toggleState ? "Details" : "Overview"}
          </div>
        </div>
      </div>

      {/* Conditional Rendering */}
      <div className="fixed-height">
        {toggleState ? (
          <div className="grid grid-rows-2 gap-4 overflow-y-auto h-36 w-full" style={{ gridTemplateColumns: "repeat(4, auto)" }}>
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="bg-gray-200 p-2 rounded-md shadow">
                <p>Data {index + 1}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-y-auto h-48 w-full">
            <table className="w-full bg-white">
              <thead className="sticky top-0 bg-gray-600 text-white">
                <tr className="bg-gray-600 text-white">
                  <th className="text-sm font-montserrat py-1 px-2 border-b">Type</th>
                  <th className="text-sm font-montserrat py-1 px-2 border-b">Valid</th>
                  <th className="text-sm font-montserrat py-1 px-2 border-b">&lt;30-Day</th>
                  <th className="text-sm font-montserrat py-1 px-2 border-b">Expired</th>
                  <th className="text-sm font-montserrat py-1 px-2 border-b">Applied</th>
                  <th className="text-sm font-montserrat py-1 px-2 border-b">Upcoming</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr className="even:bg-white odd:bg-gray-300" key={index}>
                    <td className="text-sm font-montserrat py-1 px-2 border-b font-bold">{types[index]}</td>
                    <td className="text-sm font-montserrat py-1 px-2 border-b text-center">{row.valid}</td>
                    <td className="text-sm font-montserrat py-1 px-2 border-b text-center">{row["<30-Day"]}</td>
                    <td className="text-sm font-montserrat py-1 px-2 border-b text-center">{row.expired}</td>
                    <td className="text-sm font-montserrat py-1 px-2 border-b text-center">{row.applied}</td>
                    <td className="text-sm font-montserrat py-1 px-2 border-b text-center">{row.upcoming}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lic_Reg_Card;
