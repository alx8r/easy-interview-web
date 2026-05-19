'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { setupPersistor, setupStore } from '@/store/store';
import { AppStore, PersistorStore } from '@/store/types';
import { PersistGate } from 'redux-persist/integration/react';

const store: AppStore = setupStore();
const persistor: PersistorStore = setupPersistor(store);

const ReduxProvider = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
);

export default ReduxProvider;
