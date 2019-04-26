import { injectable, inject } from 'inversify'
import IKabiApiRouter from './IKabiApiRouter'
import { IUsersController } from '../controllers/contracts'
import { TYPES } from '../../common/ioc/types'

@injectable()
class KabiApiRouter implements IKabiApiRouter {

  private iUsersController: IUsersController

  public constructor(
    @inject(TYPES.ApiIUsersController) iUsersController: IUsersController
  ) {
    this.iUsersController = iUsersController
  }

  public registerRoutes(): void {
    this.iUsersController.registerRoutes()
  }
}

export default KabiApiRouter