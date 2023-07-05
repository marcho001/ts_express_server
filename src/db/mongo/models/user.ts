import { model, Schema } from 'mongoose'
import { User } from '../../../type/user'

export default model<User>(
  'User',
  new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
  })
)
