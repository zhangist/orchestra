import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

declare const module: any;

export default function configureStore(preloadedState?: any) {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(applyMiddleware(thunk)),
  );

  if (module.hot) {
    module.hot.accept("../reducers", () => {
      const nextRootReducer = require("../reducers");

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
