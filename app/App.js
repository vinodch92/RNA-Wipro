import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import config from './config';
import { ImagesSlider } from './screens';

const App = () => {
  return (
    <Provider store={config.store}>
      <ImagesSlider />
    </Provider>
  );
};

export default App;
