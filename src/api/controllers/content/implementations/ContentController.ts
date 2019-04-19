
import { Application, Request, Response } from 'express'
import { injectable } from 'inversify'
import { IContentController } from '../contracts'

@injectable()
class ContentController implements IContentController {

  public registerRoutes(app: Application): void {
    app.use('/', this.handleRoutes)
  }

  private handleRoutes(request: Request, response: Response): void {
    response.send('Hello content!!')
  }
}

export { ContentController }