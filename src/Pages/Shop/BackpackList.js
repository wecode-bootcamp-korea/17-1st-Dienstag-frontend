import React, { Component } from 'react';
import { MdColorLens } from 'react-icons/md';
import { GiResize } from 'react-icons/gi';

export default class BackpackList extends Component {
  render() {
    const {
      backpackdata,
      backdescdata,
      isdescOpen,
      showDesc,
      descClose,
      firstrange,
      lastrange,
    } = this.props;

    return (
      <div>
        <div className="listContainer">
          {backpackdata.map((bag, inx) => {
            return (
              <div key={inx}>
                {firstrange < bag.id && bag.id < lastrange && (
                  <img
                    alt="bag"
                    src={bag.image_url}
                    className="listImg"
                    onClick={() => showDesc(bag.id, backpackdata)}
                  />
                )}
              </div>
            );
          })}
        </div>
        {backdescdata.map((bag, inx) => {
          return (
            <>
              {isdescOpen && bag.id > firstrange && bag.id < lastrange && (
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
                      <div className="descColor">
                        <MdColorLens size={20} /> COLOR : {bag.color_name}
                        , <GiResize size={20} /> size : {bag.size_name}
                      </div>
                      <div className="descText">- {bag.description[0]}</div>
                      <div className="descText">- {bag.description[1]}</div>
                      <div className="descText">- {bag.description[2]}</div>
                      <div className="descTextlast">- {bag.description[3]}</div>
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
