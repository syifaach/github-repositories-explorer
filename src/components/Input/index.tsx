import { InputProps } from './constants'

const Input = ({
    label,
    type,
    name,
    classInput,
    placeholder,
    value,
    onChange
}: InputProps) => {
    return (
        <>
            <div>
                {label && <label className='form-label'>{label}</label>}
                <input
                    type={type}
                    name={name}
                    className={`form - control ${classInput}`}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </>
    )
}

export default Input