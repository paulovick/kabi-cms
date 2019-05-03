import "reflect-metadata"

import { ContentController } from '../'
import { IExpressAdapter } from '../../../../../common/presentation/adapters/express/contracts'
import { ExpressRequest, ExpressResponse } from '../../../../../common/presentation/adapters/express/dtos'

describe('[MVC] ContentController', () => {
  let iExpressAdapterMock: IExpressAdapter
  let contentController: ContentController

  beforeEach(() => {
    iExpressAdapterMock = new (jest.fn<IExpressAdapter, []>(() => ({
      use: jest.fn(),
      get: jest.fn(),
      post: jest.fn(),
      put: jest.fn(),
      delete: jest.fn(),
      set: jest.fn()
    })))
    contentController = new ContentController(iExpressAdapterMock)
  })

  describe('registerRoutes', () => {

    it('should call app.use', () => {
      contentController.registerRoutes()
      expect(iExpressAdapterMock.use).toHaveBeenCalled()
    })
  })
  
  describe('handleRoutes', () => {

    let request: ExpressRequest
    let response: ExpressResponse

    beforeEach(() => {
      request = new (jest.fn())
      response = new (jest.fn(() => ({
        send: jest.fn(),
        status: jest.fn(),
        render: jest.fn()
      })))
    })
  
    it('should call response.send', () => {
      contentController.handleRoutes(request, response)
      expect(response.send).toHaveBeenCalled()
    })
  })
})