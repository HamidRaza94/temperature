import { Schema } from 'mongoose';
class VersionableSchema extends Schema {
  constructor(baseSchema: any) {
    const versionSchema = Object.assign({
      createdAt: {
        default: Date.now,
        type: Date,
      },
    }, baseSchema);

    super(versionSchema);
  }
}

export default VersionableSchema;
