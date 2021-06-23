import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as cors from 'cors';

import { IConfig } from '../config';
import router from './router';
import Database  from './Database';
import { errorHandler, notFoundRoute } from './routes';

class Server {
  private app: express.Express;

  constructor(private config: IConfig) {
    this.app = express();
  }

  public init() {
    this.initCors();
    this.initBodyParser();
    this.setupRoutes();

    return this;
  }

  /**
   * This will run the server at specified port after opening up of Database
   *
   * @returns -Instance of Current Object
   */
  public async run() {
    try {
      const { mongoURI, port } = this.config;
      const isDBConnected = await Database.open(mongoURI);

      if (isDBConnected) {
        this.app.listen(port, () => {
          console.log(`App is running at port '${port}'`);
        });

        return this;
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  }

  /**
   *  - Parses urlencoded bodies & JSON
   */
  private initBodyParser() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  /**
   *
   * Lets you to enable cors
   */
  private initCors() {
    this.app.use(cors({
      origin: ['http://localhost:3000'],
      method: ['GET', 'POST', 'PUT'],
    }));
  }

  private setupRoutes() {
    this.app.use('/api', router);

    // catch 404 and forward to error handler
    this.app.use(notFoundRoute);

    // error handler, send stacktrace only during development
    this.app.use(errorHandler);
  }
}

export default Server;
