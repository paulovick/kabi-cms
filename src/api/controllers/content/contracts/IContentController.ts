import { Application } from 'express'

interface IContentController {
  registerRoutes(app: Application): void
}

export { IContentController }