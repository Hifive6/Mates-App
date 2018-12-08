// import React, { Component } from 'react';
// import Messageboard from '../../dumb-components/messagebox/MessageBoard';
// import MessageBoardButton from '../../dumb-components/messagebox/MessageBoardButton';
// import MessageBoardTextField from '../../dumb-components/messagebox/MessageBoardTextField';






// export class Messageboard extends Component {
//     state = {
//         messages: [],
      

//     }


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
//         API.saveMessage({
//             messages: this.state.message,
//         })
//         .then(res =>this.loadMessages())
//         .catch(err => console.log(err));
//     }
// };

// render() {
//     return (
//         <div>
//             <MessageBoard 
//             value={this.state.messages}
//             onChange={this.handle}
//             name="messages"
            
//             />

//             <MessageBoardTextField 
//             value={this.state.messages}
//             onChange={this.handleInputChange}
//             name="messages"
//             placeholder="please type a message"
//             />

//             <MessageBoardButton 
//             disabled={!(this.state.messages)}
//             onClick={this.handleFormSubmit}
//             />


            
//         </div>
//     );
//  }
// }

// export default MessageBoard;