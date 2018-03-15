import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

const style = {
    float: 'right',
};

var textStyle = {
    width: '80%',
    display: 'block',
    textAlign: 'center'
};

export default class EditableUserProfile extends Component {
    constructor(props) {
        super();
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleFundTypeChange = this.handleFundTypeChange.bind(this);
        this.handleOrgChange = this.handleOrgChange.bind(this);
        this.state = {
            phone: '',
            fundtype: '',
            organization: '',
        }
        console.log('PartialUD', props);

    }

    componentWillMount() {
        this.state.phone = this.props.currentUser.user_data.phone;
        this.state.fundtype = this.props.currentUser.user_data.fundraiser_type;
        this.state.organization = this.props.currentUser.user_data.organization_name;
        console.log(this.state.organization);
    }

    handlePhoneChange(e) {
        this.setState({ phone: e.target.value })
    }
    handleOrgChange(e) {
        this.setState({organization: e.target.value})
    }
    handleFundTypeChange(e) {
        this.setState({fundtype: e.target.value})
    }
    //floatingLabelText={this.props.Email}
    render() {
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
                                floatingLabelText="Enter First Name"
                                style={textStyle} />

                            <TextField id="ip_lastname"
                                onChange={this.handleLastNameChange}
                                floatingLabelText="Enter Last Name"
                                style={textStyle} />

                           

                            <TextField id="ip_email"
                                disabled={true}
                                floatingLabelText="Email"
                                value={this.props.currentUser.user_data.email}
                                style={textStyle} />

                            <TextField id="ip_phone"
                                floatingLabelText="Phone"
                                onChange={this.handlePhoneChange}
                                value={this.state.phone}
                                disabled={false}
                                style={textStyle} />

                            <TextField id="ip_profileimgurl"
                                onChange={this.handleProfileImgChange}
                                hintText="http://www.website.com"
                                floatingLabelText="Profile Image URL"
                                style={textStyle} />

                        </div>
                        <div className="col-sm-4 sideraise">
                        <div className="icon-box">
                        <i class="far fa-building"></i>
                        <h4>Address</h4>
                        </div>
                            <TextField id="ip_street"
                                onChange={this.handleStreetChange}
                                floatingLabelText="Street"
                                style={textStyle} />

                            <TextField id="ip_city"
                                onChange={this.CityChange}
                                floatingLabelText="City"
                                style={textStyle} />

                            <TextField id="ip_countrycode"
                                onChange={this.handleCountryCodeChange}
                                floatingLabelText="Country Code"
                                style={textStyle} />

                            <TextField id="ip_zip"
                                onChange={this.handleZipChange}
                                floatingLabelText="Zip"
                                style={textStyle} />

                        </div>

                        <div className="col-sm-4 sideraise">
                        <div className="icon-box">
                        <i class="fab fa-connectdevelop"></i>
                        <h4>Social</h4>
                        </div>
                            
                            <TextField id="ip_ftype"
                                onChange={this.handleFundTypeChange}
                                value={this.state.fundtype}
                                floatingLabelText="Fund Raiser Type"
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



                            <TextField id="ip_orgName"
                                onChange={this.handleOrgChange}
                                value={this.state.organization}
                                floatingLabelText="Organization"
                                style={textStyle} />

                            <TextField id="ip_fundraiserlogo"
                                onChange={this.handleFundraiserLogoChanfe}
                                floatingLabelText="Enter Organization Name"
                                style={textStyle} />

                        </div>
                        <RaisedButton label="Submit" type="button" primary={true} style={style} onClick={this.submitData} />
                    </div>
                    
                </form>

            </div>
        )
    }
}