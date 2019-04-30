import { User } from '../entities'

interface IUserRepository {
    getById(id: number): Promise<User | null>
    getByUsername(username: string): Promise<User | null>
}

export { IUserRepository }