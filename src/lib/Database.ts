import { connect, disconnect } from 'mongoose';

export default class Database {
  public static async open(mongoURI: string) {
    return new Promise((resolve, reject) => {
      connect(mongoURI, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log('Connected Successfully to database');
        return resolve('Connected successfully to database');
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
    });
  }

  public static close() {
    disconnect();
  }
}
