import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import './config/ReactotronConfig';

import Toast from 'react-native-fast-toast';

import {store, persistor} from './store';
import Router from './Routes';

export default function Index() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar barStyle="dark-content" backgroundColor="#63c2d1" />
          <Router />
        </PersistGate>
      </Provider>
      <Toast ref={ref => (global['toast'] = ref)} />
    </>
  );
}
