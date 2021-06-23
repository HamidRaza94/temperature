import config from './config';
import { Server } from './lib';

(() => {
  const server = new Server(config);
  server.init().run();
})();
