import express, { NextFunction } from 'express'
import doRegisterController from '../../controller/login/doRegister'
const router = express.Router()

router.post('/register', doRegisterController)

export default router
