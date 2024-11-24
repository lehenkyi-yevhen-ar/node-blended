import { Router } from 'express';
import {
  createProductController,
  deleteProductController,
  getProductByIdController,
  getProductController,
  patchProducttController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/products', ctrlWrapper(getProductController));

router.get('/products/:productId', ctrlWrapper(getProductByIdController));

router.post('/products', ctrlWrapper(createProductController));

router.delete('/products/:productId', ctrlWrapper(deleteProductController));

router.patch('/products/:productId', ctrlWrapper(patchProducttController));

export default router;
