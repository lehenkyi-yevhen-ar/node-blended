import { Router } from 'express';
import {
  getProductByIdController,
  getProductController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/', ctrlWrapper(getProductController));

router.get('/:productId', ctrlWrapper(getProductByIdController));

export default router;
