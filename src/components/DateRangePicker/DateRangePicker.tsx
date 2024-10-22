import "./DateRangePicker.css";
import { useState, useEffect } from "react";

// Helper function to check if a date is a weekend
const isWeekend = (date: Date) => {
  const day = date.getDay();
  return day === 6 || day === 0; // 0 = Sunday, 6 = Saturday
};

// Helper function to generate an array of dates between two dates
const getDateRange = (start: Date, end: Date): Date[] => {
  const range: Date[] = [];
  const currentDate = new Date(start);
  while (currentDate <= end) {
    range.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return range;
};

interface DateRangePickerProps {
  predefinedRanges?: { label: string; range: [Date, Date] }[];
  onChange: (weekdays: Date[], weekends: Date[]) => void;
}

const DateRangePicker = ({ predefinedRanges, onChange }:DateRangePickerProps) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [month, setMonth] = useState<number>(new Date().getMonth());
  const [year, setYear] = useState<number>(new Date().getFullYear());

  // Handle date click and selection
  const handleDateClick = (date: Date) => {
    if (isWeekend(date)) return; // Prevent selecting weekends
    if (!startDate || endDate) {
      setStartDate(date);
      setEndDate(null);
    } else if (date >= startDate) {
      setEndDate(date);
    }
  };

  // Trigger the onChange callback when the date range changes
  useEffect(() => {
    if (startDate && endDate) {
      const dateRange = getDateRange(startDate, endDate);
      const weekdays = dateRange.filter(date => !isWeekend(date));
      const weekends = dateRange.filter(isWeekend);
      onChange(weekdays, weekends);
    }
  }, [startDate, endDate, onChange]);

  // Generate the calendar grid for the current month and year
  const generateCalendar = () => {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = getDateRange(firstDayOfMonth, lastDayOfMonth);

    return daysInMonth.map((date) => (
      <button
        type="button"
        key={date.toDateString()}
        disabled={isWeekend(date)}
        className={`calendar-button ${isWeekend(date) ? 'disabled' : ''} ${
          (startDate && !endDate && date.getTime() === startDate.getTime()) || 
          (startDate && endDate && date >= startDate && date <= endDate && !isWeekend(date))
            ? 'selected'
            : ''
        }`}
        onClick={() => handleDateClick(date)}
      >
        {date.getDate()}
      </button>
    ));
  };

  return (
    <div className="date-range-picker">
      <div>
        <button
          type="button"
          onClick={() => setMonth((prev) => (prev === 0 ? 11 : prev - 1))}
          className="navigation-button"
        >
          &lt;
        </button>
        <span className="year-month">{`${year}-${month + 1}`}</span>
        <button
          type="button"
          onClick={() => setMonth((prev) => (prev === 11 ? 0 : prev + 1))}
          className="navigation-button"
        >
          &gt;
        </button>
      </div>
      <div className="navigation-buttons">
        <button type="button" onClick={() => setYear((prev) => prev - 1)} className="navigation-button">Prev Year</button>
        <button type="button" onClick={() => setYear((prev) => prev + 1)} className="navigation-button">Next Year</button>
      </div>
      <div className="calendar-grid">
        {generateCalendar()}
      </div>

      {/* Predefined Ranges */}
      {predefinedRanges && (
        <div className="predefined-range-button-container">
          {predefinedRanges.map((range, index) => (
            <button
              type="button"
              key={range.label}
              onClick={() => {
                setStartDate(range.range[0]);
                setEndDate(range.range[1]);
              }}
              className={`predefined-range-button predefined-range-button-${index}`}
            >
              {range.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;
