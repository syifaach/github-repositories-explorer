import Accordion from '../../../components/Accordion'
import Card from '../../../components/Card'
import { RepositoryDetailProps } from '../../../constants/interfaces/repositories'

const RepositoryDetail = ({ data, detailData, isLoading, onClick }: RepositoryDetailProps) => {
    const Detail = ({ data }) => {
        return (
            <>
                {isLoading &&
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }
                {!isLoading && data?.map((val: any, idx: number) => (
                    <Card cardClass='p-1 mb-2' cardContent={
                        <div key={idx} className='ms-2'>
                            <div className='d-flex justify-content-between align-items-center fw-bold'>
                                <h5>{val?.repoTitle}</h5>
                                <h5>{val?.rating} ⭐</h5>
                            </div>

                            <div>
                                <label>{val?.repoDescription}</label>
                            </div>
                        </div>
                    } />
                ))}
            </>
        )
    }

    console.log('loading', isLoading)

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