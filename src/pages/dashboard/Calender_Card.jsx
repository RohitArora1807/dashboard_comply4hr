import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';

const CalendarCard = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const today = new Date();

  const renderHeader = () => {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="flex justify-between items-center mb-2">
        <button onClick={prevMonth} className="focus:outline-none text-xs">
          &#60;
        </button>
        <span className="text-sm font-bold">
          {format(currentMonth, dateFormat)}
        </span>
        <button onClick={nextMonth} className="focus:outline-none text-xs">
          &#62;
        </button>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const dateFormat = "EEE";
    const startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="text-xs font-bold text-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="grid grid-cols-7 mb-1">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;

        const isToday = isSameDay(day, today);
        const isSelected = isSameDay(day, selectedDate);
        const isCurrentMonth = isSameMonth(day, monthStart);

        days.push(
          <div
            className={`p-1 text-center cursor-pointer ${!isCurrentMonth ? "text-gray-400" : ""} ${
              isToday ? "bg-green-500 text-white" : ""
            } ${isSelected ? "bg-blue-500 text-white" : ""}`}
            key={day}
            onClick={() => onDateClick(cloneDay)}
          >
            <span className="text-xs">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7" key={day}>
          {days}
        </div>
      );
      days = [];
    }

    return <div>{rows}</div>;
  };

  const onDateClick = (day) => {
    setSelectedDate(day);
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-2">
      <h2 className="text-xs font-bold mb-2">Calendar</h2>
      {renderHeader()}
      {renderDays()}
      {renderCells()}
      {selectedDate && (
        <div className="bg-blue-100 p-2 rounded-lg mt-2">
          <h3 className="text-xs font-bold mb-1">Selected Date</h3>
          <p className="text-xs">{format(selectedDate, "MMMM dd, yyyy")}</p>
          <p className="text-xs mt-1">Details for the selected date go here.</p>
        </div>
      )}
    </div>
  );
};

export default CalendarCard;
