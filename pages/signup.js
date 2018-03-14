import React, { Component } from 'react';
import SignupBox from '../components/signupbox';
import TopNav from '../components/navigation'

export default class Signup extends Component {
    render() {
        return (
            <div>
                <TopNav />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-4">
                            
                            <SignupBox />
                        </div>
                        <div className="col-sm-8">
                            <img class="img-container" src="img/sea.png" />
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}

