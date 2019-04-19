import express, { Application } from 'express'
import { registerKabiAPI } from '../src/api'

const port = process.env.PORT || 3000

const app: Application = express()
registerKabiAPI(app)

app.listen(port, () => {
  console.log(`Node JS e-commerce running. Open your browser on url: http://localhost:${port}/`)
})