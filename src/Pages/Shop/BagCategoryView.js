import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BagViewListBox from './BagViewListBox';
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

  componentDidMount() {
    fetch('http://10.58.2.113:8000/product/backpacks', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          puryData: data.PuryList,
          jonanzaData: data.JonanzaList,
        });
      });
  }

  filterHandler = () => {
    this.setState({ onfilter: true });
  };

  render() {
    const { puryData, jonanzaData } = this.state;

    return (
      <div className="BagCategoryView">
        <div className="listCategoryHead">STORES - BAGS </div>
        <div className="categoryHead">BACKPACK</div>
        <div className="baglistName">MIAMI</div>
        <div className="miniDesc">A BLAST FROM THE PAST CHF 241.40 </div>
        <Link to={'/backpacklistbox'}>
          <BagViewListBox bagView={puryData} />
        </Link>

        <div className="baglistName">FURY</div>
        <div className="miniDesc">A BLAST FROM THE PAST CHF 269.25 </div>

        <Link to={'/backpacklistbox'}>
          <BagViewListBox bagView={jonanzaData} />
        </Link>
      </div>
    );
  }
}

export default BagCategoryView;
