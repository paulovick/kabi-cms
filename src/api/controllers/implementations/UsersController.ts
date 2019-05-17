
import { injectable, inject } from 'inversify'
import { IUsersController } from '../contracts'
import { IExpressAdapter } from '../../adapters/express/contracts'
import { ExpressRequest, ExpressResponse } from '../../adapters/express/dtos'
import { TYPES } from '../../../ioc/types'
import { IUserService } from '../../../application/services/contracts'

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
    this.iExpressAdapter.get('/users/:idOrUsername', (request: ExpressRequest, response: ExpressResponse) => {
      const { idOrUsername } = request.getParams()
      if (UsersController.isNumber(idOrUsername)) {
        request.setParam('id', Number(idOrUsername))
        this.getById(request, response)
      } else if (typeof idOrUsername == 'string') {
        request.setParam('username', idOrUsername)
        this.getByUsername(request, response)
      } else {
        this.handleError(request, response)
      }
    })
  }

  public async getById(request: ExpressRequest, response: ExpressResponse) {
    const id: number = request.getParams().id
    const user = await this.iUserService.getById(id)
    if (user) {
      response.status(200).send(user)
    } else {
      response.status(404).send()
    }
  }

  public async getByUsername(request: ExpressRequest, response: ExpressResponse) {
    const username: string = request.getParams().username
    const user = await this.iUserService.getByUsername(username)
    if(user) {
      response.status(200).send(user)
    } else {
      response.status(404).send()
    }
  }

  public async handleError(request: ExpressRequest, response: ExpressResponse) {
    // TODO
  }

  private static isNumber(object: any): boolean {
    const numberVar = Number(object)
    return !isNaN(numberVar)
  }
}

export { UsersController }