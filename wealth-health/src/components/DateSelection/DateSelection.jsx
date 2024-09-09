import './DateSelection.scss';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

export default function DateSelection({htmlFor, text}) {
    return (
        <div className="flexParentDateTime">
            <label htmlFor={htmlFor}>{text}</label>
            <DateTimePicker />
        </div>
    )
}