import { injectable } from 'inversify'
import { IUserService } from '../contracts'
import { User } from '../../../domain/entities'

@injectable()
class UserService implements IUserService {
    public async getById(id: number): Promise<User> {
        // MOCK
        let user = new User()
        user.id = id
        user.email = 'test@test.com'
        user.username = 'test'
        return user
    }
}

export { UserService }