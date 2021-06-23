import { model } from 'mongoose';
import LogSchema from './Schema';

const logCollection = 'logs';
const logModel = model(logCollection, new LogSchema());

export default logModel;
