import { NextFunction, Request, Response } from 'express';

import { temperatureRepository } from '../../repositories';
import { successHandler } from '../../lib';

class TemperatureController {
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { ts, val } = req.body;

      const result = await temperatureRepository.update({ ts, val });

      res.status(200).send(successHandler('Successfully Created.', 200, result));
    } catch (err) {
      next(err)
    }
  }

  public async bulkCreate(req: any, res: Response, next: NextFunction) {
    try {
      const multerText = JSON.parse(req.file.buffer.toString());

      await temperatureRepository.bulkUpdate(multerText);

      res.status(200).send(successHandler('Successfully Uploaded.', 200, {}));
    } catch (err) {
      next(err)
    }
  }

  public async list(req: Request, res: Response, next: NextFunction) {
    try {
      const { startMonth, startYear, endMonth, endYear } = req.query as any;
      const startDate = new Date(startYear, startMonth, 0);
      const endDate = new Date(endYear, endMonth, 0);
      const result = await temperatureRepository.find({ startDate, endDate });
      res.status(200).send(successHandler('Successfully fetched.', 200, result));
    } catch (err) {
      next(err);
    }
  }
}

export default new TemperatureController();
