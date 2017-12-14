import createHistory from "history/createBrowserHistory";
import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { Router } from "react-router-dom";
import routes from "./routes";
import configureStore from "./store/configureStore";

const store = configureStore();
const history = createHistory();

render(
  <Provider store={store}>
    <Router history={history}>
      {renderRoutes(routes)}
    </Router>
  </Provider>,
  document.getElementById("root"),
);
