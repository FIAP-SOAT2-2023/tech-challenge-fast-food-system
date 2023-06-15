import { Router } from 'express'
import { 
  addProduct,
  updateProduct,
  getProduct,
  deleteProduct,
  getAllProducts 
} from "../controllers/productsController.js";

const productRouter = Router()

productRouter.get('/products', getAllProducts)
productRouter.post('/products', addProduct)
productRouter.put('/products/:id', updateProduct)
productRouter.get('/products/:id', getProduct)
productRouter.delete('/products/:id', deleteProduct)

export default productRouter
