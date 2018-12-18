import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import EmailInputField from '../../dumb-components/loginbox/EmailInputField'
import PasswordInputField from '../../dumb-components/loginbox/PasswordInputField'
import LoginButton from '../../dumb-components/loginbox/LoginButton'
import RememberMeCheckBox from '../../dumb-components/loginbox/RememberMeCheckBox'
import SignUpButton from '../../dumb-components/loginbox/SignUpButton';
import Createroompage from "../CreateroomPage"
import '../LoginPage/LoginPage.css'

export default class LoginPage extends Component {

    state = {
        email: "",
        password: ""

    };

    // handleInputChange= event => {
        
    // }

    // handleBtnClick = event => {
       
    //     return <a href="/createroom"></a>
    // }
    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     if(this.state.username && this.state.password){

    //     //    React.render (
    //         // <div>
    //         //     <Createroompage  url="/api/"/>
    //         // </div>
    //         // );
    //     };

  render() {
    return (
      
        <div>
<div className="login-background">
<div className="container">
    <h1  id="titleLanding">M A T E S</h1>
</div>





    <div id="login" style={{marginTop: '100px'}} className="container shadow-lg p-3 mb-5 bg-white rounded">

        <form>

<EmailInputField />
<PasswordInputField />
<RememberMeCheckBox />



<div className="row">
<Link to="/createroom">
<LoginButton />
</Link>
   
{/* </LoginButton>  */}


<Link to="/signup">
<SignUpButton />
</Link>
</div>
   
        </form>

    </div>

</div>
</div>
      
    )
  }
}
