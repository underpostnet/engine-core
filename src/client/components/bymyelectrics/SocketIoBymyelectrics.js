import { SocketIoHandlerProvider } from '../core/SocketIoHandler.js';
import { AppStoreBymyelectrics } from './AppStoreBymyelectrics.js';

class SocketIoBymyelectrics {
  static Handler = SocketIoHandlerProvider.create(AppStoreBymyelectrics);

  static Init(...args) {
    return this.Handler.Init(...args);
  }
}

export { SocketIoBymyelectrics };
