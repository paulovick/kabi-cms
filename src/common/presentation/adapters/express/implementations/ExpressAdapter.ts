import { Application, Request, Response } from 'express'
import { injectable } from 'inversify'
import { IExpressAdapter } from '../contracts'
import { ExpressRequest, ExpressResponse } from '../dtos'

@injectable()
class ExpressAdapter implements IExpressAdapter {

  private static app: Application

  public static registerApp(app: Application): void {
    ExpressAdapter.app = app
  }

  public use(path: string, handler: (request: ExpressRequest, response: ExpressResponse) => void) {
    const expressHandler = this.getExpressHandler(handler)
    ExpressAdapter.app.use(path, expressHandler)
  }

  public get(path: string, handler: (request: ExpressRequest, response: ExpressResponse) => void) {
    const expressHandler = this.getExpressHandler(handler)
    ExpressAdapter.app.get(path, expressHandler)
  }

  public post(path: string, handler: (request: ExpressRequest, response: ExpressResponse) => void) {
    const expressHandler = this.getExpressHandler(handler)
    ExpressAdapter.app.post(path, expressHandler)
  }

  public put(path: string, handler: (request: ExpressRequest, response: ExpressResponse) => void) {
    const expressHandler = this.getExpressHandler(handler)
    ExpressAdapter.app.put(path, expressHandler)
  }

  public delete(path: string, handler: (request: ExpressRequest, response: ExpressResponse) => void) {
    const expressHandler = this.getExpressHandler(handler)
    ExpressAdapter.app.delete(path, expressHandler)
  }

  private getExpressHandler(handler: (request: ExpressRequest, response: ExpressResponse) => void) {
    const result = (req: Request, res: Response) => {
      const request: ExpressRequest = new ExpressRequest(req)

      const response: ExpressResponse = new ExpressResponse(res)
      
      handler(request, response)
    }

    return result
  }
}

export { ExpressAdapter }