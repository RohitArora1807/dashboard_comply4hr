import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Payroll_Comp_Chk_Card = () => {
  const [tableData, setTableData] = useState([]);
  const [toggleState, setToggleState] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('/Payroll.json'); 
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

  const types = ["Factories Sites", "S&E Sites", "Client Sites", "Total Sites"];
  
  return (
    <div className="bg-white shadow-md rounded-lg p-2 w-full md:w-1/2 overflow-hidden">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-montserrat">Payroll Compliance Check  <h3 className="text-base font-bold">(NC Emp Count)</h3> </h2>
     {/* Sliding Toggle Switch */}
     <div
          className={`relative w-28 h-5 rounded bg-gray-300 cursor-pointer`}
          onClick={toggleSwitch}
        >
          <div
            className={`absolute font-montserrat text-xs left-0 top-0 w-14 h-5 flex items-center justify-center rounded bg-white shadow-md transform transition-transform duration-300 ${
              toggleState ? "translate-x-full" : "translate-x-0"
            }`}
          >
            {toggleState ? "Details" : "Overview"}
          </div>
        </div>
      </div>
      <div className="overflow-y-auto h-36" style={{ maxHeight: "150px" }}>
        <table className="min-w-full bg-white">
          <thead className="sticky top-0 bg-gray-600 text-white">
            <tr className="bg-gray-600 text-white">
              <th className="text-sm font-montserrat py-1 px-2 border-b">Entity Type</th>
              <th className="text-sm font-montserrat py-1 px-2 border-b">May-24</th>
              <th className="text-sm font-montserrat py-1 px-2 border-b">Apr-24</th>
              <th className="text-sm font-montserrat py-1 px-2 border-b">Mar-24</th>
            </tr>
          </thead>
          <tbody>
          {tableData.map((row, index) => (
            <tr className="even:bg-white odd:bg-gray-300" key={index}>
              <td className="text-sm font-montserrat py-1 px-2 border-b font-bold">{types[index]}</td>
              <td className="text-sm font-montserrat py-1 px-2 border-b text-center">{row.May}</td>
              <td className="text-sm font-montserrat py-1 px-2 border-b text-center">{row.Apr}</td>
              <td className="text-sm font-montserrat py-1 px-2 border-b text-center">{row.Mar}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payroll_Comp_Chk_Card;
