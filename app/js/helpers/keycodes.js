export default {
  isEscape(keyCode) {
    return keyCode === 27;
  },

  isNumber(keyCode) {
    return keyCode >= 48 && keyCode <= 57;
  },

  isLetter(keyCode) {
    return keyCode >= 65 && keyCode <= 90;
  }
}
