import React, { Component } from "react";

class Footer extends Component {
  handleClick(event) {
    event.preventDefault();
    document.getElementById("subscribe").style.backgroundColor = "grey";
    document.getElementById("subscribe").value = "Subscribed!";
  }
  render() {
    return (
      <div>
        <footer
          id="footer"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="500"
        >
          <div className="footer-newsletter">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <h4>Our Newsletter</h4>
                  <p>Subscribe to our newsletter to keep track of updates.</p>
                </div>
                <div className="col-lg-6">
                  <form action="" method="post">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                    <input
                      type="submit"
                      id="subscribe"
                      value="Subscribe"
                      onClick={this.handleClick}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="/about">About us</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="/services">Services</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>
                      <a href="/team">Team</a>
                    </li>
                    {/* <li>
                      <i className="bx bx-chevron-right"></i>
                      <a href="#">Privacy policy</a>
                    </li> */}
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="/blocks">View Blockchain</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>
                      <a href="/blocks">View Transactions</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>
                      <a href="/transaction-pool">Mine A Block</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="/conduct-transaction">Transact</a>
                    </li>
                    {/* <li>
                      <i className="bx bx-chevron-right"></i>
                      <a href="#">Graphic Design</a>
                    </li> */}
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-contact">
                  <h4>Contact Us</h4>
                  <p>
                    A108 Adam Street <br />
                    New York, NY 535022
                    <br />
                    United States <br />
                    <br />
                    <strong>Phone:</strong> +1 5589 55488 55
                    <br />
                    <strong>Email:</strong> info@vergio.com
                    <br />
                  </p>
                </div>

                <div className="col-lg-3 col-md-6 footer-info">
                  <h3>About Vergio</h3>
                  <p>
                    Vergio is a shared digital currency and open-source
                    programming project dependent on SGH Blockchain.
                  </p>
                  <div className="social-links mt-3">
                    <a href="#" className="twitter">
                      <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="#" className="facebook">
                      <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="#" className="instagram">
                      <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="#" className="linkedin">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>Vergio</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">
              Designed by <a href="/team">SGH</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
