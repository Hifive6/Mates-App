import React, { Component } from 'react'
// import './createroom.css'

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
              <p className="card-text">Please take a minute and create your room if you do not already belong to one.</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal2">
                Create A Room
</button>


              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">
                Join a Room
</button>

             


            </div>
            <div className="card-footer text-muted">


              <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Create Your Room</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">

                      <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Creat Your Room'd Unique Name" aria-label="" aria-describedby="button-addon2"></input>
                        <div class="input-group-append">
                          <button class="btn btn-outline-secondary" type="button" id="button-addon2">Create Room</button>
                        </div>
                      </div>

                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                    </div>
                  </div>
                </div>
              </div>

               <div className="card-footer text-muted">

              <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Serach For A Room</h5>
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

      </div>
    )
  }
}


