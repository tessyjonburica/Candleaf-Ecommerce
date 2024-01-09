import product1 from "./img/image 1(1).png";
import product2 from "./img/image 1(2).png";
import product3 from "./img/image 1(3).png";
import product4 from "./img/image 1(4).png";
import product5 from "./img/image 1(5).png";
import product6 from "./img/image 1(6).png";

// productData.jsx
export const products = [
  {
    id: 1,
    productName: "Spiced Mint",
    price: 9.99,
    description: "lorem",
    imageUrl: product1,
  },
  {
    id: 2,
    productName: "Sweet Strawberry",
    price: 9.98,
    description: "lorem",
    imageUrl: product2,
  },
  {
    id: 3,
    productName: "Cool Berries",
    price: 10.99,
    description: "lorem",
    imageUrl: product3,
  },
  {
    id: 4,
    productName: "Clean Lavander",
    price: 9.99,
    description: "lorem",
    imageUrl: product4,
  },
  {
    id: 5,
    productName: "Fragnant Cinnamon",
    price: 9.99,
    description: "lorem",
    imageUrl: product5,
  },
  {
    id: 6,
    productName: "Spiced Mint",
    price: 8.99,
    description: "lorem",
    imageUrl: product6,
  },
  {
    id: 7,
    productName: "Summer Cherries",
    price: 8.99,
    description: "lorem",
    imageUrl: product1,
  },
  {
    id: 8,
    productName: "Juicy Lemon",
    price: 8.99,
    description: "lorem",
    imageUrl: product3,
  },
];

export const fetchProductDetails = (productId) => {
  const product = products.find((p) => p.id === parseInt(productId, 10));
  console.log("Fetched Product:", product);
  return product || null; // Return null if the product is not found
};
