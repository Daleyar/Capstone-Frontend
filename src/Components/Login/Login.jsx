import axios from 'axios';
import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import './Login.css'

class Login extends Component {
    state = {
        username: '',
        password: '',
    }

    componentDidMount() {
        const jwt= localStorage.getItem('token');
        try{
            const user = jwtDecode(jwt);
            this.setState({user})
        }catch{}
    }

    handleChange=(event) =>{
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        let user ={
            'username': this.state.username,
            'password': this.state.password
        }
        this.loginUser(user)
    }

    loginUser = async (user) => {
      let response = await axios.post(`http://127.0.0.1:8000/api/auth/login/`, user)
      console.log(response.data)
      localStorage.setItem('token', response.data.access);
      window.location = '/Home';
      return localStorage;
    }

  render(){
    return (
        <div className="container">
            <div className="card mb-3">
                <div className="card-body">
                    <form>
                        <h3>Sign In</h3>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="username" className="form-control" placeholder="Username" onChange = {this.handleChange} value= {this.state.username} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Password" onChange = {this.handleChange} value={this.state.password} />
                        </div>
                        <input type="submit" value="Login" className="btn btn-dark" />
                    </form>
                </div>
            </div>
        </div>
    )
}
}
  
export default Login ;