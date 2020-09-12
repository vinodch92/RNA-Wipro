import colors from './colors';
import localConfig from './localConfig';
import fontWeights from './fontWeights';
import accessibilityStrings from './accessibilityStrings';
import { store } from './store';

const config = {
  colors,
  ...localConfig,
  store,
  fontWeights,
  accessibilityStrings,
};

export default config;
