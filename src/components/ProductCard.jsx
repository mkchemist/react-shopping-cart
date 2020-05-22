import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/cart-action";
class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {}

  addToCart(product) {
    this.props.dispatch(addToCart(product));
  }

  render() {
    return (
      <div className="card">
        <Link to={`product/${this.props.product.id}`}>
          <img
            src={this.props.product.img}
            alt=""
            className="img-fluid rounded card-img-top product-hover-zoom-effect"
          />
        </Link>
        <div className="card-body">
          <p>{this.props.product.name}</p>
          <p>Price : {this.props.product.price} $</p>
          <p className="small text-muted">{this.props.product.description}</p>
          <div className="row mx-auto justify-content-center">
            <button
              className="btn mx-1"
              onClick={this.addToCart.bind(this, this.props.product)}
            >
              <span>
                <i className="fa fa-cart-plus" />
              </span>
              <span> add</span>
            </button>
            <button className="btn mx-1">
              <span>
                <i className="fa fa-star" />
              </span>
              <span> like</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ProductCard);
