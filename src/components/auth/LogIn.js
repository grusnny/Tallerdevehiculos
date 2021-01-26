import React, { Component } from 'react';
import FormErrors from "../FormErrors";
import Validate from "../utility/FormValidation";
import app from "../firebaseConfig";
import * as firebase from "firebase";
import "firebase/auth";

class LogIn extends Component {
  state = {
    username: "",
    password: "",
    errors: {
      auth: null,
      blankfield: false
    }
  };

  clearErrorState = () => {
    this.setState({
      errors: {
        auth: null,
        blankfield: false
      }
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    // Form validation
    this.clearErrorState();
    const error = Validate(event, this.state);
    if (error) {
      this.setState({
        errors: { ...this.state.errors, ...error }
      });
    }

    // Firebase Auth integration here

    app.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(function() {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return app.auth().signInWithEmailAndPassword(this.state.username, this.state.password);
  })
  .catch(function(error) {
    // Handle Errors here.
  });
    await app
            .auth()
            .signInWithEmailAndPassword(this.state.username, this.state.password)
            .then(result => {
                this.props.auth.setAuthStatus(true);
                this.props.auth.setUser(result.user);
                this.props.history.push("/");
                window.location.reload();
            })
            .catch(error => {
              let err = null;
              !error.message ? err = { "message": error} : err = error;
              this.setState({
                errors: {
                  ...this.state.errors,
                  auth: err
                }
            }); 
            console.log(this.state.errors)   
            });
  };

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  };

  render() {
    return (
      <section className="section auth">
        <div className="container">
          <h1>Log in</h1>
          <FormErrors formerrors={this.state.errors} />

          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <p className="control">
                <input 
                  className="input" 
                  type="text"
                  id="username"
                  aria-describedby="usernameHelp"
                  placeholder="Enter username or email"
                  value={this.state.username}
                  onChange={this.onInputChange}
                />
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input 
                  className="input" 
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onInputChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <a href="/forgotpassword">Forgot password?</a>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button className="button is-success">
                  Login
                </button>
              </p>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default LogIn;