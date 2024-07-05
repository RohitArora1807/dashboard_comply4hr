import React, { useState } from "react";

const Lic_Reg_Card = () => {
  const [toggleState, setToggleState] = useState(false);

  const toggleSwitch = () => {
    setToggleState(!toggleState);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-2 w-1/2 overflow-hidden  ">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-sm font-bold">License & Registrations</h2>

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

      {/* Conditional Rendering */}
      {toggleState ? (
        <div
          className="grid grid-rows-2 gap-4 overflow-y-auto h-36"
          style={{ gridTemplateColumns: "repeat(4, auto)" }}
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="bg-gray-200 p-2 rounded-md shadow">
              <p>Data {index + 1}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="overflow-y-auto h-36" style={{ maxHeight: "150px" }}>
          <table className="min-w-full bg-white">
            <thead className="sticky top-0 bg-gray-600 text-white">
              <tr className="bg-gray-600 text-white">
                <th className="text-xs py-1 px-2 border-b">Type</th>
                <th className="text-xs py-1 px-2 border-b">Valid</th>
                <th className="text-xs py-1 px-2 border-b">&lt;30-Day</th>
                <th className="text-xs py-1 px-2 border-b">Expired</th>
                <th className="text-xs py-1 px-2 border-b">Applied</th>
                <th className="text-xs py-1 px-2 border-b">Upcoming</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 10 }).map((_, index) => (
                <tr className="even:bg-white odd:bg-gray-400" key={index}>
                  <td className="text-xs py-1 px-2 border-b">Data 1</td>
                  <td className="text-xs py-1 px-2 border-b">Data 2</td>
                  <td className="text-xs py-1 px-2 border-b">Data 3</td>
                  <td className="text-xs py-1 px-2 border-b">Data 1</td>
                  <td className="text-xs py-1 px-2 border-b">Data 2</td>
                  <td className="text-xs py-1 px-2 border-b">Data 3</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Lic_Reg_Card;
