import app from './app'
import client from './db/mongo'
;(async () => {
  client.connect().then(console.log).catch(console.error)

  app.listen(process.env.PORT, () => {
    console.log(`server is listening on ${process.env.PORT} env!!!`)
  })
})()
