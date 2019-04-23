import 'reflect-metadata'

import { Application } from 'express'
import { ExpressAdapter } from './common/presentation/adapters/express/implementations'
import { registerKabiAPI } from './api'
import { registerKabiMVC } from './web'

const registerExpress = (expressApp: Application): void => {
  ExpressAdapter.registerApp(expressApp)
}

export { registerExpress, registerKabiAPI, registerKabiMVC }