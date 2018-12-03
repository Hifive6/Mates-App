import React, { Component } from 'react'
import Messageboard from '../messagebox/messageboard'
import Jumbotronjs from '../Jumbotron/jumbotron';

export default class myOwnNavbar extends Component {
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
        <Jumbotronjs />
        <Messageboard /></div>
        <div id="test2" className="col s12">Test 2</div>
        <div id="test3" className="col s12">Test 3</div>
        <div id="test4" className="col s12">Test 4</div>

      </div>
    )
  }
}
