import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BagViewListBox from './BagViewListBox';
import { ProductConsumer } from '../../context';
import './BagCategoryView.scss';
import './Shop.scss';

class BagCategoryView extends Component {
  constructor() {
    super();
    this.state = {
      bagView: [],
      puryData: [],
      jonanzaData: [],
      onfilter: false,
    };
  }

  filterHandler = () => {
    this.setState({ onfilter: true });
  };

  render() {
    return (
      <ProductConsumer>
        {value => {
          return (
            <div className="BagCategoryView">
              <div className="listCategoryHead">STORES - BAGS </div>
              <div className="categoryHead">BACKPACK</div>
              <div className="baglistName">MIAMI</div>

              <div className="miniDesc">A BLAST FROM THE PAST CHF 241.40 </div>
              <Link to={'/backpacklistbox'}>
                <BagViewListBox bagView={value.puryData} />
              </Link>

              <div className="baglistName">FURY</div>
              <div className="miniDesc">A BLAST FROM THE PAST CHF 269.25 </div>

              <Link to={'/backpacklistbox'}>
                <BagViewListBox bagView={value.jonanzaData} />
              </Link>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default BagCategoryView;

// const categorydatas = []
