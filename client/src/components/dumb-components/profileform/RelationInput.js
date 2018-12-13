import React, { Component } from 'react'

export default class RlationInput extends Component {
  render() {
    return (
      <div>
         
                    <label for="inputZip">Relation</label>
                    <input type="text" className="form-control" id="inputZip"{...this.props}></input>
               
      </div>
    )
  }
}
