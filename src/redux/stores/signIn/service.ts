import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiUrls, defaultHeadres, HttpMethods } from '@/common/api';
import { SignInRequestDto, SignInResponseDto } from './dtos';

export const signInService = createApi({
  reducerPath: 'signInService',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_URL, prepareHeaders: defaultHeadres }),
  endpoints: (build) => ({
    signIn: build.mutation<SignInResponseDto, SignInRequestDto>({
      query: (body: SignInRequestDto) => ({
        url: ApiUrls.UserSignIn,
        method: HttpMethods.POST,
        body: JSON.stringify(body),
      }),
    }),
  }),
});
