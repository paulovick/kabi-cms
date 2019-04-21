import express, { Application } from 'express'
import { registerKabiMVC, registerKabiAPI, registerExpress } from '../src'

const port = process.env.PORT || 3000

const app: Application = express()
registerExpress(app)
registerKabiAPI()
registerKabiMVC()

app.listen(port, () => {
  console.log(`Node JS e-commerce running. Open your browser on url: http://localhost:${port}/`)
})