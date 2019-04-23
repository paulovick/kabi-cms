import { injectable, inject } from 'inversify'
import IKabiApiRouter from './IKabiApiRouter'
import { IAdminHomeController } from '../controllers/admin/contracts'
import { IUsersController } from '../controllers/content/contracts'
import { TYPES } from '../../common/application/ioc/types'

@injectable()
class KabiApiRouter implements IKabiApiRouter {

  private iAdminHomeController: IAdminHomeController
  private iUsersController: IUsersController

  public constructor(
    @inject(TYPES.ApiIAdminHomeController) iAdminHomeController: IAdminHomeController,
    @inject(TYPES.ApiIUsersController) iUsersController: IUsersController
  ) {
    this.iAdminHomeController = iAdminHomeController
    this.iUsersController = iUsersController
  }

  public registerRoutes(): void {
    this.iAdminHomeController.registerRoutes()
    this.iUsersController.registerRoutes()
  }
}

export default KabiApiRouter