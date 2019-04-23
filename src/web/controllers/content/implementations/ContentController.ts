
import { injectable, inject } from 'inversify'
import { IContentController } from '../contracts'
import { IExpressAdapter } from '../../../../common/presentation/adapters/express/contracts'
import { ExpressRequest, ExpressResponse } from '../../../../common/presentation/adapters/express/dtos'
import { TYPES } from '../../../../common/application/ioc/types'

@injectable()
class ContentController implements IContentController {

  private iExpressAdapter: IExpressAdapter

  public constructor(
    @inject(TYPES.IExpressAdapter) iExpressAdapter: IExpressAdapter
  ) {
    this.iExpressAdapter = iExpressAdapter
  }

  public registerRoutes(): void {
    this.iExpressAdapter.use('/', this.handleRoutes)
  }

  public handleRoutes(request: ExpressRequest, response: ExpressResponse): void {
    response.send('Hello content!!')
  }
}

export { ContentController }