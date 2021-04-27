import React, { Component } from "react";
import viewBlocks from "../assets/img/viewBlocks.png";
import pending from "../assets/img/pending.png";
import mineBlock from "../assets/img/mineBlock.png";
import transact from "../assets/img/transact.png";
class Services extends Component {
  render() {
    return (
      <div>
        <section className="features">
          <div className="container">
            <div className="section-title">
              <h2>User Friendly</h2>
            </div>

            <div className="row" data-aos="fade-up">
              <div className="col-md-5">
                <img
                  style={{ width: "60%" }}
                  src={viewBlocks}
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-md-7 pt-4 m-auto">
                <h3 style={{ color: "teal" }}>View Block</h3>
                <p style={{ fontSize: "140%" }}>
                  One of the most important services we provide is viewing
                  recent blocks, having attributes Hash(unique id), Timestamp,
                  and Data. Hash is the most important part of a block. The
                  foundation of a cryptocurrency is the blockchain, which is a
                  worldwide ledger shaped by connecting together individual
                  blocks of transaction information. The blockchain just
                  contains approved transactions, which prevents deceitful
                  transactions and twofold expenditure of the cash. The
                  subsequent scrambled worth is a progression of numbers and
                  letters that don't take after the first information and is
                  known as a hash. Timestamp contains the date and time at which
                  the block was created and Data contains the information about
                  the block ie the details of the transaction.
                </p>
              </div>
            </div>

            <div className="row" data-aos="fade-up">
              <div className="col-md-5 order-1 order-md-2">
                <img
                  style={{ width: "60%" }}
                  src={pending}
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-md-7 pt-5 order-2 order-md-1 m-auto">
                <h3 style={{ color: "teal" }}>View Pending Transactions</h3>
                <p style={{ fontSize: "140%" }}>
                  When we submit the details of reciepient, control moves to the
                  transaction pool page, where the information about the
                  transaction comes up like the hash id of a person who sent,
                  balance of the vergio coins left and the name of the person to
                  whom the quantity of the coins are sent.
                </p>
              </div>
            </div>

            <div className="row" data-aos="fade-up">
              <div className="col-md-5">
                <img
                  style={{ width: "60%" }}
                  src={mineBlock}
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-md-7 pt-5 m-auto">
                <h3 style={{ color: "teal" }}>Mine block</h3>
                <p style={{ fontSize: "140%" }}>
                  The term crypto mining implies acquiring digital forms of
                  money by tackling cryptographic conditions using Computers. To
                  mine the block, confirm the transaction details form the
                  transaction pool page and then it goes to the recent confirmed
                  transactions.
                </p>
              </div>
            </div>

            <div className="row" data-aos="fade-up">
              <div className="col-md-5 order-1 order-md-2">
                <img
                  style={{ width: "60%" }}
                  src={transact}
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-md-7 pt-5 order-2 order-md-1 m-auto">
                <h3 style={{ color: "teal" }}>Conduct transaction</h3>
                <p style={{ fontSize: "140%" }}>
                  The record is circulated across a few nodes, which means the
                  information is reproduced and put away immediately on each
                  node across the framework. To conduct a transaction, add
                  reciepient name and the amount of vergio coins one needs to
                  send. After that transaction moves to the transaction pool for
                  verification and confirmation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Services;
