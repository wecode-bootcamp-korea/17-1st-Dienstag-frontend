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
    pwdMessage: '',
  };

  handleInputValue = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleValidation = e => {
    const { password, passwordConfirm } = this.state;
    const validatePassword = password === passwordConfirm;
    const pwdLength = password.length >= 7;
    this.setState({
      pwdMessage: pwdLength || '8자리 이상 입력하세요. ',
      alertMessage: validatePassword || '입력한 비밀번호가 다릅니다.',
      color: validatePassword || 'red',
    });
  };

  render() {
    const { alertMessage, color, pwdMessage } = this.state;
    return (
      <form className="signupForm">
        <div className="signupContainer">
          <div className="signupHeader">
            <span className="textGeneral">General</span>
            <span></span>
          </div>
          <div className="sigupContent">
            <h1>WELCOME TO THE D-FAMILY</h1>
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
                  <span
                    className="formRequired pwdMessage"
                    title="This field is required"
                  >
                    {pwdMessage}
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
