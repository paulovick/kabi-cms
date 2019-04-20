import { Container } from 'inversify'
import { TYPES } from './types'
import { IKabiRouter, KabiRouter } from '../router'
import App from '../App'
import { IAdminHomeController } from '../controllers/admin/contracts'
import { AdminHomeController } from '../controllers/admin/implementations'
import { IContentController } from '../controllers/content/contracts'
import { ContentController } from '../controllers/content/implementations'
import { IExpressAdapter } from '../adapters/express/contracts'
import { ExpressAdapter } from '../adapters/express/implementations'

const container = new Container()

// Adapters
container.bind<IExpressAdapter>(TYPES.IExpressAdapter).to(ExpressAdapter)

container.bind<App>(TYPES.App).to(App)
container.bind<IKabiRouter>(TYPES.IKabiRouter).to(KabiRouter)
container.bind<IAdminHomeController>(TYPES.IAdminHomeController).to(AdminHomeController)
container.bind<IContentController>(TYPES.IContentController).to(ContentController)

export { container, TYPES }