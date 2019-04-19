import 'reflect-metadata'

import { Application } from 'express'
import App from './App'

const registerKabiAPI = (expressApp: Application) => {
  const app: App = App.getInstance()
  app.register(expressApp)
}

export { registerKabiAPI }