import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import Routes from './routes';
import { store, persistir } from './store';

export default function src() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistir}>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <Routes />
      </PersistGate>
    </Provider>
  );
}
