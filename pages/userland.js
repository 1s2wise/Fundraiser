import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class LandingPage extends Component {
    render(){
        return(
            <div>
                <h3>Logged in</h3>
                {
                    this.props.location.state.userData.user_data.email
                }
            </div>
        )
    }
}

export default withRouter (LandingPage);