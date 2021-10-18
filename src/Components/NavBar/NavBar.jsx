import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = ({user, current_user}) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/Home"}>SubHub</Link>
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto">
            {current_user.is_restaurant_owner &&
                <div >
                    <li className="nav-item">
                        <Link className="nav-link" to={"/Dashboard"}>Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/RestaurantSignUp"}>Add your Restaurant</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/Logout"}>Log Out</Link>
                    </li>
                </div>
            }
            {user &&
                <div >
                    <li className="nav-item">
                        <Link className="nav-link" to={"/Home"}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/Logout"}>Log Out</Link>
                    </li>
                </div>
            }
            {!user &&
                <div>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/Login"}>Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/SignUp"}>Sign up</Link>
                    </li>
                </div>
            }   
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;