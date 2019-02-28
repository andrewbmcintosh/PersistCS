import React, { Component } from "react";

export class TimeSheet extends Component {
  render() {
    return (
      <div>
        <table className="table.table">
          <thead>
            <tr>
              <th>Id no.</th>
              <th>POS Id no.</th>
              <th>Start</th>
              <th>End</th>
              <th>Hours</th>
              <th>Hourly Rate</th>
              <th>Declared Tip</th>
              <th>Adjusted Tip</th>
              <th>Total Tip</th>
              <th>Sales</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* <td>{this.props.timeSheet}</td> */}
              <td>{this.props.timeSheetData.time_sheet_pos_id}</td>
              <td>{this.props.timeSheetData.start_time}</td>
              <td>{this.props.timeSheetData.end_time}</td>
              <td>{this.props.timeSheetData.hours}</td>
              <td>{this.props.timeSheetData.hourly_rate}</td>
              <td>{this.props.timeSheetData.declared_tips}</td>
              <td>{this.props.timeSheetData.adjusted_tips}</td>
              <td>{this.props.timeSheetData.total_tips}</td>
              <td>{this.props.timeSheetData.sales}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TimeSheet;
