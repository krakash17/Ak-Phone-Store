import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/NavBar";
import Productlist from "./Components/Product-list";
import Details from "./Components/details";
import Default from "./Components/default";
import Cart from "./Components/Cart";
import AddToCart from "./Components/AddToCart";
import Modal from "./Components/Modal";
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Productlist} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/addToCart" component={AddToCart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
