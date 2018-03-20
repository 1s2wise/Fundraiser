import React, { Component } from 'react';
import axios from 'axios';
import { imageUpload } from '../services/api';
var imgStaticURL;
export default class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = { file: '', imagePreviewUrl: '' };

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    var userID = window.sessionStorage.getItem("UID").toString();
    console.log(this.props.parentState.modal_caller);
    var imgStaticURL = imageUpload(this.state.file, this.props.parentState.modal_caller, userID);

  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
        <form onSubmit={(e) => this._handleSubmit(e)}>
          <input className="fileInput"
            type="file"
            onChange={(e) => this._handleImageChange(e)} />
          <div className="imgPreview">
            {$imagePreview}
          </div>
          <button className="submitButton"
            type="submit"
            onClick={(e) => this._handleSubmit(e)}>Upload Image</button>
        </form>

      </div>
    )
  }
}

