import React, { Component } from 'react';
import FormErrors from "../FormErrors";
import Validate from "../utility/FormValidation";
import app from "../firebaseConfig";

class ForgotPassword extends Component {
  state = {
    email: "",
    errors: {
      cognito: null,
      blankfield: false
    }
  }

  clearErrorState = () => {
    this.setState({
      errors: {
        auth: null,
        blankfield: false
      }
    });
  }

  forgotPasswordHandler = async event => {
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
            .sendPasswordResetEmail(this.state.email)
            .then(result => {
              this.props.history.push('/changepasswordconfirmation');
            })
            .catch(error => {
              console.log(error);   
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
          <h1>Olvidaste la contraseña?</h1>
          <p>
          Porfavor ingresa el correo asociado a tu cuenta y te enviaremos un mensaje
          con un link para su reinicio.
          </p>
          <FormErrors formerrors={this.state.errors} />

          <form onSubmit={this.forgotPasswordHandler}>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  type="email"
                  className="input"
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
              <p className="control">
                <a href="/forgotpassword">¿Olvidó la contraseña?</a>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button className="button is-success">
                  Enviar
                </button>
              </p>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default ForgotPassword;