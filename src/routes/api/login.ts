import express, { NextFunction } from 'express'
import doLoginController from '../../controllers/login/doLogin'
import doRegisterController from '../../controllers/login/doRegister'

const router = express.Router()

router.post('/login', doLoginController)
router.post('/logout', (req, res, next) => {})
router.post('/register', doRegisterController)

export default router
