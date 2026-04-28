import { SignUp } from '../core/SignUp.js';

class SignUpDogmadual {
  static async Init() {
    SignUp.Event['SignUpDogmadual'] = async (options) => {
      const { user } = options;
    };
  }
}

export { SignUpDogmadual };
