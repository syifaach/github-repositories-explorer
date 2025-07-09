import { useEffect, useState } from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import RepositoryDetail from './components/RepositoriesDetail.tsx'

import { dummy } from '../../constants/variables'
import { RepoDetailData, UserData } from '../../constants/interfaces/repositories/index.ts'

const RepositoryPage = () => {
    const [isSearch, setIsSearch] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [username, setUsername] = useState<string>('')
    const [userData, setUserData] = useState<UserData[]>([])
    const [repoData, setRepoData] = useState<RepoDetailData[]>([])

    const handleChange = (e: any) => {
        const { value } = e?.target
        setUsername(value)
    }

    const onSearch = () => {
        setIsSearch(true)
        getUserData(username)
    }

    const onClickDetail = (username: string) => {
        getRepoData(username)
    }

    const getUserData = async (username: string) => {
        await fetch(`https://api.github.com/search/users?q=${username}`)
            .then(res => res.json())
            .then(async (data) => {
                const dataSlice = data?.items?.slice(0, 5)
                setUserData(dataSlice)
            })
    }

    const getRepoData = async (username: string) => {
        setIsLoading(true)
        
        try {
            await fetch(`https://api.github.com/users/${username}/repos`)
                .then((res: any) => res.json())
                .then((data) => {
                    if (data) {
                        let res: RepoDetailData[] = []
                        for (let i = 0; i < data?.length; i++) {
                            const dataObj = {
                                username: data[i]?.owner?.login,
                                repoTitle: data[i]?.name,
                                repoDescription: data[i]?.description,
                                rating: data[i]?.stargazers_count
                            }
    
                            res.push(dataObj)
                        }
    
                        setRepoData(res)
                    } else {
                        setRepoData([])
                    }
                })
                .catch(error => console.error('Error:', error));
        } catch (err) {
            console.error('Err', err)
        } finally {
            setIsLoading(false)
        }
    }

    console.log('username', username)
    console.log('data', repoData, 'userData', userData)

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
                        <RepositoryDetail data={userData} detailData={repoData} isLoading={isLoading} onClick={onClickDetail} />
                    </div>
                )}
            </div>
        </>
    )
}

export default RepositoryPage