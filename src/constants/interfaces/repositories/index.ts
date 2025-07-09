export interface RepositoryDetailProps {
    data?: any,
    detailData?: any,
    onClick?(params?: any): void
}

export interface UserData {
    username: string
}

export interface RepoDetailData {
    username: string,
    repoTitle: string,
    repoDescription: string,
    rating: number
}