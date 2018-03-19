import React, { Component } from 'react';
import TopNav from '../components/navigation';
import { getUserData } from '../services/api';
import { withRouter } from 'react-router-dom';

class UserProfile extends Component {
    constructor(props) {
        super();
        console.log('userland', props);
        this.gatherUserData = this.gatherUserData.bind(this);
    }

    gatherUserData()
    {
        var userID = window.sessionStorage.getItem("UID").toString();
        getUserData(userID)
        .then((response) => {

            if (response.status == 200) {
                console.log('gatherddata', response);                             


                this.props.history.push({
                    pathname: '/userUpdate',
                    state: { userData: response.data}
                })

            }
        })
        .catch(function (error) {
            console.log(error);
        });

    }


    render() {
        return (
            <div>
            <TopNav />
            <div className="row">
                <div className="col-lg-4">
                    <div id="portrait">
                        <img className="img-responsive" src="" />
                    </div>
                    <div id="databox">
                        <h4>{this.props.location.state.userData.user_data.first_name} {this.props.location.state.userData.user_data.last_name}</h4>
                        <span className="glyphicon glyphicon-envelope"></span>
                        <h4>{this.props.location.state.userData.user_data.email}</h4>
                        <button onClick={this.gatherUserData}>Update Profile</button>


                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="row">
                    <h3>BASIC</h3>
                        <div className="col-sm-4">
                            <p>ID</p>
                            <p>First Name</p>
                            <p>Last Name</p>
                            <p>Date of Birth</p>
                            <p>Phone</p>
                            <p>Fundraiser Type</p>

                        </div>
                        <div className="col-sm-6">
                            <p>{this.props.location.state.userData.user_data.first_name}</p>
                            <p>{this.props.location.state.userData.user_data.first_name}</p>
                            <p>{this.props.location.state.userData.user_data.last_name}</p>
                            <p>{this.props.location.state.userData.user_data.dob}</p>
                            <p>{this.props.location.state.userData.user_data.phone}</p>
                            <p>{this.props.location.state.userData.user_data.fundraiser_type}</p>

                        </div>
                    </div>
                

                <div className="row">
                <h3>ADDRESS</h3>
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
                <h3>SOCIAL</h3>
                    <img src="" />
                    <h4>Fundraiser Logo</h4>
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