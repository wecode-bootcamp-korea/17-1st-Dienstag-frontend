import React, { Component } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { ProductConsumer } from '../../context';
import Login from '../Login/Login';
import './Checkout.scss';

class Checkout extends Component {
  state = {
    email: '',
    billingFirstName: '',
    billingLastName: '',
    billingStreetNumber: '',
    billingAdditionalAddress: '',
    billingDistrict: '',
    billingCity: '',
    billingPostalCode: '',
    billingPhoneNumber: '',
    billingCountry: '',
    shippingCountry: '',
    shippingFirstName: '',
    shippingLastName: '',
    shippingStreetNumber: '',
    shippingAdditionalAddress: '',
    shippingDistrict: '',
    shippingCity: '',
    shippingPostalCode: '',
    isInfoOpen: false,
  };
  gotoCartList = () => {
    this.props.history.push('/cart');
  };
  openInfo = () => {
    this.setState({ isInfoOpen: !this.state.isInfoOpen });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
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
              E-mail address *
              <input
                name="email "
                className="guestInput"
                onKeyPress={this.handleInput}
              ></input>
            </label>
          </div>
          <div className="deliveryAddress">
            <p>BILLING INFORMATION</p>
            <label>
              Country / Region *
              <input name="billingCountry" onKeyPress={this.handleInput} />
            </label>
            <label>
              First name *
              <input name="billingFirstName " onKeyPress={this.handleInput} />
            </label>
            <label>
              Last name *
              <input name="billingLastName " onKeyPress={this.handleInput} />
            </label>
            <label>
              Street & No. *
              <input name="billingStreetNumber" onKeyPress={this.handleInput} />
            </label>
            <label>
              AdditionalAddress *
              <input
                name="billingAdditionalAddress"
                onKeyPress={this.handleInput}
              />
            </label>
            <label>
              District (Korea example: Yongsan-gu) *
              <input name="billingDistrict" onKeyPress={this.handleInput} />
            </label>
            <label>
              City *<input name="billingCity" onKeyPress={this.handleInput} />
            </label>
            <label>
              Postal code *
              <input name="billingPostalCode" onKeyPress={this.handleInput} />
            </label>
            <label>
              Phone *
              <input name="billingPhoneNumber" onKeyPress={this.handleInput} />
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
                  Country / Region *
                  <input name="shippingCountry" onKeyPress={this.handleInput} />
                </label>
                <label>
                  First name *
                  <input
                    name="shippingFirstName"
                    onKeyPress={this.handleInput}
                  />
                </label>
                <label>
                  Last name *
                  <input
                    name="shippingLastName"
                    onKeyPress={this.handleInput}
                  />
                </label>
                <label>
                  Street & No. *
                  <input
                    name="shippingStreetNumber"
                    onKeyPress={this.handleInput}
                  />
                </label>
                <label>
                  Additional Address
                  <input
                    name="shippingAdditionalAddress"
                    onKeyPress={this.handleInput}
                  />
                </label>
                <label>
                  District (Korea example: Yongsan-gu) *
                  <input
                    name="shippingDistrict"
                    onKeyPress={this.handleInput}
                  />
                </label>
                <label>
                  City *
                  <input name="shippingCity" onKeyPress={this.handleInput} />
                </label>
                <label>
                  Postal code *
                  <input
                    name="shippingPostalCode"
                    onKeyPress={this.handleInput}
                  />
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
                  <div
                    className="formAction"
                    onClick={() => {
                      value.handleCheckout(this.state);
                    }}
                  >
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
