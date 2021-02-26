import React, { Component } from 'react';
import { MdColorLens } from 'react-icons/md';
import { GiResize } from 'react-icons/gi';
import { ProductConsumer } from '../../context';

export default class FilterViewList extends Component {
  state = {
    clickedIdx: 0,
  };

  handleClickedIdx = e => {
    this.setState({ clickedIdx: Number(e.target.id) });
  };
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
    const { clickedIdx } = this.state;
    return (
      <div>
        <div className="listContainer">
          {backpackdata.map((bag, inx) => {
            return (
              <div key={inx} onClick={e => this.handleClickedIdx(e)}>
                {firstrange < inx && inx < lastrange && (
                  <img
                    alt="bag"
                    id={inx}
                    src={bag.image_url}
                    className="listImg"
                    onClick={() =>
                      showDesc([inx, bag.model_number], backpackdata)
                    }
                  />
                )}
              </div>
            );
          })}
        </div>
        {backdescdata.map((bag, inx) => {
          return (
            <div key={inx}>
              {isdescOpen && clickedIdx > firstrange && clickedIdx < lastrange && (
                <div className="listDescContainer">
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
                        , <GiResize size={20} /> SIZE : {bag.size_name}
                      </div>
                      <div className="descText">- {bag.description[0]}</div>
                      <div className="descText">- {bag.description[1]}</div>
                      <div className="descText">- {bag.description[2]}</div>
                      <div className="descTextlast">- {bag.description[3]}</div>
                      <ProductConsumer>
                        {value => {
                          return (
                            <div
                              className="cartBtn"
                              onClick={() => {
                                const token = value.getToken();

                                if (token) {
                                  console.log(bag.id);
                                  value.addCart(bag.id, token);
                                } else {
                                  value.noneUserAddCart(bag.id);
                                  localStorage.setItem(
                                    'product',
                                    value.noneUserCart
                                  );
                                  console.log(localStorage.getItem('product'));
                                }
                              }}
                            >
                              장바구니에 추가
                              <div>DIENSTAG은 유일합니다.</div>
                            </div>
                          );
                        }}
                      </ProductConsumer>
                      <span className="descClosebtn" onClick={descClose}>
                        X
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}
