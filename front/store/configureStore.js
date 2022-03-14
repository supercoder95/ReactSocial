// configureStore.js
import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from '../sagas';

const loggerMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    // 1차 주석
    // if (typeof action === 'function') {
    //   return action(dispatch, getState);
    // }
    // 1차 주석 종료
    console.log(action);
    return next(action);
  };

const configureStore = () => {
  // const store = createStore(reducer);
  // return store;
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhacer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhacer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
