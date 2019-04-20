import "reflect-metadata"

import { ContentController } from '../'
import { IExpressAdapter } from '../../../../adapters/express/contracts'
import { ExpressResponse } from '../../../../adapters/express/dtos/ExpressResponse'
import { ExpressRequest } from "../../../../adapters/express/dtos";

describe('ContentController', () => {
  let iExpressAdapterMock: IExpressAdapter
  let contentController: ContentController

  beforeEach(() => {
    iExpressAdapterMock = new (jest.fn<IExpressAdapter, []>(() => ({
      use: jest.fn()
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
        send: jest.fn()
      })))
    })
  
    it('should call response.send', () => {
      contentController.handleRoutes(request, response)
      expect(response.send).toHaveBeenCalled()
    })
  })
})