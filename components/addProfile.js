import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

const style = {
    margin: '20px 60px auto',
    float: 'right',
  };

var textStyle = { 
    width: '80%',
    display: 'block',
  };

export default class EditableUserProfile extends Component {
    constructor(props){
        super();
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.state = {
            phone: '',
        }
        console.log('PartialUD', props);

    }

    componentWillMount() {
        this.state.phone = this.props.currentUser.user_data.phone;
        console.log(this.state.phone);
    }

    handlePhoneChange(e) {
        this.setState({ phone: e.target.value })
    }
//floatingLabelText={this.props.Email}
    render() {
        return (
            <div className="profile-container raiseup">
                <h3>We'd like to know you More...</h3>
                <form className="form-group">
                <div class="row">
                <div class="col-sm">

                </div>
                </div>

                    <TextField id="ip_firstname" onChange={this.handleFirstNameChange}  floatingLabelText="Enter First Name" style={textStyle} />
                    <TextField id="ip_lastname" onChange={this.handleLastNameChange}  floatingLabelText="Enter Last Name" style={textStyle} />
                    <DatePicker hintText="Date of Birth" openToYearSelection={true} onChange={this.handleDOBChange}/>
                    <TextField id="ip_email" disabled={true} floatingLabelText="Email" value={this.props.currentUser.user_data.email} style={textStyle} />
                    <TextField id="ip_phone" floatingLabelText="Phone" onChange={this.handlePhoneChange}  value={this.state.phone} disabled={false} style={textStyle} />
                    

                    <TextField id="ip_street" onChange={this.handleStreetChange} floatingLabelText="Street" style={textStyle} />
                    <TextField id="ip_city" onChange={this.CityChange}  floatingLabelText="City" style={textStyle} />
                    <TextField id="ip_countrycode" onChange={this.handleCountryCodeChange} floatingLabelText="Country Code" style={textStyle} />
                    <TextField id="ip_zip" onChange={this.handleZipChange} floatingLabelText="Zip" style={textStyle} />

                    
                    <TextField id="ip_profileimgurl" 
                    onChange={this.handleProfileImgChange} 
                    hintText="http://www.website.com" 
                    floatingLabelText="Profile Image URL" 
                    style={textStyle} />

                    <TextField id="ip_ftype" 
                    value={this.props.currentUser.user_data.fundraiser_type} 
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
                    value={this.props.currentUser.user_data.organization_name}  
                    style={textStyle} />

                    <TextField id="ip_fundraiserlogo" 
                    onChange={this.handleFundraiserLogo} 
                    floatingLabelText="Enter Organization Name" 
                    style={textStyle} />

                    <RaisedButton label="Submit" type="button" primary={true} style={style} onClick={this.submitData} />
                </form>

            </div>
        )
    }
}