import app from './app'
import mongoose from './db/mongo/index'
;(async () => {
  try {
    await mongoose.connect()
    console.log('mongo db connected')
  } catch (error) {
    console.error(error)
  }

  app.listen(process.env.PORT, () => {
    console.log(`server is listening on ${process.env.PORT} env!!!`)
  })
})()
