import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";
import CartPage from "./components/CartPage";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="col-lg-10 mx-auto">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/product/:id" component={ProductPage} />
            <Route path="/cart" component={CartPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
