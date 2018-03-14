import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import TopNav from '../components/navigation'

class LandingPage extends Component {
    componentDidMount () {
        const scriptHide = document.createElement("script");
  
        const scriptText = document.createTextNode('document.getElementById("disp-signup").style.display = "none"; document.getElementById("disp-login").style.display = "none"; document.getElementById("disp-logout").style.display = "initial";');
  
        scriptHide.appendChild(scriptText);
        document.body.appendChild(scriptHide);

        {
            console.log(document);
        }
    }
    render() {
        return (
            <div>
                <TopNav />
                <h3>
                    {
                        this.props.location.state.userData.user_data.email
                    }
                </h3>

            </div>
        )
    }
}

export default withRouter(LandingPage);