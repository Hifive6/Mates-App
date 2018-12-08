import React, { Component } from 'react'
import '../loginbox/login.css'


export default class LoginBox extends Component {
    render() {
        return (
            <div>
  <h1 id="titleLanding">M A T E S</h1>

<div className="background">
            
<div id="login" className="container shadow-lg p-3 mb-5 bg-white rounded">
    <form>

       

     
       

       <a href="/createroom"><button type="submit" class="btn btn-primary">Login</button></a>
        <a href="/signup"><button type="signup" class="btn btn-primary">Sign Up</button></a>
    </form>

</div>
</div>
</div>


              

            
        )
    }
}
