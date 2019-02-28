import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getClientData } from "../../actions/clientData";
import Restaurant from "./Restaurant";

export class ClientData extends Component {
  componentDidMount() {
    this.props.getClientData();
  }
  render() {
    return (
      <div>
        <h3>Im the Client Data Component</h3>
        {this.props.clientData.map(clientData => (
          <div key={clientData.id}>
            <Restaurant clientData={clientData} />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  clientData: state.clientData.clientData
});

export default connect(
  mapStateToProps,
  { getClientData }
)(ClientData);
