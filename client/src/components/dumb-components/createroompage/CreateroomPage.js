import React, { Component } from 'react'
import './createroom.css'

export default class Createroompage extends Component {
  render() {
    return (
      <div>

        <div className="container">

        </div>
        <div className="container back">

          <div className="card text-center">
            <div className="card-header">

            </div>
            <div className="card-body">
              <h5 className="card-title">Welcome To Mates</h5>
              <p className="card-text">Please take a minute and creat your room if you do not already belong to one.</p>
              <a href="#" className="btn btn-primary">Create Room</a>
           
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
               Join a Room
</button>


            </div>
            <div className="card-footer text-muted">


              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      
                    <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Please Enter Room Name" aria-label="" aria-describedby="button-addon2"></input>
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search Room</button>
  </div>
</div>

      </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    )
  }
}


