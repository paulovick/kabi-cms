import { Application } from 'express'

interface IAdminHomeController {
  registerRoutes(app: Application): void
}

export { IAdminHomeController }