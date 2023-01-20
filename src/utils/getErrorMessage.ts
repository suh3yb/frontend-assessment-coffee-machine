export const DEFAULT_ERROR_MESSAGE = 'Error fetching data';

export const getErrorMessage = (
  error: unknown,
  defaultMessage?: string
): string => {
  if (typeof error === 'string') {
    return error;
  } else if (error instanceof Error) {
    return error.message;
  } else {
    return defaultMessage ?? DEFAULT_ERROR_MESSAGE;
  }
};
