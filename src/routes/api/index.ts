import express from 'express'
import { router as EdmApi } from './EdmApi'
import LoginApi from './login'
const router = express.Router()
router.use('/edm', EdmApi)
router.use('/', LoginApi)

export default router
