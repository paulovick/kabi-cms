import {inject, injectable} from 'inversify'
import { IUserRepository } from '../../domain/repositories'
import { User } from '../../domain/entities'

@injectable()
class UserRepository implements IUserRepository {

    private users: User[]

    public constructor() {
        this.users = [
            this.getFakeUser(0),
            this.getFakeUser(1),
            this.getFakeUser(2)
        ]
    }

    public async getById(id: number): Promise<User | null> {
        const result = this.users.find(user => user.id === id)
        if (result) return result
        return null
    }

    public async getByUsername(username: string): Promise<User | null> {
        const result = this.users.find(user => user.username === username)
        if (result) return result
        return null
    }

    private getFakeUser(id: number): User {
        let result = new User()
        result.id = id
        result.username = 'username_' + id
        result.email = 'user' + id + '@test.com'
        return result
    }

}

export { UserRepository }