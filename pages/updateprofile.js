import React, { Component } from 'react';
import TopNav from '../components/navigation';
import EditableUserProfile from '../components/addProfile';


export default class UpdateUserData extends Component {
    componentDidMount () {
        const scriptHide = document.createElement("script");
  
        const scriptText = document.createTextNode('document.getElementById("disp-signup").style.display = "none"; document.getElementById("disp-login").style.display = "none"; document.getElementById("disp-logout").style.display = "initial";');
  
        scriptHide.appendChild(scriptText);
        document.body.appendChild(scriptHide);       
    }
    
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