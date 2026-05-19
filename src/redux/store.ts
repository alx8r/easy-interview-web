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

export const persistConfig = {
  key: 'root',
  storage,
};

const reducers = {
  globalReducer,
};

const services = {
  //   [signInService.reducerPath]: signInService.reducer,
  //   [leaderboardService.reducerPath]: leaderboardService.reducer,
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
      }),
    // .concat(signInService.middleware)
    // .concat(leaderboardService.middleware),
  });

export const setupPersistor = (store: Store) => persistStore(store);
