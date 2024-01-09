import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { products } from "../productData";



function AllProducts() {


    const navigate = useNavigate();

    const handleNavigate = (productId) => {
        // Navigate to the "male-section" route with the productId as a parameter
        // console.log("ProductId:", productId);
        navigate(`/${productId}/Detailpage`);
    };

    return (
        <>
            <div className="container  mt-4">
                <Header heading="All Products" />
            </div>
            <div className="container-fluid">

                <div className="container ">
                    <div className="row  pb-3">
                        {products.map((product) => (
                            <div key={product.id} onClick={() => handleNavigate(product.id)} className="col-4 mt-4" style={{ width: "255px", height: "230px", boxShadow: "0px 3.36px 20.16px 0px rgba(139, 167, 178, 0.16)" }}>
                                <div className="" style={{ backgroundColor: "#F7F8FA" }}>
                                    <img src={product.imageUrl} alt="" style={{ height: "150px", width: "100%", }} />
                                </div>

                                <div className="" style={{ backgroundColor: "#ffffff" }}>
                                    <h4 style={{ color: "#1D293F", fontFamily: "Poppins", fontSize: '16px', fontStyle: 'normal', fontWeight: "500", lineHeight: "27.6px", letterSpacing: "-0.9px", }}>
                                        {product.productName}</h4>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <button onClick={() => { handleNavigate(product.id) }} className="btn btn-outline-success pe-4 ps-4">Buy</button>
                                        <p style={{ color: "#56B280", textAlign: "right", fontFamily: "Roboto", fontSize: "20px", fontStyle: "normal", fontWeight: "500", lineHeight: '27.6px', }}>
                                            ${product.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    );
}

export default AllProducts;