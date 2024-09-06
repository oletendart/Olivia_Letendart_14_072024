import './DropdownMenu.scss';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function DropdownMenu({htmlFor, text, item, id}) {

    const defaultValue = item[0];

    return (
        <div className="flexParentLabelDropdown">
            <label htmlFor={htmlFor}>{text}</label>
            <Dropdown options={item} id={id} value={defaultValue}/>
        </div>
    )
}