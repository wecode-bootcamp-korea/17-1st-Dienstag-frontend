import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MdPerson } from 'react-icons/md';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <form className="user_login_form" id="uesr-login">
        <div className="user_login_container">
          <div className="form_login_item login_name">
            <label for="edit_name">
              Username or e-mail address
              <span className="form_required" title="This field is required">
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
            />
          </div>
          <div className="form_login_item login_password">
            <label className="edit_pass">
              Password
              <span className="form_required" title="This field is required">
                *
              </span>
            </label>
            <input
              type="password"
              id="edit_pass"
              name="pass"
              size="40"
              maxLength="128"
              className="form-text required"
            />
          </div>
          <div className="form_action" id="edit-action">
            <MdPerson className="person_icon" />
            <input
              type="submit"
              id="edit_submit"
              name="op"
              value="Log in"
              className="form_submit"
            />
          </div>
          <div className="form_link">
            <Link to="/signup" className="link_text">
              Create new account
            </Link>
          </div>
        </div>
      </form>
    );
  }
}

export default Login;
