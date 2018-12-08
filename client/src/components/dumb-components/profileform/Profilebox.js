import React, { Component } from 'react'

export default class Profilebox extends Component {
  render() {
    return (
      <div>
        
        <div className="container shadow-lg p-3 mb-5 bg-white rounded">

<form>
    <div className="form-row">
        {/* <div class="form-group col-md-6">
            <label for="inputEmail4">First Name</label>
            <input type="text" class="form-control" id="inputEmail4" placeholder="First Name"></input>
        </div>
        <div class="form-group col-md-6">
            <label for="inputPassword4">Last Name</label>
            <input type="text" class="form-control" id="inputPassword4" placeholder="Last Name"></input>
        </div> */}
    </div>
    
    <div className="row">
    <div className="form-group col-md-3">
        {/* <div class="align-center">
        <h3>Emergency Contact</h3>
        </div> */}
        
            {/* <label for="inputZip">Name</label>
            <input type="text" class="form-control" id="Full Name"></input> */}
        </div>
        {/* <div class="form-group col-md-3">
                <label for="inputZip">Phone Number</label>
                <input type="text" class="form-control" id="1+(XXX)XXX-XXX"></input>
            </div> */}
            {/* <div class="form-group col-md-3">
                    <label for="inputZip">Relation</label>
                    <input type="text" class="form-control" id="inputZip"></input>
                </div> */}
          </div>      
    
    {/* <button type="submit" class="btn btn-primary">Sign in</button> */}
</form>
</div>

      </div>
    )
  }
}
