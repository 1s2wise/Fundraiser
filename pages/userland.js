import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import TopNav from '../components/navigation'
import EditableUserProfile from '../components/addProfile';

class LandingPage extends Component {
    constructor(props) {
        super();
        this.state = {
            showEmail : '',
        }
        console.log('land',props);
    }
    componentDidMount () {
        const scriptHide = document.createElement("script");
  
        const scriptText = document.createTextNode('document.getElementById("disp-signup").style.display = "none"; document.getElementById("disp-login").style.display = "none"; document.getElementById("disp-logout").style.display = "initial";');
  
        scriptHide.appendChild(scriptText);
        document.body.appendChild(scriptHide);

        
    }
    render() {
        return (
            <div>
                <TopNav showEmail = {this.props.location.state.userData.user_data.email}/>
                <EditableUserProfile currentUser = {this.props.location.state.userData} />

            </div>
        )
    }
}

export default withRouter(LandingPage);