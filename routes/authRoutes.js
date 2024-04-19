import express from 'express'

import { login, register,logout } from '../controllers/authControllers.js'
import { validateLogin, validateRegister } from '../middlewares/validationMiddleware.js'

const router = express.Router()

router.post('/register',validateRegister, register);
router.post('/login', validateLogin, login);
// write logout route 
router.get('/logout',logout)


export default router 