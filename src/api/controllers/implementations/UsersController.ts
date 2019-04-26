
import { injectable, inject } from 'inversify'
import { IUsersController } from '../contracts'
import { IExpressAdapter } from '../../../common/presentation/adapters/express/contracts'
import { ExpressRequest, ExpressResponse } from '../../../common/presentation/adapters/express/dtos'
import { TYPES } from '../../../common/ioc/types'
import { IUserService } from '../../../common/application/services/contracts'

@injectable()
class UsersController implements IUsersController {

  private iExpressAdapter: IExpressAdapter
  private iUserService: IUserService

  public constructor(
    @inject(TYPES.IExpressAdapter) iExpressAdapter: IExpressAdapter,
    @inject(TYPES.IUserService) iUserService: IUserService
  ) {
    this.iExpressAdapter = iExpressAdapter
    this.iUserService = iUserService

    this.getById = this.getById.bind(this)
  }

  public registerRoutes(): void {
    this.iExpressAdapter.get('/api/users/:id', this.getById)
  }

  public async getById(request: ExpressRequest, response: ExpressResponse): Promise<void> {
    const id: number = Number(request.getParams().id)
    const user = await this.iUserService.getById(id)
    if (user) {
      response.status(200).send(user)
    } else {
      response.status(404).send()
    }
  }
}

export { UsersController }