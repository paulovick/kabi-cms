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
      getById: jest.fn(async (id: number) => {
        let user: User = await new User()
        user.id = id
        return user
      })
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
        send: jest.fn()
      })))
    })
  
    it('should return user with id', async () => {
      await usersController.getById(request, response)

      expect(request.getParams).toHaveBeenCalled()
      expect(iUserServiceMock.getById).toHaveBeenCalledWith(1)
      expect(response.send).toHaveBeenCalled()
    })
  })
})