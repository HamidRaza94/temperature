import { VersionableSchema } from '../../versionable';

class LogSchema extends VersionableSchema {
  constructor() {
    const baseSchema = {
      count: {
        type: Number,
        default: 0,
      },
      type: String,
    };

    super(baseSchema);
  }
}

export default LogSchema;
