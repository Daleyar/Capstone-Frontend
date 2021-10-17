import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import jwtDecode from 'jwt-decode';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
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
    return (
      <Router>
        <div className="App">
          <NavBar user={this.state.user}/>
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path='/' component={Login} />
                <Route path="/Login" component={Login} />
                <Route path="/SignUp" component={SignUp} />
                <Route path="/Home" component={Home} />
                
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;