import React, { Component } from 'react'

export default class ProfilePageButton extends Component {
  render() {
    return (
      <div>
          <button type="submit" className="btn btn-primary"{...this.props}>Sign in</button>

      </div>
    )
  }
}
