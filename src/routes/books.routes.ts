import { Router } from 'express';
import { getById, list, create, replace, update, remove } from '../controllers/book.controller.js';
import { authenticateToken, authorizeRole } from '../middleware/auth.js';


const router = Router();

router.get('/', list);

router.get('/:id', getById);

router.post('/', create);

router.put('/:id', replace);

router.patch('/:id', update);

router.delete('/:id', authenticateToken, authorizeRole('admin'), remove);


export default router;