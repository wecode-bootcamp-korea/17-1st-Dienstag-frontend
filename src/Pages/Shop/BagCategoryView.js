import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BagViewListBox from './BagViewListBox';
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
        <div className="categoryHead">BACKPACK</div>
        <div className="baglistName">MIAMI</div>
        <div className="miniDesc">A BLAST FROM THE PAST CHF 241.40 </div>

        <Link to={'/backpacklistbox'}>
          <BagViewListBox bagView={bagView} />
        </Link>

        <div className="baglistName">FURY</div>
        <div className="miniDesc">A BLAST FROM THE PAST CHF 269.25 </div>
        <Link to={'/backpacklistbox'}>
          <BagViewListBox bagView={bagView} />
        </Link>
      </>
    );
  }
}

export default BagCategoryView;
