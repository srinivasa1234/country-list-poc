import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./components/routing/Routes";

// Redux
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route component={Routes} />{" "}
          </Switch>{" "}
        </Fragment>{" "}
      </Router>{" "}
    </Provider>
  );
};

export default App;
