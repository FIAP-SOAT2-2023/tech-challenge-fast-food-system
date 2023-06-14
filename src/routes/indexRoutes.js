import { Router } from 'express'
import productRouter from './productsRoutes.js'
import userRouter from './usersRoutes.js';


const router = Router()

router.use(productRouter);
router.use(userRouter);

export default router