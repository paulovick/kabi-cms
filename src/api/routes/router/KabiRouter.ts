import { Application, Request, Response } from 'express'
import { injectable } from 'inversify'
import IKabiRouter from './IKabiRouter'

@injectable()
class KabiRouter implements IKabiRouter {
  public registerRoutes(app: Application): void {
    app.get('/test', (request: Request, response: Response) => {
      response.send('Hello test!')
    })
  }
}

export default KabiRouter