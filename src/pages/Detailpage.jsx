import React, { useState } from 'react';
// import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchProductDetails, products } from '../productData';
import { useCart } from "../CartContext";

function DetailPage({ product }) {
    const { addToCart } = useCart();
    const { productId } = useParams()

    const productDetails = fetchProductDetails(productId);
    console.log('Product ID:', productId);

    if (!productDetails) {
        return <div>Product not found</div>;
    }
    console.log('Received Props:', productDetails);
    const handleAddToCart = () => {
        if (productDetails) {
            addToCart(productDetails);
        }
    };
    return (
        <>
            {/* <Header heading="Detail Page" /> */}
            {/* {productId} */}
            {/* {console.log(products)} */}

            <div className="container-fluid mt-5">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6 col-sm-12 col-md-6 text-center p-5">
                            <img style={{ height: "300px", width: "100%" }} src={productDetails.imageUrl} alt="product-image" />
                            <p className='mt-3' style={{ color: "black", fontWeight: "500", fontSize: "19px" }}>All hand-made with natural soy wax, Candleaf is made for your pleasure moments. <br />
                                <span style={{ color: "#56B280", fontWeight: "500", fontSize: "19px" }}>🚚 FREE SHIPPING</span>  </p>
                        </div>
                        <div className="col-lg-6 col-sm-12 col-md-6">
                            <h4 style={{ fontFamily: "Poppins", fontSize: "24px", fontStyle: "normal", fontWeight: "500" }}> <b>{productDetails.productName}{" Candleaf®"}</b></h4>
                            <div className="row mb-5">
                                <div className="col-lg-4 col-md-4 col-sm-12 ">
                                    <p style={{ color: "#56B280", fontSize: "20px", fontStyle: "normal", fontWeight: "600" }} className='mb-4'>${productDetails.price}</p>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-12 ">
                                    <form>
                                        <label>
                                            <input type="radio" name="choice" value="option1" className='me-3' />
                                            One time Purchase
                                        </label>
                                        <br />
                                        <div className='border mt-4'>
                                            <label style={{ display: 'flex', alignItems: 'center', }}>
                                                <input type="radio" name="choice" value="option2" className='me-3' />
                                                Subscribe and delivery every
                                                <select id="choices" name="choices" className='border ms-2'>
                                                    <option value="option1">4 weeks</option>
                                                    <option value="option2">3 weeks</option>
                                                    <option value="option3">2 weeks</option>
                                                </select>
                                            </label>
                                            <span className='p-1'>
                                                Subscribe now and get the 10% of discount on every recurring order.  The discount will be applied at checkout. See details
                                            </span>
                                        </div>
                                    </form>

                                    <Link to="/cart"><button onClick={handleAddToCart} className="btn btn-outline-success pe-5 ps-5 mt-5">
                                        + Add to cart
                                    </button></Link>
                                </div>
                            </div>
                            <div className="border mt-5 pt-3 pb-3 ps-2">
                                <p><b>Wax: </b>Top grade Soy wax that delivers a smoke less,  consistent burn</p>
                                <p><b>Fragrance: </b> Premium quality ingredients with natural essential oils </p>
                                <span><b>Burning Time:</b> 70-75 hours</span> <span><b>Dimension:</b> 10cm x 5cm </span> <span><b>Weight:</b> 400g </span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailPage;