import ReduxProvider from './provider';
import { useAppDispatch, useAppSelector } from './hooks';
import { AppDispatch, RootState } from './types'
import { setupStore } from './store';

export default setupStore;
export { ReduxProvider };
export { useAppDispatch, useAppSelector };
export type { RootState, AppDispatch };