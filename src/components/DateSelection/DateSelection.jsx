import './DateSelection.scss';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import {useState} from "react";

export default function DateSelection({htmlFor, text}) {
    const [value, setValue] = useState(new Date());

    return (
        <div className="flexParentDateTime">
            <label htmlFor={htmlFor}>{text}</label>
            <DateTimePicker
                onChange={setValue}
                value={value}
            />
        </div>
    )
}