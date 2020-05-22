import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../redux/actions/cart-action";

const CartPage = (props) => {
  const [cart, setCart] = React.useState([]);

  function sumTotalPrice(data) {
    let total = 0;
    for (let item in data) {
      let product = data[item];
      total += product.price;
    }
    return total;
  }

  React.useEffect(() => {
    setCart(props.cart);
  }, [props.cart]);
  return (
    <div className="col-lg-8  py-3 my-3  shadow mx-auto">
      <h1>Cart Page</h1>
      <hr />
      {cart.length ? (
        <div>
          {cart.map((product, i) => (
            <div className="row mx-auto border p-2 my-2" key={i}>
              <div className="col-2 text-center">
                <img
                  src={product.img}
                  alt=""
                  className="img-fluid"
                  style={{
                    maxHeight: 50,
                    maxWidth: 50,
                  }}
                />
              </div>
              <div className="col-10 row mx-auto">
                <div className="clearfix col">
                  <span className="mb-0">{product.name}</span>
                  <span className="mb-0 font-weight-bold float-right text-primary">
                    {product.price} $
                  </span>
                </div>
                <span
                  className="text-danger h3"
                  style={{ cursor: "pointer" }}
                  title={`remove ${product.name} from list`}
                  onClick={() => props.dispatch(removeFromCart(product))}
                >
                  &times;
                </span>
              </div>
            </div>
          ))}
          <hr />
          <div className="clearfix p-2">
            <span>Total</span>
            <span className="text-primary float-right font-weight-bold">
              {sumTotalPrice(cart)}$
            </span>
          </div>
        </div>
      ) : (
        <div>No Items in Cart</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(CartPage);
