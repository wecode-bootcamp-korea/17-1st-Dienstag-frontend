import React, { Component } from 'react';

class BagViewListBox extends Component {
  render() {
    const { bagView } = this.props;

    return (
      <>
        <div className="listContainer">
          {bagView.map(bag => {
            return (
              <div key={bag.id}>
                {<img alt="bag" src={bag.image_url} className="listImg" />}
              </div>
            );
          })}
        </div>
        <div className="productbtnContainer">
          <div className="productBtn">나만의 MIAMI 선택하기</div>
        </div>
      </>
    );
  }
}

export default BagViewListBox;
