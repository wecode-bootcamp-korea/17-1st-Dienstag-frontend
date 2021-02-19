import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MdPerson } from 'react-icons/md';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <form className="userLoginForm">
        <div className="userLoginContainer">
          <div className="formLoginItem loginName">
            <label className="editName">
              Username or e-mail address
              <span className="formRequired" title="This field is required">
                *
              </span>
              <input
                type="text"
                name="name"
                size="40"
                maxLength="60"
                className="formText required"
              />
            </label>
          </div>
          <div className="formLoginItem loginPassword">
            <label className="editPass">
              Password
              <span className="formRequired" title="This field is required">
                *
              </span>
              <input
                type="password"
                name="pass"
                size="40"
                maxLength="128"
                className="formText required"
              />
            </label>
          </div>
          <div className="formAction">
            <MdPerson className="personIcon" />
            <input
              type="submit"
              name="submit"
              value="Log in"
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
    );
  }
}

export default Login;
