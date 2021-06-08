import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Transaction from "./Transaction";

class Block extends Component {
  state = { displayTransaction: false };

  toggleTransaction = () => {
    this.setState({ displayTransaction: !this.state.displayTransaction });
  };

  get displayTransaction() {
    const { data } = this.props.block;

    const stringifiedData = JSON.stringify(data);

    const dataDisplay =
      stringifiedData.length > 35
        ? `${stringifiedData.substring(0, 35)}...`
        : stringifiedData;

    if (this.state.displayTransaction) {
      return (
        <div>
          {data.map((transaction) => (
            <div key={transaction.id}>
              <hr />
              <Transaction transaction={transaction} />
            </div>
          ))}
          <br />
          <Button
            style={{
              backgroundColor: "teal",
              fontSize: "107%",
              color: "white",
            }}
            onClick={this.toggleTransaction}
          >
            Show Less
          </Button>
        </div>
      );
    }

    return (
      <div>
        <div>Data: {dataDisplay}</div>
        <Button
          style={{
            marginTop: "10px",
            fontSize: "105%",
            backgroundColor: "teal",
            color: "white",
          }}
          onClick={this.toggleTransaction}
        >
          Show More
        </Button>
      </div>
    );
  }

  render() {
    const { timestamp, hash } = this.props.block;

    const hashDisplay = `${hash.substring(0, 15)}...`;

    return (
      <div
        className="Block"
        style={{ backgroundColor: "grey", color: "white", fontSize: "184%" }}
      >
        <div>Hash: {hashDisplay}</div>
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          Timestamp: {new Date(timestamp).toLocaleString()}
        </div>
        {this.displayTransaction}
      </div>
    );
  }
}

export default Block;
