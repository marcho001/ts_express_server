import { Router } from 'express'
import TestController from '../../controller/api/Test'
const router: Router = Router()

router.get('/test', TestController.index)
router.get('/test/:id', (req, res) => {
  res.send('test router file' + req.params.id)
})

export { router }
