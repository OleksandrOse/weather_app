import React from 'react';
import { Provider } from 'react-redux';
import Forecast from './src/components/Forecast/Forecast';

import { store } from './src/app/store';

export default function App() {
  return (
    <Provider store={store}>
      <Forecast />
    </Provider>
  );
}
