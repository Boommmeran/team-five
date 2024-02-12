import DatePicker from 'react-datepicker';
import { enGB } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import 'components/Calendar/Calendar.css';

import 'components/Calendar/Calendar.css';

export function Calendar({ selectedDate, onDateChange }) {
  const handleDateChange = date => {
    onDateChange(date);
  };

  return (
   <p>
    <span className='today'> Today,</span>
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="MMMM d"
      minDate={new Date()}
      locale={enGB}
      weekStartsOn={1}
    />
   </p>
  );
}


