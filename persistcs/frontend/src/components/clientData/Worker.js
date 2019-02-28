import React, { Component } from "react";
import TimeSheet from "./TimeSheet";

export class Worker extends Component {
  render() {
    return (
      <div>
        <p>{this.props.worker.name}</p>
        <div>
          {this.props.worker.timesheet_worker.map(timeSheetData => (
            <div key={timeSheetData.id}>
              <TimeSheet timeSheetData={timeSheetData} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Worker;
