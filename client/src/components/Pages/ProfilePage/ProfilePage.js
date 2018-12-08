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



import '../../Pages/ProfilePage/ProfilePage.css'


export default class ProfilePage extends Component {
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
                                <EmailInput />
                                </div>
                                <div className="form-group col-md-4">


                                    <PasswordInput />


                                    </div>
                                </div>

                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <FirstNameInput />
                                </div>
                                <div className="form-group col-md-4">


                                    <LastNameInput />


                                    </div>
                                </div>
                            
                       
                         <h3>Emergency Contact</h3>

                        <div className="row">


                            <div className="form-group col-md-3">


                                <EmergencyContactHeader />
                                <EmergencyContactNameImput />

                            </div>
                            <div className="form-group col-md-3">


                                <PhoneNumberInput />


                            </div>
                            <div className="form-group col-md-3">

                                <RelationInput />


                            </div>
                        </div>


                        <ProfilePageButton
                        
                        />


                    </form>
                </div>

            </div>
</div>
        )
    }
}
