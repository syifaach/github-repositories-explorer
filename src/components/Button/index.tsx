import classNames from 'classnames'
import { ButtonProps } from './constants'

const Button = ({
    className,
    color = 'primary',
    type,
    style,
    label,
    onClick
}: ButtonProps) => {
    /** The color must be the exact name in bootstrap documentation
     * in example: primary, secondary, danger, etc
    */
    const btnClass = classNames('btn', `btn-${color}`)

    return (
        <button
            type={type}
            className={`${btnClass} ${className}`}
            style={style}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default Button