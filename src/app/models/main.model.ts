export interface ISignInData {
    username: string
    password: string
}

export interface IUser {
    username: string
    image: string
}

export interface IPosition {
    username?: string
    name : IItemPosition,
    image: IItemPosition,
}

interface IItemPosition {
    x: number,
    y: number
}