import { SignUp } from '../core/SignUp.js';

class SignUpHealthcare {
  static async Init() {
    SignUp.Event['SignUpHealthcare'] = async (options) => {
      const { user } = options;
    };
  }
}

export { SignUpHealthcare };
