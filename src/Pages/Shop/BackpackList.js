import React, { Component } from 'react';

export default class BackpackList extends Component {
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
        <div className="listContainer">
          {backpackdata.map((bag, inx) => {
            return (
              <>
                {rangenumone < bag.id && bag.id < rangenumtwo && (
                  <img
                    alt="bag"
                    src={bag.image_url}
                    className="listImg"
                    onClick={() => showDesc(bag.id)}
                    key={inx}
                  />
                )}
              </>
            );
          })}
        </div>
        {backdescdata.map((bag, inx) => {
          return (
            <>
              {isdescOpen && bag.id > rangenumone && bag.id < rangenumtwo && (
                <div className="listDescContainer" key={inx}>
                  <div className="listDescBox">
                    <img
                      alt="bag"
                      className="descImg"
                      src={bag.image_url}
                    ></img>
                    <div className="descText">
                      <div className="descName">{bag.model_number}</div>
                      <div className="descPrice">
                        A Blast from the Past, {bag.price}
                      </div>
                      <div className="descColor">COLOR : {bag.color_name}</div>
                      <div className="descText">- {bag.description[0]}</div>
                      <div className="descText">- {bag.description[1]}</div>
                      <div className="descText">- {bag.description[2]}</div>
                      <div className="descText">- {bag.description[3]}</div>
                      <div className="cartBtn">장바구니에 추가</div>
                      <span className="descClosebtn" onClick={descClose}>
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
