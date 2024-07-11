import React from 'react'

const Inspection_Return_Card = () => {
  return (
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
  )
}

export default Inspection_Return_Card
