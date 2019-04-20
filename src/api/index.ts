import { Application } from 'express'
import App from './App'
import { ExpressAdapter } from '../common/adapters/express/implementations'

const registerExpress = (expressApp: Application): void => {
  ExpressAdapter.registerApp(expressApp)
}

const registerKabiAPI = (): void => {
  const app: App = App.getInstance()
  app.register()
}

export { registerExpress, registerKabiAPI }