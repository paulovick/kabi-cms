import { IKabiMvcRouter } from './router'
import { container } from '../common/ioc'
import { TYPES } from '../common/ioc/types'

class App {
  private static instance: App

  public static getInstance(): App {
    if (!App.instance) {
      App.instance = new App()
    }

    return App.instance
  }

  private readonly iKabiMvcRouter: IKabiMvcRouter

  constructor() {
    this.iKabiMvcRouter = container.get<IKabiMvcRouter>(TYPES.IKabiMvcRouter)
  }

  public register(): void {
    this.iKabiMvcRouter.registerViewEngine()
    this.iKabiMvcRouter.registerRoutes()
  }
}

export default App