import { Router } from 'express'
import { addClient } from "../controllers/usersController.js";

const userRouter = Router()

userRouter.post('/users', addClient);

export default userRouter
