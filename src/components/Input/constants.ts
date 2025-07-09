export interface InputProps {
    label?: string,
    type?: string,
    name: string,
    classInput?: string,
    placeholder?: string,
    value: string
    onChange?(params: any): void
}