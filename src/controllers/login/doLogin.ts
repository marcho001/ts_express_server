import { Request, Response } from 'express'
import UserModel from '../../db/mongo/models/user'
import { LoginReqBody } from '../../type/login'
export default async (req: Request, res: Response) => {
  const { email, password }: LoginReqBody = req.body
  try {
    res.send('login')
  } catch (error) {
    console.error(error)
  }
}
