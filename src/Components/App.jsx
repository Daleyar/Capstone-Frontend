import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import jwtDecode from 'jwt-decode';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import Logout from './Logout/Logout'
// import WelcomeNavBar from './NavBar/WelcomeNavBar'

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
    const user = this.state.user;
    return (
      <Router>
        <div className="App">
          <NavBar user={this.state.user}/>
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route
                  path ='/'
                  exact
                  render = {props => {
                      if (!user){
                        return <Redirect to ="/login"/>
                      }else{
                        return <Home {...props} user = {user} />
                      }
                  }}
                  />
                <Route exact path='/' component={Login} />
                <Route path="/Login" component={Login} />
                <Route path="/SignUp" component={SignUp} />
                <Route path="/Home" component={Home} />
                <Route path="/Logout" component={Logout} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;