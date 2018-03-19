import React, { Component } from 'react';
import TopNav from '../components/navigation';
import EditableUserProfile from '../components/addProfile';


export default class UpdateUserData extends Component {
    constructor(props) {
        super();
        console.log('updateuserpage', props.location.state);
    }

    render() {
        return (
            <div>
                <TopNav />
                <EditableUserProfile currentUser={this.props.location.state} />
            </div>

        )

    }
}