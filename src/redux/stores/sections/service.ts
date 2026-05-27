import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiUrls, defaultHeadres, HttpMethods } from '@/common/api';
import { SectionsResponseDto } from './dtos';

export const sectionsService = createApi({
  reducerPath: 'sectionsService',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: defaultHeadres,
  }),
  endpoints: (build) => ({
    findManySections: build.query<SectionsResponseDto[], void>({
      query: () => ({
        url: ApiUrls.FindManySections,
        method: HttpMethods.GET,
      }),
    }),
  }),
});
