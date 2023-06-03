import { Router } from 'express'
import mongoDB from '../../db/mongo'
import s3Client from '../../services/S3Service'
import { PutObjectCommand } from '@aws-sdk/client-s3'

const router: Router = Router()

router.get('/mjml', (req, res) => {
  res.send('test mjml file')
})

router.get('/test', (req, res) => {
  console.log('test')
  mongoDB.db('express_server').collection('test').insertOne({ test: 'test' })
})

router.get('/upload', async (req, res) => {
  res.send('test upload')
  const params = {
    Bucket: 'marc-s3-storage',
    Key: 'test.txt',
    Body: 'Hello World!'
  }
  try {
    const data = await s3Client.send(new PutObjectCommand(params))
    console.log('Success', data)
  } catch (err) {
    console.log('Error', err)
  }
})

export { router }
