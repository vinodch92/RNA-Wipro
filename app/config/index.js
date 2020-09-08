import colors from './colors';
import localConfig from './localConfig';
import strings from './strings';
import fontWeights from './fontWeights';
import accessibilityStrings from './accessibilityStrings';
import { store } from './store';

const config = {
  colors,
  ...localConfig,
  store,
  strings,
  fontWeights,
  accessibilityStrings,
};

export default config;
