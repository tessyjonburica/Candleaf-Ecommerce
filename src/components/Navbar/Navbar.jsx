import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "./logo.svg"
import avatar from "./avatar.png"
import './nav.css';
import { useAuth } from "../../AuthContext";


function Navbar() {
    const { isLoggedIn, login, logout } = useAuth(); // Use useAuth instead of useContext

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between align-items-center contain" id="navbarSupportedContent">
                        <ul className="navbar-nav central">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle active" to="/" aria-current="page" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Discovery
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/products">Products</Link></li>
                                    <li><Link className="dropdown-item" to="/male-section">Male Clothings</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/childrensection">Children Clothings</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="">About</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" to="#">Contact Us</a>
                            </li>

                        </ul>
                        <div className="d-flex d-sm-col me-5 align-items-center">

                            <div>
                                {isLoggedIn ? (
                                     <div className="nav-item dropdown">
                                     <Link className="navbar-brand nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                         <img src={avatar} alt="Avatar Logo" style={{ width: "40px", backgroundColor: "white" }} className="rounded-pill" />
                                     </Link>
                                     <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                         <li><Link className="dropdown-item" to="/malesection">Settings</Link></li>
                                         <li><hr className="dropdown-divider" /></li>
                                         {/* <li ><Link className="dropdown-item" onClick={isLoggedIn ? login : logout}>{isLoggedIn ? 'Login' : 'Logout'}</Link></li> */}
                                         <li className="dropdown-item" onClick={logout}> {isLoggedIn ? 'Logout' : 'Login'}</li>
                                     </ul>
                                 </div>

                                ) : (
                                    // <p>Please log in</p>
                                    
                               <Link to='/auth'>
                                <button className=" btn btn-success justify-content-between align-items-center me-2" >
                                    {isLoggedIn ? 'Logout' : 'Login'}
                                </button>
                                </Link>
                                )}
                            </div>
                           

                            <div >
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/cart">
                                            {/* <span class="badge badge-pill bg-danger">1</span> */}
                                            {/* <span><i class="fa-solid fa-shopping-cart"></i></span> */}
                                            Add to cart
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    );
}

export default Navbar;