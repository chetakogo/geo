export default class Validator {
  validate(coords) {
    this.regex = /\[?(-?[0-9]+\.[0-9]+)\s?,\s?(-?[0-9]+\.[0-9]+)\]?/gm;
    const testRegexp = this.regex.exec(coords);
    if (!testRegexp) {
      throw new Error('координаты введены не верно');
    }

    const latitude = testRegexp[1];
    const longitude = testRegexp[2];

    if (parseFloat(latitude.replace('-', '')) > 90
    || parseFloat(longitude.replace('-', '')) > 180) {
      throw new Error('координаты за пределами допустимых значений');
    }
    return { latitude, longitude };
  }
}
