import express from 'express'
import { router as EdmApi } from './EdmApi'
const router = express.Router()
router.use('/edm', EdmApi)

export default router
