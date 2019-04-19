import { Container } from 'inversify'
import { TYPES } from './types'
import { IKabiRouter, KabiRouter } from '../router'
import App from '../App'
import { IAdminHomeController } from '../controllers/admin/contracts'
import { AdminHomeController } from '../controllers/admin/implementations'

const container = new Container()
container.bind<App>(TYPES.App).to(App)
container.bind<IKabiRouter>(TYPES.IKabiRouter).to(KabiRouter)
container.bind<IAdminHomeController>(TYPES.IAdminHomeController).to(AdminHomeController)

export { container, TYPES }