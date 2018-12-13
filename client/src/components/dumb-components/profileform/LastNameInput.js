import React, { Component } from 'react'

export default class LastNameInput extends Component {
  render() {
    return (
      <div>
       
            <label for="inputPassword4">Last Name</label>
            <input type="text" className="form-control" id="inputPassword4" placeholder="Last Name"{...this.props}></input>
       
        
      </div>
    )
  }
}
