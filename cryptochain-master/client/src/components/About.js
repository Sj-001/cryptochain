import React, { Component } from "react";
import logo from "../assets/img/cryptologo.png";
class About extends Component {
  state = {
    flag: false,
  };

  handleClick = (event) => {
    event.preventDefault();
    this.setState({ flag: true });
  };

  render() {
    return (
      <div>
        <img
          src={logo}
          style={{
            width: "43%",
            marginLeft: "28%",
            marginTop: "50px",
            marginBottom: "50px",
            borderRadius: "5%",
          }}
        />
        <p className="lead" style={{ margin: "50px", fontSize: "200%" }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vergio is a shared digital
          currency and open-source programming project dependent on SGH
          Blockchain. It is an advanced resource intended to function as a
          mechanism of trade wherein singular coin proprietorship records are
          put away in a record existing in a type of an electronic information
          base utilizing solid cryptography to get exchange records, to control
          the making of extra coins, and to check the exchange of coin
          possession.{" "}
        </p>
        <p className="lead" style={{ margin: "50px", fontSize: "200%" }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At the point when executed with
          decentralized control, each Vergio shell works through appropriated
          record innovation, commonly SGH blockchain, that fills in as a public
          monetary exchange data set. The organization is decentralized
          importance it doesn't have any administering authority or a solitary
          individual taking care of the structure. Maybe a gathering of hubs
          keeps up the organization making it decentralized. We provide enhanced
          security through our secured decentralised network. As it disposes of
          the requirement for a focal power, nobody can basically change any
          attributes of the organization for their advantage. Utilizing
          encryption guarantees another layer of safety for the framework. Each
          data on the SGH blockchain is hashed cryptographically.
        </p>
        <p className="lead" style={{ margin: "50px", fontSize: "200%" }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In straightforward terms, the data
          on the organization shrouds the real essence of the information. For
          this interaction, any information overcomes a numerical calculation
          that creates an alternate sort of significant worth, yet the length is
          constantly fixed. Typically, a public ledger will give every
          information about a trade and the part. It's beginning and end out in
          the open, no spot to stow away. Though the case for private or joined
          blockchain is to some degree extraordinary. However, in those cases,
          various people can see what genuinely goes on in the record.
        </p>
        <p className="lead" style={{ margin: "50px", fontSize: "200%" }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Likewise each blockchain prospers
          considering the arrangement estimations. The designing is keenly
          arranged, and understanding computations are at the focal point of
          this plan. Each SGH blockchain has a consent to assist the association
          with choosing. The understanding is obligated for the association
          being trustless. Center points likely will not trust in each other,
          yet they can trust in the computations that run at its middle. That is
          the explanation every decision on the association is a victorious
          circumstance for the SGH blockchain. It's one of the upsides of
          blockchain features. The SGH blockchain features simplify life for new
          workers and help to appreciate Why Blockchain is Important. Various
          people travel to another nation searching for a prevalent life and
          work and forsake families. Nevertheless, sending money to their
          families abroad takes a huge load of time and could get deadly amidst
          difficulty. As of now, SGH blockchains are unreasonably speedy, and
          they can without a doubt use it to send money to their loved ones.
          Another lovely the truth is the splendid understanding system. This
          can allow making faster settlements for such an understanding. This is
          presumably the best benefit of SGH blockchain features straight up
          till right now. Simultaneously we offer different types of assistance
          to the SGH blockchain clients out there with the most progressive
          instrument of exchange survey and recording, with the improved
          security. Quite possibly the main administrations we give is seeing
          late squares, having credits Hash(unique id), Timestamp, and Data. The
          record is coursed across a couple of hubs, which implies the data is
          repeated and taken care of quickly on every hub across the system.
        </p>
        {this.state.flag ? (
          <div
            style={{
              width: "50%",
              backgroundColor: "grey",
              padding: "20px",
              borderRadius: "10px",
              marginBottom: "100px",
              marginTop: "100px",
              textAlign: "center",
              marginLeft: "26%",
            }}
          >
            <h4
              style={{
                color: "gainsboro",
                fontSize: "250%",
                fontWeight: "bold",
              }}
            >
              Thank You for showing your interest!
            </h4>
            <p style={{ fontSize: "200%", fontStyle: "italic" }}>
              We will soon reach out to you.
            </p>
          </div>
        ) : (
          <div style={{ marginBottom: "100px", marginTop: "100px" }}>
            <h4
              style={{
                textAlign: "center",
                color: "teal",
                fontSize: "300%",
                marginBottom: "20px",
              }}
            >
              Drop your queries here.
            </h4>
            <div
              style={{
                margin: "auto",
                width: "50%",
                backgroundColor: "grey",
                padding: "20px",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
            >
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    required
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="4"
                    placeholder="Enter your query here."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    backgroundColor: "teal",
                    color: "white",
                    fontSize: "150%",
                  }}
                  onClick={this.handleClick}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default About;
