import './DropdownMenu.scss';

export default function DropdownMenu({ htmlFor, text, item, id }) {
    return (
        <div className="flexParentLabelDropdown">
            <label htmlFor={htmlFor}>{text}</label>
            <select id={id} className="dropdown">
                {Array.isArray(item) && item.map((item, index) => (
                    <option key={index}>{item}</option>
                ))}
            </select>
        </div>
    );
}
