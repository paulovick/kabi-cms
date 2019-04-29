import { User } from '../entities'

interface IUserRepository {
    getById(id: number): Promise<User | null>
}

export { IUserRepository }