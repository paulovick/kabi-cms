import express, { Application } from 'express'
import { registerKabiRoutes } from '../src/api'

const port = process.env.PORT || 3000

const app: Application = express()
registerKabiRoutes(app)

app.listen(port, () => {
  console.log(`Node JS e-commerce running. Open your browser on url: http://localhost:${port}/`)
})