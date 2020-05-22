import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { getAllCart } from "../redux/actions/cart-action";

const NavBar = props => {
  let {dispatch}  = props;
  React.useEffect(() => {
    dispatch(getAllCart());
  }, [dispatch]);
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link to="/">
          <span className="navbar-brand">Shopping Cart</span>
        </Link>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-collapse collapse" id="navbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink to="/" exact className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                href="/"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                id="user-dropdown"
              >
                user
              </a>
              <ul className="dropdown-menu dropdown-menu-right">
                <li className="dropdown-item nav-item">
                  <a href="/" className="small">
                    Link 1
                  </a>
                </li>
                <li className="dropdown-item nav-item">
                  <a href="/" className="small">
                    Link 1
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" exact className="nav-link">
                <span>Cart</span>
                <sup className="bg-primary text-light rounded-circle px-1 mx-1">
                  {props.cart.length}
                </sup>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = state => state;
export default connect(mapStateToProps)(NavBar);
