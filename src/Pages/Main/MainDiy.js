import React, { Component } from 'react';

class MainDiy extends Component {
  render() {
    return (
      <div className="mainDiy">
        <img
          alt="diy"
          className="mainDiyImg"
          src="https://images.unsplash.com/photo-1602539820266-ab8bcdffe18e?ixid=MXwxMjA3fDB8MHxwaG90[…]ufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2252&q=80"
        ></img>
        <div className="mainDiyText">
          <h1>MAKE YOUR OWN F719 MEL</h1>
          <p>
            FREITAG의 신제품이 아직 완성단계를 기다리고 있습니다.
            <br />
            F-ederation멤버라면 직접 취리히의 gruengasse 스토어에서, 화상
            세션으로 이 새로운 제품을 완성해 보세요.
          </p>
          <div className="mainDiyBtn">지금 DIY세션을 예약하세요</div>
        </div>
      </div>
    );
  }
}

export default MainDiy;
