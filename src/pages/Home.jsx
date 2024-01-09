import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { products } from "../productData";
import "../index.css"
import profile1 from "../img/profile1.svg"
import stars1 from "../img/stars.svg"
import DisplayProduct from "../components/Productdisplay";



function Home() {
   
    const navigate = useNavigate();

    const handleNavigate = (productId) => {
        // Navigate to the "male-section" route with the productId as a parameter
        // console.log("ProductId:", productId);
        navigate(`/${productId}/Detailpage`);
      };

    return (
        <>
            <div className="container-fluid  d-flex justify-content-cnter align-items-center hero-bg">
                <div className="container text-center p-5" style={{
                    width: "730px",
                    height: "349px",
                    background: "rgba(247, 248, 250, 0.80)",
                    backdropFilter: "blur(12px)",
                    flexShrink: 0,
                    borderRadius: "2",
                }}>
                    <h3 className="mt-5">🌱<br /> The nature candle</h3>
                    <p className="mb-4">All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments.</p>
                    <Link to="/products"><button className="btn btn-success"> Discovery of collection</button></Link>
                </div>
            </div>

            <div className="container-fluid p-5 " style={{ backgroundColor: "white" }}>

                <div className="container">
                    <h2 className="text-center">Products</h2>
                    <p className="text-center mb-3">Order it for you or for your beloved ones</p>
                    <div className="container ">
                        <div className="row justify-content-between pb-3">
                            {products.slice(0, 8).map((product) => (
                                <div key={product.id} onClick={() => handleNavigate(product.id)} className="col-3 mt-4" style={{ width: "255px", height: "230px", boxShadow: "0px 3.36px 20.16px 0px rgba(139, 167, 178, 0.16)" }}>
                                    <div className="" style={{ backgroundColor: "#F7F8FA" }}>
                                        <img src={product.imageUrl} alt="" style={{ height: "150px", width: "100%", }} />
                                    </div>

                                    <div className="" style={{ backgroundColor: "#ffffff" }}>
                                        <h4 style={{ color: "#1D293F", fontFamily: "Poppins", fontSize: '16px', fontStyle: 'normal', fontWeight: "500", lineHeight: "27.6px", letterSpacing: "-0.9px", }}>
                                            {product.productName}</h4>
                                        <p style={{ color: "#56B280", textAlign: "right", fontFamily: "Roboto", fontSize: "20px", fontStyle: "normal", fontWeight: "500", lineHeight: '27.6px', }}>
                                            ${product.price}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

            </div>

            <div className="container-fluid border" style={{ background: "#F7F8FA" }}>

                <div className="container broder p-5">
                    <div className="row border border-primary p-5">
                        <div className="col-6 border p-5">
                            <h2>Clean <br /> and fragrant soy wax</h2>
                            <p style={{ color: "#56B280" }}>Made for your home and for your wellness</p>
                            <div className="mb-5">
                                <li style={{ listStyleType: "circle" }}>Eco-sustainable:All recyclable materials, 0% CO2 emissions</li>
                                <li style={{ listStyleType: "circle" }}>Hyphoallergenic: 100% natural, human friendly ingredients </li>
                                <li style={{ listStyleType: "circle" }}>Handmade: All candles are craftly made with love.</li>
                                <li style={{ listStyleType: "circle" }}>Long burning: No more waste. Created for last long.</li>
                            </div>
                            <button className="btn btn-success">Learn more</button>
                        </div>
                        <div className="col-6 border border-success p-5">
                            <div className="section-bg" style={{ width: "100%", height: "446px", flexShrink: "0", backgroundColor: "#ffffff", boxShadow: "0px 4px 94px 0px rgba(123, 123, 123, 0.35)", }}>

                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <div className="container-fluid border p-5 text-center" style={{ backgroundColor: "rgba(86, 178, 128, 0.1)" }}>
                <h2>Testimonials</h2>
                <p>Some quotes from our happy customers</p>
                <div className="container p-2">
                    <div className="row  justify-content-between">

                        <div className=" col-4 pt-5 text-center" style={{ width: "350px", height: "295px", flexShrink: "0", borderRadius: "6px", background: "#FFF", boxShadow: "0px 4px 24px 0px rgba(139, 167, 178, 0.16)", }}>
                            <img src={profile1} alt="profile" style={{ borderRadius: "84px", boxShadow: "0px 3.36px 20.16px 0px rgba(139, 167, 178, 0.16)" }} /> <br />
                            <img src={stars1} alt="" />
                            <p style={{ fontFamily: "Poppins", fontSize: '22px', fontStyle: 'normal', fontWeight: "500", lineHeight: "28.8px", }}>“I love it! No more air fresheners”</p>
                            <p style={{ fontFamily: 'Helvetica', fontSize: '18px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal', }}>Luisa</p>
                        </div>

                        <div className=" col-4  pt-5 text-center" style={{ width: "350px", height: "295px", flexShrink: "0", borderRadius: "6px", background: "#FFF", boxShadow: "0px 4px 24px 0px rgba(139, 167, 178, 0.16)", }}>
                            <img src={profile1} alt="profile" style={{ borderRadius: "84px", boxShadow: "0px 3.36px 20.16px 0px rgba(139, 167, 178, 0.16)" }} /> <br />
                            <img src={stars1} alt="" />
                            <p style={{ fontFamily: "Poppins", fontSize: '22px', fontStyle: 'normal', fontWeight: "500", lineHeight: "28.8px", }}>“I love it! No more air fresheners”</p>
                            <p style={{ fontFamily: 'Helvetica', fontSize: '18px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal', }}>Luisa</p>
                        </div>

                        <div className=" col-4 pt-5 text-center" style={{ width: "350px", height: "295px", flexShrink: "0", borderRadius: "6px", background: "#FFF", boxShadow: "0px 4px 24px 0px rgba(139, 167, 178, 0.16)", }}>
                            <img src={profile1} alt="profile" style={{ borderRadius: "84px", boxShadow: "0px 3.36px 20.16px 0px rgba(139, 167, 178, 0.16)" }} /> <br />
                            <img src={stars1} alt="" />
                            <p style={{ fontFamily: "Poppins", fontSize: '22px', fontStyle: 'normal', fontWeight: "500", lineHeight: "28.8px", }}>“I love it! No more air fresheners”</p>
                            <p style={{ fontFamily: 'Helvetica', fontSize: '18px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal', }}>Luisa</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid p-5 " style={{ backgroundColor: "white" }}>

                <div className="container ">
                    <h2 className="text-center">Popular</h2>
                    <p className="text-center">Our top selling product that you may like</p>
                    <div className="container ">
                        <div className="row justify-content-between">

                            {products.slice(-4).map((products) => (
                                <div key={products.id} onClick={() => handleNavigate(products.id)} className="col-4 mt-4" style={{ width: "255px", height: "230px", boxShadow: "0px 3.36px 20.16px 0px rgba(139, 167, 178, 0.16)" }}>
                                    <div className="" style={{ backgroundColor: "#F7F8FA" }}>
                                        <img src={products.imageUrl} alt="" style={{ height: "150px", width: "100%", }} />
                                    </div>

                                    <div className="" style={{ backgroundColor: "#ffffff" }}>
                                        <h4 style={{ color: "#1D293F", fontFamily: "Poppins", fontSize: '16px', fontStyle: 'normal', fontWeight: "500", lineHeight: "27.6px", letterSpacing: "-0.9px", }}>
                                            {products.productName}</h4>
                                        <p style={{ color: "#56B280", textAlign: "right", fontFamily: "Roboto", fontSize: "20px", fontStyle: "normal", fontWeight: "500", lineHeight: '27.6px', }}>
                                            {products.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;