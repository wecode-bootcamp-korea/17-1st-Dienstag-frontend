import React, { Component } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { ProductConsumer } from '../../context';
import Login from '../Login/Login';
import Cart from '../Cart/Cart';
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
    shippingPhoneNumber: '',
    isSame: true,
  };
  gotoCartList = () => {
    this.props.history.push('/cart');
  };
  openInfo = e => {
    const { checked } = e.target;
    this.setState({
      isSame: checked && false,
    });
  };

  closeInfo = e => {
    const { checked } = e.target;
    this.setState({
      isSame: checked && true,
    });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { isSame } = this.state;
    const token = localStorage.getItem('token');
    return (
      <div className="cartcontentContainer">
        <div className="checkout">
          {!token && (
            <>
              <p>Login</p>
              <Login className="loginContainer" />
            </>
          )}
          <form className="guestInputContainer">
            <div className="emailContainer">
              <div>Continue as a guest</div>
              <label className="guestInputLabel">E-mail address *</label>
              <input
                required
                name="email"
                className="guestInput"
                onKeyPress={this.handleInput}
              />
            </div>
            <div className="deliveryAddress">
              <div className="addressColumn">
                <p>BILLING INFORMATION</p>
                <label>Country / Region *</label>
                <input
                  required
                  name="billingCountry"
                  onKeyPress={this.handleInput}
                />
                <label className="name">
                  First name *
                  <input
                    required
                    name="billingFirstName"
                    onKeyPress={this.handleInput}
                  />
                </label>
                <label className="name">
                  Last name *
                  <input name="billingLastName" onKeyPress={this.handleInput} />
                </label>
              </div>
              <div className="addressColumn location">
                <label>
                  Street & No. *
                  <input
                    required
                    name="billingStreetNumber"
                    onKeyPress={this.handleInput}
                  />
                </label>
                <label>
                  AdditionalAddress *
                  <input
                    required
                    name="billingAdditionalAddress"
                    onKeyPress={this.handleInput}
                  />
                </label>
                <label>
                  District (Korea example: Yongsan-gu) *
                  <input
                    required
                    name="billingDistrict"
                    onKeyPress={this.handleInput}
                  />
                </label>
                <label>
                  City *
                  <input
                    required
                    name="billingCity"
                    onKeyPress={this.handleInput}
                  />
                </label>
              </div>
              <div className="numberContainer">
                <label>
                  Postal code *
                  <input
                    required
                    name="billingPostalCode"
                    onKeyPress={this.handleInput}
                  />
                </label>
                <label>
                  Phone *
                  <input
                    required
                    name="billingPhoneNumber"
                    onKeyPress={this.handleInput}
                  />
                </label>
              </div>
            </div>
            <div className="radioContainer">
              <div>
                <label className="billinginfo">
                  Same as Billing Information
                  <input
                    required
                    type="radio"
                    className="radioBtn"
                    value="billing"
                    name="address"
                    onClick={this.closeInfo}
                  />
                </label>
              </div>
              <div>
                <label className="billinginfo">
                  Different Shipping Information
                  <input
                    type="radio"
                    className="radioBtn"
                    value="shipping"
                    onClick={this.openInfo}
                    name="address"
                    required
                  />
                </label>
              </div>
            </div>
            {!isSame && (
              <div className="shippingAddress">
                <div className="ShippingInfoContainer">
                  <p>BILLING INFORMATION</p>
                  <div>
                    <label>
                      Country / Region *
                      <input
                        name="shippingCountry"
                        onKeyPress={this.handleInput}
                      />
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
                  </div>
                  <div>
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
                      <input
                        name="shippingCity"
                        onKeyPress={this.handleInput}
                      />
                    </label>
                    <label>
                      Postal code *
                      <input
                        name="shippingPostalCode"
                        onKeyPress={this.handleInput}
                      />
                    </label>
                    <label>
                      Phone Number *
                      <input
                        name="shippingPhoneNumber"
                        onKeyPress={this.handleInput}
                      />
                    </label>
                  </div>
                </div>
              </div>
            )}

            <ProductConsumer>
              {value => {
                return (
                  <div className="buttonContainer">
                    {/* <div className="formAction" onClick={this.gotoCartList}>
                      <FaArrowLeft className="icon" />
                      <input
                        type="button"
                        defaultValue="Back to the CartList"
                        className="formSubmit"
                      />
                    </div> */}
                    <div
                      className="formAction"
                      onClick={() => {
                        value.handleCheckout(this.state);
                      }}
                    >
                      <input
                        type="button"
                        defaultValue="checkout"
                        className="formSubmit"
                      />
                    </div>
                  </div>
                );
              }}
            </ProductConsumer>
          </form>
        </div>
        <Cart />
      </div>
    );
  }
}

export default Checkout;
