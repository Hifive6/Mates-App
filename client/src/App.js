import React, { Component } from 'react';
import MyOwnNavbar from './components/dumb-components/navbar/navbar'
import Jumbotronjs from './components/dumb-components/Jumbotron/jumbotron'
import Messageboard from './components/dumb-components/messagebox/messageboard'
import Loginbox from './components/dumb-components/loginbox/loginbox'
import Signupbox from './components/dumb-components/signupbox/signupbox'
import './App.css';

import Createroompage from './components/dumb-components/createroompage/CreateroomPage'
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


import Carousel1 from './components/dumb-components/carousel1/carousel1';
import ProfilePage from './components/Pages/ProfilePage/ProfilePage';



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
       

      
     <ProfilePage />


        </div>

        

     
    );
  }
}


export default App;
