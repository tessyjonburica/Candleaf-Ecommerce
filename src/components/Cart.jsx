import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";
import Header from "./Header";
import { useAuth } from '../AuthContext';

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const [counts, setCounts] = useState({});
  const { isLoggedIn, login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (isLoggedIn === true) {
      navigate('/checkout');
    } else {
      login();
      navigate('/checkout');
    }
  };

  const decreaseCount = (itemId) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: Math.max((prevCounts[itemId] || 0) - 1, 0),
    }));

    updateCart(itemId, Math.max((counts[itemId] || 0) - 1, 1));
  };

  const increaseCount = (itemId) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: (prevCounts[itemId] || 0) + 1,
    }));

    updateCart(itemId, (counts[itemId] || 0) + 1);
  };

  const updateCart = (itemId, quantity) => {
    const updatedCart = cart.map(item =>
      item.id === itemId ? { ...item, quantity } : item
    );

    // You should replace this with your actual function to update the cart in CartContext
    // updateCartFunction(updatedCart);
  };

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
                  <tr key={item.id}>
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
                <Link to="/auth">
                  <button className="btn btn-success" onClick={handleLogin}>
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center">
            <p>Your cart is empty!</p>
          </div>
        )}
      </div>
    </>
  );
}
