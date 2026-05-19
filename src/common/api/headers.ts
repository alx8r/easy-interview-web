import { BaseQueryApi, FetchArgs } from '@reduxjs/toolkit/query';
import { RootState } from '@/redux';

export const defaultHeadres = (headers: Headers) => {
  headers.set('Content-Type', 'application/json');

  return headers;
};

export const authHeaders = (
  headers: Headers,
  api: Pick<BaseQueryApi, 'getState' | 'extra' | 'endpoint' | 'type' | 'forced'> & {
    arg: string | FetchArgs;
    extraOptions: unknown;
  },
) => {
  const accessToken = (api.getState() as RootState).globalReducer.user?.accessToken;

  headers.set('Content-Type', 'application/json');
  headers.set('Authorization', `Bearer ${accessToken}`);

  return headers;
};