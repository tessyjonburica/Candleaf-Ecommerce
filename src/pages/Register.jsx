import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
// import { useCart } from "../CartContext";

function Register() {
  const { login } = useAuth()
  // const { cart } = useCart()
  const navigate = useNavigate();
  function handleNavigate() {

    console.log('registered!!')
    navigate('/checkout')
  }

  return (
    <>
      <div className="container p-5 " >
        <div className="container d-flex justify-content-center align-items-center p-5 w-50" style={{ backgroundColor: "#f2f2f2" }}>
          <div className="col-lg-12">
            <h3>Sign Up</h3>

            <form class="col g-3">
              <div class="col-md-12">
                <label for="validationServer01" class="form-label">First name</label>
                <input type="text" class="form-control " id="validationServer01" required />
                {/* <div class="valid-feedback">
                  Looks good!
                </div> */}
              </div>
              <div class="col-md-12">
                <label for="validationServer02" class="form-label">Last name</label>
                <input type="text" class="form-control" id="validationServer02" required />
                {/* <div class="valid-feedback">
                  Looks good!
                </div> */}
              </div>

              <div class="col-md-12">
                <label for="emailInput" class="form-label">Email address</label>
                <input type="email" class="form-control" id="emailInput" placeholder="example@com" required />
                <div class="invalid-feedback">
                  Please enter a valid email address.
                </div>
                {/* <div class="valid-feedback">
                  Looks good!
                </div> */}
              </div>
              <div class="col-md-12">
                <label for="passwordInput" class="form-label">Password</label>
                <input type="password" class="form-control" id="passwordInput" placeholder="Enter your password"
                  required pattern=".{8,}" title="Password must be at least 8 characters long" />
                <div class="invalid-feedback">
                  Password must be at least 8 characters long.
                </div>
              </div>

              <div class="col-12">
                <button class="btn btn-success mt-3" type="button" onClick={handleNavigate}>Signup</button>
                <h6 className='mt-3'>Already have an account? <Link to='/auth'>Login</Link></h6>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;