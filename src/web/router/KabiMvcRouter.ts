import { injectable, inject } from 'inversify'
import mustacheExpress from 'mustache-express'
import path from 'path'
import IKabiMvcRouter from './IKabiMvcRouter'
import { IAdminHomeController } from '../controllers/admin/contracts'
import { IContentController } from '../controllers/content/contracts'
import { TYPES } from '../../common/ioc/types'
import { IExpressAdapter } from '../../common/presentation/adapters/express/contracts'

@injectable()
class KabiMvcRouter implements IKabiMvcRouter {

  private iAdminHomeController: IAdminHomeController
  private iContentController: IContentController
  private iExpressAdapter: IExpressAdapter

  public constructor(
    @inject(TYPES.MvcIAdminHomeController) iAdminHomeController: IAdminHomeController,
    @inject(TYPES.MvcIContentController) iContentController: IContentController,
    @inject(TYPES.IExpressAdapter) iExpressAdapter: IExpressAdapter
  ) {
    this.iAdminHomeController = iAdminHomeController
    this.iContentController = iContentController
    this.iExpressAdapter = iExpressAdapter
  }

  public registerViewEngine(): void {
    this.iExpressAdapter.engine('html', mustacheExpress())

    this.iExpressAdapter.set('view engine', 'html')
    this.iExpressAdapter.set('views', `${path.dirname(__dirname)}/views`)
  }

  public registerRoutes(): void {
    this.iAdminHomeController.registerRoutes()
    this.iContentController.registerRoutes()
  }
}

export default KabiMvcRouter