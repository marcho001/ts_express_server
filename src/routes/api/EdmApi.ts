import { Router } from 'express'
import mongoDB from '../../db/mongo'

const router: Router = Router()

router.get('/mjml', (req, res) => {
  res.send('test mjml file')
})

router.get('/test', (req, res) => {
  console.log('test')
  mongoDB.db('express_server').collection('test').insertOne({ test: 'test' })
})

export { router }
