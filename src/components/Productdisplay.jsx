import { products } from "../productData";

function DisplayProduct() {
    return ( 
        <>
        <div className="container p-5" style={{backgroundColor: "rgba(242, 242, 242, 1)"}}>

            <div className="d-flex pt-5 pb-5">
                <div className="me-5">
                <img src={products[1].imageUrl} style={{background: "lightgray"}} alt="product-img" />
                </div>
                <div className=" ms-5">
                    <h4>{products[1].productName}</h4>
                    <p className="text-success" style={{fontWeight:"600", fontSize: "18px"}}>${products[1].price}</p>
                </div>
            </div>
            <div className="border-top border-bottom pt-4 pb-4">
                <input type="text" placeholder="Cupon code" className="pt-2 pe-5 ps-3 pb-2 border border-muted" />
                <button className="btn btn-secondary ms-4">Add code</button>
            </div>
          
          <div className="border-bottom border-muted pt-4 pb-4">
            <div className="d-flex justify-content-between">
                <p>Subtotal:</p>
                <p>$9.99</p>
            </div>
            <div className="d-flex justify-content-between">
                <p>Shipping:</p>
                <p>Calculated at the next step</p>
            </div>
          </div>
          <h4 className="pt-4">Total: $9.99</h4>
        </div>
        </>
     );
}

export default DisplayProduct;