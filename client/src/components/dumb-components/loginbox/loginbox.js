import React, { Component } from 'react'
import '../loginbox/login.css'


export default class Loginbox extends Component {
    render() {
        return (
            <div>

                <div className="container">
                    <h1 id="titleLanding">M A T E S</h1>
                </div>
                <div className="background">

                    <div id="login" className="container shadow-lg p-3 mb-5 bg-white rounded">

                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Username</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username"></input>
                                <small id="emailHelp" className="form-text text-muted"></small>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                                <label className="form-check-label" for="exampleCheck1">keep me signed in.</label>
                            </div>
                            <a href="/index"><button type="submit" className="btn btn-primary">Login</button></a>
                        </form>

                    </div>

                </div>
            </div>
        )
    }
}
