import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class TopNav extends Component {
  constructor(props) {
    super();
    this.state = {
    userEmail: '',
    };
    console.log('nav',props);

  }
  //CSS ONLY
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-md navbar-dark nav-color">

          <a class="navbar-brand" href="/login">
          <img id="logo" src="img/fund.png"/>
          <strong>Fundox</strong></a>


          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
            </ul>
            <ul class="navbar-nav ml-auto">
              <li class="nav-item" id="disp-login"><a href="/login" class="nav-link" ><i class="fas fa-sign-in-alt"></i> Login</a></li>
              <li class="nav-item" id="disp-signup"><a href="/signup" class="nav-link" ><i class="fas fa-user-plus"></i> Sign Up</a></li>
              <li class="nav-item" id="disp-logout"><a href="/login" class="nav-link" ><i class="fas fa-sign-out-alt"></i> Logout</a></li>             
              


            </ul>

          </div>
        </nav>
      </div>
    );
  }
}
