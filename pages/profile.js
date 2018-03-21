import React, { Component } from 'react';
import TopNav from '../components/navigation';
import { getUserData } from '../services/api';
import { withRouter } from 'react-router-dom';

import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
    container: {
        position: 'relative',
    },
    refresh: {
        display: 'inline-block',
        position: 'relative',
    },
};

var currentState = new Object();
currentState.user = null;

class UserProfile extends Component {
    componentDidMount() {

        this.setState({ loading: true }, () => {
            this.gatherUserData();
        });

    }

    constructor(props) {
        super();
        this.state = {
            loading: false,
            phone: '',
            fundraiser_type: '',
            organization_name: '',
            email: '',
            first_name: '',
            last_name: '',
            dob: '',
            street: '',
            city: '',
            state: '',
            country_code: '',
            zip: '',
            fundraiser_logo_url: '',
            profile_image_url: ''
        };
        this.goToUpdate = this.goToUpdate.bind(this);
    }

    gatherUserData() {
        var userID = window.sessionStorage.getItem("UID").toString();

        getUserData(userID)
            .then((response) => {
                if (response.status == 200) {
                    console.log('gatherddata', response.data);
                    currentState.user = response.data;
                    console.log('inpromise', currentState);
                    this.setState({
                        phone: currentState.user.phone,
                        fundraiser_type: currentState.user.fundraiser_type,
                        organization_name: currentState.user.organization_name,
                        email: currentState.user.email,
                        first_name: currentState.user.first_name,
                        last_name: currentState.user.last_name,
                        dob: currentState.user.dob,
                        street: currentState.user.street,
                        city: currentState.user.city,
                        state: currentState.user.state,
                        country_code: currentState.user.country_code,
                        zip: currentState.user.zip,
                        fundraiser_logo_url: currentState.user.fundraiser_logo_url,
                        profile_image_url: currentState.user.profile_image_url,
                        loading: false,
                    });
                    console.log(this.state);
                    const scriptHide = document.createElement("script");

                    const scriptText = document.createTextNode('document.getElementById("disp-signup").style.display = "none"; document.getElementById("disp-login").style.display = "none"; document.getElementById("disp-logout").style.display = "initial";');

                    scriptHide.appendChild(scriptText);
                    document.body.appendChild(scriptHide);

                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    goToUpdate() {
        this.props.history.push({
            pathname: '/userUpdate',
        })
    }


    render() {
        if (this.state.loading)
            return (
                <div style={style.container}>
                    <RefreshIndicator
                        size={80}
                        left={screen.availWidth / 2}
                        top={0}
                        status="loading"
                        style={style.refresh}
                    />
                </div>
            )
        return (

            <div>

                <TopNav />
                <div className="row">
                    <div className="col-lg-4">
                        <div id="portrait">
                            <img className="img-responsive" src={this.state.profile_image_url} />
                        </div>
                        <div id="databox">
                            <h4>{this.state.first_name} {this.state.last_name}</h4>
                            <span className="glyphicon glyphicon-envelope"></span>
                            <h4>{this.state.email}</h4>
                            <button className="btn btn-success" onClick={this.goToUpdate}>Update Profile</button>
                        </div>
                        <div className="mgLeft">
                            <div class="fund">
                                <p className="showFundName">Fundraiser Logo</p>
                                <img className="fundLogo" src={this.state.fundraiser_logo_url} />

                            </div>
                            <div className="row-sim">
                                <a className="socialLink" href={this.state.facebook_link}><i class="fab fa-facebook-f"></i></a>
                                <a className="socialLink" href={this.state.google_link}><i class="fab fa-google-plus-g"></i></a>
                                <a className="socialLink" href={this.state.twitter_link}><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="topmargin mgLeft">

                            <h4>BASIC</h4>
                            <div className="table-responsive">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>ID</td>
                                            <td>{this.state.id}</td>
                                        </tr>
                                        <tr>
                                            <td>First Name</td>
                                            <td>{this.state.first_name}</td>
                                        </tr>
                                        <tr>
                                            <td>Last Name</td>
                                            <td>{this.state.last_name}</td>
                                        </tr>
                                        <tr>
                                            <td>Date of Birth</td>
                                            <td>{this.state.dob}</td>
                                        </tr>
                                        <tr>
                                            <td>Phone</td>
                                            <td>{this.state.phone}</td>
                                        </tr>
                                        <tr>
                                            <td>Fundraiser Type</td>
                                            <td>{this.state.fundraiser_type}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>



                            <div>
                                <h4>ADDRESS</h4>
                                <div className="table-responsive">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td>Street</td>
                                                <td>{this.state.street}</td>
                                            </tr>
                                            <tr>
                                                <td>City</td>
                                                <td>{this.state.city}</td>
                                            </tr>
                                            <tr>
                                                <td>State</td>
                                                <td>{this.state.state}</td>
                                            </tr>
                                            <tr>
                                                <td>Country Code</td>
                                                <td>{this.state.country_code}</td>
                                            </tr>
                                            <tr>
                                                <td>Zip</td>
                                                <td>{this.state.zip}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>


                                {/* <div className="addresscontent">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.187163970678!2d76.77965054994075!3d9.918364892872333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07c15a31066fe3%3A0x914db0acc4a1063f!2sThodupuzha-Udumbanoor+Rd%2C+Karimannoor%2C+Kerala!5e0!3m2!1sen!2sin!4v1519736134706"
                                    width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
                            </div> */}
                            </div>



                        </div>

                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(UserProfile);