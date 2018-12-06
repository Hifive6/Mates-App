import React, { Component } from "react";
import Loginbox from "../../dumb-components/loginbox/loginbox.js"
import API from "../../../../../utils/API.js";


class Home extends Component {

    state = {
        email: "",
        password: ""

    };

    //will be needed on the sign up page...
    // componentDidMount() {

    //     this.loadRooms();
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

            API.saveProfile({
                email: this.state.email,
                password: this.state.password
            
            })
                // .then(res => this)


        }

    };


}

export default Home;