import { Router } from 'express';
import { create, getById, list, remove, replace } from '../controllers/authors.controller.js';

const router = Router();

router.get('/', list);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', replace);
router.delete('/:id', remove);

export default router;


