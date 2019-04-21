import { Application } from 'express'

interface IContentController {
  registerRoutes(): void
}

export { IContentController }