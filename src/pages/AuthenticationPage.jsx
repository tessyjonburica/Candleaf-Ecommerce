import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../AuthContext';
import Register from './Register';

const AuthPage = () => {
  const { isLoggedIn, login } = useAuth(); // Use useAuth instead of useContext

  const navigate = useNavigate();

  function handleNavigate(){
    if(isLoggedIn === false){
      navigate('/auth')
    }else {
      navigate('/')
    }
  }
  


  return (
    <>

      {isLoggedIn ? (
        <Register />

      ) : (<div className="container p-5 ">
        <div className="container d-flex justify-content-center align-items-center  p-5 w-50" style={{ backgroundColor: "#f2f2f2" }}>
          <div className="col-lg-12 ">
            <h3>Login</h3>

            <form class="col g-3" >


              <div class="col-md-12">
                <label for="emailInput" class="form-label">Email address</label>
                <input type="email" class="form-control" id="emailInput" placeholder="name@example.com" required />
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
                <button class="btn btn-success mt-3" type="button">Login</button>
                <h6 className='mt-3'>Don't have an account? <Link to="/register">Sign Up »</Link></h6>
              </div>
            </form>
          </div>
        </div>
      </div>)}






    </>

  );
};

export default AuthPage;
