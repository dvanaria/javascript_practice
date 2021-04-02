const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

const square = require('./square');

test('square 5 to equal 25', () => {
    expect(square(5)).toBe(25);
});
