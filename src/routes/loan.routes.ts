import { Router } from 'express';
import { getById, list } from '../controllers/loan.controller.js';

const router = Router();

router.get('/', list);
router.get('/:id', getById);

export default router;