/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './app/App';
import { name as appName } from './app.json';

if (process.env.NODE_ENV !== 'production') {
  import('./reactotron-config').then(() => null);
}

AppRegistry.registerComponent(appName, () => App);
