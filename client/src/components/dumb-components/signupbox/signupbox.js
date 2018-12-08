import React, { Component } from 'react'
import '../SignupBox/signup.css'

export default class SignupBox extends Component {
  render() {
    return (
      <div>
        
       
        <h1>SIGN UP</h1>

<div class="background">
            
  <div id="login" class="container shadow-lg p-3 mb-5 bg-white rounded">
      <form>
          <div class="form-group">
              <label for="text">Name</label>
                <input type="text" class="form-control" id="exampleInputtext" aria-describedby="texthelp" placeholder="Name"></input>
          </div>
          <div class="form-group">
              <label for="exampleInputemail">Email</label>
                <input type="email" class="form-control" id="exampleInputemail" placeholder="email@example.com"></input>
          </div>
          <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
          </div>
          <a href="/index"><button type="submit" class="btn btn-primary">Submit</button></a>
      </form>
  </div>
</div>
       


      </div>
    )
  }
}
