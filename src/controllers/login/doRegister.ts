import { Request, Response } from 'express'
import { RegisterReqBody } from '../../type/login'
import UserModel from '../../db/mongo/models/user'
import { ERROR_STATUS } from '../../enum'
export default async (req: Request, res: Response) => {
  const { name, password, email, confirmPassword }: RegisterReqBody = req.body
  try {
    if (!name || !password || !email || !confirmPassword) {
      return res
        .status(400)
        .json({ msg: 'Missing required fields', status: ERROR_STATUS.MISSING_FIELD, data: null })
    }
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ msg: 'Password does not match', status: ERROR_STATUS.COMPARE_FAIL, data: null })
    }
    const user = await UserModel.findOne({ email })
    if (user) {
      return res
        .status(400)
        .json({ msg: 'User already exists', status: ERROR_STATUS.EXISTED, data: null })
    }

    const newUser = new UserModel({ name, password, email })
    await newUser.save()
    return res.json({ msg: 'success', data: newUser })
  } catch (error) {
    console.error(error)
  }
}
