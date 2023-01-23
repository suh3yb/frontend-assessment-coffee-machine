import { getErrorMessage, DEFAULT_ERROR_MESSAGE } from './getErrorMessage';

test('getErrorMessage returns expected value', () => {
  let returnValue = getErrorMessage('this is a string');
  expect(returnValue).toBe('this is a string');

  returnValue = getErrorMessage(new Error('error message from Error object'));
  expect(returnValue).toBe('error message from Error object');

  returnValue = getErrorMessage(true);
  expect(returnValue).toBe(DEFAULT_ERROR_MESSAGE);

  returnValue = getErrorMessage(null);
  expect(returnValue).toBe(DEFAULT_ERROR_MESSAGE);

  returnValue = getErrorMessage(123, 'custom message');
  expect(returnValue).toBe('custom message');
});
