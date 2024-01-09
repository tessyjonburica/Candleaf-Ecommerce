import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";
import Header from "./Header";

function Cart() {
  const { cart, removeFromCart} = useCart();
  const [counts, setCounts] = useState({});



  const decreaseCount = (productId) => {
    if (counts[productId] > 1) {
      setCounts((prevCounts) => ({
        ...prevCounts,
        [productId]: prevCounts[productId] - 1,
      }));
    }
  };

  const increaseCount = (productId) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: (prevCounts[productId] || 0) + 1,
    }));
  };
  console.log('counts', counts)

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => {
      const itemTotal = item.price * (counts[item.id] || 1);
      return total + itemTotal;
    }, 0).toFixed(2);
  };



  return (
    <>
      <div className="container border">
        <div className="text-center mt-5 mb-5">
          <Header heading="Your Cart Items" />
          <Link
            to="/products"
            style={{ textDecoration: "none", color: "green" }}
            className="text-center"
          >
            Continue Shopping
          </Link>
        </div>
        {cart.length > 0 ? (
          <>
            <table className="justify-content-between border border-danger">
              <thead>
                <tr className="border">
                  <th
                    className="border border-primary"
                    style={{ padding: "0 650px 0 20px" }}
                  >
                    Product
                  </th>
                  <th
                    className="border border-success"
                    style={{ padding: "0 30px 0 30px", textAlign: "center" }}
                  >
                    Price
                  </th>
                  <th
                    className="border border-danger"
                    style={{ padding: "0 50px 0 30px", textAlign: "center" }}
                  >
                    Quantity
                  </th>
                  <th
                    className="border border-primary"
                    style={{ padding: "0 30px 0 30px", textAlign: "center" }}
                  >
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.productId}>
                    <td className="d-flex align-items-center justify-between">
                      <div>
                        <img
                          src={item.imageUrl}
                          alt="product image"
                          style={{ width: "160px", height: "120px" }}
                        />
                      </div>
                      <div>
                        <p>{item.productName} Candleaf®</p>
                        <Link className="text-success" onClick={() => removeFromCart(item.id)}>
                          Remove
                        </Link>
                      </div>
                    </td>
                    <td className="text-center">
                      <p>${item.price}</p>
                    </td>
                    <td className="text-center">
                      <div className=" border border-success ms-5 me-5 d-flex align-items-center justify-content-between">
                        <button
                          className="btn dcrBtn text-danger"
                          onClick={() => decreaseCount(item.id)}
                        >
                          -
                        </button>
                        <span>{counts[item.id] || 1}</span>
                        <button
                          className="btn icrBtn text-success"
                          onClick={() => increaseCount(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="text-center">
                      <p>
                        $
                        {parseFloat(
                          (item.price * (counts[item.id] || 1)).toFixed(2)
                        )}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="d-flex justify-content-end mt-3">
              <div className="d-col">

              <h5>Subtotal: ${calculateSubtotal()}</h5>
              <p className="text-muted">Tax and shipping cost will be calculated later</p>
              </div>
              <div className="d-col ms-5">
               <Link to="/auth"> <button className="btn btn-success">Checkout</button></Link>
              </div>
            </div>
          </>
        ) : (
          // Display a message when the cart is empty
          <div className="text-center">
            <p>Your cart is empty!</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
