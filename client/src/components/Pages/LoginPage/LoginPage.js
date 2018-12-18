import React, { Component } from 'react'
// import { BrowserRouter as Redirect } from "react-router-dom";
import { Link } from 'react-router-dom'
import EmailInputField from '../../dumb-components/loginbox/EmailInputField'
import PasswordInputField from '../../dumb-components/loginbox/PasswordInputField'
import LoginButton from '../../dumb-components/loginbox/LoginButton'
import RememberMeCheckBox from '../../dumb-components/loginbox/RememberMeCheckBox'
import SignUpButton from '../../dumb-components/loginbox/SignUpButton';
import Createroompage from "../../dumb-components/createroompage/CreateroomPage"
import '../LoginPage/LoginPage.css'
import ProfilePage from '../ProfilePage/ProfilePage';
import API from '../../../utils/API'

export default class LoginPage extends Component {

    state = {
        email: "",
        password: "",
        chosenlink: "",
        test: {},
        loggedIn: false

    };

    handleInputChange = event => {
        const { name, value } = event.target;
        //console.log(event);
        console.log(this.state);
        this.setState({
            [name]: value
        })



    };



    componentDidMount() {
        // event.preventDefault();
        if (this.state.email && this.state.password) {
            API.getProfile(this.props.match.params.id)
                .then(res => this.setState({ test: res.data }))
                console.log(test)
                .catch(err => console.log(err));

        };
        this.checkForRoom();
    }

    checkForRoom = () => {

        const displayRoom = test.defaultRoom;
        console.log("User's default room is: " + displayRoom);
        const room_id = test.defaultRoom.id;
        console.log("roomid: " + room_id);


        if (displayRoom) {


            return this.setState({ chosenlink: "/api/rooms/room:id" + room_id })
            //    return <Redirect to={{pathname: "/api/rooms/room:id" + room_id}}/>
        } else {
            return this.setState({ chosenlink: "/api/rooms/room" });
            // return <Redirect to={{pathname: "/api/rooms/room"}}/>
        }
    }




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

                            <EmailInputField
                                name="email"
                                value={this.state.email}
                                onChange={this.handleInputChange} />
                            <PasswordInputField
                                name="password"
                                value={this.state.password}
                                onChange={this.handleInputChange} />
                            <RememberMeCheckBox />



                            <div className="row">
                                <Link to={{ pathname: this.state.chosenlink }}>
                                    <LoginButton
                                        onClick={this.handleBtnClick} />
                                </Link>




                                <Link to="/api/profiles/profile">
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
