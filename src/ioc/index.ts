import { Container } from 'inversify'
import { TYPES } from './types'

import ApiApp from '../api/App'
import { IKabiApiRouter, KabiApiRouter } from '../api/router'
import { IUsersController as ApiIUsersController } from '../api/controllers/contracts'
import { UsersController as ApiUsersController } from '../api/controllers/implementations'

import { IUserService } from '../application/services/contracts'
import { UserService } from '../application/services/implementations'

import { IExpressAdapter } from '../api/adapters/express/contracts'
import { ExpressAdapter } from '../api/adapters/express/implementations'
import { IUserRepository } from '../domain/repositories'
import { UserRepository } from '../infrastructure/repositories';

const container = new Container()

// API
container.bind<ApiApp>(TYPES.ApiApp).to(ApiApp)
container.bind<IKabiApiRouter>(TYPES.IKabiApiRouter).to(KabiApiRouter)
container.bind<ApiIUsersController>(TYPES.ApiIUsersController).to(ApiUsersController)

// Presentation
container.bind<IExpressAdapter>(TYPES.IExpressAdapter).to(ExpressAdapter)

// Application
container.bind<IUserService>(TYPES.IUserService).to(UserService)

// Infrastructure
container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository)


export { container }