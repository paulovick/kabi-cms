import { User } from '../../../domain/entities'

interface IUserService {
    getById(id: number): Promise<User | null>
}

export { IUserService }