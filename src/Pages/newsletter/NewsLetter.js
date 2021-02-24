import React, { Component } from 'react';
import './NewsLetter.scss';

class NewsLetter extends Component {
  constructor() {
    window.scrollTo({ top: 0 });
    super();
    this.state = {
      email: '',
      lastName: '',
      firstName: '',
      emailvalid: false,
      firstvalid: false,
      lastvalid: false,
    };
  }

  hadleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  checkValid = () => {
    const { emailvalid, firstName, lastvalid } = this.state;

    // if (!emailvalid.includes('@') || !emailvalid.includes('.')) {
    //   this.setState({
    //     valid: true,
    //   });
    // } else {
    //   fetch('http://10.58.1.95:8000/user/login', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       email: emailvalid,
    //       name: firstName,
    //     }),
    //   })
    //     .then(res => res.json())
    //     .then(result => {
    //       if (result.message === 'SUCCESS') {
    //         this.props.history.push('/');
    //         console.log(result.message);
    //       } else {
    //         console.log(result.message);
    //       }
    //     });
    // }
  };

  render() {
    return (
      <div className="NewsLetter">
        <img
          className="newsHeadimg"
          alt="newsletterimg"
          src="https://images.pexels.com/photos/5999976/pexels-photo-5999976.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
        <div className="headbox">
          <div className="head one">S.W.A.P. -IT'S</div>
          <div className="head one">ABOUT GIVE AND</div>
          <div className="head one">TAKE</div>
        </div>
        <div className="textbox">
          <p>
            Our website is currently getting a complete makeover. It’s going to
            take a while before all our services and F-eatures are working
            hassle-free again.
          </p>
          <p>
            Soon you’ll be able to start swapping bags again. Sign up here, and
            we’ll let you know when everything’s running smoothly:
          </p>
        </div>
        <h1 className="subscribeTitle">SUBSCRIBE</h1>

        <div className="formsContainer">
          <div className="formtitle">
            Email Address
            <span className={!this.state.emailvalid ? 'valid' : 'invalid'}>
              Check Your Email
            </span>
          </div>
          <input
            type="text"
            className="input"
            onChange={this.hadleInput}
            onKeyup={this.checkValid}
            name="email"
          ></input>
          <div className="formtitle">
            First Name
            <span className={!this.state.firstName ? 'valid' : 'invalid'}>
              Check Your First Name
            </span>
          </div>
          <input
            type="text"
            className="input"
            onChange={this.hadleInput}
            name="lastName"
          ></input>
          <div className="formtitle">
            Last Name
            <span className={!this.state.lastvalid ? 'valid' : 'invalid'}>
              Check Your Last Name
            </span>
          </div>
          <input
            type="text"
            className="input"
            onChange={this.hadleInput}
            name="firstName"
          ></input>
        </div>
        <div className="selectContainer">
          <div className="genterTiltle">Gender</div>
          <select>
            <option>Female</option>
            <option>Male</option>
            <option>other</option>
          </select>
          <div className="subBtn">
            <span onClick={this.checkValid}>Subscribe</span>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsLetter;
