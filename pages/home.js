import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import TopNav from '../components/navigation';
import SignupBox from '../components/signupbox';
import LoginBox from '../components/loginbox';

export default class Home extends Component {
    render() {
        return (
            <div>
                <TopNav />
                <div className="content">
                <BrowserRouter>
						<Route
							exact
							path="/login"
							component={ LoginBox }
						/>
						<Route
							path="/signup"
							component={ SignupBox }
						/>
                </BrowserRouter>
					</div>
            </div>
        )
    }
}