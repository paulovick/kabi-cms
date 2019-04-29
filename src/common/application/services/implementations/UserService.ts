import { injectable, inject } from 'inversify'
import { IUserService } from '../contracts'
import { User } from '../../../domain/entities'
import { IUserRepository } from '../../../domain/repositories'
import { TYPES } from '../../../ioc/types'

@injectable()
class UserService implements IUserService {

    private iUserRepository: IUserRepository

    public constructor(
        @inject(TYPES.IUserRepository) iUserRepository: IUserRepository
    ) {
        this.iUserRepository = iUserRepository
    }

    public getById(id: number): Promise<User | null> {
        return this.iUserRepository.getById(id)
    }
}

export { UserService }