import React, { Component } from 'react'

export default class EmailInput extends Component {
  render() {
    return (
      <div>
        <label for="inputEmail4">Email</label>
        <input type="text" className="form-control" id="inputEmail4" placeholder="Email" {...this.props}></input>
      </div>
    )
  }
}
