import React, { Component } from "react";
import Loginbox from "../../dumb-components/loginbox/loginbox.js"
import API from "../../../../../utils/API.js";


class Home extends Compenent {

    state = {
        username: "",
        password: ""

    };

    // componentDidMount() {

    //     this.loadRooms();
    // }

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




        }

    };


}

export default Home;