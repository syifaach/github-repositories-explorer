import Accordion from '../../../components/Accordion'
import { RepositoryDetailProps } from '../../../constants/interfaces/repositories'

const RepositoryDetail = ({ data }: RepositoryDetailProps) => {
    const Detail = ({ data }) => {
        return (
            <>
                <div className='ms-2'>
                    <div className='d-flex justify-content-between align-items-center fw-bold'>
                        <h5>{data?.repoTitle}</h5>
                        <h5>{data?.rating} ⭐</h5>
                    </div>

                    <div>
                        <label>{data?.repoContent}</label>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className='accordion' id='accordionExample'>
                {data &&
                    data.map((val: any, idx: number) => (
                        <Accordion
                            key={idx}
                            id={idx}
                            header={val.username}
                            body={<Detail data={val} />}
                        />
                    ))}
            </div>
        </>
    )
}

export default RepositoryDetail