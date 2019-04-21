import { Container } from 'inversify'
import { TYPES } from './types'
import { IKabiApiRouter, KabiApiRouter } from '../router'
import App from '../App'
import { IAdminHomeController } from '../controllers/admin/contracts'
import { AdminHomeController } from '../controllers/admin/implementations'
import { IContentController } from '../controllers/content/contracts'
import { ContentController } from '../controllers/content/implementations'
import { IExpressAdapter } from '../../common/adapters/express/contracts'
import { ExpressAdapter } from '../../common/adapters/express/implementations'

const container = new Container()

// Adapters
container.bind<IExpressAdapter>(TYPES.IExpressAdapter).to(ExpressAdapter)

container.bind<App>(TYPES.App).to(App)
container.bind<IKabiApiRouter>(TYPES.IKabiApiRouter).to(KabiApiRouter)
container.bind<IAdminHomeController>(TYPES.IAdminHomeController).to(AdminHomeController)
container.bind<IContentController>(TYPES.IContentController).to(ContentController)

export { container, TYPES }