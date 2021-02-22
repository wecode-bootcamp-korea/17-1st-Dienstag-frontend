import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BagViewListBox from './BagViewListBox';
import { RiFilterLine } from 'react-icons/ri';
import './Shop.scss';

class BagCategoryView extends Component {
  constructor() {
    super();
    this.state = { bagView: [], bagoneView: [], bagtwoView: [] };
  }

  componentDidMount() {
    fetch('/data/backpackdata.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          bagoneView: data[0].list1,
          bagtwoView: data[1].list2,
        });
        console.log(data);
      });
  }

  render() {
    const { bagoneView, bagtwoView } = this.state;

    return (
      <>
        <div className="listCategoryHead">STORES - BAGS </div>
        <div className="categoryHead">BACKPACK</div>
        <div className="baglistName">MIAMI</div>
        <div className="miniDesc">A BLAST FROM THE PAST CHF 241.40 </div>
        <div className="priceandFilter">
          <span className="price">A BLAST FROM THE PAST, $346</span>
          <span className="filterLogo">
            <RiFilterLine size={20} /> filter
          </span>
        </div>
        <Link to={'/backpacklistbox'}>
          <BagViewListBox bagView={bagoneView} />
        </Link>

        <div className="baglistName">FURY</div>
        <div className="miniDesc">A BLAST FROM THE PAST CHF 269.25 </div>
        <div className="priceandFilter">
          <span className="price">A BLAST FROM THE PAST, $346</span>
          <span className="filterLogo">
            <RiFilterLine size={20} /> filter
          </span>
        </div>
        <Link to={'/backpacklistbox'}>
          <BagViewListBox bagView={bagtwoView} />
        </Link>
      </>
    );
  }
}

export default BagCategoryView;
