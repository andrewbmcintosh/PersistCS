import React, { Component } from "react";
import ClientData from "./ClientData";

export class DashboardCS extends Component {
  render() {
    return (
      <div>
        <h1>Im the Dashboard</h1>
        <ClientData />
      </div>
    );
  }
}

export default DashboardCS;
