import { Router } from 'express';
import * as multer from 'multer';

import temperatureController  from './Controller';

const router = Router();
const storage = multer.memoryStorage()
const upload = multer({ storage })

// Each route will have validation middleware to validate whether input is in correct format or not
router.route('/').post(temperatureController.create);
router.route('/upload').post(
  upload.single('file'),
  temperatureController.bulkCreate
);
router.route('/').get(temperatureController.list);

export default router;
