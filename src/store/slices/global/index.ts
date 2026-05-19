import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUpdateUserGlobalStateDto } from './dtos';
import { IState } from './types';

const initialState: IState = {
  user: undefined,
};

export const globalSlice = createSlice({
  name: 'globalSlice',
  initialState,
  reducers: {
    updateUserGlobalState(state: IState, action: PayloadAction<IUpdateUserGlobalStateDto>) {
      state.user = action.payload;
    },
    resetUserGlobalState(state: IState) {
      state.user = initialState.user;
    },
  },
});

export default globalSlice.reducer;