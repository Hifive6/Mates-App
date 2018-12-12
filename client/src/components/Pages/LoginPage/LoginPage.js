import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import EmailInputField from '../../dumb-components/loginbox/EmailInputField'
import PasswordInputField from '../../dumb-components/loginbox/PasswordInputField'
import LoginButton from '../../dumb-components/loginbox/LoginButton'
import RememberMeCheckBox from '../../dumb-components/loginbox/RememberMeCheckBox'
import SignUpButton from '../../dumb-components/loginbox/SignUpButton';
import Createroompage from '../../dumb-components/createroompage/CreateroomPage'
import Messageboard from '../../dumb-components/Messageboard/MessageBoardPage'
import API from '../../../utils/API'
import '../LoginPage/LoginPage.css'
import ProfilePage from '../ProfilePage/ProfilePage';

export default class LoginPage extends Component {

    state = {
        email: "",
        password: "",
        test: [],
        loggedIn: false

    };

    // handleInputChange= event => {
    //     //set the state of user's email and password to their corresponding input values
    //     this.setState({
    //         email: event.target.value,
    //         password: event.target.value
    //     });

            
        
    // }

    // handleBtnClick = event => {
    //     event.preventDefault();
    //     this.setState({loggedIn: true})
    //     API.getProfile(this.state.email)
    //     .then(res => this.setState({test: res.data}))
    //     .catch(err => console.log(err));

    //     if(Profile.defaultRoom){
    //         <Link to="/messageboard">
    //             <LoginButton />
    //         </Link>
    //     } else {
    //         <Link to="/creatroom">
    //         <LoginButton/>
    //         </Link>
    //     }

    //     }
        
    //    //check to see if the user has a default room, if not, route to the CreateRoomPage...
    //    //if the user has default room, route the user to the room page

    
    
    

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
 <Link to="/api/profile">
 <LoginButton/>
 </Link>
   



<Link to="/api/rooms">
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
