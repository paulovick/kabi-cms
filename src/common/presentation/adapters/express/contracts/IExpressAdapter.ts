import { ExpessEngine } from 'mustache-express'
import { ExpressRequest, ExpressResponse } from '../dtos'

interface IExpressAdapter {
  use(path: string, handler: (request: ExpressRequest, response: ExpressResponse) => void): void
  get(path: string, handler: (request: ExpressRequest, response: ExpressResponse) => void): void
  post(path: string, handler: (request: ExpressRequest, response: ExpressResponse) => void): void
  put(path: string, handler: (request: ExpressRequest, response: ExpressResponse) => void): void
  delete(path: string, handler: (request: ExpressRequest, response: ExpressResponse) => void): void
  engine(type: string, engine: ExpessEngine): void
  set(setting: string, value: any): void
}

export { IExpressAdapter }