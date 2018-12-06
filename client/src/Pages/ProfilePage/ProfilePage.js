import React, { Component } from 'react'
import API from '../../../src/utils'
import EmergencyContactHeader from '../../dumb-components/ProfileForm/EmergencyContactHeader'
import EmergencyContactNameImput from '../../dumb-components/ProfileForm/EmergencyContactNameInput'
import FirstNameInput from '../../dumb-components/ProfileForm/FirstNameInput'
import LastNameInput from '../../dumb-components/ProfileForm/LastNameInput'
import PhoneNumberInput from '../../dumb-components/ProfileForm/PhoneNumberInput'
import ProfilePageButton from '../../dumb-components/ProfileForm/ProfilePageButton'
import RelationInput from '../../dumb-components/ProfileForm/RelationInput'
import EmailInput from '../../dumb-components/ProfileForm/EmailInput'
import PasswordInput from '../../dumb-components/ProfileForm/PasswordInput'
import API from '../../utils'

export default class ProfilePage extends Component {
    state = {
        firstName: "",
        email: "",
        password: "",
        emergencyContact: "",
        lastName: "",
        phoneNumber: "",
        relationToTenant: "",
        tenants: [],
        admin: [],
    };

    componentDidMount() {
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
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handFormSubmit = event => {
        event.preventDefault();
        if (this.state.firstName && this.state.email) {
            API.saveProfile({
                firstName: this.state.firstName,
                email: this.state.email,
                password: this.state.password,
                emergencyContact: this.state.emergencyContact,
                relationToTenant: this.state.relationToTenant,
                lastName: this.state.lastName,
                phoneNumber: this.state.phoneNumber,
            })
                .then(res => this.getProfile())
                .catch(err => console.log(err))
        }
    }
    render() {


        return (
            <div>

                <div style={{ marginTop: '20%' }} class="container shadow-lg p-3 mb-5 bg-white rounded">

                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <EmailInput
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    name="email"

                                />
                            </div>
                            <div class="form-group col-md-4">


                                <PasswordInput
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                    name="password"
                                />


                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <FirstNameInput
                                    value={this.state.firstName}
                                    onChange={this.handleInputChange}
                                    name="firstName"
                                />
                            </div>
                            <div class="form-group col-md-4">


                                <LastNameInput
                                    value={this.state.lastName}
                                    onChange={this.handleInputChange}
                                    name="lastName" />


                            </div>
                        </div>



                        <div class="row">
                            <div class="form-group col-md-3">


                                <EmergencyContactHeader />
                                <EmergencyContactNameImput />

                            </div>
                            <div class="form-group col-md-3">


                                <PhoneNumberInput
                                    value={this.state.phoneNumber}
                                    onChange={this.handleInputChange}
                                    name="phoneNumber" />


                            </div>
                            <div class="form-group col-md-3">

                                <RelationInput
                                    value={this.state.relationToTenant}
                                    onChange={this.handleInputChange}
                                    name="Relationship" />


                            </div>
                        </div>


                        <ProfilePageButton
                            disabled={!(this.state.email && this.state.password)}
                            onClick={this.handFormSubmit}
                        >
                            Submit Profile
                        </ProfilePageButton>


                    </form>
                </div>

            </div>

        )
    }
}
