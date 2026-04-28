import { Auth } from '../core/Auth.js';
import { LogIn } from '../core/LogIn.js';
import { AppStoreDogmadual } from './AppStoreDogmadual.js';

class LogInDogmadual {
  static async Init() {
    LogIn.Event['LogInDogmadual'] = async (options) => {
      const { token, user } = options;

      AppStoreDogmadual.Data.user.main.model.user = user;
    };
    const { user } = await Auth.sessionIn();
    AppStoreDogmadual.Data.user.main.model.user = user;
  }
}

export { LogInDogmadual };
