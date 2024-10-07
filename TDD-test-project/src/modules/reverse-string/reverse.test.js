import { reverse } from './reverse';

it('function returns value', () => {
  expect(reverse('String')).not.toBeFalsy();
});

it('reverses Strings', () => {
  expect(reverse('Tsagga')).toBe('aggasT');
  expect(reverse('Tuttle')).toBe('elttuT');
});
