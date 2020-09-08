import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from '../states';
import * as sagas from '../sagas';
import { sagaMonitor, reactotron } from '../../reactotron-config';

/* boolean if environment is dev then true otherwise false */
const isDevEnvironment = process.env.NODE_ENV !== 'production';

/* create a default middleware */
const defaultMiddleware = getDefaultMiddleware({
  thunk: false,
});

/* create a saga middleware depends on environment */
const sagaMiddleware = isDevEnvironment
  ? createSagaMiddleware({ sagaMonitor })
  : createSagaMiddleware();

/* create an enhancer using reactotron for debugging */
const enhancers =
  isDevEnvironment && reactotron?.createEnhancer ? [reactotron.createEnhancer()] : [];

/* create a middleware with default middleware and saga middleware */
const middleware = [...defaultMiddleware, sagaMiddleware];

/* configuring store with reducer, middleware, devTools enable and enhancers */
const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: isDevEnvironment,
  enhancers,
});

/* run the saga middleware with root saga*/
sagaMiddleware.run(sagas.default);

export { store };
