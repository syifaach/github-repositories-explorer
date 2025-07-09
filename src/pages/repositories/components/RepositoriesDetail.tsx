import Accordion from '../../../components/Accordion'
import { RepositoryDetailProps } from '../../../constants/interfaces/repositories'

const RepositoryDetail = ({ data, detailData, onClick }: RepositoryDetailProps) => {
    const Detail = ({ data }) => {
        return (
            <>
                {data?.map((val: any, idx: number) => (
                    <div key={idx} className='ms-2'>
                        <div className='d-flex justify-content-between align-items-center fw-bold'>
                            <h5>{val?.repoTitle}</h5>
                            <h5>{val?.rating} ⭐</h5>
                        </div>

                        <div>
                            <label>{val?.repoDescription}</label>
                        </div>
                    </div>
                ))}
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
                            header={val.login}
                            onClick={onClick}
                            body={<Detail data={detailData} />}
                        />
                    ))}
            </div>
        </>
    )
}

export default RepositoryDetail