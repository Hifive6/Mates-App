import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import decode from 'jwt-decode'
import MyOwnNavbar from './components/dumb-components/navbar/navbar'
import Jumbotronjs from './components/dumb-components/Jumbotron/jumbotron'
import Messageboard from './components/dumb-components/Messageboard/MessageBoardPage'

import LoginBox from './components/dumb-components/loginbox/loginbox'
import SignupBox from './components/dumb-components/signupbox/signupbox'

import './App.css';
import LoginPage from './components/Pages/LoginPage/LoginPage'

import CreateroomPage from './components/dumb-components/createroompage/CreateroomPage'
import MessageBoard from '../src/components/dumb-components/Messageboard/MessageBoardPage'
import Profilepage from './components/Pages/ProfilePage/ProfilePage'


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
//import Createroompage from './components/dumb-components/CreateRoomPage/CreateroomPage';

const checkAuth = () => {
  const token = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken');
  if(!token || !refreshToken){
    return false;

  }

  try {

      const {exp}= decode(refreshToken);

      if (exp < new Date().getTime()/1000) {
        return false;
      }

  } catch (e){
    return false;
  }
  return true;
}

const AuthRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    checkAuth() ? (
      <Component {...props}/>
    ): (
      <Redirect to={{ pathname: '/login'}}/>
    )
  )}/>
)

const App = () => (
  <Router>
  <div>
    <Switch>
    {/* <Nav /> */}
    <Route exact path="/" component={LoginPage}/>
    <AuthRoute exact path="/auth" component={LoginPage}/>
    <Route exact path="/api/profiles/profile" component={Profilepage} />
    <Route exact path="/api/rooms/room" component={CreateroomPage} />
    <Route exact path="/api/rooms/room:id"  component={MessageBoard}/> 
    </Switch>
  </div>
</Router>


);


export default App;
