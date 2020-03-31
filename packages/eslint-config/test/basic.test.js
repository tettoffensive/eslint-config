const config = require('..');

function isObject(object) {
  return typeof object === 'object' && object !== null;
}

test('test basic properties of config', () => {
  expect(isObject(config.env)).toBe(true);
  expect(isObject(config.rules)).toBe(true);
});
