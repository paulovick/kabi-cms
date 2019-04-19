import { Application } from 'express'
import { injectable, inject } from 'inversify'
import IKabiRouter from './IKabiRouter'
import { TYPES } from '../ioc'
import { IAdminHomeController } from '../controllers/admin/contracts'
import { IContentController } from '../controllers/content/contracts'

@injectable()
class KabiRouter implements IKabiRouter {

  private iAdminHomeController: IAdminHomeController
  private iContentController: IContentController

  public constructor(
    @inject(TYPES.IAdminHomeController) iAdminHomeController: IAdminHomeController,
    @inject(TYPES.IContentController) iContentController: IContentController
  ) {
    this.iAdminHomeController = iAdminHomeController
    this.iContentController = iContentController
  }

  public registerRoutes(app: Application): void {
    this.iAdminHomeController.registerRoutes(app)
    this.iContentController.registerRoutes(app)
  }
}

export default KabiRouter