import React, { Component } from "react";
import icon from "../assets/img/vergio.jpeg";
import blocks from "../assets/img/blocks.png";
import txn from "../assets/img/txn.png";
import mine from "../assets/img/mine.png";
import decentralize from "../assets/img/decentralization.png";
import security from "../assets/img/security.png";
import ledger from "../assets/img/ledger.png";
import consensus from "../assets/img/consensus.png";
import fast from "../assets/img/fast.png";
import ReactDOM from "react-dom";
import "../assets/css/Navbar.css";
import NavbarComponent from "./NavbarComponent";
import wallet from "../assets/img/wallet.png";

// import "../assets/css/style.css";
// import { Navbar } from "bootstrap";
import {
  Button,
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";

import "../index.css";
class File extends Component {
  state = { walletInfo: {} };

  componentDidMount() {
    fetch(`${document.location.origin}/api/wallet-info`)
      .then((response) => response.json())
      .then((json) => this.setState({ walletInfo: json }));
  }

  render() {
    const { address, balance } = this.state.walletInfo;
    return (
      <div>
        <div>
          <section
            id="hero"
            className="d-flex justify-cntent-center align-items-center"
          >
            <div
              id="heroCarousel"
              className="container carousel carousel-fade"
              data-ride="carousel"
            >
              <div className="carousel-item active">
                <div className="carousel-container">
                  <h2 className="animate__animated animate__fadeInDown">
                    Welcome to <span>SGH BLOCKCHAIN</span>
                  </h2>
                  <p
                    className="animate__animated animate__fadeInUp"
                    style={{ fontSize: "140%" }}
                  >
                    Vergio is a shared digital currency and open-source
                    programming project dependent on SGH Blockchain. It is an
                    advanced resource intended to function as a mechanism of
                    trade wherein singular coin proprietorship records are put
                    away in a record existing in a type of an electronic
                    information base utilizing solid cryptography to get
                    exchange records, to control the making of extra coins, and
                    to check the exchange of coin possession. At the point when
                    executed with decentralized control, each Vergio shell works
                    through appropriated record innovation, commonly SGH
                    blockchain, that fills in as a public monetary exchange data
                    set...
                  </p>
                  <a
                    href="/about"
                    className="btn-get-started animate__animated animate__fadeInUp"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </section>

          <main id="main">
            <section className="services">
              <div className="container">
                <div className="row">
                  <div
                    className="col-md-4 col-lg-4 col-sm-2 d-flex align-items-stretch"
                    data-aos="fade-up"
                  >
                    <div className="icon-box" style={{ width: "126%" }}>
                      <div className="icon">
                        {/* <i className="bx bxl-dribbble"></i> */}
                        <img
                          src={blocks}
                          style={{ width: "188%", marginLeft: "-51%" }}
                        ></img>
                      </div>
                      <h4
                        className="title"
                        className="pt-5"
                        style={{
                          marginTop: "auto",
                          textAlign: "center",
                          marginTop: "24%",
                        }}
                      >
                        <Button
                          className="btn btn-dark"
                          style={{ fontSize: "140%" }}
                          href="/blocks"
                        >
                          View Blocks
                        </Button>
                      </h4>
                    </div>
                  </div>

                  <div
                    className="col-md-4 col-lg-4 col-sm-2 d-flex align-items-stretch"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div className="icon-box" style={{ width: "126%" }}>
                      <div className="icon">
                        {/* <i classNam/ex-file"></i> */}
                        <img
                          src={mine}
                          style={{ width: "188%", marginLeft: "-51%" }}
                        ></img>
                      </div>
                      <h4
                        className="title"
                        className="pt-5"
                        style={{
                          marginTop: "auto",
                          textAlign: "center",
                          marginTop: "24%",
                        }}
                      >
                        <Button
                          className="btn btn-dark"
                          style={{ fontSize: "140%" }}
                          href="/transaction-pool"
                        >
                          Mine
                        </Button>
                      </h4>
                    </div>
                  </div>

                  <div
                    className="col-md-4 col-lg-4 col-sm-2 d-flex align-items-stretch"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="icon-box" style={{ width: "126%" }}>
                      <div className="icon">
                        {/* <i className="bx bx-tachometer"></i> */}
                        <img
                          src={txn}
                          style={{ width: "188%", marginLeft: "-51%" }}
                        ></img>
                      </div>
                      <h4
                        className="title"
                        className="pt-5"
                        style={{
                          marginTop: "auto",
                          textAlign: "center",
                          marginTop: "24%",
                        }}
                      >
                        <Button
                          className="btn btn-dark"
                          style={{ fontSize: "140%" }}
                          href="/conduct-transaction"
                        >
                          Transact
                        </Button>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="wallet">
              <div
                className="card"
                style={{
                  backgroundColor: "grey",
                  color: "white",
                  marginLeft: "auto",
                  marginRight: "auto",
                  textAlign: "center",
                  width: "60%",
                  padding: "45px",
                }}
              >
                <div className="row">
                  <div className="col-lg-6">
                    <img
                      src={wallet}
                      style={{ width: "60%", marginLeft: "-30%" }}
                    ></img>
                  </div>
                  <div
                    className="col-lg-6"
                    style={{
                      marginTop: "auto",
                      marginBottom: "auto",
                      marginLeft: "-10%",
                      marginRight: "auto",
                    }}
                  >
                    <h4 style={{ fontSize: "500%", fontWeight: "bold" }}>
                      My Wallet
                    </h4>

                    <div>
                      <div>
                        <h4 style={{ color: "black", fontWeight: "bold" }}>
                          ADDRESS:
                        </h4>{" "}
                        <div
                          style={{
                            backgroundColor: "teal",
                            padding: "10px",
                            borderRadius: "10%",
                            fontSize: "100%",
                          }}
                        >
                          {address}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <h4
                          className="mt-2"
                          style={{ color: "black", fontWeight: "bold" }}
                        >
                          BALANCE:
                        </h4>{" "}
                        <div
                          style={{
                            backgroundColor: "teal",
                            padding: "10px",
                            borderRadius: "10%",
                            fontSize: "100%",
                          }}
                        >
                          {balance}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="features">
              <div className="container">
                <div className="section-title">
                  <h2>Features</h2>
                </div>

                <div className="row" data-aos="fade-up">
                  <div className="col-md-5">
                    <img
                      style={{ width: "90%" }}
                      src={decentralize}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="col-md-7 pt-4 m-auto">
                    <h3 style={{ color: "teal" }}>Decentralized</h3>
                    <p className="" style={{ fontSize: "140%" }}>
                      The organization is decentralized importance it doesn't
                      have any administering authority or a solitary individual
                      taking care of the structure. Maybe a gathering of hubs
                      keeps up the organization making it decentralized. This is
                      one of the vital highlights of SGH blockchain innovation
                      that works impeccably. Allow me to simplify it. Blockchain
                      places us clients in a direct position. As the framework
                      doesn't need any overseeing authority, we can
                      straightforwardly get to it from the web and store our
                      resources there. You can store Vergio shells with the
                      assistance of blockchain and you'll have direct authority
                      over them utilizing your private key.
                    </p>
                  </div>
                </div>

                <div className="row" data-aos="fade-up">
                  <div className="col-md-5 order-1 order-md-2">
                    <img
                      style={{ width: "90%" }}
                      src={security}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="col-md-7 pt-5 order-2 order-md-1 m-auto">
                    <h3 style={{ color: "teal" }}>Enhanced Security</h3>
                    <p style={{ fontSize: "140%" }}>
                      As it disposes of the requirement for a focal power,
                      nobody can basically change any attributes of the
                      organization for their advantage. Utilizing encryption
                      guarantees another layer of safety for the framework. Be
                      that as it may, how can it offer such a lot of safety
                      contrasted with previously existing specialists? All
                      things considered, it's amazingly secure in light of the
                      fact that it offers an extraordinary mask – Cryptography.
                      Added with decentralization, cryptography lays another
                      layer of assurance for clients. Cryptography is a fairly
                      intricate numerical calculation that goes about as a
                      firewall for assaults. Each data on the SGH blockchain is
                      hashed cryptographically. In straightforward terms, the
                      data on the organization shrouds the real essence of the
                      information. For this interaction, any information
                      overcomes a numerical calculation that creates an
                      alternate sort of significant worth, yet the length is
                      constantly fixed. You could consider it a special
                      recognizable proof for each information. Every one of the
                      squares in the record accompany its very own special hash
                      and contain the hash of the past block. Along these lines,
                      changing or attempting to alter the information will mean
                      changing all the hash IDs. Furthermore, that is somewhat
                      outlandish. You'll have a private key to get to the
                      information however will have a public key to make
                      exchanges.
                    </p>
                  </div>
                </div>

                <div className="row" data-aos="fade-up">
                  <div className="col-md-5">
                    <img
                      style={{ width: "90%" }}
                      src={ledger}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="col-md-7 pt-5 m-auto">
                    <h3 style={{ color: "teal" }}>Distributed Ledgers</h3>
                    <p style={{ fontSize: "140%" }}>
                      Normally, a public record will give each data about an
                      exchange and the member. It's everything out in the open,
                      no place to stow away. Albeit the case for private or
                      combined blockchain is somewhat unique. Yet, in those
                      cases, numerous individuals can perceive what truly goes
                      on in the record. That is on the grounds that the record
                      on the organization is kept up by any remaining clients on
                      the framework. This appropriated computational force
                      across the PCs to guarantee a superior result. This is the
                      explanation it's viewed as one of the SGH blockchain's
                      fundamental highlights. The outcome will consistently be a
                      higher proficient record framework that can take on the
                      conventional ones.
                    </p>
                  </div>
                </div>

                <div className="row" data-aos="fade-up">
                  <div className="col-md-5 order-1 order-md-2">
                    <img
                      style={{ width: "90%" }}
                      src={consensus}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="col-md-7 pt-5 order-2 order-md-1 m-auto">
                    <h3 style={{ color: "teal" }}>Consensus</h3>
                    <p style={{ fontSize: "140%" }}>
                      Each blockchain flourishes in light of the agreement
                      calculations. The engineering is shrewdly planned, and
                      agreement calculations are at the center of this design.
                      Each SGH blockchain has an agreement to help the
                      organization decide. In straightforward terms, the
                      agreement is a dynamic interaction for the gathering of
                      hubs dynamic on the organization. Here, the hubs can go to
                      an arrangement rapidly and moderately quicker. At the
                      point when a large number of hubs are approving an
                      exchange, an agreement is totally fundamental for a
                      framework to run easily. You could consider it sort of a
                      democratic framework, where the lion's share wins, and the
                      minority needs to help it. The agreement is liable for the
                      organization being trustless. Hubs probably won't confide
                      in one another, yet they can confide in the calculations
                      that run at its center. That is the reason each choice on
                      the organization is a triumphant situation for the SGH
                      blockchain. It's one of the advantages of blockchain
                      highlights. There are loads of various agreement
                      calculations for SGH blockchain. Each has its own
                      remarkable method to settle on choices and idealizing
                      already presents botches. The design makes a domain of
                      decency on the web. In any case, to keep the
                      decentralization going each SGH blockchain should have an
                      agreement calculation, or, in all likelihood its guiding
                      principle is lost.
                    </p>
                  </div>
                </div>
                <div className="row" data-aos="fade-up">
                  <div className="col-md-5">
                    <img
                      style={{ width: "90%" }}
                      src={fast}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="col-md-7 pt-5 order-2 order-md-1 m-auto">
                    <h3 style={{ color: "teal" }}>Faster Settlement</h3>
                    <p style={{ fontSize: "140%" }}>
                      Conventional financial frameworks are very sluggish. Now
                      and then it can require days to handle an exchange in the
                      wake of concluding all settlements. It likewise can be
                      undermined without any problem.SGH Blockchain offers a
                      quicker settlement contrasted with customary financial
                      frameworks. This way a client can move cash generally
                      quicker, which saves a great deal of time over the long
                      haul. The SGH blockchain highlights make life simpler for
                      unfamiliar laborers and help to comprehend Why Blockchain
                      is Important. Numerous individuals travel to another
                      country looking for a superior life and work and abandon
                      families. Be that as it may, sending cash to their
                      families abroad takes a ton of time and could get lethal
                      in the midst of hardship. Presently, SGH blockchains are
                      excessively quick, and they can undoubtedly utilize it to
                      send cash to their friends and family. Another pleasant
                      reality is the brilliant agreement framework. This can
                      permit making quicker settlements for any sort of
                      agreement. This is probably the best advantage of SGH
                      blockchain highlights right up 'til the present time. This
                      way SGH blockchain will affect the global exchanges as
                      well!
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    );
  }
}

export default File;
