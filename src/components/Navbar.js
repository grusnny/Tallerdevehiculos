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
          <a className="navbar-item" href="/">
            <img src="Logo.png" width="80" height="14" alt="hexal logo" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a href="/" className="navbar-item">
              Home
            </a>
            <a href="/products" className="navbar-item">
              Services
            </a>
            <a href="/admin" className="navbar-item">
              Profile
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              {this.props.auth.isAuthenticated && this.props.auth.user && (
                <p>
                  Hi {this.props.auth.user.email}
                </p>
              )}
              <div className="buttons">
                {!this.props.auth.isAuthenticated && (
                  <div>
                    <a href="/register" className="button is-info">
                      <strong>Register</strong>
                    </a>
                    <a href="/login" className="button is-light">
                      Log in
                    </a>
                  </div>
                )}
                {this.props.auth.isAuthenticated && (
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
