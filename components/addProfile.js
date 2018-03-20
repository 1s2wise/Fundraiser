import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import { userUpdateAPI } from '../services/api'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ImageUpload from '../components/imageupload';
import { getUserData } from '../services/api';



const rightstyle = {
    float: 'right',
};
const leftstyle = {
    float: 'left',
};
var textStyle = {
    width: '80%',
    display: 'block',
    textAlign: 'center',
};

function DateToShow(date) {

    var splitDate = date.split("/");
    var month = splitDate[0] - 1;
    var day = splitDate[1];
    var year = splitDate[2];
    var f_date = new Date();
    f_date.setFullYear(year, month, day);
    console.log(f_date);
    return f_date;
}

function DateToSend(date) {
    var tempdate = date;

    var month = (1 + tempdate.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    var day = tempdate.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    var year = tempdate.getFullYear();

    tempdate = month + '/' + day + '/' + year;
    return tempdate;
}

var currentState = new Object();
currentState.user = null;


export default class EditableUserProfile extends Component {

    componentDidMount() {
        this.setState({ loading: true }, () => {
            this.gatherUserData();
        });
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
                        dob : DateToShow(currentState.user.dob),
                        street : currentState.user.street,
                        city : currentState.user.city,
                        state : currentState.user.state,
                        country_code : currentState.user.country_code,
                        zip : currentState.user.zip,
                        fundraiser_logo_url : currentState.user.fundraiser_logo_url,
                        profile_image_url : currentState.user.profile_image_url,
                        loading: false,
                    });
                    console.log(this.state);
                }
            })
            .catch(function (error) {
                console.log(error);
            });

        console.log('outpromise', currentState);
    }

    constructor(props) {
        super();
        this.state = {
            loading: false,
            modal: false,
            modal_caller: null,
            first_name: '',
            last_name: '',
            dob: '',
            email: '',
            phone: '',
            profile_image_url: null,
            street: '',
            city: '',
            state: '',
            country_code: '',
            zip: '',
            fundraiser_type: '',
            facebook_link: null,
            twitter_link: null,
            google_link: null,
            organization_name: '',
            fundraiser_logo_url: null,
        }

        //Basic Details
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);

        //Address
        this.handleStreetChange = this.handleStreetChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleCountryCodeChange = this.handleCountryCodeChange.bind(this);
        this.handleZipChange = this.handleZipChange.bind(this);

        //Social
        this.handleFundTypeChange = this.handleFundTypeChange.bind(this);
        this.handleGoogleLinkChange = this.handleGoogleLinkChange.bind(this);
        this.handleFblinkChange = this.handleFblinkChange.bind(this);
        this.handleTwitterLinkChange = this.handleTwitterLinkChange.bind(this);
        this.handleOrgChange = this.handleOrgChange.bind(this);
        this.handleBirthChange = this.handleBirthChange.bind(this);
        this.submitData = this.submitData.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle(e) {
        this.setState({
            modal: !this.state.modal
        });
        if ((e.target).innerHTML == "Profile Image") {
            this.state.modal_caller = "fundraiserProfile";
        }
        else if ((e.target).innerHTML == "Fundraiser Logo") {
            this.state.modal_caller = "fundraiserLogo";
        }
        console.log(this.state.modal_caller);
    }

    handleFirstNameChange(e) {
        this.setState({ first_name: e.target.value });
    }

    handleLastNameChange(e) {
        this.setState({ last_name: e.target.value });
    }

    handlePhoneChange(e) {
        this.setState({ phone: e.target.value })
    }

    handleStreetChange(e) {
        this.setState({ street: e.target.value });
    }

    handleCityChange(e) {
        this.setState({ city: e.target.value });
    }

    handleStateChange(e) {
        this.setState({ state: e.target.value });
    }

    handleCountryCodeChange(e) {
        this.setState({ country_code: e.target.value });
    }

    handleZipChange(e) {
        this.setState({ zip: e.target.value });
    }

    handleFundTypeChange(data) {
        this.setState({ fundraiser_type: data })
    }

    handleFblinkChange(e) {
        this.setState({ facebook_link: e.target.value });
    }

    handleTwitterLinkChange(e) {
        this.setState({ twitter_link: e.target.value });
    }

    handleOrgChange(e) {
        this.setState({ organization_name: e.target.value });
    }

    handleGoogleLinkChange(e) {
        this.setState({ google_link: e.target.value });
    }

    handleBirthChange(e, date) {
        this.setState({ dob: date });
        console.log('stateDOB', this.state.dob);


    }


    submitData() {

        this.state.dob = DateToSend(this.state.dob);
        this.state.profile_image_url = window.sessionStorage.getItem("profileImg");
        this.state.fundraiser_logo_url = window.sessionStorage.getItem("logoImg");

        window.sessionStorage.removeItem("profileImg");
        window.sessionStorage.removeItem("logoImg");


        var userID = window.sessionStorage.getItem("UID").toString();
        userUpdateAPI(this.state, userID)
            .then((response) => {
                if (response.status == 200) {
                    console.log('GET userdata', response);
                }
            })

            .catch(function (error) {
                console.log(error);
            });


    }





    //floatingLabelText={this.props.Email}
    render() {
        if (this.state.loading)
            return (
                <h1> Loading data...</h1>
            )

        return (
            <div className="container-fluid">
                {/* <h3><span><i class="far fa-bookmark"></i></span>My Profile</h3> */}
                <form className="">
                    <div className="row userProfile">
                        <div className="col-sm-4 sideraise">
                            <div className="icon-box">
                                <i class="far fa-user-circle"></i>
                                <h4>Basic</h4>
                            </div>

                            <TextField id="ip_firstname"
                                onChange={this.handleFirstNameChange}
                                value={this.state.first_name}
                                floatingLabelText="Enter First Name *"
                                style={textStyle} />

                            <TextField id="ip_lastname"
                                onChange={this.handleLastNameChange}
                                value={this.state.last_name}
                                floatingLabelText="Enter Last Name *"
                                style={textStyle} />

                            <DatePicker onChange={this.handleBirthChange}
                                floatingLabelText="Date Of Birth *"
                                container="inline"
                                value={this.state.dob}
                                style={textStyle} />



                            <TextField id="ip_email"
                                disabled={true}
                                floatingLabelText="Email"
                                value={this.state.email}
                                style={textStyle} />

                            <TextField id="ip_phone "
                                floatingLabelText="Phone *"
                                onChange={this.handlePhoneChange}
                                value={this.state.phone}
                                disabled={false}
                                style={textStyle} />

                            <TextField id="ip_orgName"
                                onChange={this.handleOrgChange}
                                value={this.state.organization_name}
                                floatingLabelText="Organization"
                                style={textStyle} />


                        </div>
                        <div className="col-sm-4 sideraise">
                            <div className="icon-box">
                                <i class="far fa-building"></i>
                                <h4>Address</h4>
                            </div>
                            <TextField id="ip_street"
                                onChange={this.handleStreetChange}
                                value={this.state.street}
                                floatingLabelText="Street *"
                                style={textStyle} />

                            <TextField id="ip_city"
                                onChange={this.handleCityChange}
                                value={this.state.city}
                                floatingLabelText="City *"
                                style={textStyle} />

                            <TextField id="ip_state"
                                onChange={this.handleStateChange}
                                value={this.state.state}
                                floatingLabelText="State *"
                                style={textStyle} />

                            <TextField id="ip_countrycode"
                                onChange={this.handleCountryCodeChange}
                                value={this.state.country_code}
                                floatingLabelText="Country Code *"
                                style={textStyle} />

                            <TextField id="ip_zip"
                                onChange={this.handleZipChange}
                                value={this.state.zip}
                                floatingLabelText="Zip *"
                                style={textStyle} />

                        </div>

                        <div className="col-sm-4 sideraise">
                            <div className="icon-box">
                                <i class="fab fa-connectdevelop"></i>
                                <h4>Social</h4>
                            </div>


                            <RaisedButton variant="raised" label="Profile Image" onClick={this.toggle}>
                                <i class="fas fa-upload"></i>
                            </RaisedButton>

                            <RaisedButton variant="raised" label="Fundraiser Logo" style={rightstyle} onClick={this.toggle}>
                                <i class="fas fa-upload"></i>
                            </RaisedButton>


                            <TextField id="ip_ftype"
                                onChange={this.handleFundTypeChange}
                                value={this.state.fundraiser_type}
                                floatingLabelText="Fund Raiser Type"
                                style={textStyle} />


                            <TextField id="ip_Googlelink"
                                onChange={this.handleGoogleLinkChange}
                                hintText="http://www.twitter.com/username"
                                floatingLabelText="Google Profile URL"
                                style={textStyle} />


                            <TextField id="ip_fblink"
                                onChange={this.handleFblinkChange}
                                hintText="http://www.facebook.com/username"
                                floatingLabelText="Facebook Profile URL"
                                style={textStyle} />

                            <TextField id="ip_twitterlink"
                                onChange={this.handleTwitterLinkChange}
                                hintText="http://www.twitter.com/username"
                                floatingLabelText="Twitter Profile URL"
                                style={textStyle} />

                            <RaisedButton label="Submit" type="button" primary={true} style={rightstyle} onClick={this.submitData} />

                        </div>

                    </div>

                </form>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <ImageUpload parentState={this.state} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Done</Button>
                    </ModalFooter>
                </Modal>

            </div>
        )
    }
}