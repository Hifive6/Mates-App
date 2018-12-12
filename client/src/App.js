import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MyOwnNavbar from './components/dumb-components/navbar/navbar'
import Jumbotronjs from './components/dumb-components/Jumbotron/jumbotron'
import Messageboard from './components/dumb-components/Messageboard/MessageBoardPage'

import LoginBox from './components/dumb-components/loginbox/loginbox'
import SignupBox from './components/dumb-components/signupbox/signupbox'

import './App.css';
import LoginPage from './components/Pages/LoginPage/LoginPage'

import CreateRoomPage from './components/dumb-components/createroompage/CreateroomPage'
import MessageBoard from '../src/components/dumb-components/Messageboard/MessageBoardPage'


import {
  
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';


import ProfilePage from './components/Pages/ProfilePage/ProfilePage';
import Createroompage from './components/dumb-components/createroompage/CreateroomPage';



// class App extends Component {

const App = () => (
  <Router>
  <div>
    {/* <Switch> */}
    {/* <Nav /> */}
    <Route exact path="/" component={LoginPage}/>
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/api/profile" component={ProfilePage} />
    <Route exact path="/api/rooms" component={CreateRoomPage} />
    {/* </Switch> */}
  </div>
</Router>

//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false
//     };
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }
//   render() {
//     return (
//       <div>
       

      
     


//         </div>

        

     
//     );
//   }
// }
);


export default App;
