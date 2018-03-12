import React, { Component } from 'react';
import { signupAPI } from '../services/api';


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
            confirm_password: '',
            fundraiser_type: '',
            phone: '',
            organization_name: ''
        };

        this.signUp = this.signUp.bind(this);


    }

    signUp() {
        signupAPI(JSON.stringify(this.state))

            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        alert('ollo');
    }



    handleEmailChange(e) {
        this.setState({ email: e.target.value })
    }
    handlePasswordChange(e) {
        this.setState({ password: e.target.value })
    }
    handleCfPasswordChange(e) {
        this.setState({ confirm_password: e.target.value })
    }

    handleFtypeChange(e) {
        this.setState({ fundraiser_type: e.target.value })
    }

    handlePhoneChange(e) {
        this.setState({ phone: e.target.value })
    }

    handleOrgnameChange(e) {
        this.setState({ organization_name: e.target.value })

    }



    render() {
        return (
            <div className="container">
                <div className="col-md-4">
                    <form className="form-group">
                        <input className="form-control" id="ip_email" onChange={this.handleEmailChange} placeholder="Email" />
                        <input className="form-control" id="ip_password" onChange={this.handlePasswordChange} placeholder="Password" />
                        <input className="form-control" id="ip_cfPassword" onChange={this.handleCfPasswordChange} placeholder="Confirm Password"
                        />
                        <input className="form-control" id="ip_ftype" onChange={this.handleFtypeChange} placeholder="Fundraiser Type" />
                        <input className="form-control" id="ip_phone" onChange={this.handlePhoneChange} placeholder="Phone" />
                        <input className="form-control" id="ip_orgName" onChange={this.handleOrgnameChange} placeholder="Organization Name" />
                        <button className="btn btn-primary" onClick={this.signUp} >Sign up</button>
                    </form>
                </div>

            </div>
        )
    }
}
