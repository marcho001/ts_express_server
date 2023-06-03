import { CreateBucketCommand, S3Client } from '@aws-sdk/client-s3'

// Create an Amazon S3 service client object.
const s3Client = new S3Client({ region: 'ap-northeast-1' })

const getImageBody = (imageString: string) => {
  const imageBodyData = imageString.replace(/^data:image\/\w+;base64,/, '')
  return imageBodyData
}
const getImageMimeType = (imageString: string) => {
  const mimeType = imageString.split(';')[0].split(':')[1] // mimetype
  return mimeType
}
const getImageExt = (imageString: string) => {
  const mimeType = getImageMimeType(imageString)
  const Ext = mimeType.split('/')[1] // 副檔名 jpeg/jpg/png
  return Ext
}

const params = {
  Bucket: 'marc-s3-storage',
  Key: 'test.txt',
  Body: 'Hello World!'
}

export default s3Client

const run = async () => {
  try {
    const data = await s3Client.send(new CreateBucketCommand({ Bucket: params.Bucket }))
    console.log('Success', data)
    console.log(data.Location)
  } catch (err) {
    console.log('Error', err)
  }
}
run()
