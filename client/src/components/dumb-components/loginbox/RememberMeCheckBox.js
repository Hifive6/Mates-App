import React, { Component } from 'react'

export default class RememberMeCheckBox extends Component {
  render() {
    return (
      <div>
           <div className="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                <label className="form-check-label" for="exampleCheck1">Keep me sign in</label>
        </div>
      </div>
    )
  }
}
