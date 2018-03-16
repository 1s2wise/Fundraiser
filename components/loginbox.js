import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { loginAPI } from '../services/api';
import { withRouter } from 'react-router-dom'

class LoginBox extends Component {
    constructor(props) {
        super(props);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

        this.state = {
            email: '',
            password: ''
        };

        this.logIn = this.logIn.bind(this);


    }

    logIn() {
        loginAPI(this.state)

            .then((response) => {

                if (response.status == 200) {
                    console.log('200ok', response);
                    window.sessionStorage.setItem("AuthKey", response.headers.auth);
                    window.sessionStorage.setItem("UID", response.data.user_data.id);
                    


                    this.props.history.push({
                        pathname: '/userHome',
                        state: { userData: response.data, authKey: response.headers.auth }
                    })

                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    handleEmailChange(e) {
        this.setState({ email: e.target.value })
    }
    handlePasswordChange(e) {
        this.setState({ password: e.target.value })
    }



    render() {
        return (
            <div className="login-container raiseup">
                <h3>Welcome Back!</h3>
                <h6>We're glad you're here</h6>
                <form className="form-group">
                    <TextField id="ip_email" onChange={this.handleEmailChange} hintText="abc@xyz.com" floatingLabelText="Enter Email ID" />
                    <TextField id="ip_password" onChange={this.handlePasswordChange} hintText="Atleast 8 Characters" floatingLabelText="Enter Password" />
                    <div className="loginbtn">
                        <RaisedButton label="Log In" type="button" primary={true} onClick={this.logIn} />
                    </div>
                </form>

            </div>

        )
    }
}

export default withRouter(LoginBox);