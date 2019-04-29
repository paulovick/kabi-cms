import "reflect-metadata"

import each from 'jest-each'

import { UserService } from '../UserService'
import { User } from '../../../../domain/entities'
import { IUserRepository } from '../../../../domain/repositories'

describe('[COMMON] UserService', () => {
    let iUserRepositoryMock: IUserRepository
    let userService: UserService

    beforeEach(() => {
        iUserRepositoryMock = new (jest.fn<IUserRepository, []>(() => ({
            getById: jest.fn(async () => null)
        })))

        userService = new UserService(iUserRepositoryMock)
    })

    describe('getById', () => {

        // it('should return user with id when user exists', () => {
        each([1, 2])
        .test('should return user with id when user exists', async (userId) => {
            iUserRepositoryMock.getById = jest.fn(async (id) => {
                if (id === userId) {
                    let userResult = new User()
                    userResult.id = id
                    return userResult
                } else {
                    return null
                }
            } )

            const user: User | null = await userService.getById(userId)

            expect(user).not.toBeNull()
            expect(user!.id).toBe(userId)
        })

        it('should return null when user doesn\'t exist', async () => {
            const userId = 1
            const user = await userService.getById(userId)

            expect(user).toBeNull()
        })
    })
})