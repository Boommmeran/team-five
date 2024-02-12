import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export function Calendar({ selectedDate, onDateChange }) {
  const handleDateChange = date => {
    onDateChange(date);
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="MMMM d"
      minDate={new Date()}
    />
  );
}
