import { Container } from 'inversify'
import { TYPES } from './types'
import { IKabiRouter, KabiRouter } from '../routes/router'
import App from '../App'

const container = new Container()
container.bind<App>(TYPES.App).to(App)
container.bind<IKabiRouter>(TYPES.IKabiRouter).to(KabiRouter)

export { container, TYPES }