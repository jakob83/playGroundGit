export const calculator = {
  add(x, y) {
    return x + y;
  },
  substract(x, y) {
    return x - y;
  },
  divide(x, y) {
    if (y == 0) return null;
    return x / y;
  },
};
