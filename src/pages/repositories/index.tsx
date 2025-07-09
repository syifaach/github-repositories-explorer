import { useState } from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import RepositoryDetail from './components/RepositoriesDetail.tsx'

import { dummy } from '../../constants/variables'
import { Data } from '../../constants/interfaces/repositories/index.ts'

const RepositoryPage = () => {
    const [isSearch, setIsSearch] = useState<boolean>(false)
    const [username, setUsername] = useState<string>('')
    const [data, setData] = useState<Data[]>([])

    const handleChange = (e: any) => {
        const { value } = e?.target
        setUsername(value)
    }

    const onSearch = () => {
        setIsSearch(true)
        const filter = dummy?.filter((val) => val.username.includes(username))
        setData(filter)
    }

    console.log('username', username)
    console.log('dummy', dummy, 'data', data)

    return (
        <>
            <div
                className='w-100 d-flex flex-column justify-content-center'
                style={{ padding: '70px' }}
            >
                <Input
                    name='username'
                    value={username}
                    placeholder='Enter username'
                    onChange={handleChange}
                />
                <Button
                    className='w-100 mt-2'
                    color='primary'
                    label='Search'
                    onClick={onSearch}
                />

                {isSearch && (
                    <div className='mt-2'>
                        <label>Showing users for "Exampleuser1"</label>
                        <RepositoryDetail data={data} />
                    </div>
                )}
            </div>
        </>
    )
}

export default RepositoryPage