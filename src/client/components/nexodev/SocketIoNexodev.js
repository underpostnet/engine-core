import { SocketIoHandlerProvider } from '../core/SocketIoHandler.js';
import { AppStoreNexodev } from './AppStoreNexodev.js';

class SocketIoNexodev {
  static Handler = SocketIoHandlerProvider.create(AppStoreNexodev);

  static Init(...args) {
    return this.Handler.Init(...args);
  }
}

export { SocketIoNexodev };
