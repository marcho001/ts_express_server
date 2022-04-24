import express from 'express'
const app = express()

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
app.get('/', (req, res) => {
  res.send('The server is working!')
})
app.listen(process.env.PORT, () => {
  console.log(`server is listening on ${process.env.PORT} env!!!`)
})
