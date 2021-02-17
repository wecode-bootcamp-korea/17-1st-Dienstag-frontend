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
    const { password, passwordConfirm } = this.state;
    //this.state.password === this.state.passwordConfirm
    this.setState({
      alertMessage: password === passwordConfirm ? 'Match' : 'Not Match',
      color: password === passwordConfirm ? 'blue' : 'red',
    });
  };
  render() {
    const { alertMessage, color } = this.state;
    return (
      <form className="signupForm">
        <div className="signupContainer">
          <div className="signupHeader">
            <span className="textGeneral">General</span>
            <span></span>
          </div>
          <div className="sigupContent">
            <h1>WECOME TO THE D-FAMILY</h1>
            <div className="formSignupItemContainer">
              <div className="formSignupItem loginName">
                <label className="editName">
                  Username
                  <span
                    className="form_required"
                    title="This field is required"
                  >
                    *
                  </span>
                  <input
                    type="text"
                    id="editName"
                    name="name"
                    size="40"
                    maxLength="60"
                    className="formText required"
                    onKeyPress={this.handleInputValue}
                  />
                </label>
              </div>
              <div className="formSignupItem loginName">
                <label className="editEmail">
                  E-mail address
                  <span className="formRequired" title="This field is required">
                    *
                  </span>
                  <input
                    type="text"
                    name="email"
                    size="40"
                    maxLength="60"
                    className="formText required"
                    onKeyPress={this.handleInputValue}
                    onChange={this.handleValidation}
                  />
                </label>
              </div>
              <div className="formSignupItem loginName">
                <label className="editPassword">
                  Password
                  <span className="formRequired" title="This field is required">
                    *
                  </span>
                  <input
                    type="password"
                    name="password"
                    size="40"
                    maxLength="60"
                    className="formText required"
                    onKeyPress={this.handleInputValue}
                    onChange={this.handleValidation}
                  />
                </label>
              </div>
              <div className="formSignupItem loginName">
                <label className="editPasswordConfirm">
                  Password Confirm
                  <span
                    style={{ color: color }}
                    className="formRequired"
                    title="This field is required"
                  >
                    {!alertMessage ? '*' : alertMessage}
                  </span>
                  <input
                    type="password"
                    name="passwordConfirm"
                    size="40"
                    maxLength="60"
                    className="formText required"
                    onKeyPress={this.handleInputValue}
                    onChange={this.handleValidation}
                  />
                </label>
              </div>
            </div>
            <span className="infoText">
              You will be able to set your password after you've confirmed your
              email address.
            </span>
          </div>
        </div>
        <div className="formAction">
          <MdPerson className="personIcon" />
          <input
            type="submit"
            defaultValue="CREATE D-PROFILE"
            className="formSubmit"
          />
        </div>
      </form>
    );
  }
}

export default SignUp;
