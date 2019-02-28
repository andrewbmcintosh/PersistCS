import React, { Component } from "react";
import TimeSheet from "./TimeSheet";
import Worker from "./Worker";

export class Restaurant extends Component {
  render() {
    const numberOfWorkers = this.props.clientData.worker_restaurant.length;

    return (
      <div className="card card-body">
        <label>{this.props.clientData.name}</label>
        <div>Number of Workers: {numberOfWorkers}</div>
        <div>
          {this.props.clientData.worker_restaurant.map(worker => (
            <div key={worker.id}>
              <Worker worker={worker} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Restaurant;
