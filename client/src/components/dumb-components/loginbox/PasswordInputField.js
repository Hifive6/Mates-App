import React, { Component } from 'react'

export default class PasswordInputField extends Component {
  render() {
    return (
      <div>
      
      <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
        </div>

      </div>
    )
  }
}
