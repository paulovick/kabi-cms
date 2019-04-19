
import { Application, Request, Response } from 'express'
import { injectable } from 'inversify'
import { IAdminHomeController } from '../contracts'

@injectable()
class AdminHomeController implements IAdminHomeController {

  public registerRoutes(app: Application): void {
    app.use('/api/admin', this.handleRoutes)
  }

  private handleRoutes(request: Request, response: Response): void {
    response.send('Hello!!')
  }
}

export { AdminHomeController }