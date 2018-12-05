import React, { Component } from 'react'
import EmergencyContactHeader from '../../dumb-components/ProfileForm/EmergencyContactHeader'
import EmergencyContactNameImput from '../../dumb-components/ProfileForm/EmergencyContactNameInput'
import FirstNameInput from '../../dumb-components/ProfileForm/FirstNameInput'
import LastNameInput from '../../dumb-components/ProfileForm/LastNameInput'
import PhoneNumberInput from '../../dumb-components/ProfileForm/PhoneNumberInput'
import ProfilePageButton from '../../dumb-components/ProfileForm/ProfilePageButton'
import RelationInput from '../../dumb-components/ProfileForm/RelationInput'


export default class ProfilePage extends Component {
    render() {


        return (
            <div>

                <div style={{marginTop: '20%'}} class="container shadow-lg p-3 mb-5 bg-white rounded">

                    <form>
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
                        <ProfilePageButton />
                    </form>
                </div>

            </div>

        )
    }
}
