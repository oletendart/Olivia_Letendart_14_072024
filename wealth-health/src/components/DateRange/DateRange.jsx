import './DateRange.scss';
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';
import {useState} from "react";

export default function DateRange({htmlFor, text}) {
    const [value, setValue] = useState(new Date());

    return (
        <div className="flexParentDateRange">
            <label htmlFor={htmlFor}>{text}</label>
            <DateRangePicker
                onChange={setValue}
                value={value}
            />
        </div>
    )
}