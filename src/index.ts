import 'reflect-metadata'

import { Application } from 'express'
import bodyParser from 'body-parser'
import { ExpressAdapter } from './api/adapters/express/implementations'
import { registerKabiAPI } from './api'

const registerExpress = (expressApp: Application): void => {
  expressApp.use(bodyParser.json());
  expressApp.use(bodyParser.urlencoded({ extended: true }));
  ExpressAdapter.registerApp(expressApp)
}

export { registerExpress, registerKabiAPI }