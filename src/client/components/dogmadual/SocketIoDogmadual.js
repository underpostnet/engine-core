import { SocketIoHandlerProvider } from '../core/SocketIoHandler.js';
import { AppStoreDogmadual } from './AppStoreDogmadual.js';

class SocketIoDogmadual {
  static Handler = SocketIoHandlerProvider.create(AppStoreDogmadual);

  static Init(...args) {
    return this.Handler.Init(...args);
  }
}

export { SocketIoDogmadual };
