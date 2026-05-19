import { createSlice } from '@reduxjs/toolkit';
import { signInService } from './service';
import { IState } from './types';

const initialState: IState = {
  isLoading: false,
};

export const signInSlice = createSlice({
  name: 'singInSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const endpoints = [signInService.endpoints.signIn];

    endpoints.forEach((endpoint) => {
      builder
        .addMatcher(endpoint.matchPending, (state) => {
          state.isLoading = true;
        })
        .addMatcher(endpoint.matchFulfilled, (state) => {
          state.isLoading = false;
        })
        .addMatcher(endpoint.matchRejected, (state) => {
          state.isLoading = false;
        });
    });
  },
});

export default signInSlice.reducer;