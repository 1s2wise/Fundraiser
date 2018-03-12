import React, { Component } from 'react';

export default class extends Component {
    render() {
        return (
            <div className="container">
                <div className="col-sm-4">
                <input class="form-control" placeholder="Email" />
                <input class="form-control" placeholder="Password" />
                <input class="form-control" placeholder="Confirm Password" />
                <input class="form-control" placeholder="Fundraiser Type" />
                <input class="form-control" placeholder="Phone" />
                <input class="form-control" placeholder="Organization Name"/>
                

                </div>

            </div>
        )
    }
}