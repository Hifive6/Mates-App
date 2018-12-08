import React, { Component} from "react";
import Signupbox from "../../dumb-components/signupbox/signupbox";
import API from "../../../../../utils"


class Profiles extends Component{
    state = {
        firstName: "",
        email: "",
        password: "",
        // emergencyContact: "",
        // lastName: "",
        // phoneNumber: "",
        tenants: [],
        // admin: [],
    };

    componentDidMount(){
        this.loadProfiles()
    }

    loadProfiles = () => {
        API.getProfile()
        .then(res =>
            this.setState({
                tenants: res.data, 
                firstName: "",
                email: "",
                password: "",
            }))
    }
    handleInputChange = event => {
        const {name, value} =event.target;
        this.setState({
            [name]: value
        });
    };

    handFormSubmit = event => {
        event.preventDefault();
        if(this.state.firstName && this.state.email) {
            API.saveProfile({
                firstName: this.state.firstName,
                email:this.state.email,
                password: this.state.password,
                // emergencyContact: this.state.emergencyContact,
                // lastName: this.state.lastName,
                // phoneNumber: this.state.phoneNumber,
            })
            .then(res => this.getProfile())
            .catch(err => console.log(err))
        }
    }

        render () {
            return (
                <div>
                    
                    <Signupbox 
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                    disable={!(this.state.firstName && this.state.email && this.state.password)}
                    onClick={this.handleFormSubmit}
                        
                    
                    />
                </div>
            )
        }
    }



