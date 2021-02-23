import React, { Component } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { ProductConsumer } from '../../context';
import Login from '../Login/Login';
import './Checkout.scss';

class Checkout extends Component {
  state = {
    isInfoOpen: false,
  };
  gotoCartList = () => {
    this.props.history.push('/cart');
  };
  openInfo = () => {
    this.setState({ isInfoOpen: !this.state.isInfoOpen });
  };

  render() {
    const { isInfoOpen } = this.state;
    return (
      <div className="checkout">
        <p>Login</p>
        <Login className="loginContainer" />
        <div className="guestInputContainer">
          <div>
            <p>Continue as a guest</p>
            <label className="guestInputLabel">
              E-mail address *<input className="guestInput"></input>
            </label>
          </div>
          <div className="deliveryAddress">
            <p>BILLING INFORMATION</p>
            <label>
              Country / Region *<input />
            </label>
            <label>
              First name *<input />
            </label>
            <label>
              Last name *<input />
            </label>
            <label>
              Street & No. *<input />
            </label>
            <label>
              District (Korea example: Yongsan-gu) *<input />
            </label>
            <label>
              City *<input />
            </label>
            <label>
              Postal code *<input />
            </label>
            <label>
              Phone *<input />
            </label>
          </div>
          <div>
            <div className="radioContainer">
              <label>
                Same as Billing Information
                <input type="radio" className="radioBtn" />
              </label>
              <label>
                Different Shipping Information
                <input
                  type="radio"
                  className="radioBtn"
                  onClick={this.openInfo}
                />
              </label>
            </div>

            {isInfoOpen && (
              <div className="differentAddress">
                <p>BILLING INFORMATION</p>
                <label>
                  Country / Region *<input />
                </label>
                <label>
                  First name *<input />
                </label>
                <label>
                  Last name *<input />
                </label>
                <label>
                  Street & No. *<input />
                </label>
                <label>
                  District (Korea example: Yongsan-gu) *<input />
                </label>
                <label>
                  City *<input />
                </label>
                <label>
                  Postal code *<input />
                </label>
              </div>
            )}
          </div>
          <ProductConsumer>
            {value => {
              return (
                <>
                  <div className="formAction" onClick={this.gotoCartList}>
                    <FaArrowLeft className="icon" />
                    <input
                      type="button"
                      defaultValue="Back to the CartList"
                      className="formSubmit"
                    />
                  </div>
                  <div className="formAction" onClick={value.handleCheckout}>
                    <FaArrowRight className="icon" />
                    <input
                      type="button"
                      defaultValue="Continue Checkout"
                      className="formSubmit"
                    />
                  </div>
                </>
              );
            }}
          </ProductConsumer>
        </div>
      </div>
    );
  }
}

export default Checkout;
