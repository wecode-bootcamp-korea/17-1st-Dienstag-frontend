import React, { Component } from 'react';
import { MdPerson } from 'react-icons/md';
import './Signup.scss';

class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    alertMessage: '',
    color: 'black',
  };

  handleInputValue = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleValidation = e => {
    this.state.password === this.state.passwordConfirm
      ? this.setState({ alertMessage: ' Match', color: 'blue' })
      : this.setState({ alertMessage: ' Not Match', color: 'red' });
  };
  render() {
    return (
      <form className="signup_form">
        <div className="signup_container">
          <div className="signup_header">
            <span className="text_general">General</span>
            <span></span>
          </div>
          <div className="sigup_content">
            <h1>WECOME TO THE D-FAMILY</h1>
            <div className="form_signup_item_container">
              <div className="form_signup_item login_name">
                <label htmlFor="edit_name">
                  Username
                  <span
                    className="form_required"
                    title="This field is required"
                  >
                    *
                  </span>
                </label>
                <input
                  type="text"
                  id="edit_name"
                  name="name"
                  size="40"
                  maxLength="60"
                  className="form-text required"
                  onKeyPress={this.handleInputValue}
                />
              </div>
              <div className="form_signup_item login_name">
                <label htmlFor="edit_email">
                  E-mail address
                  <span
                    className="form_required"
                    title="This field is required"
                  >
                    *
                  </span>
                </label>
                <input
                  type="text"
                  id="edit_email"
                  name="email"
                  size="40"
                  maxLength="60"
                  className="form-text required"
                  onKeyPress={this.handleInputValue}
                  onChange={this.handleValidation}
                />
              </div>
              <div className="form_signup_item login_name">
                <label htmlFor="edit_password">
                  Password
                  <span
                    className="form_required"
                    title="This field is required"
                  >
                    *
                  </span>
                </label>
                <input
                  type="text"
                  id="edit_password"
                  name="password"
                  size="40"
                  maxLength="60"
                  className="form-text required"
                  onKeyPress={this.handleInputValue}
                  onChange={this.handleValidation}
                />
              </div>
              <div className="form_signup_item login_name">
                <label htmlFor="edit_password_confirm">
                  Password Confirm
                  <span
                    style={{ color: this.state.color }}
                    className="form_required"
                    title="This field is required"
                  >
                    {!this.state.alertMessage ? '*' : this.state.alertMessage}
                  </span>
                </label>
                <input
                  type="text"
                  id="edit_password_confirm"
                  name="passwordConfirm"
                  size="40"
                  maxLength="60"
                  className="form-text required"
                  onKeyPress={this.handleInputValue}
                  onChange={this.handleValidation}
                />
              </div>
            </div>
            <span className="info_text">
              You will be able to set your password after you've confirmed your
              email address.
            </span>
          </div>
        </div>
        <div className="form_action" id="edit-action">
          <MdPerson className="person_icon" />
          <input
            type="submit"
            id="edit_submit"
            defaultValue="CREATE D-PROFILE"
            className="form_submit"
          />
        </div>
      </form>
    );
  }
}

export default SignUp;
