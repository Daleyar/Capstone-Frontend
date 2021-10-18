import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import jwtDecode from 'jwt-decode';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import Logout from './Logout/Logout';
import RestaurantSignUp from './RestaurantSignUp/RestaurantSignUp'
import axios from 'axios';

// import WelcomeNavBar from './NavBar/WelcomeNavBar'

class App extends Component {
    state = { 
      user: '',
      current_user: ''
    }
     
     componentDidMount() {
      const jwt = localStorage.getItem('token');
      try{
        const user = jwtDecode(jwt);
          this.setState({user});
          this.getCurrentUser(user)
      }catch{

        }
  }
  getCurrentUser = async (user) => {
    const userID = user.user_id
    try{
      const jwt= localStorage.getItem('token');
      let response = await axios.get(`http://127.0.0.1:8000/api/auth/${userID}/`, {headers: {Authorization: 'Bearer ' + jwt}})
      if (response === undefined){
        this.setState({});
      }
      else{
        this.setState({ 
            current_user: response.data
        });
      }
    }catch{
      console.log("Error in Api Call!");
    }
  };

  render() {
    const user = this.state.user;
    const current_user = this.state.current_user
    return (
      <Router>
        <div className="App">
          <NavBar user={user} current_user={current_user}/>
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
                <Route path="/RestaurantSignUp" component={RestaurantSignUp} />
              </Switch>
            </div>
      </Router>
    );
  }
}

export default App;