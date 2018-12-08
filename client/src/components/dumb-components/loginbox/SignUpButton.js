import React, { Component } from 'react'

export default class SignUpButton extends Component {
  render() {
    return (
      <div>
         <a href="/index"><button type="signup" className="btn btn-primary">Sign Up</button></a>
      </div>
    )
  }
}
