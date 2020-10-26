import React, { Component } from 'react';
import FormErrors from "../FormErrors";
import Validate from "../utility/FormValidation";
import { Auth } from "aws-amplify";
import app from "../firebaseConfig";

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    errors: {
      auth: null,
      blankfield: false,
      passwordmatch: false
    }
  }

  clearErrorState = () => {
    this.setState({
      errors: {
        auth: null,
        blankfield: false,
        passwordmatch: false
      }
    });
  }

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
    const { username, email, password } = this.state;
    await app
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(result => {
                console.log(result);
                this.props.history.push("/welcome");
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
  }

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  }

  render() {
    return (
      <section className="section auth">
        <div className="container">
          <h1>Registro</h1>
          <FormErrors formerrors={this.state.errors} />

          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <p className="control">
                <input 
                  className="input" 
                  type="text"
                  id="username"
                  aria-describedby="userNameHelp"
                  placeholder="Ingrese nombre de usuario"
                  value={this.state.username}
                  onChange={this.onInputChange}
                />
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input 
                  className="input" 
                  type="email"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Ingrese correo"
                  value={this.state.email}
                  onChange={this.onInputChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
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
              <p className="control has-icons-left">
                <input 
                  className="input" 
                  type="password"
                  id="confirmpassword"
                  placeholder="Confirmar contraseña"
                  value={this.state.confirmpassword}
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
                  Registrar
                </button>
              </p>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Register;