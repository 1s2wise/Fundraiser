import React, { Component } from 'react';
import { signup } from '../services/api';


export default class extends Component {

    constructor(props) {
        super(props);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

        this.handleCfPasswordChange = this.handleCfPasswordChange.bind(this);
        this.handleFtypeChange = this.handleFtypeChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleOrgnameChange = this.handleOrgnameChange.bind(this);

        this.state = {
            email: '',
            password: '',
            cfpassword: '',
            ftype: '',
            phone: '',
            orgname: ''
        };

        var payload = this.state.email;
    }


    handleEmailChange(e) {
        this.setState({ email: e.target.value })
    }
    handlePasswordChange(e) {
        this.setState({ password: e.target.value })
    }
    handleCfPasswordChange(e) {
        this.setState({ cfpassword: e.target.value })
    }

    handleFtypeChange(e) {
        this.setState({ ftype: e.target.value })
    }

    handlePhoneChange(e) {
        this.setState({ phone: e.target.value })
    }

    handleOrgnameChange(e) {
        this.setState({ orgname: e.target.value })
    }

    signIn(event) {
        alert('Email address is ' + payload);
    }

    render() {
        return (
            <div className="container">
                <div className="col-md-4">
                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" />
                    <label for="inputPassword" className="sr-only">Password</label>
                    <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password"/>

                    <button className="btn btn-primary" onClick={this.signIn} >Sign up</button>
                </div>
            </div>
        )
    }
}
