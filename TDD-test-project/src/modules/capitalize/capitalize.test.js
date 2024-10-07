import { capitalize } from './capitalize';
it('func returns value', () => {
  expect(capitalize('tsagga')).not.toBe(undefined);
});

it('capitalizes Strings', () => {
  expect(capitalize('tsagga')).toBe('TSAGGA');
  expect(capitalize('You MaMa')).toBe('YOU MAMA');
});

it("doesn't break when given empty String", () => {
  expect(capitalize('')).toBe('');
});

it('returns null when give non-String value', () => {
  expect(capitalize(123)).toBe(null);
  expect(capitalize([1, 2, 3])).toBe(null);
  expect(capitalize(undefined)).toBe(null);
});
