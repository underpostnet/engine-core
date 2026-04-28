import { SocketIoHandlerProvider } from '../core/SocketIoHandler.js';
import { AppStoreCecinasmarcelina } from './AppStoreCecinasmarcelina.js';

class SocketIoCecinasmarcelina {
  static Handler = SocketIoHandlerProvider.create(AppStoreCecinasmarcelina);

  static Init(...args) {
    return this.Handler.Init(...args);
  }
}

export { SocketIoCecinasmarcelina };
