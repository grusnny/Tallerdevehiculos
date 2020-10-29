import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
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
              Servicios
            </a>
            <a href="/admin" className="navbar-item">
              Perfil
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              {this.props.auth.isAuthenticated && this.props.auth.user && (
                <p>
                  Hola {this.props.auth.user.email}
                </p>
              )}
              <div className="buttons">
                {!this.props.auth.isAuthenticated && (
                  <div>
                    <a href="/register" className="button is-info">
                      <strong>Registrar</strong>
                    </a>
                    <a href="/login" className="button is-light">
                      Iniciar sesión
                    </a>
                  </div>
                )}
                {this.props.auth.isAuthenticated && (
                  <a href="/" onClick={this.handleLogOut} className="button is-light">
                    Cerrar sesión
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
