import React from 'react'
import DateRangePicker from './components/DateRangePicker/DateRangePicker';
// const predefinedRanges = [
//     {
//       label: 'Last 7 Days',
//       range: [new Date(new Date().setDate(new Date().getDate() - 7)), new Date()],
//     },
//     {
//       label: 'Last 30 Days',
//       range: [new Date(new Date().setDate(new Date().getDate() - 30)), new Date()],
//     },
//   ];

const predefinedRanges = [
    {
      label: 'Last 7 Days',
      range: [new Date(new Date().setDate(new Date().getDate() - 7)), new Date()] as [Date, Date],
    },
    {
      label: 'Last 30 Days',
      range: [new Date(new Date().setDate(new Date().getDate() - 30)), new Date()] as [Date, Date],
    },
  ];
const DatePicker = () => {
  return (
      <DateRangePicker 
        predefinedRanges={predefinedRanges} 
        onChange={(weekdays, weekends) => {
          console.log('Selected Weekdays:', weekdays);
          console.log('Selected Weekends:', weekends);
        }} 
      />
  )
}

export default DatePicker