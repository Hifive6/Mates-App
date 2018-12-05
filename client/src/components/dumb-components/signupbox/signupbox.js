import React, { Component } from 'react'
import '../signupbox/signup.css'

import Carousel1 from '../carousel1/Carousel1';
export default class Signupbox extends Component {
  render() {
    return (
      <div>
        
       
<Carousel1 />
       
<h2>Sign-Up</h2>
    <form>
        <div className="form-group">
            <label for="staticEmail" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-6">
            <input type="text" className="form-control" id="name" value="text"></input>
        </div>
        <div className="form-group">
            <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-6">
            <input type="text" className="form-control" id="staticEmail" value="email@example.com"></input>
          </div>
        </div>
        <div className="form-group">
            <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-6">
            <input type="password" className="form-control" id="inputPassword" placeholder="Password"></input>
        </div>
        <br></br>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        </div>
        </form>
        

      </div>
    )
  }
}
