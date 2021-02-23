import React, { Component } from 'react';

const ProductContext = React.createContext();
const ProductConsumer = ProductContext.Consumer;

class ProductProvider extends Component {
  constructor() {
    super();
    this.state = {
      totalProducts: 0,
      isLogin: false,
      cartList: [],
      isNavOpen: false,
      isCartOpen: false,
      noneUserCart: [],
      totalPrice: 0,
    };
  }

  getToken = () => {
    return localStorage.getItem('token');
  };

  componentDidMount() {
    const token = this.getToken();
    fetch(`http://10.58.2.91:8000/cart`, {
      method: 'GET',
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(data => {
        const {
          total_items_list: cartList,
          total_price: totalPrice,
          total_products: totalProducts,
        } = data.data;

        this.setState(
          {
            cartList: cartList,
            totalPrice: totalPrice,
            totalProducts: totalProducts,
          },
          () => this.state.cartList
        );
      });
  }
  // nav
  openNav = () => {
    const { isNavOpen } = this.state;
    this.setState({
      isNavOpen: !isNavOpen,
      isCartOpen: false,
    });
  };

  showCart = () => {
    const { isCartOpen } = this.state;
    this.setState({
      isCartOpen: !isCartOpen,
      isNavOpen: false,
    });
  };

  //cart
  addCart = (bagId, token) => {
    fetch('http://10.58.2.91:8000/cart', {
      method: 'POST',
      headers: { Authorization: token },
      body: JSON.stringify({
        product_id: bagId,
      }),
    })
      .then(response => response.json())
      .catch(function (error) {
        console.log(error);
      })
      .then(result => {
        this.handleCartList();
      });
  };

  handleCartList = () => {
    const token = this.getToken();
    fetch(`http://10.58.2.91:8000/cart`, {
      method: 'GET',
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(data => {
        const {
          total_items_list: cartList,
          total_price: totalPrice,
          total_products: totalProducts,
        } = data.data;
        this.setState({
          cartList: cartList,
          totalPrice: totalPrice,
          totalProducts: totalProducts,
        });
      });
  };

  deleteCart = id => {
    const token = this.getToken();
    fetch(`http://10.58.2.91:8000/cart/${id}`, {
      method: 'DELETE',
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(data => {
        this.handleCartList();
      });
  };

  handleCheckout = data => {
    const token = this.getToken();
    const {
      email,
      billingFirstName,
      billingLastName,
      billingStreetNumber,
      billingAdditionalAddress,
      billingDistrict,
      billingCity,
      billingPostalCode,
      billingPhoneNumber,
      billingCountry,
      shippingCountry,
      shippingFirstName,
      shippingLastName,
      shippingStreetNumber,
      shippingAdditionalAddress,
      shippingDistrict,
      shippingCity,
      shippingPostalCode,
    } = data;
    fetch(``, {
      method: 'POST',
      headers: { Authorization: token },
      body: JSON.stringify({
        email: email,
        billing_first_name: billingFirstName,
        billing_last_name: billingLastName,
        billing_street_number: billingStreetNumber,
        billing_additional_address: billingAdditionalAddress,
        billing_district: billingDistrict,
        billing_city: billingCity,
        billing_postal_code: billingPostalCode,
        billing_phone_number: billingPhoneNumber,
        billing_country: billingCountry,
        shipping_country: shippingCountry,
        shipping_first_name: shippingFirstName,
        shipping_last_name: shippingLastName,
        shipping_street_number: shippingStreetNumber,
        shipping_additional_address: shippingAdditionalAddress,
        shipping_district: shippingDistrict,
        shipping_city: shippingCity,
        shipping_postal_code: shippingPostalCode,
      }),
    })
      .then(res => res.json())
      .then(data => {
        this.handleCartList();
      });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          openNav: this.openNav,
          showCart: this.showCart,
          addCart: this.addCart,
          handleCartList: this.handleCartList,
          deleteCart: this.deleteCart,
          handleCheckout: this.handleCheckout,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export { ProductProvider, ProductConsumer };
