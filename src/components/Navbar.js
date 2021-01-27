import React, { Component } from 'react';
import app from "./firebaseConfig";

export default class Navbar extends Component {
  handleLogOut = async event => {
    event.preventDefault();
    await app
            .auth()
            .signOut()
            .then(result => {
                this.props.auth.setAuthStatus(false);
                this.props.auth.setUser(null);
            })
            .catch(error => {
              console.log(error);   
            });
  }
  render() {
    return (
      <nav className="navbar is-link" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
        {!this.props.auth.isEmail &&(
              <a className="navbar-item" href="/">
              <img src="Logo.png" width="80" height="14" alt="hexal logo" />
            </a>
            )}  
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            {this.props.auth.isAuthenticated && !this.props.auth.isEmail &&(
              <a href="/admin" className="navbar-item">
                Profile
              </a>
            )}
            {this.props.auth.isAuthenticated && !this.props.auth.isEmail &&(
              <a href="/" className="navbar-item">
                Home
              </a>
            )}
            {this.props.auth.isAuthenticated && !this.props.auth.isEmail &&(
              <a href="/users" className="navbar-item">
                Users
              </a>
            )}

            {this.props.auth.isAuthenticated && !this.props.auth.isEmail &&(
              <a href="/carlist" className="navbar-item">
                Car List
              </a>
            )}

            {this.props.auth.isAuthenticated && !this.props.auth.isEmail &&(
              <a href="/loginmail" className="navbar-item">
                Send Auth Link
              </a>
            )}
            
            
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              {this.props.auth.isAuthenticated && this.props.auth.user && !this.props.auth.isEmail &&(
                <p>
                  Hi {this.props.auth.user.email}
                </p>
              )}
              <div className="buttons">
                {!this.props.auth.isAuthenticated && !this.props.auth.isEmail &&(
                  <div>
                    <a href="/register" className="button is-info">
                      <strong>Register</strong>
                    </a>
                    <a href="/login" className="button is-light">
                      Log in
                    </a>
                  </div>
                )}
                {this.props.auth.isAuthenticated && !this.props.auth.isEmail &&(
                  <a href="/" onClick={this.handleLogOut} className="button is-light">
                    Log out
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
