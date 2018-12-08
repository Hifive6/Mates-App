import React, { Component } from 'react';
import MyOwnNavbar from './components/dumb-components/navbar/Navbar'
import Jumbotronjs from './components/dumb-components/Jumbotron/Jumbotron'
import Messageboard from './components/dumb-components/messagebox/MessageBoard'
import LoginBox from './components/dumb-components/loginbox/LoginBox'
import SignupBox from './components/dumb-components/SignupBox/SignupBox'
import './App.css';
import LoginPage from './components/Pages/LoginPage/LoginPage'

import CreateRoomPage from './components/dumb-components/CreateRoomPage/CreateroomPage'
import MessageBoard from '../src/components/Pages/Messageboard/MessageBoardPage'


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
import Createroompage from './components/dumb-components/CreateRoomPage/CreateroomPage';


class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
       

      
     <Createroompage />


        </div>

        

     
    );
  }
}


export default App;
