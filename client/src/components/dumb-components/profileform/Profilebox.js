import React, { Component } from 'react'

export default class Profilebox extends Component {
  render() {
    return (
      <div>
        
        <div class="container shadow-lg p-3 mb-5 bg-white rounded">

<form>
    <div class="form-row">
        <div class="form-group col-md-6">
            <label for="inputEmail4">First Name</label>
            <input type="text" class="form-control" id="inputEmail4" placeholder="First Name"></input>
        </div>
        <div class="form-group col-md-6">
            <label for="inputPassword4">Last Name</label>
            <input type="text" class="form-control" id="inputPassword4" placeholder="Last Name"></input>
        </div>
    </div>
    
    <div class="row">
    <div class="form-group col-md-3">
        <div class="align-center">
        <h3>Emergency Contact</h3>
        </div>
        
            <label for="inputZip">Name</label>
            <input type="text" class="form-control" id="Full Name"></input>
        </div>
        <div class="form-group col-md-3">
                <label for="inputZip">Phone Number</label>
                <input type="text" class="form-control" id="1+(XXX)XXX-XXX"></input>
            </div>
            <div class="form-group col-md-3">
                    <label for="inputZip">Zip</label>
                    <input type="text" class="form-control" id="inputZip"></input>
                </div>
          </div>      
    <div class="form-group">
        <label for="inputAddress">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
    </div>
    <div class="form-group">
        <label for="inputAddress2">Address 2</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
    </div>
    <div class="form-row">
        <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity"></input>
        </div>
        <div class="form-group col-md-4">
            <label for="inputState">State</label>
            <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
            </select>
        </div>
        <div class="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input type="text" class="form-control" id="inputZip"></input>
        </div>
    </div>
    <div class="form-group">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck"></input>
            <label class="form-check-label" for="gridCheck">
                Check me out
            </label>
        </div>
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
</form>
</div>

      </div>
    )
  }
}
