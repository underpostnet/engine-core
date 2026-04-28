import { LogOut } from '../core/LogOut.js';
import { AppStoreBymyelectrics } from './AppStoreBymyelectrics.js';

class LogOutBymyelectrics {
  static async Init() {
    LogOut.Event['LogOutBymyelectrics'] = async (result = { user: { _id: '' } }) => {
      AppStoreBymyelectrics.Data.user.main.model.user = result.user;
    };
  }
}

export { LogOutBymyelectrics };
