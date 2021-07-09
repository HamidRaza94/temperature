import { model } from 'mongoose';
import TemperatureSchema from './Schema';

const temperatureModel = model('temperatures', new TemperatureSchema());

export default temperatureModel;
