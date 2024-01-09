import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // const addToCart = (product) => {
  //   setCart((prevCart) => {
  //     const updatedCart = [...prevCart, product];
  //     console.log("Adding to Cart:", product);
  //     console.log("Updated Cart:", updatedCart);
  //     return updatedCart;
  //   });
  // };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        // Product with the same ID already exists in the cart, increase quantity
        const updatedCart = prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        console.log("Increasing quantity:", product.id);
        console.log("Updated Cart:", updatedCart);
        return updatedCart;
      } else {
        // Product with a new ID, add it to the cart
        const updatedCart = [...prevCart, { ...product, quantity: 1 }];
        console.log("Adding to Cart:", product);
        console.log("Updated Cart:", updatedCart);
        return updatedCart;
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== productId);
      console.log("Removing from Cart:", productId);
      console.log("Updated Cart:", updatedCart);
      return updatedCart;
    });
  };


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
}
