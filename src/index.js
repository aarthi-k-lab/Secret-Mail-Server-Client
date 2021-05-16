import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MessageDisplayParent from "./messagedisplayparent.js";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/message">
          <MessageDisplayParent />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
