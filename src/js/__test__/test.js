import GeolocValidator from '../Validator';

const validator = new GeolocValidator();

test.each([
  ['[0.0, 0.5]', { latitude: '0.0', longitude: '0.5' }],
  ['0.0, 1.1', { latitude: '0.0', longitude: '1.1' }],
  ['[0.0,-109.1]', { latitude: '0.0', longitude: '-109.1' }],
  ['39.0,0.0', { latitude: '39.0', longitude: '0.0' }],
  ['[-77.5,111.1]', { latitude: '-77.5', longitude: '111.1' }],
])(
  ('should return correct object'),
  (input, expected) => {
    expect(validator.validate(input)).toEqual(expected);
  },
);

test.each([
  ['test', 'координаты введены не верно'],
  ['-91.2, 1.1', 'координаты за пределами допустимых значений'],
  ['[0.0,191.1]', 'координаты за пределами допустимых значений'],
])(
  ('should throw error'),
  (input, expected) => {
    expect(() => {
      validator.validate(input);
    }).toThrowError(expected);
  },
);
