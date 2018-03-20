import React, { Component } from 'react';
import { render } from 'react-dom';
import { signupAPI } from '../services/api';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
const style = {
    margin: '20px 60px auto',
    float: 'right',
  };

var textStyle = { 
    width: '80%',
    display: 'block',
  };



export default class SignupBox extends Component {

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
        signupAPI(this.state)

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
            <div className="login-container raiseup">
            <h3>Let's Start</h3>
                    <form className="form-group">
                        <TextField  id="ip_email" onChange={this.handleEmailChange} hintText="abc@xyz.com" floatingLabelText="Enter Email ID *" style={textStyle}/>
                        <TextField  id="ip_password" onChange={this.handlePasswordChange} hintText="Atleast 8 Characters" floatingLabelText="Enter Password *" style={textStyle} />
                        <TextField  id="ip_cfPassword" onChange={this.handleCfPasswordChange} hintText="Confirm Password" floatingLabelText="Re-Type Password *" style={textStyle} />
                        <TextField  id="ip_ftype" onChange={this.handleFtypeChange} hintText="Fundraiser Type" floatingLabelText="Fundraiser Type *" style={textStyle} />
                        <TextField  id="ip_phone" onChange={this.handlePhoneChange} hintText="+xx xxx xxx xxxx" floatingLabelText="Phone *" style={textStyle} />
                        <TextField  id="ip_orgName" onChange={this.handleOrgnameChange} hintText="Organization Name" floatingLabelText="Enter Organization Name *" style={textStyle} />
                        <RaisedButton label="Sign up" type="button" primary={true} style={style} onClick={this.signUp}/>
                    </form>

            </div>
        )
    }
}
