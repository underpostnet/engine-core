import { SignUp } from '../core/SignUp.js';

class SignUpNexodev {
  static async Init() {
    SignUp.Event['SignUpNexodev'] = async (options) => {
      const { user } = options;
    };
  }
}

export { SignUpNexodev };
