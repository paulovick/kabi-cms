import { Application, Request, Response } from 'express'
import { IExpressAdapter } from '../contracts'
import { ExpressRequest, ExpressResponse } from '../dtos'

class ExpressAdapter implements IExpressAdapter {

  private static app: Application

  public static registerApp(app: Application): void {
    ExpressAdapter.app = app
  }

  public use(path: string, handler: (request: ExpressRequest, response: ExpressResponse) => void) {
    const expressHandler = this.getExpressHandler(handler)
    ExpressAdapter.app.use(path, expressHandler)
  }

  private getExpressHandler(handler: (request: ExpressRequest, response: ExpressResponse) => void) {
    const result = (req: Request, res: Response) => {
      const request: ExpressRequest = new ExpressRequest()
      request.request = req

      const response: ExpressResponse = new ExpressResponse()
      response.response = res
      
      handler(request, response)
    }

    return result
  }
}

export { ExpressAdapter }