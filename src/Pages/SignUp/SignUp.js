import React, { Component } from 'react';
import { MdPerson } from 'react-icons/md';
import { FcCheckmark } from 'react-icons/fc';
import './Signup.scss';

class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    isLength: false,
    isConfirm: false,
    isShowingMsg: false,
  };

  handleInputValue = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    const { password, passwordConfirm } = this.state;
    const validatePassword = password === passwordConfirm;
    const pwdLength = password.length >= 7;

    this.setState({
      isLength: pwdLength && true,
      isConfirm: validatePassword && true,
    });
  };
  handleValidationText = e => {
    this.setState({
      isShowingMsg: true,
    });
  };

  render() {
    const { isConfirm, isLength, isShowingMsg } = this.state;
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
                    className="formText required"
                    onChange={this.handleInputValue}
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
                    className="formText required"
                    onChange={this.handleInputValue}
                  />
                </label>
              </div>
              <div className="formSignupItem loginName">
                <label className="editPassword">
                  Password *
                  <span
                    className={'NonePwdMsg ' + (isShowingMsg && 'showPwdMsg')}
                    title="This field is required"
                  >
                    {isLength ? <FcCheckmark /> : '8개 이상 입력하세요.'}
                  </span>
                  <input
                    type="password"
                    name="password"
                    className="formText required"
                    onChange={this.handleInputValue}
                    onKeyPress={this.handleValidationText}
                  />
                </label>
              </div>
              <div className="formSignupItem loginName">
                <label className="editPasswordConfirm">
                  Password Confirm *
                  <span
                    className={
                      'NonePwdMsg ' +
                      (this.state.passwordConfirm.length >= 1 && 'showPwdMsg')
                    }
                    title="This field is required"
                  >
                    {isConfirm ? <FcCheckmark /> : '일치하지 않습니다. '}
                  </span>
                  <input
                    type="password"
                    name="passwordConfirm"
                    className="formText required"
                    onChange={this.handleInputValue}
                    onKeyPress={this.handleValidationText}
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
