import DisplayProduct from "../components/Productdisplay";

function Checkout() {
    return ( 
        <>
        <h2>Checkout Page</h2>

        <div className="container-fluid d-flex">
            <div className="container col-6 border border-success">
                <DisplayProduct/>
            </div>
            <div className="container col-6 border border-primary">
                <DisplayProduct/>
            </div>
        </div>
        </>
     );
}

export default Checkout;