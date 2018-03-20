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
                        <div className="mgLeft">
                            <div class="fund">
                                <p className="showFundName">Fundraiser Logo</p>
                                <img className="fundLogo" src={this.props.location.state.userData.user_data.fundraiser_logo_url} />

                            </div>
                            <div className="row-sim">
                                <a className="socialLink" href={this.props.location.state.userData.user_data.facebook_link}><i class="fab fa-facebook-f"></i></a>
                                <a className="socialLink" href={this.props.location.state.userData.user_data.google_link}><i class="fab fa-google-plus-g"></i></a>
                                <a className="socialLink" href={this.props.location.state.userData.user_data.twitter_link}><i class="fab fa-twitter"></i></a>
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
                                            <td>{this.props.location.state.userData.user_data.id}</td>
                                        </tr>
                                        <tr>
                                            <td>First Name</td>
                                            <td>{this.props.location.state.userData.user_data.first_name}</td>
                                        </tr>
                                        <tr>
                                            <td>Last Name</td>
                                            <td>{this.props.location.state.userData.user_data.last_name}</td>
                                        </tr>
                                        <tr>
                                            <td>Date of Birth</td>
                                            <td>{this.props.location.state.userData.user_data.dob}</td>
                                        </tr>
                                        <tr>
                                            <td>Phone</td>
                                            <td>{this.props.location.state.userData.user_data.phone}</td>
                                        </tr>
                                        <tr>
                                            <td>Fundraiser Type</td>
                                            <td>{this.props.location.state.userData.user_data.fundraiser_type}</td>
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
                                                <td>{this.props.location.state.userData.user_data.street}</td>
                                            </tr>
                                            <tr>
                                                <td>City</td>
                                                <td>{this.props.location.state.userData.user_data.city}</td>
                                            </tr>
                                            <tr>
                                                <td>State</td>
                                                <td>{this.props.location.state.userData.user_data.state}</td>
                                            </tr>
                                            <tr>
                                                <td>Country Code</td>
                                                <td>{this.props.location.state.userData.user_data.country_code}</td>
                                            </tr>
                                            <tr>
                                                <td>Zip</td>
                                                <td>{this.props.location.state.userData.user_data.zip}</td>
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