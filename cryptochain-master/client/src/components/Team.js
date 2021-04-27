import React, { Component } from "react";
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
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                id ligula porta felis euismod semper. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                ac cursus commodo.
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="img-fluid"
                src="https://source.unsplash.com/400x400/?laptop,code"
                alt=""
              />
            </div>
          </div>
          <div className="row featurette d-flex justify-content-center align-items-center">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">
                Garvit Kumar.{" "}
                <span className="text-muted">Reasearch and Documentation</span>
              </h2>
              <p className="lead">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                id ligula porta felis euismod semper. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                ac cursus commodo.
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <img
                className="img-fluid"
                src="https://source.unsplash.com/400x400/?laptop,mac"
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
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                id ligula porta felis euismod semper. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                ac cursus commodo.
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="img-fluid"
                src="https://source.unsplash.com/400x400/?tech,laptop"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
