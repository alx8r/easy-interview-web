import { createSlice } from '@reduxjs/toolkit';
import { authService } from './service';
import { IState } from './types';

const initialState: IState = {
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'singInSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const endpoints = [authService.endpoints.signIn];

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

export default authSlice.reducer;