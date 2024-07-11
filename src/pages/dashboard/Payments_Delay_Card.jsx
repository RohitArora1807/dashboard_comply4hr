import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Payments_Delay_Card = () => {
  const [tableData, setTableData] = useState([]);
  const [toggleState, setToggleState] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('/Payments.json'); 
            setTableData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, []);

    const toggleSwitch = () => {
      setToggleState(!toggleState);
    };

    const items = ["Monthly Wages", "PF Contribution", "ESI Contribution"];

  return (
    <div className="bg-white shadow-md rounded-lg p-2  overflow-hidden  ">
      <div className="flex justify-between items-center mb-2">
    <h2 className="text-sm font-bold mb-2">Payments Delay (Slippage Metrics)</h2>
     {/* Sliding Toggle Switch */}
     <div
          className={`relative w-28 h-5 rounded bg-gray-300 cursor-pointer`}
          onClick={toggleSwitch}
        >
          <div
            className={`absolute text-xs left-0 top-0 w-14 h-5 flex items-center justify-center rounded bg-white shadow-md transform transition-transform duration-300 ${
              toggleState ? "translate-x-full" : "translate-x-0"
            }`}
          >
            {toggleState ? "Details" : "Overview"}
          </div>
        </div>
      </div>
      <div className="overflow-y-auto h-36 " style={{ maxHeight: "150px" }}>
        <table className="min-w-full bg-white">
          <thead className="sticky top-0 bg-gray-600 text-white">
        <tr className="bg-gray-600 text-white">
          <th className="text-xs py-1 px-2 border-b">Item</th>
          <th className="text-xs py-1 px-2 border-b">Est. Count</th>
          <th className="text-xs py-1 px-2 border-b">Emp. Count</th>
          <th className="text-xs py-1 px-2 border-b">Delay By</th>
        </tr>
      </thead>
      <tbody>
          {tableData.map((row, index) => (
            <tr className="even:bg-white odd:bg-gray-300" key={index}>
              <td className="text-xs py-1 px-2 border-b font-bold">{items[index]}</td>
              <td className="text-xs py-1 px-2 border-b text-center">{row.Est}</td>
              <td className="text-xs py-1 px-2 border-b text-center">{row.Emp}</td>
              <td className="text-xs py-1 px-2 border-b text-center">{row.Delay} Days</td>
            </tr>
            ))}
          </tbody>
    </table>
  </div>
  </div>
  )
}

export default Payments_Delay_Card