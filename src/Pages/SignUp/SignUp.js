import React, { Component } from 'react';
import { MdPerson } from 'react-icons/md';
import './Signup.scss';

class SignUp extends Component {
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
                <label for="edit_name">
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
                />
              </div>
              <div className="form_signup_item login_name">
                <label for="edit_name">
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
                  id="edit_name"
                  name="name"
                  size="40"
                  maxLength="60"
                  className="form-text required"
                />
              </div>
              <div className="form_signup_item login_name">
                <label for="edit_name">
                  Confirm e-mail address
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
            name="op"
            value="CREATE D-PROFILE"
            className="form_submit"
          />
        </div>
      </form>
    );
  }
}

export default SignUp;
