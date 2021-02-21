import React, { Component } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

class RecommendAcc extends Component {
  constructor() {
    super();
    this.state = {
      slidewidth: '2316',
      curwidth: '',
      nextbtn: true,
      prevbtn: false,
    };
  }

  moveRight = () => {
    const { curwidth } = this.state;
    this.setState({
      curwidth: curwidth >= -2316 && curwidth - 284.5,
      nextbtn: curwidth === -853.5 ? false : true,
      prevbtn: true,
    });
  };

  moveLeft = () => {
    const { curwidth } = this.state;
    this.setState({
      curwidth: curwidth !== 0 && curwidth + 284.5,
      prevbtn: curwidth === -284.5 ? false : true,
      nextbtn: true,
    });
  };

  render() {
    const { recommendAccdata } = this.props;
    const { curwidth, nextbtn, prevbtn } = this.state;
    return (
      <>
        <div className="recommendAceesoriesBox">
          <div
            className="wrapProduct"
            style={{
              transform: `translate3d(${curwidth}px,0,0)`,
              transition: ` 0.5s ease-in `,
            }}
          >
            {recommendAccdata.map(acc => {
              return (
                <div className="accBox" key={acc.id}>
                  <img alt="acc" className="accImg" src={acc.image_url}></img>
                  <span>{acc.model_name}</span>
                </div>
              );
            })}
          </div>

          <span className={nextbtn ? 'next' : 'none'} onClick={this.moveRight}>
            <FaArrowCircleRight size={40} />
          </span>
          <span className={prevbtn ? 'prev' : 'none'} onClick={this.moveLeft}>
            <FaArrowCircleLeft size={40} />
          </span>
        </div>
      </>
    );
  }
}

export default RecommendAcc;
