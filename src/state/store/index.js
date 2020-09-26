import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import searchReducer from '../concepts/search/reducer';

const store = createStore(searchReducer, composeWithDevTools(
  // applyMiddleware(...middleware),
  // other store enhancers if any
));

export default store;
