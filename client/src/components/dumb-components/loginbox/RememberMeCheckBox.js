import React, { Component } from 'react'

export default class RememberMeCheckBox extends Component {
  render() {
    return (
      <div>
           <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                <label class="form-check-label" for="exampleCheck1">Keep me sign in</label>
        </div>
      </div>
    )
  }
}
