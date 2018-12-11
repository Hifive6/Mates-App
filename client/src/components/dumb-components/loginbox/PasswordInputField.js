import React, { Component } from 'react'

export default class PasswordInputField extends Component {
  render() {
    return (
      <div>
      
      <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
        </div>

      </div>
    )
  }
}
