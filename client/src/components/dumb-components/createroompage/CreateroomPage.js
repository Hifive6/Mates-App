import React, { Component } from 'react'
// import './createroom.css'

export default class Createroompage extends Component {
  render() {
    return (
      <div>
        
        <div class="container">
        <button type="button" class="btn btn-primary shadow-lg p-3 mb-5">
            Notifications <span class="badge badge-light">0</span>
        </button>
        <button type="button" class="float-right btn btn-primary shadow-lg p-3 mb-5">
             Edit Profile
            </button>
    </div>
    <div class="container back">

        <div class="card text-center">
            <div class="card-header">
               
            </div>
            <div class="card-body">
                <h5 class="card-title">Welcome To Mates</h5>
                <p class="card-text">Please take a minute and creat your room if you do not already belong to one.</p>
                <a href="#" class="btn btn-primary">Create Room</a>
            </div>
            <div class="card-footer text-muted">
                
            </div>
        </div>
    </div>

      </div>
    )
  }
}
