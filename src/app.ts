import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import * as dotenv from 'dotenv'

const app = express()

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

import ApiRouter from './routes/index'
ApiRouter(app)

export default app
