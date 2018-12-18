import React, { Component } from 'react';
import {TextArea, Input, FormBtn} from "../../dumb-components/messagebox/"
import '../DashBoard/index.css'
import API from "../../../utils/API";






export default class Dashboard extends Component {
    state = {
        messages: [],
      

    }


// ComponentDidMount() {
//     this.loadMessages();
// }

// loadMesages = () => {
//     API.getMessages()
//     .then(res =>
//     this.setState({ messages: res.data, messages: "" })
// )
// .catch(err => console.log(err));
// };

// deleteMessage = id => {
//     API.deleteMessage(id)
//     .then(res => this.loadMessage())
//     .catch(err => console.log(err));
// };

// handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//         [name]: value
//     });
// };

// handleFormSubmit = event => {
//     event.preventDefault();
//     if (this.state.messages) {
//         API.saveMessages({
//             messages: this.state.messages,
//         })
//         .then(res =>this.loadMessages())
//         .catch(err => console.log(err));
//     }
// };

render() {
    return (
       
        <div>
<div class="background1">


            
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="color-me" href="#">Room 206</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item active">
                      <a class="color-me" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="color-me" href="/bills">Bills</a>
                    </li>
                    
                  </ul>
            </div>
        </nav>    


    
    <div id="jumbotron" class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-2 text-center">MATES</h1>
        </div>
    </div>

    
    <div class="container">
    <form>
        <div  class="pre-scrollable shadow-lg p-3 mb-5 bg-white rounded" >
            <h3 style={{padding: "20px 30px 260px 30px"}}>Message here</h3><br></br>
            </div>
            < div class="input-group" style={{backgroundColor: "white",padding: "20px 20px 20px 20px"}}>
            <input class="form-control" id="name-input" placeholder="Type message here" type="text"></input>
            </div>
            <button type="button" class="btn btn-primary btn-lg btn-block">Submit</button>
            </form>
    </div>
    
</div>
            
        </div>
    );
 }
}

