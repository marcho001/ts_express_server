import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()

const uri = process.env.MONGODB as string
const connect = async () => {
  return mongoose.connect(uri)
}

export default { connect }
