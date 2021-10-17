import axios from 'axios';
import React,{ Component} from 'react';
import './SignUp.css'

class SignUp extends Component {
    state = { 
      username:'',
      password:'',
      email:'',
      firstname:'',
      lastname:'',
      owner: false
    }

  handleChange=(event) =>{
    this.setState ({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit=(event) =>{
    event.preventDefault();
    let user ={
      'username': this.state.username,
      'password': this.state.password,
      'email': this.state.email,
      'first_name' : this.state.firstname,
      'last_name': this.state.lastname,
      'owner': this.state.owner
    }
    this.addNewUser(user)
  };

  async addNewUser(newUser){
    await axios.post(`http://127.0.0.1:8000/api/auth/register/`, newUser)
    .then(response => {alert("Success! You may login now.")})
  }

  render() { 
    return (
      <div className="container">
        <div className="card mb-3">
          <div className="card-body">
          <form>
              <h3>Sign Up</h3>
              <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" placeholder="Username" onChange={this.handleChange} value={this.state.username} />
              </div>
              <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" placeholder="Enter password" />
              </div>
              <div className="form-group">
                  <label>First name</label>
                  <input type="text" className="form-control" placeholder="First name" onChange={this.handleChange} value={this.state.firstname} />
              </div>
              <div className="form-group">
                  <label>Last name</label>
                  <input type="text" className="form-control" placeholder="Last name" onChange={this.handleChange} value={this.state.lastname}/>
              </div>
              <div className="form-group">
                  <label>Email address</label>
                  <input type="email" className="form-control" placeholder="Enter email" onChange={this.handleChange} value={this.state.email}/>
              </div>
              <div className="form-check">
              <label clclassNameass="form-check-label" for="flexCheckDefault">Restaurant Owner</label>
                  <input className="form-check-input" type="checkbox" value="true" id="flexCheckDefault"/>
              </div>
              <button type="submit" className="btn btn-dark">Sign Up</button>
              <p className="forgot-password text-right">
                  Already registered <a href="/Login">sign in?</a>
              </p>
          </form>
          </div>
        </div>
      </div>
    );
  }
}
 
 export default SignUp