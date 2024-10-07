import { calculator } from './calculator';

it('can add 2 numbers', () => {
  expect(calculator.add(1, 5)).toBeCloseTo(6);
  expect(calculator.add(33, 66)).toBeCloseTo(99);
});

it('can substract 2 numbers', () => {
  expect(calculator.substract(1, 5)).toBeCloseTo(-4);
  expect(calculator.substract(7, 5)).toBeCloseTo(2);
});

it('can divide 2 numbers', () => {
  expect(calculator.divide(1, 5)).toBeCloseTo(0.2);
  expect(calculator.divide(9, 3)).toBeCloseTo(3);
});
it('returns null when dividing through 0', () => {
  expect(calculator.divide(1, 0)).toBe(null);
});
