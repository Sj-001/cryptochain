import React, { Component } from "react";
import { FormGroup, FormControl, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import history from "../history";

class ConductTransaction extends Component {
  state = { recipient: "", amount: 0, knownAddresses: [] };

  componentDidMount() {
    fetch(`${document.location.origin}/api/known-addresses`)
      .then((response) => response.json())
      .then((json) => this.setState({ knownAddresses: json }));
  }

  updateRecipient = (event) => {
    this.setState({ recipient: event.target.value });
  };

  updateAmount = (event) => {
    this.setState({ amount: Number(event.target.value) });
  };

  conductTransaction = () => {
    const { recipient, amount } = this.state;

    fetch(`${document.location.origin}/api/transact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recipient, amount }),
    })
      .then((response) => response.json())
      .then((json) => {
        alert(json.message || json.type);
        history.push("/transaction-pool");
      });
  };

  render() {
    return (
      <div className="ConductTransaction">
        <br />
        <table className="table table-dark" style={{ margin: "auto" }}>
          <thead
            className="thead"
            style={{ backgroundColor: "teal", textAlign: "center" }}
          >
            <tr
              style={{
                textAlign: "center",
                fontSize: "295%",
                fontWeight: "bold",
              }}
            >
              Known Addresses
            </tr>
          </thead>
          <tbody style={{ textAlign: "center" }}>
            {this.state.knownAddresses.map((knownAddress) => {
              return (
                <tr key={knownAddress}>
                  <td style={{ fontSize: "140%" }}>{knownAddress}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <br />
        <div
          class="card"
          style={{
            marginTop: "12%",
            width: "100%",
            backgroundColor: "grey",
            padding: "20px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h3
            className="section-title"
            style={{
              textAlign: "center",
              fontSize: "342%",
              fontWeight: "bold",
              padding: "20px",
              textAlign: "center",
              fontSize: "342%",
              fontWeight: "bold",
              color: "gainsboro",
            }}
          >
            Conduct a Transaction
          </h3>
          <FormGroup className="m-2">
            <FormControl
              input="text"
              placeholder="recipient"
              style={{ fontSize: "250%" }}
              value={this.state.recipient}
              onChange={this.updateRecipient}
            />
          </FormGroup>
          <FormGroup className="mt-5 mb-2 mr-2 ml-2">
            <FormControl
              input="number"
              placeholder="amount"
              style={{ fontSize: "250%" }}
              value={this.state.amount}
              onChange={this.updateAmount}
            />
          </FormGroup>
          <div>
            <Button
              style={{
                backgroundColor: "teal",
                fontSize: "250%",
                marginTop: "20px",
                color: "white",
              }}
              onClick={this.conductTransaction}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default ConductTransaction;
