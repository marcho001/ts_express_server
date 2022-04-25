import { Request, Response } from 'express'
export default {
  index(req: Request, res: Response) {
    res.send('controller test')
  },
}
