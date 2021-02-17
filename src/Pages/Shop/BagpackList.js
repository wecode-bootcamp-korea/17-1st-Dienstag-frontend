import React, { Component } from 'react';

class BagpackList extends Component {
  render() {
    const {
      furydata,
      rangenumone,
      rangenumtwo,
      showDesc,
      closeDesc,
      cartClick,
      isdescClose,
      furydescdata,
    } = this.props;
    return (
      <>
        {furydata.map(fury => {
          return (
            <>
              {rangenumone < fury.id && fury.id < rangenumtwo && (
                // <Productimg
                //   key={fury.id}
                //   img={fury.img}
                //   showDesc={showDesc}
                //   id={fury.id}
                // />
                <img
                  alt="fury"
                  src={this.props.img}
                  className="furyimg"
                  //   onClick={() => this.props.showDesc(this.props.id)}
                ></img>
              )}
            </>
          );
        })}
        {furydescdata.map(fury => {
          return (
            <>
              {!isdescClose && fury.id > rangenumone && fury.id < rangenumtwo && (
                //   <Descfury
                //     key={fury.id}
                //     img={fury.img}
                //     name={fury.name}
                //     price={fury.price}
                //     color={fury.color}
                //     descone={fury.descone}
                //     desctwo={fury.desctwo}
                //     descthree={fury.descthree}
                //     closeDesc={closeDesc}
                //     id={fury.id}
                //     cartClick={cartClick}
                //   />
                <div className="furydesccontainer">
                  <div className="furydescbox">
                    <img alt="fury" className="furydescimg" src={img}></img>
                    <div className="furydesctext">
                      <div className="descname">{name}</div>
                      <div className="descprice">
                        A Blast from the Past, {price}
                      </div>
                      <div className="desccolor">COLOR : {color}</div>
                      <div className="desctext">- {descone}</div>
                      <div className="desctext">- {desctwo}</div>
                      <div className="desctext">- {descthree}</div>
                      <div onClick={() => cartClick(id)} className="cart-btn">
                        장바구니에 추가
                      </div>
                      <span className="desc-closebtn" onClick={closeDesc}>
                        X
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </>
          );
        })}
      </>
    );
  }
}

export default BagpackList;
