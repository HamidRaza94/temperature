import { NextFunction, Request, Response } from 'express';

import { userRepository, logRepository } from '../../repositories';
import { successHandler } from '../../lib';

class UserController {
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, age, email } = req.body;

      const result = await userRepository.create({ name, age, email });
      const isLogged = await logRepository.findOne('user');

      if (isLogged) {
        await logRepository.update('user', { count: isLogged.count + 1 });
      } else {
        await logRepository.create({ count: 1, type: 'user' });
      }

      res.status(200).send(successHandler('Successfully Created.', 200, result));
    } catch (err) {
      next(err)
    }
  }

  public async list(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await userRepository.find();
      res.status(200).send(successHandler('Successfully fetched.', 200, result));
    } catch (err) {
      next(err);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const result = await userRepository.update(id, req.body);

      const isLogged = await logRepository.findOne('user');
      await logRepository.update('user', { count: isLogged.count + 1 });

      res.status(200).send(successHandler('Successfully Created.', 200, result));
    } catch (err) {
      next(err)
    }
  }
}

export default new UserController();
