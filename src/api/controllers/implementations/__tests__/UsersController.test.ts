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

  beforeEach(() => {
    iExpressAdapterMock = new (jest.fn<IExpressAdapter, []>(() => ({
      use: jest.fn(),
      get: jest.fn(),
      post: jest.fn(),
      put: jest.fn(),
      delete: jest.fn()
    })))
    iUserServiceMock = new (jest.fn<IUserService, []>(() => ({
      getById: jest.fn()
    })))
    usersController = new UsersController(iExpressAdapterMock, iUserServiceMock)
  })

  describe('registerRoutes', () => {

    it('should call app.use', () => {
      usersController.registerRoutes()
      expect(iExpressAdapterMock.get).toHaveBeenCalledWith('/api/users/:id', usersController.getById)
    })
  })
  
  describe('getById', () => {

    let request: ExpressRequest
    let response: ExpressResponse

    beforeEach(() => {
      request = new (jest.fn(() => ({
        getParams: jest.fn(() => ({ id: 1 }))
      })))
      response = new (jest.fn(() => ({
        send: jest.fn(),
        status: jest.fn(() => response)
      })))
    })
  
    it('should return 200 and user with id when user exists', async () => {
      let user: User | null = null
      iUserServiceMock.getById = jest.fn(async (id: number) => {
        user = new User()
        user.id = id
        return user
      })

      await usersController.getById(request, response)

      expect(request.getParams).toHaveBeenCalled()
      expect(iUserServiceMock.getById).toHaveBeenCalledWith(1)
      expect(response.status).toHaveBeenCalledWith(200)
      expect(response.send).toHaveBeenCalledWith(user)
    })

    it('should return 404 when user not exists', async () => {
      iUserServiceMock.getById = jest.fn(async (id: number): Promise<User | null> => { return null })

      await usersController.getById(request, response)

      expect(request.getParams).toHaveBeenCalled()
      expect(iUserServiceMock.getById).toHaveBeenCalledWith(1)
      expect(response.status).toHaveBeenCalledWith(404)
    })
  })
})