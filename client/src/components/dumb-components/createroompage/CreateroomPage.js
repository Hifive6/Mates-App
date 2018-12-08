import React, { Component } from 'react'
import './createroom.css'

export default class Createroompage extends Component {
  render() {
    return (
      <div>
        
        <div className="container">
        <button type="button" className="btn btn-primary shadow-lg p-3 mb-5">
            Notifications <span className="badge badge-light">0</span>
        </button>
        <button type="button" clasName="float-right btn btn-primary shadow-lg p-3 mb-5">
             Edit Profile
            </button>
    </div>
    <div className="container back">

        <div className="card text-center">
            <div className="card-header">
               
            </div>
            <div className="card-body">
                <h5 className="card-title">Welcome To Mates</h5>
                <p className="card-text">Please take a minute and creat your room if you do not already belong to one.</p>
                <a href="#" className="btn btn-primary">Create Room</a>
            </div>
            <div className="card-footer text-muted">
                
            </div>
        </div>
    </div>

      </div>
    )
  }
}
