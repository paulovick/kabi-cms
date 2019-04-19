import { Application, Request, Response } from 'express'
import { injectable, inject } from 'inversify'
import IKabiRouter from './IKabiRouter'
import { IAdminHomeController } from '../controllers/admin/contracts'
import { TYPES } from '../ioc';

@injectable()
class KabiRouter implements IKabiRouter {

  private iAdminHomeController: IAdminHomeController

  public constructor(
    @inject(TYPES.IAdminHomeController) iAdminHomeController: IAdminHomeController
  ) {
    this.iAdminHomeController = iAdminHomeController
  }

  public registerRoutes(app: Application): void {
    this.iAdminHomeController.registerRoutes(app)
  }
}

export default KabiRouter