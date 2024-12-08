import { Router } from "express";
import { validateBody } from "../utils/validateBody.js";
import { registerUserSchema } from "../validation/user.js";
import { registerUserController } from "../controllers/users.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const router = Router();

router.post('/register', validateBody(registerUserSchema), ctrlWrapper(registerUserController));

export default router;

