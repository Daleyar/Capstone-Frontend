import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({user}) => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
          <Link class="navbar-brand" to={"/Home"}>SubHub</Link>
          <div class="collapse navbar-collapse" id="navbarColor03">
            <ul class="navbar-nav me-auto">
            {user &&
                <div>
                    <li class="nav-item">
                        <Link class="nav-link" to={"/Logout"}>Log Out</Link>
                    </li>
                </div>
            }
            {!user &&
                <div>
                    <li class="nav-item">
                        <Link class="nav-link" to={"/Login"}>Login</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to={"/SignUp"}>Sign up</Link>
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