import { Types } from 'mongoose';

class VersionableRepository {
  public static generateObjectId() {
    return String(Types.ObjectId());
  }

  constructor(private model) {}

  public async create(data) {
    const modelModified = new this.model(data);
    const result = await modelModified.save();

    if (!result) {
      throw new Error('Creation Error.');
    }

    return result;
  }

  public async findByQuery(query) {
    return await this.model.find(query);
  }

  public async findOneByQuery(query) {
    return await this.model.findOne(query);
  }

  public async update(query, data) {
    return await this.model.update(query, data);
  }
}

export default VersionableRepository;
