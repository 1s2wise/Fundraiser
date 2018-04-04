import React, { Component } from 'react';
import LoginBox from '../components/loginbox';
import TopNav from '../components/navigation';

export default class Login extends Component {
    render() {
        return (
            <div>
                <TopNav />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-4">
                            <LoginBox />
                        </div>
                        <div className="container col-sm-8 table-responsive">
                            <div className="container-fluid">
                                <img className="login-image-container" src="img/fundTree.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}