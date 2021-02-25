/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { MdPerson } from 'react-icons/md';
import './Login.scss';

class Login extends Component {
  state = {
    email: '',
    password: '',
    username: localStorage.getItem('username'),
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value,
      },
      () => console.log(this.state)
    );
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    fetch('http://10.58.6.137:8000/user/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .catch(function (error) {
        console.log(error);
      })
      .then(result => {
        if (result.message === 'SUCCESS') {
          localStorage.setItem('token', result.access_token);
          localStorage.setItem('username', result.username);
          this.props.history.push('/');
        } else {
          alert('맞지 않습니다.');
        }
      });
  };

  render() {
    const { isToken, handleLogout } = this.props;
    const { username } = this.state;
    console.log(username, localStorage.getItem('username'));
    return (
      <div>
        {!isToken ? (
          <form className="userLoginForm">
            <div className="userLoginContainer">
              <div className="formLoginItem loginName">
                <label className="editName">
                  Username or e-mail address
                  <span className="formRequired" title="This field is required">
                    *
                  </span>
                  <input
                    required
                    type="text"
                    name="email"
                    className="formText required"
                    onChange={this.handleInput}
                  />
                </label>
              </div>
              <div className="formLoginItem loginPassword">
                <label required className="editPass">
                  Password
                  <span className="formRequired" title="This field is required">
                    *
                  </span>
                  <input
                    type="password"
                    name="password"
                    className="formText required"
                    onChange={this.handleInput}
                  />
                </label>
              </div>
              <div className="formAction">
                <MdPerson className="personIcon" />
                <input
                  onClick={this.handleSubmit}
                  name="submit"
                  defaultValue="Log in"
                  className="formSubmit"
                />
              </div>
              <div className="formLink">
                <Link to="/signup" className="linkText">
                  Create new account
                </Link>
              </div>
            </div>
          </form>
        ) : (
            <div>
              <div> HELLO, {this.state.username} </div>
              <div onClick={() => handleLogout()}>로그아웃</div>
            </div>
          )}
      </div>
    );
  }
}

export default withRouter(Login);
