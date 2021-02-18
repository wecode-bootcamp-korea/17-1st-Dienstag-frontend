import React, { Component } from 'react';

class BackpackList extends Component {
  constructor() {
    super();
    this.state = {
      backpackdata: [],
      isdescOpen: false,
      backdescdata: [],
      isdescClose: true,
    };
  }

  render() {
    const {
      backpackdata,
      backdescdata,
      isdescOpen,
      showDesc,
      descClose,
      rangenumone,
      rangenumtwo,
    } = this.props;

    return (
      <div>
        <div className="furycontainer">
          {backpackdata.map(bag => {
            return (
              <>
                {rangenumone < bag.id && bag.id < rangenumtwo && (
                  <img
                    alt="bag"
                    src={bag.image_url}
                    className="furyimg"
                    onClick={() => showDesc(bag.id)}
                  />
                )}
              </>
            );
          })}
        </div>
        {backdescdata.map(bag => {
          return (
            <>
              {isdescOpen && bag.id > rangenumone && bag.id < rangenumtwo && (
                <div className="furydesccontainer">
                  <div className="furydescbox">
                    <img
                      alt="bag"
                      className="furydescimg"
                      src={bag.image_url}
                    ></img>
                    <div className="furydesctext">
                      <div className="descname">{bag.model_number}</div>
                      <div className="descprice">
                        A Blast from the Past, {bag.price}
                      </div>
                      <div className="desccolor">COLOR : {bag.color_name}</div>
                      <div className="desctext">- {bag.description[0]}</div>
                      <div className="desctext">- {bag.description[1]}</div>
                      <div className="desctext">- {bag.description[2]}</div>
                      <div className="cart-btn">장바구니에 추가</div>
                      <span className="desc-closebtn" onClick={descClose}>
                        X
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>
    );
  }
}

export default BackpackList;
