import { Router } from 'express';

import userController  from './Controller';

const router = Router();

router.route('/').post(userController.create);
router.route('/').get(userController.list);
router.route('/:id').put(userController.update);

export default router;
