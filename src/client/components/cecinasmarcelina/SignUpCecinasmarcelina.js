import { SignUp } from '../core/SignUp.js';

class SignUpCecinasmarcelina {
  static async Init() {
    SignUp.Event['SignUpCecinasmarcelina'] = async (options) => {
      const { user } = options;
    };
  }
}

export { SignUpCecinasmarcelina };
