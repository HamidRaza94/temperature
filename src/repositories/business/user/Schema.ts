import { VersionableSchema } from '../../versionable';

class UserSchema extends VersionableSchema {
  constructor() {
    const baseSchema = {
      name: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    };

    super(baseSchema);
  }
}

export default UserSchema;
