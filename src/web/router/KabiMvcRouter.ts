import { injectable, inject } from 'inversify'
import IKabiMvcRouter from './IKabiMvcRouter'
import { TYPES } from '../ioc'
import { IAdminHomeController } from '../controllers/admin/contracts'
import { IContentController } from '../controllers/content/contracts'

@injectable()
class KabiMvcRouter implements IKabiMvcRouter {

  private iAdminHomeController: IAdminHomeController
  private iContentController: IContentController

  public constructor(
    @inject(TYPES.IAdminHomeController) iAdminHomeController: IAdminHomeController,
    @inject(TYPES.IContentController) iContentController: IContentController
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