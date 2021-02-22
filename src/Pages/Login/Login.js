import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MdPerson } from 'react-icons/md';
import './Login.scss';

class Login extends Component {
  state = {
    email: '',
    password: '',
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

  handleSubmit = e => {
    const { email, password } = this.state;
    fetch('http://192.168.200.192:8000/user/signin', {
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
          console.log(result.access_token);
          this.props.history.push('/');
        } else {
          alert('invalid user');
          this.props.history.push('/signup');
        }
      });
  };

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
                name="email"
                className="formText required"
                onChange={this.handleInput}
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
    );
  }
}

export default Login;
