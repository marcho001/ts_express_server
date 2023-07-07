import { Request, Response } from 'express'
export default (req: Request, res: Response) => {
  try {
    res.send('logout')
  } catch (error) {
    console.error(error)
  }
}
