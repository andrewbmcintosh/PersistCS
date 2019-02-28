import React, { Component } from "react";
import TimeSheet from "./TimeSheet";

export class Restaurant extends Component {
  render() {
    const numberOfWorkers = this.props.clientData.worker_restaurant.length;

    return (
      <div className="card card-body">
        <label>{this.props.clientData.name}</label>
        <div>Number of Workers: {numberOfWorkers}</div>
        <TimeSheet timeSheetData={this.props.clientData.worker_restaurant} />
      </div>
    );
  }
}

export default Restaurant;
