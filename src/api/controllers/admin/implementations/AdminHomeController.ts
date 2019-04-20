
import { injectable, inject } from 'inversify'
import { IAdminHomeController } from '../contracts'
import { ExpressResponse, ExpressRequest } from '../../../adapters/express/dtos'
import { IExpressAdapter } from '../../../adapters/express/contracts'
import { TYPES } from '../../../ioc'

@injectable()
class AdminHomeController implements IAdminHomeController {

  private iExpressAdapter: IExpressAdapter

  public constructor(
    @inject(TYPES.IExpressAdapter) iExpressAdapter: IExpressAdapter
  ) {
    this.iExpressAdapter = iExpressAdapter
  }

  public registerRoutes(): void {
    this.iExpressAdapter.use('/api/admin', this.handleRoutes)
  }

  private handleRoutes(request: ExpressRequest, response: ExpressResponse): void {
    response.send('Hello!!')
  }
}

export { AdminHomeController }