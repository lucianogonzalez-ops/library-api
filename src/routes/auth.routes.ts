import { Router } from 'express';
import { register, login } from '../controllers/users.controller.js';
import { validate } from "../middleware/validate.js";
import { registerSchema, loginSchema } from "../schemes/user.schema.js";

const router = Router();

router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema),  login);

export default router;
