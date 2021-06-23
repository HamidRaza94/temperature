import { Schema } from 'mongoose';

const options = {
    toJSON: {
    transform: (doc, ret) => {
      ret.id = ret.originalId;
      delete ret.originalId;
      delete ret._id;
      delete ret.__v;
    },
  },

  toObject: {
    transform: (doc, ret) => {
      ret.id = ret.originalId;
      delete ret.originalId;
      delete ret._id;
      delete ret.__v;
    },
  },
}

class VersionableSchema extends Schema {
  constructor(baseSchema: any) {
    const versionSchema = Object.assign({
      createdAt: {
        default: Date.now,
        type: Date,
      },
      deletedAt: {
        required: false,
        type: Date,
      },
      originalId: {
        required: true,
        type: String,
      },
      updatedAt: {
        required: false,
        type: Date,
      },
    }, baseSchema);

    super(versionSchema);
  }
}

export default VersionableSchema;
