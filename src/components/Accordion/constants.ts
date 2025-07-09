export interface AccordionProps {
    id: number,
    header: string,
    body: any,
    onClick?(params?: any): void
}