import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISetupAlertGlobalStateDto, IUpdateUserGlobalStateDto } from './dtos';
import { IState } from './types';

const initialState: IState = {
  user: undefined,
  alert: {
    visible: false,
    message: undefined,
  },
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
    setupAlertGlobalState(state: IState, action: PayloadAction<ISetupAlertGlobalStateDto>) {
      state.alert = action.payload;
    },
    resetAlerGlobalState(state: IState) {
      state.alert = initialState.alert;
    },
  },
});
