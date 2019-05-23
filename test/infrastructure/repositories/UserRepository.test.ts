import "reflect-metadata"

import {UserRepository} from "../../../src/infrastructure/repositories"
import {IDatabaseFactory} from "../../../src/infrastructure/database/factory"
import {IDatabase} from "../../../src/infrastructure/database"
import {User} from "../../../src/domain/entities"

describe('UserRepository', () => {

    let userRepository: UserRepository

    let iDatabaseFactory: IDatabaseFactory
    let iDatabase: IDatabase

    beforeEach(() => {
        iDatabase = new (jest.fn<IDatabase, []>(() => ({
            getById: jest.fn()
        })))
        iDatabaseFactory = new (jest.fn<IDatabaseFactory, []>(() => ({
            getDatabase: jest.fn(() => iDatabase)
        })))
        userRepository = new UserRepository(iDatabaseFactory)
    })

    describe('getById', () => {

        it('should return database user', async () => {
            const expectedUser = aUser()
            const getByIdMock = jest.fn()
            getByIdMock.mockReturnValue(expectedUser)
            iDatabase.getById = getByIdMock

            const actualUser = await userRepository.getById(expectedUser.id)

            expect(actualUser).toBe(expectedUser)
        })

        it('should call iDatabaseFactory.getDatabase', async () => {
            await userRepository.getById(123)

            expect(iDatabaseFactory.getDatabase).toBeCalled()
        })
    })
})

const aUser = () => {
    let user = new User()

    user.id = 123
    user.email = 'some-username@test.com'
    user.username = 'some-username'

    return user
}