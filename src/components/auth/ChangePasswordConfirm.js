import React, { Component } from "react";

class ChangePasswordConfirmation extends Component {
  render() {
    return (
      <section className="section auth">
        <div className="container">
          <h1>Change Password</h1>
          <p>We have sent an email with a link to reset your password!</p>
        </div>
      </section>
    );
  }
}

export default ChangePasswordConfirmation;