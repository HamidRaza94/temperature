interface Measurement {
  ts: string;
  value: number;
}
interface ITemperatureModel {
  startDate: string;
  endDate: string;
  measurement: Measurement[];
}

export default ITemperatureModel;
