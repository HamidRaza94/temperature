import { Router } from 'express';

import { userRoutes, logRoutes } from '../controllers';

const router = Router();

router.use('/user', userRoutes);
router.use('/log', logRoutes);

export default router;
