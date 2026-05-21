export type ApiErrorType = {
  message: {
    error: string | object;
    message: string;
    statusCode: number;
  };
  method: string;
  path: string;
  statusCode: number;
};
