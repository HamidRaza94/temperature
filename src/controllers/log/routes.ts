import { Router } from 'express';

import logController  from './Controller';

const router = Router();

router.route('/').get(logController.count);

export default router;
