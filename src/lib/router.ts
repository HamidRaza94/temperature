import { Router } from 'express';

import { temperatureRoutes } from '../controllers';

const router = Router();

router.use('/temperature', temperatureRoutes);

export default router;
