import "reflect-metadata"

import { UsersController } from '..'
import { IExpressAdapter } from '../../../../common/presentation/adapters/express/contracts'
import { ExpressRequest, ExpressResponse } from '../../../../common/presentation/adapters/express/dtos'
import { IUserService } from '../../../../common/application/services/contracts'
import { User } from "../../../../common/domain/entities";

describe('[API] UsersController', () => {
  let iExpressAdapterMock: IExpressAdapter
  let iUserServiceMock: IUserService
  let usersController: UsersController

  let request: ExpressRequest
  let response: ExpressResponse

  beforeEach(() => {
    iExpressAdapterMock = new (jest.fn<IExpressAdapter, []>(() => ({
      use: jest.fn(),
      get: jest.fn(),
      post: jest.fn(),
      put: jest.fn(),
      delete: jest.fn(),
      set: jest.fn()
    })))
    iUserServiceMock = new (jest.fn<IUserService, []>(() => ({
      getById: jest.fn(),
      getByUsername: jest.fn()
    })))

    request = new (jest.fn<ExpressRequest, []>(() => ({
      getParams: jest.fn(),
      setParam: jest.fn()
    })))
    response = new (jest.fn<ExpressResponse, []>(() => ({
      send: jest.fn(),
      status: jest.fn(() => response),
      render: jest.fn()
    })))

    usersController = new UsersController(iExpressAdapterMock, iUserServiceMock)
  })

  describe('registerRoutes', () => {

    it('should call app.use', () => {
      usersController.registerRoutes()
      expect(iExpressAdapterMock.get).toHaveBeenCalledWith('/api/users/:idOrUsername', expect.any(Function))
    })
  })

  describe('getById', () => {

    it('should return 200 and user with id when user exists', async () => {
      const userId: number = 1
      request.getParams = jest.fn(() => ({ id: userId }))
      let user: User | null = null
      iUserServiceMock.getById = jest.fn(async (id: number) => {
        user = new User()
        user.id = id
        return user
      })

      await usersController.getById(request, response)

      expect(request.getParams).toHaveBeenCalled()
      expect(iUserServiceMock.getById).toHaveBeenCalledWith(userId)
      expect(response.status).toHaveBeenCalledWith(200)
      expect(response.send).toHaveBeenCalledWith(user)
    })

    it('should return 404 when user not exists', async () => {
      const userId: number = 1
      request.getParams = jest.fn(() => ({ id: userId }))
      iUserServiceMock.getById = jest.fn(async (id: number): Promise<User | null> => { return null })

      await usersController.getById(request, response)

      expect(request.getParams).toHaveBeenCalled()
      expect(iUserServiceMock.getById).toHaveBeenCalledWith(userId)
      expect(response.status).toHaveBeenCalledWith(404)
    })
  })

  describe('getByUsername', () => {

    it('should return 200 and user with username when user exists', async () => {
      const username: string = 'test-username'
      request.getParams = jest.fn(() => ({ username }))
      let user: User | null = null
      iUserServiceMock.getByUsername = jest.fn(async (username: string) => {
        user = new User()
        user.username = username
        return user
      })

      await usersController.getByUsername(request, response)

      expect(request.getParams).toHaveBeenCalled()
      expect(iUserServiceMock.getByUsername).toHaveBeenCalledWith(username)
      expect(response.status).toHaveBeenCalledWith(200)
      expect(response.send).toHaveBeenCalledWith(user)
    })

    it('should return 404 when user not exists', async () => {
      const username: string = 'test-username'
      request.getParams = jest.fn(() => ({ username }))
      iUserServiceMock.getByUsername = jest.fn(async (username: string): Promise<User | null> => { return null })

      await usersController.getByUsername(request, response)

      expect(request.getParams).toHaveBeenCalled()
      expect(iUserServiceMock.getByUsername).toHaveBeenCalledWith(username)
      expect(response.status).toHaveBeenCalledWith(404)
    })
  })
})