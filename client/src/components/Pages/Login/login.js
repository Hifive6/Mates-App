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

            


        }

    };


}

export default Home;