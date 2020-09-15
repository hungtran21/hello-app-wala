import { combineReducers, configureStore } from "@reduxjs/toolkit";
// ...

import createSagaMiddleware from "redux-saga";
import countReducer from "./slice";
import runReducer from "./slice2";
import { createWrapper, MakeStore } from "next-redux-wrapper";
import countSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  count: countReducer,
  run: runReducer,
});

type RootReducer = ReturnType<typeof rootReducer>;

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
  });
  sagaMiddleware.run(countSaga);

  return store;
};

const makeStore: MakeStore<RootReducer> = () => createStore();

export const wrapper = createWrapper<RootReducer>(makeStore);
