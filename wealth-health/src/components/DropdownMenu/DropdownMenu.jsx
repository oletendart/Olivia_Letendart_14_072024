import './DropdownMenu.scss';

export default function DropdownMenu({ htmlFor, text, item, id, value, onChange }) {
    return (
        <div className="flexParentLabelDropdown">
            <label htmlFor={htmlFor}>{text}</label>
            <select id={id} className="dropdown" onChange={onChange} value={value}>
                {Array.isArray(item) && item.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
}
