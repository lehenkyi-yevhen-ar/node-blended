import { Router } from 'express';
import { validateBody } from '../utils/validateBody.js';
import { registerUserSchema, loginUserSchema } from '../validation/user.js';
import {
  registerUserController,
  loginUserController,
} from '../controllers/users.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);

router.post(
  '/login',
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserController),
);

export default router;
