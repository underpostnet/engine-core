import { SocketIoHandlerProvider } from '../core/SocketIoHandler.js';
import { AppStoreHealthcare } from './AppStoreHealthcare.js';

class SocketIoHealthcare {
  static Handler = SocketIoHandlerProvider.create(AppStoreHealthcare);

  static Init(...args) {
    return this.Handler.Init(...args);
  }
}

export { SocketIoHealthcare };
