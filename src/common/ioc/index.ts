import { Container } from 'inversify'
import { TYPES } from './types'

import ApiApp from '../../api/App'
import { IKabiApiRouter, KabiApiRouter } from '../../api/router'
import { IUsersController as ApiIUsersController } from '../../api/controllers/contracts'
import { UsersController as ApiUsersController } from '../../api/controllers/implementations'

import MvcApp from '../../web/App'
import { IKabiMvcRouter, KabiMvcRouter } from '../../web/router'
import { IAdminHomeController as MvcIAdminHomeController } from '../../web/controllers/admin/contracts'
import { AdminHomeController as MvcAdminHomeController } from '../../web/controllers/admin/implementations'
import { IContentController as MvcIContentController } from '../../web/controllers/content/contracts'
import { ContentController as MvcContentController } from '../../web/controllers/content/implementations'

import { IUserService } from '../application/services/contracts'
import { UserService } from '../application/services/implementations'

import { IExpressAdapter } from '../presentation/adapters/express/contracts'
import { ExpressAdapter } from '../presentation/adapters/express/implementations'

const container = new Container()

// API
container.bind<ApiApp>(TYPES.ApiApp).to(ApiApp)
container.bind<IKabiApiRouter>(TYPES.IKabiApiRouter).to(KabiApiRouter)
container.bind<ApiIUsersController>(TYPES.ApiIUsersController).to(ApiUsersController)

// MVC
container.bind<MvcApp>(TYPES.MvcApp).to(MvcApp)
container.bind<IKabiMvcRouter>(TYPES.IKabiMvcRouter).to(KabiMvcRouter)
container.bind<MvcIAdminHomeController>(TYPES.MvcIAdminHomeController).to(MvcAdminHomeController)
container.bind<MvcIContentController>(TYPES.MvcIContentController).to(MvcContentController)

// Application
container.bind<IUserService>(TYPES.IUserService).to(UserService)

// Adapters
container.bind<IExpressAdapter>(TYPES.IExpressAdapter).to(ExpressAdapter)


export { container }