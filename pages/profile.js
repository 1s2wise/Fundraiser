import React, { Component } from 'react';
import TopNav from '../components/navigation';
import { getUserData } from '../services/api';
import { withRouter } from 'react-router-dom';

class UserProfile extends Component {
    componentDidMount() {
        const scriptHide = document.createElement("script");

        const scriptText = document.createTextNode('document.getElementById("disp-signup").style.display = "none"; document.getElementById("disp-login").style.display = "none"; document.getElementById("disp-logout").style.display = "initial";');

        scriptHide.appendChild(scriptText);
        document.body.appendChild(scriptHide);
    }

    constructor(props) {
        super();
        console.log('userland', props);
        this.goToUpdate = this.goToUpdate.bind(this);
    }

    goToUpdate() {
        this.props.history.push({
            pathname: '/userUpdate',
        })
    }


    render() {
        return (
            <div>
                <TopNav />
                <div className="row">
                    <div className="col-lg-4">
                        <div id="portrait">
                            <img className="img-responsive" src={this.props.location.state.userData.user_data.profile_image_url} />
                        </div>
                        <div id="databox">
                            <h4>{this.props.location.state.userData.user_data.first_name} {this.props.location.state.userData.user_data.last_name}</h4>
                            <span className="glyphicon glyphicon-envelope"></span>
                            <h4>{this.props.location.state.userData.user_data.email}</h4>
                            <button className="btn btn-success" onClick={this.goToUpdate}>Update Profile</button>


                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="topmargin">
                            <div className="col-sm-2">
                                <h4>BASIC</h4>
                            </div>
                            <div className="row">
                                <div className="col-sm-3">
                                    <p>ID</p>
                                </div>
                                <div className="col-sm-6">
                                    <p>{this.props.location.state.userData.user_data.first_name}</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <p>First Name</p>
                                </div>
                                <div className="col-sm-6">
                                    <p>{this.props.location.state.userData.user_data.first_name}</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <p>Last Name</p>
                                </div>
                                <div className="col-sm-6">
                                    <p>{this.props.location.state.userData.user_data.last_name}</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-4">
                                    <p>Date of Birth</p>
                                </div>
                                <div className="col-sm-4">
                                    <p>{this.props.location.state.userData.user_data.dob}</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-4">
                                    <p>Phone</p>
                                </div>
                                <div className="col-sm-4">
                                    <p>{this.props.location.state.userData.user_data.phone}</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-4">
                                    <p>Fundraiser Type</p>
                                </div>
                                <div className="col-sm-4">
                                    <p>{this.props.location.state.userData.user_data.fundraiser_type}</p>
                                </div>
                            </div>

                        </div>



                        <div className="row">
                            <div className="col-sm-2">
                                <h4>ADDRESS</h4>
                            </div>
                            <div className="col-sm-4">
                                <p>Location</p>
                                <p>Street</p>
                                <p>City</p>
                                <p>State</p>
                                <p>Country Code</p>
                                <p>Zip</p>
                            </div>

                            <div className="col-sm-6">
                                <p>{this.props.location.state.userData.user_data.location}</p>
                                <p>{this.props.location.state.userData.user_data.street}</p>
                                <p>{this.props.location.state.userData.user_data.city}</p>
                                <p>{this.props.location.state.userData.user_data.state}</p>
                                <p>{this.props.location.state.userData.user_data.country_code}</p>
                                <p>{this.props.location.state.userData.user_data.zip}</p>
                            </div>

                            {/* <div className="addresscontent">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.187163970678!2d76.77965054994075!3d9.918364892872333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07c15a31066fe3%3A0x914db0acc4a1063f!2sThodupuzha-Udumbanoor+Rd%2C+Karimannoor%2C+Kerala!5e0!3m2!1sen!2sin!4v1519736134706"
                                    width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
                            </div> */}
                        </div>

                        <div className="row">
                            <div className="col-sm-2">
                                <h4>SOCIAL</h4>
                            </div>
                            <img src="" />
                            <hp>Fundraiser Logo</hp>
                            <div className="row-sm-4">
                                <a href={this.props.location.state.userData.user_data.facebook_link}>Facebook</a>
                                <a href={this.props.location.state.userData.user_data.google_link}>Google</a>
                                <a href={this.props.location.state.userData.user_data.twitter_link}>Twitter</a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }

}

export default withRouter(UserProfile);