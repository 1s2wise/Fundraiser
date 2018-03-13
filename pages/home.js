import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import TopNav from '../components/navigation';


export default class Home extends Component {
    render() {
        return (
            <div>
                <TopNav />
                <div className="content">
                <h2>Fix</h2>

                </div>
            </div>
        )
    }
}