import React, { Component } from 'react'
<<<<<<< HEAD
import EmergencyContactHeader from '../../dumb-components/profileform/EmergencyContactHeader'
import EmergencyContactNameImput from '../../dumb-components/profileform/EmergencyContactNameInput'
import FirstNameInput from '../../dumb-components/profileform/FirstNameInput'
import LastNameInput from '../../dumb-components/profileform/LastNameInput'
import PhoneNumberInput from '../../dumb-components/profileform/PhoneNumberInput'
import ProfilePageButton from '../../dumb-components/profileform/ProfilePageButton'
import RelationInput from '../../dumb-components/profileform/RelationInput'
=======
import EmergencyContactHeader from '../../dumb-components/ProfileForm/EmergencyContactHeader'
import EmergencyContactNameImput from '../../dumb-components/ProfileForm/EmergencyContactNameInput'
import FirstNameInput from '../../dumb-components/ProfileForm/FirstNameInput'
import LastNameInput from '../../dumb-components/ProfileForm/LastNameInput'
import PhoneNumberInput from '../../dumb-components/ProfileForm/PhoneNumberInput'
import ProfilePageButton from '../../dumb-components/ProfileForm/ProfilePageButton'
import RelationInput from '../../dumb-components/ProfileForm/RelationInput'
import EmailInput from '../../dumb-components/ProfileForm/EmailInput'
import PasswordInput from '../../dumb-components/ProfileForm/PasswordInput'
>>>>>>> 6c0522dce38e2f5dacf0671b43e586482c50f814


export default class ProfilePage extends Component {
    render() {


        return (
            <div>

                <div style={{marginTop: '20%'}} class="container shadow-lg p-3 mb-5 bg-white rounded">

                    <form>
                    <div class="form-row">
                            <div class="form-group col-md-4">
                                <EmailInput />
                                </div>
                                <div class="form-group col-md-4">


                                    <PasswordInput />


                                    </div>
                                </div>

                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <FirstNameInput />
                                </div>
                                <div class="form-group col-md-4">


                                    <LastNameInput />


                                    </div>
                                </div>
                            
                       

                        <div class="row">
                            <div class="form-group col-md-3">


                                <EmergencyContactHeader />
                                <EmergencyContactNameImput />

                            </div>
                            <div class="form-group col-md-3">


                                <PhoneNumberInput />


                            </div>
                            <div class="form-group col-md-3">

                                <RelationInput />


                            </div>
                        </div>


                        <ProfilePageButton
                        
                        />


                    </form>
                </div>

            </div>

        )
    }
}
