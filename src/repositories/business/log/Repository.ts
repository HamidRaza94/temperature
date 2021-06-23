import { VersionableRepository } from '../../versionable';
import logModel from './model';

class LogRepository extends VersionableRepository {
  constructor(model) {
    super(model);
  }

  public async create(data) {
    return await super.create(data);
  }

  public async findOne(type: string) {
    const result = await super.find({ type });
    return result && result.length ? result[0] : undefined;
  }

  public async update(type: string, data) {
    return await super.updateByQuery({ type }, data);
  }
}

export default new LogRepository(logModel);
