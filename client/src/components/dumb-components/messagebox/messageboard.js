import React, { Component } from 'react'

export default class Messageboard extends Component {
  render() {
    return (
      <div>
        
        <div className="container">
          <div className="pre-scrollable shadow-lg p-3 mb-5 bg-white rounded">
            <h1>your --Message here</h1></div>




          <form>

            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1"></label>
              <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Type a Message Here..." rows="3"></textarea>
              <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </form>

      </div>
      </div>
    );
  }
}
