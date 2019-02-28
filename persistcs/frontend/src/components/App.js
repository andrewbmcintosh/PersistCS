import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "../store";
import DashboardCS from "./clientData/DashboardCS";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <DashboardCS />
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
