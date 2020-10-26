import React, { Component } from 'react';
import FormErrors from "../FormErrors";
import Validate from "../utility/FormValidation";
import { Auth } from "aws-amplify";
import app from "../firebaseConfig";

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
     await app
            .auth()
            .signInWithEmailAndPassword(this.state.username, this.state.password)
            .then(result => {
                console.log(result);
                this.props.auth.setAuthStatus(true);
                this.props.auth.setUser(result.user);
                this.props.history.push("/");
            })
            .catch(error => {
              let err = null;
              !error.message ? err = { "message": error } : err = error;
              this.setState({
                errors: {
                  ...this.state.errors,
                  auth: err
                }
            });    
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
          <h1>Iniciar sesión</h1>
          <FormErrors formerrors={this.state.errors} />

          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <p className="control">
                <input 
                  className="input" 
                  type="text"
                  id="username"
                  aria-describedby="usernameHelp"
                  placeholder="Ingrese nombre de usuario o correo"
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
                  placeholder="Contraseña"
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
                <a href="/forgotpassword">¿Olvidó la contraseña?</a>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button className="button is-success">
                  Iniciar sesión
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