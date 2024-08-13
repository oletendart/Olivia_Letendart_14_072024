import "./InputForm.scss";

export default function InputForm({htmlFor, text, type, id, name, required}) {
    return (
        <>
            <label htmlFor={htmlFor}>{text}</label>
            <input type={type}
                   id={id}
                   name={name}
                   required={required}
                   />
        </>
    )
}