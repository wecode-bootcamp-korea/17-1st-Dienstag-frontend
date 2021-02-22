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
    phone: '',
    isLength: false,
    isConfirm: false,
    isShowingMsg: false,
    isAnonymous: false,
  };
  handleSubmit = e => {
    console.log('aaaaa');
    const { name, email, password, phone, isAnonymous } = this.state;
    fetch('http://10.58.2.91:8000/user/signup', {
      method: 'POST',
      body: JSON.stringify({
        username: name,
        is_anonymous: isAnonymous,
        email: email,
        password: password,
        phone_number: phone,
      }),
    })
      .then(response => response.json())
      .catch(error => console.error(error))
      .then(result => {
        if (result.message === 'SUCCESS') {
          this.props.history.push('/');
        } else {
          alert('회원가입이 안되었습니다.');
        }
      });
  };

  handleInputValue = e => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value,
      },
      () => console.log(this.state.passwordConfirm)
    );
    const { password, passwordConfirm } = this.state;
    const validatePassword = password === passwordConfirm;
    const pwdLength = password.length >= 7;

    this.setState(
      {
        isLength: pwdLength && true,
        isConfirm: validatePassword && true,
      },
      () => console.log(this.state)
    );
  };
  handleValidationText = e => {
    this.setState(
      {
        isShowingMsg: true,
      },
      () => console.log(this.state.isShowingMsg)
    );
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
              <div className="formSignupItem loginName">
                <label className="editEmail">
                  PHONE NUMBER
                  <span className="formRequired" title="This field is required">
                    *
                  </span>
                  <input
                    type="text"
                    name="phone"
                    className="formText required"
                    onChange={this.handleInputValue}
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
            defaultValue="CREATE D-PROFILE"
            className="formSubmit"
            onClick={this.handleSubmit}
          />
        </div>
      </form>
    );
  }
}

export default SignUp;
