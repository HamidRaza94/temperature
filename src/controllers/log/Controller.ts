import { NextFunction, Request, Response } from 'express';

import { logRepository } from '../../repositories';
import { successHandler } from '../../lib';

class LogController {
  public async count(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await logRepository.findOne('user');
      res.status(200).send(successHandler('Successfully fetched.', 200, result));
    } catch (err) {
      next(err);
    }
  }
}

export default new LogController();
