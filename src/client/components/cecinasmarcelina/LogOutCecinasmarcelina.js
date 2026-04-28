import { LogOut } from '../core/LogOut.js';
import { AppStoreCecinasmarcelina } from './AppStoreCecinasmarcelina.js';

class LogOutCecinasmarcelina {
  static async Init() {
    LogOut.Event['LogOutCecinasmarcelina'] = async (result = { user: { _id: '' } }) => {
      AppStoreCecinasmarcelina.Data.user.main.model.user = result.user;
    };
  }
}

export { LogOutCecinasmarcelina };
