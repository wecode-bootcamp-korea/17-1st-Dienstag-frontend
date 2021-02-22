import React, { Component } from 'react';
import './ListDetail.scss';

class ListDetail extends Component {
  constructor() {
    super();
    this.state = {
      bagDetailboxdata: [],
    };
  }

  componentDidMount() {
    fetch('/data/bagDetailboxdata.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          bagDetailboxdata: data,
        });
      });
  }

  render() {
    const { bagDetailboxdata } = this.state;
    return (
      <div className="ListDetail">
        <div className="bagDetail">
          {bagDetailboxdata.map(box => (
            <div className="bagFeature" key={box.id}>
              <img className="star" alt="star" src={box.img} />
              <h1>{box.name}</h1>
              <p>{box.detail}</p>
            </div>
          ))}
        </div>

        <div className="featureBox">
          <div className="featureTextBox">
            <h1>특징</h1>
            <p>- 눈에 띄는 라지 플랩</p>
            <p>
              - 수납량 조절이 가능한 메인 수납 공간, 플랩에 장착된 대형 외부
              수납 공간, 플랩으로 커버되는 내부 포켓
            </p>
            <p>
              - 늘 같은 곳으로 다니는 것을 싫어하는 이들을 위한 메인 수납 공간
              측면의 지퍼
            </p>
          </div>
          <img
            alt="descimg"
            className="featureImg"
            src="https://freitag.rokka.io/page-width/c3f996ba6b22402ef02a4be8a5e7cc337ba578d0/tragarten-f132-2000x2000.jpg"
          />
        </div>
        <div className="recommendOtherbag">
          <img
            src="https://postfiles.pstatic.net/MjAyMTAyMjBfMzUg/MDAxNjEzODAwMTMxMDIx.p95DQ58guv4ZGmo3RtW7lIY0Kubc3GV_yY-FlQ1zR5sg.6zRrucmXTiz3UUZKBig88Gzd4fCY0NABgshTrttZjPQg.PNG.route15/shopper1_blue.png?type=w580"
            alt="img"
          />
          <div className="recommendBagtext">
            WANT THE BIGGER VERSION?
            <div className="recommendBtn">SHOP F133 BONANZA</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListDetail;
