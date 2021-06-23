import { config } from 'dotenv';

import IConfig from './IConfig';

config();

const envVars: NodeJS.ProcessEnv = process.env;

const configuration = Object.freeze({
  port: envVars.PORT,
  mongoURI: envVars.MONGO_URI,
}) as IConfig;

export default configuration;
