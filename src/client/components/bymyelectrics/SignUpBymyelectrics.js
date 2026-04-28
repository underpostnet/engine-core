import { SignUp } from '../core/SignUp.js';

class SignUpBymyelectrics {
  static async Init() {
    SignUp.Event['SignUpBymyelectrics'] = async (options) => {
      const { user } = options;
    };
  }
}

export { SignUpBymyelectrics };
