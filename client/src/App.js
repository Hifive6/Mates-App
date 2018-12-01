import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
import MyOwnNavbar from './components/navbar'


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
       

        <nav className="nav-extended">
          <div className="nav-wrapper">
             <h1 className="brand-logo">Mates</h1>
            
           
          </div>
          <div className="nav-content">
            <ul className="tabs tabs-transparent">
              <li className="tab"><a href="#test1">Home</a></li>
              <li className="tab"><a className="active" href="#test2">Bills</a></li>
              <li className="tab"><a href="#test3">Chores</a></li>
              <li className="tab"><a href="#test4">Profile</a></li>
            </ul>
          </div>
        </nav>

     





        <div id="test1" className="col s12">
        
        <div id="jumbotron" className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-2 text-center">Mates</h1>
            <p className="lead text-center">This is a web application that lets you keep track of your shady ass room-mates trying to skip out on paying rent.</p>
            <MyOwnNavbar />
          </div>
        </div>


        <div className="container">
          <div className="pre-scrollable shadow-lg p-3 mb-5 bg-white rounded">
            <h1>your --Message here</h1></div>




          <form>

            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1"></label>
              <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Type a Message Here..." rows="3"></textarea>
              <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </form>

        </div>

        </div>




        <div id="test2" className="col s12">Test 2</div>
        <div id="test3" className="col s12">Test 3</div>
        <div id="test4" className="col s12">Test 4</div>




        

      </div>
    );
  }
}


export default App;
