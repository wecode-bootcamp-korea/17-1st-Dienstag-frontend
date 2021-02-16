import React, { Component } from 'react';

class MainDiy extends Component {
  render() {
    return (
      <div className="main-diy">
        <img
          alt="diy"
          className="main-diyimg"
          src="https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8ZGl5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ></img>
        <div className="main-diytext">
          <h1>MAKE YOUR OWN F719 MEL</h1>
          <p>
            FREITAG의 신제품이 아직 완성단계를 기다리고 있습니다.
            <br />
            F-ederation멤버라면 직접 취리히의 gruengasse 스토어에서, 화상
            세션으로 이 새로운 제품을 완성해 보세요.
          </p>
          <div className="main-diybtn">지금 DIY세션을 예약하세요</div>
        </div>
      </div>
    );
  }
}

export default MainDiy;
