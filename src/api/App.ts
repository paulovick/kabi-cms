import { Application } from 'express'
import { IKabiRouter } from './routes/router'
import { container, TYPES } from './ioc'

class App {
  private static instance: App

  public static getInstance(): App {
    if (!App.instance) {
      App.instance = new App()
    }

    return App.instance
  }

  private readonly iKabiRouter: IKabiRouter

  constructor() {
    this.iKabiRouter = container.get<IKabiRouter>(TYPES.IKabiRouter)
  }

  public register(app: Application) {
    this.iKabiRouter.registerRoutes(app)
  }
}

export default App