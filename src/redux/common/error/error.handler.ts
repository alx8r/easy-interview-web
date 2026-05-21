import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { ApiErrorType } from './types';

export const errorHandler = (error: FetchBaseQueryError | SerializedError): ApiErrorType => {
  if ('data' in error) {
    return error.data as unknown as ApiErrorType;
  } else {
    const validError: SerializedError = error as SerializedError;

    return {
      message: {
        error: error || 'unknown',
        message: validError.message || 'unknown',
        statusCode: 400,
      },
      method: 'unknown',
      path: 'unknown',
      statusCode: 400,
    };
  }
};
