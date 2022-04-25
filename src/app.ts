import express from 'express'
const app = express()

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

import ApiRouter from './routes/index'
ApiRouter(app)
app.listen(process.env.PORT, () => {
  console.log(`server is listening on ${process.env.PORT} env!!!`)
})
