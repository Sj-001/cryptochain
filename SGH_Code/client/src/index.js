import React from "react";
import { render } from "react-dom";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Blocks from "./components/Blocks";
import ConductTransaction from "./components/ConductTransaction";
import TransactionPool from "./components/TransactionPool";
import File from "./components/File";
import $ from "jquery";
import "./index.css";
import "./assets/css/style.css";
// my imports
import "jquery";
import "./assets/css/style.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/animate.css/animate.min.css";
import "./assets/vendor/icofont/icofont.min.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/venobox/venobox.css";
import "./assets/vendor/owl.carousel/assets/owl.carousel.min.css";
// import "./assets/vendor/aos/aos.css";
import "./assets/img/revv-10.jpg";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";
import About from "./components/About";
import Team from "./components/Team";
import Services from "./components/Services";

// my imports

render(
  <div style={{ backgroundColor: "gainsboro" }}>
    <header className="header-area">
      <NavbarComponent />
    </header>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={File} />
        <Route path="/blocks" component={Blocks} />
        <Route path="/conduct-transaction" component={ConductTransaction} />
        <Route path="/transaction-pool" component={TransactionPool} />
        <Route path="/about" component={About} />
        <Route path="/team" component={Team} />
        <Route path="/services" component={Services} />
      </Switch>
    </Router>
    <Footer />
  </div>,
  document.getElementById("root")
);
