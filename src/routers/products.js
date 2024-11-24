import { Router } from 'express';
import {
  getProductByIdController,
  getProductController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/products', ctrlWrapper(getProductController));

router.get('/products/:productId', ctrlWrapper(getProductByIdController));

export default router;
