import React, { Component } from 'react'

export default class EmailInputField extends Component {
  render() {
    return (
      <div>
           <div className="form-group">
            <label for="exampleInputEmail1">Username</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username"></input>
            <small id="emailHelp" className="form-text text-muted"></small>
        </div>
      </div>
    )
  }
}
