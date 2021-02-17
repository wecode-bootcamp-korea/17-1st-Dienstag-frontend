import React, { Component } from 'react';
import './Shop.scss';

class BackpackDesc extends Component {
  render() {
    return (
      <div className="furydesccontainer">
        <div className="furydescbox">
          <img alt="fury" className="furydescimg" src=""></img>
          <div className="furydesctext">
            <div className="descname"></div>
            <div className="descprice">A Blast from the Past, </div>
            <div className="desccolor">COLOR : </div>
            <div className="desctext">- </div>
            <div className="desctext">- </div>
            <div className="desctext">- </div>
            <div className="cart-btn">장바구니에 추가</div>
            <span className="desc-closebtn">X</span>
          </div>
        </div>
      </div>
    );
  }
}

export default BackpackDesc;
