import 'reflect-metadata'

import { Application } from 'express'
import { ExpressAdapter } from './common/adapters/express/implementations'
import { registerKabiAPI } from './api'

const registerExpress = (expressApp: Application): void => {
  ExpressAdapter.registerApp(expressApp)
}

export { registerExpress, registerKabiAPI }