import app from './app'
;(async () => {
  app.listen(process.env.PORT, () => {
    console.log(`server is listening on ${process.env.PORT} env!!!`)
  })
})()
