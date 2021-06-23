import { VersionableRepository } from '../../versionable';
import userModel from './model';

class UserRepository extends VersionableRepository {
  constructor(model) {
    super(model);
  }

  public async create(data) {
    return await super.create(data);
  }

  public async find(query = {}) {
    return await super.find(query);
  }

  public async findOne(originalId: string) {
    return await super.findOne(originalId);
  }

  public async update(originalId: string, data) {
    return await super.update(originalId, data);
  }

  public async remove(originalId: string) {
    return await super.remove(originalId);
  }
}

export default new UserRepository(userModel);
