import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import jwtDecode from 'jwt-decode';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';

class App extends Component {
    state = { 
      user: ''
     }
     
     componentDidMount() {
       const jwt= localStorage.getItem('token');
        try{
          const user = jwtDecode(jwt)
          this.setState({user});
        }catch{

        }
  }

  render() {
    return (
      <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/Login"}>SubHub</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/Login"}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/SignUp"}>Sign up</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path="/Login" component={Login} />
              <Route path="/SignUp" component={SignUp} />
            </Switch>
          </div>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;