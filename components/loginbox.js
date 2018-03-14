import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { loginAPI } from '../services/api';
import { withRouter } from 'react-router-dom'
const style = {
    margin: 12,
  };

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
                if(response.status == 200)
                {
                    console.log(this);
                    this.props.history.push({
                        pathname: '/userHome',
                        state: {userData:response.data}
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
            <div className="content">
                <div className="col-md-4">
                    <form className="form-group">
                        <TextField  id="ip_email" onChange={this.handleEmailChange} hintText="abc@xyz.com" floatingLabelText="Enter Email ID" />
                        <TextField  id="ip_password" onChange={this.handlePasswordChange} hintText="Atleast 8 Characters" floatingLabelText="Enter Password" />
                        <RaisedButton label="Log In" type="button" primary={true} style={style} onClick={this.logIn}/>
                    </form>
                </div>

            </div>
        )
    }
}

export default withRouter (LoginBox);