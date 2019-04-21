import App from './App'

const registerKabiMVC = (): void => {
  const app: App = App.getInstance()
  app.register()
}

export { registerKabiMVC }