import { ExpressRequest, ExpressResponse } from '../dtos'

interface IExpressAdapter {
  use(path: string, handler: (request: ExpressRequest, response: ExpressResponse) => void): void
  get(path: string, handler: (request: ExpressRequest, response: ExpressResponse) => void): void
  post(path: string, handler: (request: ExpressRequest, response: ExpressResponse) => void): void
  put(path: string, handler: (request: ExpressRequest, response: ExpressResponse) => void): void
  delete(path: string, handler: (request: ExpressRequest, response: ExpressResponse) => void): void
}

export { IExpressAdapter }