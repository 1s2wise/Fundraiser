import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import TopNav from '../components/navigation';
import EditableUserProfile from '../components/addProfile';


export default class Home extends Component {
   
    render() {
        return (
            <div>
                <TopNav />
                <div>
                </div>
            </div>
        )
    }
}