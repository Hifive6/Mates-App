import React, { Component } from "react";
import Loginbox from "../../dumb-components/loginbox/loginbox.js"


class Home extends Compenent {

    state = {
        username: "",
        password: ""

    };


    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if(this.state.username && this.state.password){
            
            //when the user logs in, check the Room database to see if the user exits within a Room...
            //if the user is in a room, route the user to the room page
            //if the user is not yet in a room, route the user to the create-a-room page


        }

    };


}

export default Home;