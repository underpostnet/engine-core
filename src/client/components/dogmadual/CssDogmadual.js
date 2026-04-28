class CssDogmadualDark {
  static theme = 'dogmadual-dark';
  static dark = true;
  static async render() {
    return html` <style></style> `;
  }
}

class CssDogmadualLight {
  static theme = 'dogmadual-light';
  static dark = false;
  static async render() {
    return html` <style></style> `;
  }
}

export { CssDogmadualDark, CssDogmadualLight };
