import {stringIsEmpty} from '..';

test('Check if an empty word is just empty.', () => {
  expect(stringIsEmpty('')).toBe(true);
});

test('Check if a word made of 1 space is empty.', () => {
  expect(stringIsEmpty(' ')).toBe(true);
});

test('Check if a word made of multiple spaces is empty.', () => {
  expect(stringIsEmpty('       ')).toBe(true);
});

test('Check if a null word is empty.', () => {
  expect(stringIsEmpty(null as unknown as string)).toBe(true);
});

test('Check if an undefined word is empty.', () => {
  expect(stringIsEmpty(undefined as unknown as string)).toBe(true);
});

test('Check if a word with spaces but some content is empty.', () => {
  expect(stringIsEmpty('    testing...')).toBe(false);
});
