import React, { useState } from 'react';

const Payroll_Comp_Chk_Card = () => {
    const [toggleState, setToggleState] = useState(false);

    const toggleSwitch = () => {
      setToggleState(!toggleState);
    };
  return (
    <div className="bg-white shadow-md rounded-lg p-2 w-1/2 overflow-hidden ">
              <div className="flex justify-between items-center mb-2">
      <h2 className="text-sm font-bold">
        Payroll Compliance Check (NC Emp Count)
      </h2>
            {/* Sliding Toggle Switch */}
            <div className={`relative w-28 h-5 rounded bg-gray-300 cursor-pointer`} onClick={toggleSwitch}>
          <div className={`absolute text-xs left-0 top-0 w-14 h-5 flex items-center justify-center rounded bg-white shadow-md transform transition-transform duration-300 ${toggleState ? 'translate-x-full' : 'translate-x-0'}`}>
            {toggleState ? 'Details' : 'Overview'}
          </div>
        </div>
      </div>
      <div className="overflow-y-auto h-36 " style={{ maxHeight: "150px" }}>
        <table className="min-w-full bg-white">
          <thead className="sticky top-0 bg-gray-600 text-white">
            <tr className="bg-gray-600 text-white">
              <th className="text-xs py-1 px-2 border-b">Entity Type</th>
              <th className="text-xs py-1 px-2 border-b">May-24</th>
              <th className="text-xs py-1 px-2 border-b">Apr-24</th>
              <th className="text-xs py-1 px-2 border-b">Mar-24</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, index) => (
              <tr className="even:bg-white odd:bg-gray-400" key={index}>
                <td className="text-xs py-1 px-2 border-b">Data 1</td>
                <td className="text-xs py-1 px-2 border-b">Data 2</td>
                <td className="text-xs py-1 px-2 border-b">Data 3</td>
                <td className="text-xs py-1 px-2 border-b">Data 3</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payroll_Comp_Chk_Card;
