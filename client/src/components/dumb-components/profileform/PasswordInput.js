import React, { Component } from 'react'

export default class PasswordInput extends Component {
  render() {
    return (
      <div>
        
        <label for="inputPassword4">Password</label>
            <input type="text" className="form-control" id="inputPassword4" placeholder="Password"></input>
       
      </div>
    )
  }
}
