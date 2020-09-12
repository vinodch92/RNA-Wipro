import React from 'react';
import { Provider } from 'react-redux';
import StorybookUIRoot from '../storybook';
import config from './config';
import { ImagesSlider } from './screens';
import { StatusBar } from 'react-native';

const App = () => {
  /* storybookEnabled to be set in localConfig.js */
  if (config.storybookEnabled) {
    return <StorybookUIRoot />;
  }

  return (
    <Provider store={config.store}>
      <StatusBar barStyle="light-content" />
      <ImagesSlider />
    </Provider>
  );
};

export default App;
