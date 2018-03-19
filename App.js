import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Signup from './pages/signup';
import Login from './pages/login';

import Home from './pages/home';
import EditableUserProfile from './pages/userland';
import UserProfile from './pages/profile';

impor

export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider>

                <BrowserRouter>
                    <div>
                        <Route
                            exact
                            path="/"
                            component={Home}
                        />
                        <Route
                            path="/login"
                            component={Login}
                        />
                        <Route
                            path="/signup"
                            component={Signup}
                        />
                        <Route
                            path="/userHome"
                            component={UserProfile}
                        />

                        <Route
                            path="/userUpdate"
                            component={EditableUserProfile}
                            state
                        />

                    </div>
                </BrowserRouter>

            </MuiThemeProvider>

        )
    }
}