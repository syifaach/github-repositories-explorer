import { CardProps } from './constants'

const Card = ({
    cardClass,
    cardBodyClass,
    cardTitle,
    cardContent
}: CardProps) => {
    return (
        <>
            <div className={`card ${cardClass}`}>
                <div className={`card-body ${cardBodyClass}`}>
                    {cardTitle && <h5 className='card-title'>{cardTitle}</h5>}
                    {cardContent}
                </div>
            </div>
        </>
    )
}

export default Card