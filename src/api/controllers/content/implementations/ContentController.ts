
import { injectable, inject } from 'inversify'
import { IContentController } from '../contracts'
import { IExpressAdapter } from '../../../adapters/express/contracts'
import { TYPES } from '../../../ioc';
import { ExpressRequest, ExpressResponse } from '../../../adapters/express/dtos'

@injectable()
class ContentController implements IContentController {

  private iExpressAdapter: IExpressAdapter

  public constructor(
    @inject(TYPES.IExpressAdapter) iExpressAdapter: IExpressAdapter
  ) {
    this.iExpressAdapter = iExpressAdapter
  }

  public registerRoutes(): void {
    this.iExpressAdapter.use('/api', this.handleRoutes)
  }

  public handleRoutes(request: ExpressRequest, response: ExpressResponse): void {
    response.send('Hello content!!')
  }
}

export { ContentController }