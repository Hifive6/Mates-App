import React, { Component } from 'react'

import EmergencyContactHeader from '../../dumb-components/ProfileForm/EmergencyContactHeader'
import EmergencyContactNameImput from '../../dumb-components/ProfileForm/EmergencyContactNameInput'
import FirstNameInput from '../../dumb-components/ProfileForm/FirstNameInput'
import LastNameInput from '../../dumb-components/ProfileForm/LastNameInput'
import PhoneNumberInput from '../../dumb-components/ProfileForm/PhoneNumberInput'
import ProfilePageButton from '../../dumb-components/ProfileForm/ProfilePageButton'
import RelationInput from '../../dumb-components/ProfileForm/RelationInput'
import EmailInput from '../../dumb-components/ProfileForm/EmailInput'
import PasswordInput from '../../dumb-components/ProfileForm/PasswordInput'
import API from "../../../utils/API";


import '../../Pages/ProfilePage/ProfilePage.css'


export default class ProfilePage extends Component {

    state ={
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        emergencyContact:"",
        phoneNumber: "",
        relationToTenant: "",
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        console.log(event);
        console.log(this.state);
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        console.log(event);
        
        event.preventDefault();
        if (this.state.email && this.state.password && this.state.firstName){
            API.saveProfile({
                email: this.state.email,
                password: this.state.email,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                emergencyContact: this.state.emergencyContact,
                phoneNumber: this.state.phoneNumber,
                relationToTenant: this.state.relationToTenant
            })
            .catch(err => console.log(err))
        }
    }
    render() {


        return (
            <div className="profile-name">
                  <h1 style={{marginTop: "4%"}}>Profile</h1>
            <div className="background">
           
 

                <div style={{marginTop: "12%", opacity: ".9", paddingRight: '-110px'}} className=" container shadow-lg p-3 mb-5 bg-white rounded">
         
                    <form>
                        <h3>Information</h3>
                        
                        
                    <div className="form-row ">
                            <div className="form-group col-md-6">
                                <EmailInput 
                                name="email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                />
                                </div>
                                <div className="form-group col-md-4">


                                    <PasswordInput 
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleInputChange}/>


                                    </div>
                                </div>

                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <FirstNameInput
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.handleInputChange} />
                                </div>
                                <div className="form-group col-md-4">


                                    <LastNameInput 
                                    name="lastName"
                                    value={this.state.lastName}
                                    onChange={this.handleInputChange}/>


                                    </div>
                                </div>
                            
                       
                         <h3>Emergency Contact</h3>

                        <div className="row">


                            <div className="form-group col-md-3">


                                <EmergencyContactHeader />
                                <EmergencyContactNameImput
                                name="emergencyContact"
                                value={this.state.emergencyContact}
                                onChange={this.handleInputChange} 
                                />

                            </div>
                            <div className="form-group col-md-3">


                                <PhoneNumberInput 
                                name="phoneNumber"
                                value={this.state.phoneNumber}
                                onChange={this.handleInputChange}
                                />


                            </div>
                            <div className="form-group col-md-3">

                                <RelationInput
                                name="relationToTenant"
                                value={this.state.relationToTenant}
                                onChange={this.handleInputChange}
                                />


                            </div>
                        </div>


                        <ProfilePageButton
                        onClick = {this.handleFormSubmit}
                        />


                    </form>
                </div>

            </div>
</div>
        )
    }
}
