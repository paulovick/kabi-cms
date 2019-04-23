import { injectable, inject } from 'inversify'
import IKabiMvcRouter from './IKabiMvcRouter'
import { IAdminHomeController } from '../controllers/admin/contracts'
import { IContentController } from '../controllers/content/contracts'
import { TYPES } from '../../common/application/ioc/types'

@injectable()
class KabiMvcRouter implements IKabiMvcRouter {

  private iAdminHomeController: IAdminHomeController
  private iContentController: IContentController

  public constructor(
    @inject(TYPES.MvcIAdminHomeController) iAdminHomeController: IAdminHomeController,
    @inject(TYPES.MvcIContentController) iContentController: IContentController
  ) {
    this.iAdminHomeController = iAdminHomeController
    this.iContentController = iContentController
  }

  public registerRoutes(): void {
    this.iAdminHomeController.registerRoutes()
    this.iContentController.registerRoutes()
  }
}

export default KabiMvcRouter