import { Application } from 'express'

interface IKabiRouter {
  registerRoutes(app: Application) : void
}

export default IKabiRouter