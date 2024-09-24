import './DateRange.scss';

export default function DateRange({htmlFor, text}) {
    return (
        <div>
            <label htmlFor={htmlFor}>{text}</label>
        </div>
    )
}