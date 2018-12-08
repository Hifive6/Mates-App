import React, { Component } from 'react'
import EmailInputField from '../../dumb-components/loginbox/EmailInputField'
import PasswordInputField from '../../dumb-components/loginbox/PasswordInputField'
import LoginButton from '../../dumb-components/loginbox/LoginButton'
import RememberMeCheckBox from '../../dumb-components/loginbox/RememberMeCheckBox'
import SignUpButton from '../../dumb-components/loginbox/SignUpButton';
import Home from "../../Pages/Login/login"
import '../LoginPage/LoginPage.css'

export default class LoginPage extends Component {
  render() {
    return (
      
        <div>

<div className="container">
    <h1 id="titleLanding">M A T E S</h1>
</div>



<div className="login-background">

    <div id="login" className="container shadow-lg p-3 mb-5 bg-white rounded">

        <form>

<EmailInputField />
<PasswordInputField />
<RememberMeCheckBox />



<div className="row">
<LoginButton 
onClick={this.handleFormSubmit}/>
<SignUpButton />
</div>
   
        </form>

    </div>

</div>
</div>
      
    )
  }
}
