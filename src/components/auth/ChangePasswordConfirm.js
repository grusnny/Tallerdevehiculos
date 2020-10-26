import React, { Component } from "react";

class ChangePasswordConfirmation extends Component {
  render() {
    return (
      <section className="section auth">
        <div className="container">
          <h1>Cambiar contraseña</h1>
          <p>¡Hemos enviado un correo con un link para reestablecer tu contraseña!</p>
        </div>
      </section>
    );
  }
}

export default ChangePasswordConfirmation;