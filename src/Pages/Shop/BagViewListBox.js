import React, { Component } from 'react';

class BagViewListBox extends Component {
  render() {
    const { bagView } = this.props;
    return (
      <>
        <div className="listContainer">
          {bagView.map(bag => {
            return (
              <>
                {
                  <img
                    alt="bag"
                    src={bag.image_url}
                    className="listImg"
                    key={bag.id}
                  />
                }
              </>
            );
          })}
        </div>
        <div className="productBtn">나만의 MIAMI 선택하기</div>
      </>
    );
  }
}

export default BagViewListBox;
