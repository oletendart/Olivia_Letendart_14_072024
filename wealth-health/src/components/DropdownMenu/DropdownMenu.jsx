import './DropdownMenu.scss';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function DropdownMenu({htmlFor, text, id}) {
    const options = [
        'one', 'two', 'three'
    ];
    const defaultOption = options[0];

    return (
        <>
            <label htmlFor={htmlFor}>{text}</label>
            <Dropdown options={options}  value={defaultOption} id={id} />
        </>
    )
}