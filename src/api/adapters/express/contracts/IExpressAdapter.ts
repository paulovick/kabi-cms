import { ExpressRequest, ExpressResponse } from '../dtos'

interface IExpressAdapter {
  use(path: string, handler: (request: ExpressRequest, response: ExpressResponse) => void): void
}

export { IExpressAdapter }