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
  const params = {
    Bucket: 'marc-s3-storage',
    Key: `cdp_track_doc/${Date.now()}.jpeg`,
    Body: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…HOV3HnSxVNUzApYflOp603Aowow/MPAp+WgtqfChUYrH/2Q==',
    ContentEncoding: 'base64',
    ContentType: 'image/jpeg'
  }
  try {
    const data = await s3Client.send(new PutObjectCommand(params))
    console.log('Success', data)
    console.log(data)
    res.send(data)
  } catch (err) {
    console.log('Error', err)
    res.send(err)
  }
})

export { router }
