import { combineReducers, configureStore, Store } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import globalReducer from '@/redux/stores/global';
import authReducer, { authService } from '@/redux/stores/auth';
import sectionsReducer, { sectionsService } from '@/redux/stores/sections';

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['globalReducer'],
  blacklist: ['signInReducer', 'sectionsReducer'],
};

const reducers = {
  globalReducer,
  authReducer,
  sectionsReducer,
};

const services = {
  [authService.reducerPath]: authService.reducer,
  [sectionsService.reducerPath]: sectionsService.reducer,
};

export const rootReducer = combineReducers({
  ...reducers,
  ...services,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      })
        .concat(authService.middleware)
        .concat(sectionsService.middleware),
  });

export const setupPersistor = (store: Store) => persistStore(store);
