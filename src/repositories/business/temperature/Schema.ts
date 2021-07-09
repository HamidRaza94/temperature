import { VersionableSchema } from '../../versionable';

class TemperatureSchema extends VersionableSchema {
  constructor() {
    const Measurement = {
      ts: {
        type: Date,
      },
      val: {
        type: Number,
      },
    };

    const baseSchema = {
      startDate: {
        type: Date,
      },
      endDate: {
        type: Date,
      },
      measurements: {
        type: [Measurement]
      },
    };

    super(baseSchema);
  }
}

export default TemperatureSchema;
