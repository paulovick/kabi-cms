
import { injectable, inject } from 'inversify'
import { IAdminHomeController } from '../contracts'
import { ExpressResponse, ExpressRequest } from '../../../../common/presentation/adapters/express/dtos'
import { IExpressAdapter } from '../../../../common/presentation/adapters/express/contracts'
import { TYPES } from '../../../../common/ioc/types'

@injectable()
class AdminHomeController implements IAdminHomeController {

  private iExpressAdapter: IExpressAdapter

  public constructor(
    @inject(TYPES.IExpressAdapter) iExpressAdapter: IExpressAdapter
  ) {
    this.iExpressAdapter = iExpressAdapter
  }

  public registerRoutes(): void {
    this.iExpressAdapter.get('/admin', this.getHome)
  }

  private getHome(request: ExpressRequest, response: ExpressResponse): void {
    const model = {
      message: 'Hello from node!'
    }
    response.render('admin/home', model)
  }
}

export { AdminHomeController }