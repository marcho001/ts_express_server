import { Router } from 'express'
import TestController from '../../controller/api/Test'
const router: Router = Router()

router.get('/cdp_test', TestController.index)

export { router }
