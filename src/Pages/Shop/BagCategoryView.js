import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Shop.scss';

class BagCategoryView extends Component {
  constructor() {
    super();
    this.state = { bagView: [] };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/backpackdata.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          bagView: data,
        });
      });
  }

  render() {
    const { bagView } = this.state;
    return (
      <>
        <div className="listCategoryHead">STORES - BAGS </div>
        <div className="baglistName">MIAMI</div>

        <Link to={'/backpacklistbox'}>
          <div className="listContainer">
            {bagView.map(bag => {
              return (
                <>{<img alt="bag" src={bag.image_url} className="listImg" />}</>
              );
            })}
          </div>
          <div className="productBtn">나만의 MIAMI 선택하기</div>
        </Link>

        <div className="listCategoryHead">STORES - BAGS </div>
        <div className="baglistName">FURY</div>
        <Link to={'/backpacklistbox'}>
          <div className="listContainer">
            {bagView.map(bag => {
              return (
                <>{<img alt="bag" src={bag.image_url} className="listImg" />}</>
              );
            })}
          </div>
          <div className="productBtn">나만의 FURY 선택하기</div>
        </Link>
      </>
    );
  }
}

export default BagCategoryView;
