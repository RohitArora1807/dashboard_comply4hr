import React from 'react';
import Lic_Reg_Card from './Lic_Reg_Card';
import Payroll_Comp_Chk_Card from './Payroll_Comp_Chk_Card';
import Summary_Cards from './Summary_Cards';

const Board = () => {
  const headings = [
    133,
    3,
    30,
    100,
    96.85,
  ];

  const details = [
    'Total Active Sites',
    'Details about Customer Satisfaction.',
    'Details about Product Performance.',
    'Details about Financial Report.',
    'Details about User Engagement.',
  ];

  return (
    <div className=' w-full ml-20 space-x-2'>
    <div className="p-2 flex space-x-2">
      <div className="flex-1">
        {/* Row of 5 summary cards */}
        <Summary_Cards />

        {/* Flex container for the tables */}
        <div className="flex space-x-2 mb-2">
          {/* license and Rgistration table */}
          <Lic_Reg_Card />

          {/* payroll compliance table */}
         
          <Payroll_Comp_Chk_Card/>
        </div>

        {/* Flex container for Payments Delay, Return Delay, and Vendor Compliance Audits */}
        <div className="flex space-x-2 mb-2">
          <div className="flex-1 flex flex-col space-y-2">
            {/* Payments Delay (Slippage Metrics) */}
            <div className="bg-white shadow-md rounded-lg p-2 overflow-y-auto" style={{ height: '150px' }}>
              <h2 className="text-sm font-bold mb-2">Payments Delay (Slippage Metrics)</h2>
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-600 text-white">
                    <th className="text-xs py-1 px-2 border-b">Header 1</th>
                    <th className="text-xs py-1 px-2 border-b">Header 2</th>
                    <th className="text-xs py-1 px-2 border-b">Header 3</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 10 }).map((_, index) => (
                    <tr className="even:bg-white odd:bg-gray-400" key={index}>
                      <td className="text-xs py-1 px-2 border-b">Data 1</td>
                      <td className="text-xs py-1 px-2 border-b">Data 2</td>
                      <td className="text-xs py-1 px-2 border-b">Data 3</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Return Delay summary card */}
            <div className="bg-white shadow-md rounded-lg p-2 overflow-y-auto" style={{ height: '150px' }}>
              <h2 className="text-sm font-bold mb-2">Return Delay (Slippage Metrics)</h2>
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-600 text-white">
                    <th className="text-xs py-1 px-2 border-b">Header 1</th>
                    <th className="text-xs py-1 px-2 border-b">Header 2</th>
                    <th className="text-xs py-1 px-2 border-b">Header 3</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 10 }).map((_, index) => (
                    <tr className="even:bg-white odd:bg-gray-400" key={index}>
                      <td className="text-xs py-1 px-2 border-b">Data 1</td>
                      <td className="text-xs py-1 px-2 border-b">Data 2</td>
                      <td className="text-xs py-1 px-2 border-b">Data 3</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Vendor Compliance Audits card */}
          <div className="bg-white shadow-md rounded-lg p-2 w-1/2">
            <h2 className="text-lg font-bold mb-2">Vendor Compliance Audits</h2>
            <div className="h-32"></div>
          </div>
        </div>
      </div>

      {/* Right sidebar */}
      <div className="w-1/4 space-y-2">
        {/* Upcoming events card */}
        <div className="bg-white shadow-md rounded-lg p-2">
          <h2 className="text-sm font-bold mb-1">UPCOMING</h2>
          <ul>
            {Array.from({ length: 5 }).map((_, index) => (
              <li key={index} className="flex justify-between items-center mb-1 p-1 bg-gray-200 rounded">
                <span className="text-xs">Event {index + 1}</span>
                <button className="text-xs bg-gray-300 rounded px-2 py-1">View</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Inspection and return card */}
        <div className="bg-white shadow-md rounded-lg p-2">
          <h2 className="text-sm font-bold mb-1">Inspections & Returns</h2>
          <div className="flex flex-col space-y-1">
            <div className="flex justify-between items-center p-1 bg-gray-200 rounded">
              <span className="text-xs">In Progress</span>
              <span className="text-xs">(2)</span>
            </div>
            <div className="flex justify-between items-center p-1 bg-gray-200 rounded">
              <span className="text-xs">Closed</span>
              <span className="text-xs">(2)</span>
            </div>
          </div>
        </div>

        {/* Calendar card */}
        <div className="bg-white shadow-md rounded-lg p-2">
          <h2 className="text-sm font-bold mb-2">Calendar</h2>
          <p className="text-xs">Calendar details go here.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Board;
