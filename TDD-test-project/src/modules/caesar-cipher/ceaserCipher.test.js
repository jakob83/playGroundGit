import { ceaserCipher } from './ceaserCipher';

it('ceaserCipher works with basic lower case Strings', () => {
  expect(ceaserCipher('abc', 2)).toBe('cde');
  expect(ceaserCipher('tsagga', 1)).toBe('utbhhb');
});

it('leaves symbols like "," or "!" at their place', () => {
  expect(ceaserCipher('tsagga, cool', 1)).toBe('utbhhb, dppm');
});

it('works when going from end (z) to beginning (a)', () => {
  expect(ceaserCipher('z', 1)).toBe('a');
});

it('works with upper case letters', () => {
  expect(ceaserCipher('A', 2)).toBe('C');
});

it('works over z and with specials(!,?) and upperCase', () => {
  expect(ceaserCipher('Tzagga, lOl', 2)).toBe('Vbciic, nQn');
});
