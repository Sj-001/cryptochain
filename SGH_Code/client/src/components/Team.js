import React, { Component } from "react";
import member1 from "../assets/img/shruti.jpg";
import member2 from "../assets/img/garvit.jpeg";
import member3 from "../assets/img/hemant.jpeg";
class Team extends Component {
  render() {
    return (
      <div>
        <h4
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "400%",
            color: "teal",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          Our Team
        </h4>
        <div className="container my-4">
          <div className="row featurette d-flex justify-content-center align-items-center">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                Shruti Jain.{" "}
                <span className="text-muted">Backend Development</span>
              </h2>
              <p className="lead">
                2nd Year student of B.E Computer Science And Business Systems.
                Contributed by developing backend of the software.
              </p>
            </div>
            <div className="col-md-5">
              <img className="img-fluid" src={member1} alt="" />
            </div>
          </div>
          <div className="row featurette d-flex justify-content-center align-items-center">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">
                Garvit Kumar.{" "}
                <span className="text-muted">Reasearch and Documentation</span>
              </h2>
              <p className="lead">
                2nd Year student of B.E Computer Science And Business Systems.
                Contributed in reaserach and documentation of the software.
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <img
                className="img-fluid"
                style={{ width: "80%" }}
                src={member2}
                alt=""
              />
            </div>
          </div>
          <div className="row featurette d-flex justify-content-center align-items-center">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                Hemant Bahl.{" "}
                <span className="text-muted">Frontend Development</span>
              </h2>
              <p className="lead">
                2nd Year student of B.E Computer Science And Business Systems.
                Contributed by developing frontend of the software.
              </p>
            </div>
            <div className="col-md-5">
              <img className="img-fluid" src={member3} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
