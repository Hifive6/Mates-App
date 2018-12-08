import React, { Component } from 'react'
import '../signupbox/signup.css'



export default class SignupBox extends Component {
  render() {
    return (
      <div>

        <h1>SIGN UP</h1>

<div className="background">
            
  <div id="login" className="container shadow-lg p-3 mb-5 bg-white rounded">
      <form>
          <div className="form-group">
              <label for="text">Name</label>
                <input type="text" className="form-control" id="exampleInputtext" aria-describedby="texthelp" placeholder="Name"></input>
          </div>
          
          <div className="form-group">
              <label for="exampleInputemail">Email</label>
                <input type="email" className="form-control" id="exampleInputemail" placeholder="email@example.com"></input>
          </div>

          <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
          </div>

          <a href="/index"><button type="submit" className="btn btn-primary">Submit</button></a>
          
      </form>
  </div>
</div>
       </div>
       

    )
    }
    }
