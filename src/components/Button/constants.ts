type BootstrapColor =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link'

type ButtonType = 'button' | 'submit' | 'reset'

export interface ButtonProps {
    className?: string
    color?: BootstrapColor
    type?: ButtonType
    style?: any
    label: string
    onClick?(): void
}