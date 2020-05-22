import React from "react";
import { useParams } from "react-router-dom";
import ProductData from "../fake-api/products";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/cart-action";

const ProductPage = props => {
  let [product, setProduct] = React.useState({});
  let { id } = useParams();
  React.useEffect(() => {
    ProductData.map(product => {
      let $id = parseInt(id);
      if ($id === product.id) {
        setProduct(product);
      }
      return null;
    });
  }, [product, id]);
  if (!product.name) {
    return (
      <div className="text-center">
        <span>
          <i className="fa fa-spin fa-spinner" />
        </span>
      </div>
    );
  }
  return (
    <div>
      <div className="row mx-auto py-3 mt-5 px-2 border rounded">
        <div className="col-lg-3">
          <img
            src={product.img}
            alt=""
            className="img-thumbnail product-hover-zoom-effect"
          />
        </div>
        <div className="col-lg-9">
          <h1 className="font-weight-light">{product.name}</h1>
          <p className="lead text-primary">price : {product.price}$</p>
          <p className="lead text-muted">{product.description}</p>
          <div className="row mx-auto justify-content-center">
            <button
              className="btn mx-1"
              onClick={() => props.dispatch(addToCart(product))}
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
    </div>
  );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ProductPage);
