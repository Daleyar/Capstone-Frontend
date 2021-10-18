import axios from 'axios';
import React,{ Component} from 'react';
import './RestaurantForm.css'

class RestaurantSignUp extends Component {
    state = { 
      name:'',
      address:'',
      city:'',
      state:'',
      zip_code:'',
      phone_number: '',
    }

  handleChange=(event) =>{
    this.setState ({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit=(event) =>{
    event.preventDefault();
    let restaurant = {
      'name': this.state.name,
      'address': this.state.address,
      'city': this.state.city,
      'state': this.state.state,
      'zip_code' : this.state.zip_code,
      'phone_number': this.state.phone_number,
    }
    console.log(restaurant)
    this.registerNewUser(restaurant)
  };

  async registerNewUser(newRestaurant){
    try{
      let response = await axios.post("http://127.0.0.1:8000/api/restaurant/", newRestaurant)
      console.log(response);
      window.location = '/Dashboard'
      console.log(newRestaurant)
    }
    catch{
      console.log("Error in Restaurant Registration!");
    }
  };

  render() { 
    return (
      <div className="restaurantContainer">
        <div className="card mb-3 container-lg">
          <div className="card-body">
          <form onSubmit={(event) => this.handleSubmit(event)}>
              <h3>Sign Up</h3>
              <div className="form-group">
                  <label>Store Name</label>
                  <input type="text" name="name" className="form-control" placeholder="Store name" onChange={this.handleChange} value={this.state.name} />
              </div>
              <div className="form-group">
                  <label>Address</label>
                  <input type="text" name="address" className="form-control" placeholder="Store address" onChange={this.handleChange} value={this.state.address}/>
              </div>
              <div className="form-group">
                  <label>City</label>
                  <input type="text" name="city" className="form-control" placeholder="City" onChange={this.handleChange} value={this.state.city} />
              </div>
              <div className="form-group">
                  <label>State</label>
                  <input type="text" name="state" className="form-control" placeholder="State" onChange={this.handleChange} value={this.state.state} />
              </div>
              <div className="form-group">
                  <label>Zip Code</label>
                  <input type="text" name="zip_code" className="form-control" placeholder="Zip Code" onChange={this.handleChange} value={this.state.zip_code}/>
              </div>
              <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" name="phone_number" className="form-control" placeholder="Store Number" onChange={this.handleChange} value={this.state.phone_number}/>
              </div>
              <button type="submit" className="btn btn-dark">Register Restaurant</button>
          </form>
          </div>
        </div>
      </div>
    );
  }
}
 
 export default RestaurantSignUp