import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import * as dotenv from 'dotenv'
import session from 'express-session'

const app = express()

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: {
      domain: process.env.SESSION_DOMAIN,
      maxAge: 1000 * 60 * 60 * 12
    },

    rolling: true
  })
)
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

import ApiRouter from './routes/index'
ApiRouter(app)

export default app
