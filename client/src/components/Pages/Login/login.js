import React, { Component } from "react"
import {render} from "react-dom"
// import Loginbox from "../../dumb-components/loginbox/loginbox.js"
// import LoginPage from "../../Pages/LoginPage"
import Createroompage from "../../dumb-components/createroompage/CreateroomPage"
// import API from "../../../../../utils/API.js"


class Home extends Component {

    state = {
        email: "",
        password: ""

    };

    //will be needed on the sign up page...
    // componentDidMount() {

        
    // }

    //will be needed on the sign up page...    
    // loadRooms = () =>  {
    //     API.getRooms()
    //     .then(res => 
    //         this.setState({}))
    // }

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if(this.state.username && this.state.password){

            render()
            return (
                <Createroompage />
            );
            

            // API.saveProfile({
            //     email: this.state.email,
            //     password: this.state.password
            
            // })
                // .then(res => this)
                //this is the login page, saveProfile, needed on the SignUp page...

        }

    };


}

export default Home;