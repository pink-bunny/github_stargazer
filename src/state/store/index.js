import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogicMiddleware } from 'redux-logic';

import buildHttpClient from '../../lib/buildHttpClient';
import rootReducer from './rootReducer';
import operationsRoot from '../concepts/operationsRoot';

const operationsDependencies = {
  httpClient: buildHttpClient(),
};

const logicMiddleware = createLogicMiddleware(
  operationsRoot,
  operationsDependencies,
);

const middlewares = applyMiddleware(
  logicMiddleware,
);

const enhancer = composeWithDevTools(
  middlewares,
  // other store enhancers if any
);

const store = createStore(rootReducer, enhancer);

export default store;
