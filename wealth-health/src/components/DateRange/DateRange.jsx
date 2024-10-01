import './DateRange.scss';
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';

export default function DateRange({ htmlFor, text, value, onChange }) {
    return (
        <div className="flexParentDateRange">
            <label htmlFor={htmlFor}>{text}</label>
            <DateRangePicker
                onChange={onChange}
                value={value}
            />
        </div>
    );
}
